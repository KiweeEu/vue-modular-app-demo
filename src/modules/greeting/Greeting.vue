<template>
  <div id="greeting-module">
    <b>This is my greeting:</b>
    <hello-world></hello-world>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import HelloWorld from '@/modules/greeting/components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Greeting extends Vue {}
</script>

<style scoped>
</style>
