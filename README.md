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


## 第二回（データとビュー画面を紐づけする）
オセロ企画第三回目はVueとTypeScriptLで定義したクラスのバインド（紐づけ）をしていきます。

### 作成したファイル（reverse.ts）
今回は下記４つファイルをいじります。

board.vue
→boardクラスとバインドし行のデータを持たせる。

row.vue
→rowクラスとバインドしマスのデータを持たせる。

squares.vue
→squaresクラスとバインドし石の座標、石の状態をHTMLに持たせる。

reverse.ts
→石の状態を取得するメソッドを定義とロジックを書き込むメソッドを定義する。