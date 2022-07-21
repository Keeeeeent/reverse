// boardクラス・・・盤面の一番大枠となるクラス。
// →８つのRowクラスを持っている

export class board {
  public Row: row[];
  constructor() {
    this.Row = [...Array(8).keys()].map((i) => new row(i));
  }
}

// rowクラス・・・・盤面の行を定義するクラス。
// →全部で８つのSquaresクラスを持っている。

export class row {
  public RowNumber: number;
  public Squares: squares[];

  constructor(num: number) {
    this.RowNumber = num;
    this.Squares = [...Array(8).keys()].map((i) => new squares(num, i));
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
}

// SquaresState・・石の状態を定義している
// →状態は全部で３つ（None=なにもない/White=白い石/Black=黒い石）

export enum SquaresState {
  White = "white",
  Black = "black",
  None = "node",
}
