<template>
  <div id="search-form-module">
    <search-input></search-input>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import SearchInput from '@/modules/search-form/components/SearchInput.vue';

@Component({
  components: {
    SearchInput,
  },
})
export default class Greeting extends Vue {}
</script>

<style scoped>
</style>
