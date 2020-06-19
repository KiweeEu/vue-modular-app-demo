<template>
  <div class="hello-world">
    <h1>Hello</h1>
    <p>
      world!
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">
</style>
