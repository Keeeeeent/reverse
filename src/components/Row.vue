<template>
  <div>
    <Squares
      :squareses="list"
      v-for="list in rows.Squares"
      :key="`${list.y}-${list.x}`"
      @put="putevent"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import Squares from "./Squares.vue";
import { row } from "../models/reverse";

@Component({
  components: {
    Squares,
  },
})
export default class Row extends Vue {
  @Prop({ required: true })
  public rows!: row;
  @Emit("put")
  public put(x: number, y: number) {
    console.log(x, y);
  }

  public putevent(x: number, y: number) {
    this.put(x, y);
  }
}
</script>
<style lang="scss" scoped>
div {
  display: flex;
}
</style>
