# reverse

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 第二回（オセロの構造を定義する）
オセロ企画第二回目はオセロの構造をTypeScriptLで定義していきます。
オセロは８×８の盤面で合計６４つのマスが必要になります。

### 作成したファイル（reverse.ts）
今回はこのreverse.tsのファイルに下記４つを定義します。

boardクラス・・・盤面の一番大枠となるクラス。
→８つのRowクラスを持っている

rowクラス・・・・盤面の行を定義するクラス。
→全部で８つのSquaresクラスを持っている。

squaresクラス・・盤面のマス目を定義するクラス。
→石の座標、石の状態を持っている

SquaresState・・石の状態を定義している
→状態は全部で３つ（None=なにもない/White=白い石/Black=黒い石）