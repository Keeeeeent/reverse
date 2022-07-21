<template>
  <div>
    <div class="squares"></div>
    <div class="stone" :class="this.squareses.squaresstate" @click="put"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { squares } from "../models/reverse";

@Component
export default class Squares extends Vue {
  @Prop({ required: true })
  public squareses!: squares;
  public get changeclass() {
    return {
      white: this.squareses.white,
      black: this.squareses.black,
    };
  }
  public put() {
    this.squareses.put();
  }
}
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
