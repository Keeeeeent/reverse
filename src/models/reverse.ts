// boardクラス・・・盤面の一番大枠となるクラス。
// →８つのRowクラスを持っている
export class board {
  public Row: row[];
  private Turn: SquaresState = SquaresState.Black;
  public Black: number;
  public White: number;
  public Text: string;
  constructor() {
    this.Row = [...Array(8).keys()].map((i) => new row(i));
    // 石の初期位置の設定
    this.Row[3].Squares[3].squarestate = SquaresState.White;
    this.Row[4].Squares[4].squarestate = SquaresState.White;
    this.Row[3].Squares[4].squarestate = SquaresState.Black;
    this.Row[4].Squares[3].squarestate = SquaresState.Black;
    this.Black = 2;
    this.White = 2;
    this.Text = "マスをクリックしてゲームスタート";
  }
  //   座標を受け取り石の状態を返るメソッド
  public put(p: Point) {
    // すでに石が置いてある場合は操作できないようにする
    if (this.Row[p.y].Squares[p.x].squarestate === SquaresState.None) {
      // ひっくり返せる石があれば石をおく
      if (this.serch(p).length != 0) {
        //   クリックした座標の石の状態を変更
        this.Row[p.y].Squares[p.x].squarestate = this.Turn;
        // serchメソッドから返された配列（ひっくり返せる石の座標）をもとに石をひっくり返す
        const pointlist: Point[] = this.serch(p);
        for (let i = 0; i < pointlist.length; i++) {
          this.Row[pointlist[i].y].Squares[pointlist[i].x].squarestate =
            this.Turn;
        }
        // ターンを交互にするメソッドを呼び出す
        this.cangeturn();
        // パスが必要か確認
        if (this.pass().length === 0) {
          // パスの場合は強制的にあいてのターンにする
          this.cangeturn();
        }
        // 勝敗の判定
        if (this.countstone()) {
          switch (true) {
            case this.Black > this.White:
              this.Text = "黒の勝利";
              break;
            case this.Black < this.White:
              this.Text = "白の勝利";
              break;
            case this.Black === this.White:
              this.Text = "引き分け";
              break;
            case this.Black === 0:
              this.Text = "白の勝利";
              break;
            case this.White === 0:
              this.Text = "黒の勝利";
              break;
          }
        }
      }
    }
  }
  //   ターンをひっくり返すメソッド
  private cangeturn(): void {
    if (this.Turn === SquaresState.Black) {
      this.Turn = SquaresState.White;
    } else {
      this.Turn = SquaresState.Black;
    }
    this.cangeHTML();
  }
  // HTMLを更新する
  private cangeHTML(): void {
    if (this.Turn === SquaresState.Black) {
      this.Text = "黒のターン";
    } else {
      this.Text = "白のターン";
    }
  }
  // ひっくり返せるマスの座標を配列で返すメソッド
  private serch(p: Point): Point[] {
    // すべての探索結果を格納
    let list: Point[] = [];
    // 再帰的に探索する関数を定義
    const SerchPointList = (
      p: Point, // 探索する座標を格納
      next: (rep: Point) => Point, // 次探索する座標を格納
      lst: Point[] // 探索結果を格納する配列を格納
    ): Point[] => {
      // 第２引数の関数に第１引数の座標を渡し次に探索する座標を_nextに格納する
      const _next = next(p);
      if (
        // 座標がボードの外に出てないか確認
        !_next.inboardpoint() ||
        // 石が置かれているか確認
        this.Row[_next.y].Squares[_next.x].squarestate === SquaresState.None
      ) {
        return [];
      }
      // 置かれている石が自分の色か確認
      if (this.Row[_next.y].Squares[_next.x].squarestate != this.Turn) {
        // 石の座標をリストにプッシュ
        lst.push(_next);
        // 追加で探索するため自分自身であるSerchPointList関数を呼び出す
        // 第１引数には座標_next、第２引数、第３引数は今の処理で受け取る引数をそのまま使う
        return SerchPointList(_next, next, lst);
      }
      // ひっくり返せる座標の配列をリターン
      return lst;
    };
    // 上方向への探索
    list = list.concat(SerchPointList(p, (p) => new Point(p.x, p.y - 1), []));
    // 左方向への探索
    list = list.concat(SerchPointList(p, (p) => new Point(p.x - 1, p.y), []));
    // 下方向への探索
    list = list.concat(SerchPointList(p, (p) => new Point(p.x, p.y + 1), []));
    // 右方向への探索
    list = list.concat(SerchPointList(p, (p) => new Point(p.x + 1, p.y), []));
    // 左上方向への探索
    list = list.concat(
      SerchPointList(p, (p) => new Point(p.x - 1, p.y - 1), [])
    );
    // 右下方向への探索
    list = list.concat(
      SerchPointList(p, (p) => new Point(p.x + 1, p.y - 1), [])
    );
    // 左下方向への探索
    list = list.concat(
      SerchPointList(p, (p) => new Point(p.x - 1, p.y + 1), [])
    );
    // 右下方向への探索
    list = list.concat(
      SerchPointList(p, (p) => new Point(p.x + 1, p.y + 1), [])
    );
    // 連結した座標の配列ををリターン
    return list;
  }
  // 石の数を数えるメソッド
  private countstone(): boolean {
    // 探索した座標を格納する配列を用意する
    const ListCounter: SquaresState[] = [];
    // ゲームの勝敗を格納する変数を用意する
    let gameser;
    // 石の個数を数えるため石の状態を保管する配列を用意する
    const black: SquaresState.Black[] = [];
    const white: SquaresState.White[] = [];
    // すべてのマスを探索する
    for (let i = 0; i < this.Row.length; i++) {
      for (let j = 0; j < this.Row[i].Squares.length; j++) {
        // マスの状態がNoneかどうか確認
        if (this.Row[i].Squares[j].squarestate != SquaresState.None) {
          // マスの状態を配列にプッシュ
          ListCounter.push(this.Row[i].Squares[j].squarestate);
          // ついでに石の数も配列にプッシュしてカウントする
          if (this.Row[i].Squares[j].squarestate === SquaresState.Black) {
            black.push(SquaresState.Black);
          } else {
            white.push(SquaresState.White);
          }
        }
      }
    }
    // ゲームの勝敗が決まったかはブーリアン型で判定する
    gameser = false;
    // 石の数を配列から数値に変換しメンバー変数に代入
    this.Black = black.length;
    this.White = white.length;
    // 盤面がすべて埋まっているか確認
    if (ListCounter.length === 64) {
      // 盤面場埋まっていれば変数の値をTRUEに変えて勝敗が決まったことを確定する
      gameser = true;
    }
    // 最後に勝敗結果をブーリアン型でリターン
    return gameser;
  }
  // パスを実装するメソッド
  public pass(): Point[] {
    // 空の配列を用意する
    let passlist: Point[] = [];
    // すべてのマスを探索するためfor文を６４回まわす
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        // それぞれの結果をserchメソッドを使って探索する
        if (this.Row[i].Squares[j].squarestate === SquaresState.None) {
          passlist = passlist.concat(this.serch(new Point(j, i)));
        }
      }
    }
    // 配列をリターン
    return passlist;
    // ちなみにパスが必要な場合は空の配列が返される
  }
}

// 座標を保存するクラス
export class Point {
  public x: number;
  public y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  // 座標がボードの中にあるか判定するメソッド
  public inboardpoint(): boolean {
    return this.x >= 0 && this.x <= 7 && this.y >= 0 && this.y <= 7;
  }
}

// rowクラス・・・・盤面の行を定義するクラス。
// →全部で８つのSquaresクラスを持っている。

export class row {
  public RowNumber: number;
  public Squares: squares[];

  constructor(num: number) {
    this.RowNumber = num;
    this.Squares = [...Array(8).keys()].map((i) => new squares(i, num));
  }
}

// squaresクラス・・盤面のマス目を定義するクラス。
// →石の座標、石の状態を持っている

export class squares {
  public x: number;
  public y: number;
  public squarestate: SquaresState = SquaresState.None;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  // マスの状態を取得するメソッド
  public get white(): boolean {
    return this.squarestate === SquaresState.White;
  }
  public get black(): boolean {
    return this.squarestate === SquaresState.Black;
  }
}

// SquaresState・・石の状態を定義している
// →状態は全部で３つ（None=なにもない/White=白い石/Black=黒い石）

export enum SquaresState {
  White = "white",
  Black = "black",
  None = "none",
}
