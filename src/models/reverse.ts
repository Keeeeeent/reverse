// boardクラス・・・盤面の一番大枠となるクラス。
// →８つのRowクラスを持っている

export class board {
  public Row: row[];
  public Turn = false;
  constructor() {
    this.Row = [...Array(8).keys()].map((i) => new row(i));
    // 石の初期位置の設定
    this.Row[3].Squares[3].squarestate = SquaresState.White;
    this.Row[4].Squares[4].squarestate = SquaresState.White;
    this.Row[3].Squares[4].squarestate = SquaresState.Black;
    this.Row[4].Squares[3].squarestate = SquaresState.Black;
  }
  //   座標を受け取り石の状態を返るメソッド
  public put(x: number, y: number) {
    this.Row[y].Squares[x].squarestate = this.CangeTurn();
  }
  //   黒と白交互にターンを変更するメソッド
  public CangeTurn(): SquaresState {
    if (this.Turn === false) {
      this.Turn = true;
      return SquaresState.White;
    } else {
      this.Turn = false;
      return SquaresState.Black;
    }
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
