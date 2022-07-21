<template>
  <div class="board">
    <Row />
    <Row />
    <Row />
    <Row />
    <Row />
    <Row />
    <Row />
    <Row />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Row from "./Row.vue";
@Component({
  components: {
    Row,
  },
})
export default class Board extends Vue {}
</script>
<style lang="scss" scoped>
.board {
  display: inline-block;
  border: 3px solid black;
}
</style>
