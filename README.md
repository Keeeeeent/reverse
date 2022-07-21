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


## 第四回（画面を動かせるようにする）
クリックイベントをトリガーに石の状態を変更できるようにする。

emitを使いクリックされたコンポーネントから親のコンポーネントに座標を渡す。
squares.vue→row.vue→board.vue→boardクラスの順に渡ってきた座標を知らせ、知らせられた座標の石の状態を変更する。

reverse.ts
→石の状態を初期位置を設定する。
→受け取った座標を元に石の状態を変更するメソッドを定義する。
→ターンを変更するメソッドを定義する。