<template>
  <div class="board">
    <Row :rows="list" v-for="list in this.board.Row" :key="list.RowNumber" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Row from "./Row.vue";
import { board } from "../models/reverse";
@Component({
  components: {
    Row,
  },
})
export default class Board extends Vue {
  public board: board = new board();
}
</script>
<style lang="scss" scoped>
.board {
  display: inline-block;
  border: 3px solid black;
}
</style>
