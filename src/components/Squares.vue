<template>
  <div>
    <div class="squares"></div>
    <div class="stone" :class="changeclass" @click="OnClick"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
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
  @Emit("put")
  public put(x: number, y: number) {
    console.log("OK");
  }

  public OnClick() {
    this.put(this.squareses.x, this.squareses.y);
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
    width: 32px;
    height: 32px;
  }
  //   石の設定
  .stone {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 28px;
    height: 28px;
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
