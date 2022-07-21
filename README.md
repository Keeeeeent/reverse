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


## 第一回（オセロ盤面をつくろう）
オセロ企画第一回目はオセロの盤面をHTMLで作っていきます。
オセロは８×８の盤面なので合計６４マスをHTMLで作ります。

スタイルには今回SCSSを採用しています。

### 作成したファイル
Board.vue・・・盤面の一番大枠となるコンポーネント。
→盤面の一番外枠のスタイルも一緒に記述

Row.vue・・・・盤面の行を定義するコンポーネント。全部で８行。

Squares.vue・・盤面のマス目を定義するコンポーネント。１行に８マス。
→マスと石のスタイルも一緒に記述

