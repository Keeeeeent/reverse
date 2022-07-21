<template>
  <div>
    <Squares />
    <Squares />
    <Squares />
    <Squares />
    <Squares />
    <Squares />
    <Squares />
    <Squares />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Squares from "./Squares.vue";

@Component({
  components: {
    Squares,
  },
})
export default class Row extends Vue {}
</script>
<style lang="scss" scoped>
div {
  display: flex;
}
</style>
