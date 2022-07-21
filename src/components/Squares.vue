<template>
  <div>
    <div class="squares"></div>
    <div class="stone"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Squares extends Vue {}
</script>
<style lang="scss" scoped>
div {
  position: relative;
  //   マスの設定
  .squares {
    background-color: darkgreen;
    border: solid 1px black;
    width: 64px;
    height: 64px;
  }
  //   石の設定
  .stone {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }
  //   石の色設定
  .white {
    background-color: white;
  }
  .black {
    background-color: black;
  }
}
</style>
