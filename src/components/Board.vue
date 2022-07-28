<template>
  <div>
    <div class="c">
      <span v-text="this.board.Text" class="min-text"></span>
      <span>黒の石：</span
      ><span class="min-text" v-text="this.board.Black"></span
      ><span>白の石：</span
      ><span class="min-text" v-text="this.board.White"></span>
    </div>
    <div class="board">
      <Row
        :rows="list"
        v-for="list in this.board.Row"
        :key="list.RowNumber"
        @put="OnPut"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Row from "./Row.vue";
import { board, Point } from "../models/reverse";
@Component({
  components: {
    Row,
  },
})
export default class Board extends Vue {
  public board: board = new board();
  public OnPut(x: number, y: number) {
    this.board.put(new Point(x, y));
  }
}
</script>
<style lang="scss" scoped>
.board {
  display: inline-block;
  border: 3px solid black;
}
.min-text {
  padding-right: 1rem;
  font-size: 130%;
  font-weight: 800;
  color: cornflowerblue;
}
.c {
  padding-bottom: 2rem;
}
</style>
