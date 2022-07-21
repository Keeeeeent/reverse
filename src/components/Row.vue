<template>
  <div>
    <Squares
      :squareses="list"
      v-for="list in rows.Squares"
      :key="`${list.y}-${list.x}`"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
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
}
</script>
<style lang="scss" scoped>
div {
  display: flex;
}
</style>
