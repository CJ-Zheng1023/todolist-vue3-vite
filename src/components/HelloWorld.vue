<template>
  <div style="width: 800px;">
    <t-input></t-input>
    <t-list></t-list>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  setup: () => {
    const count = ref(0)
    return { count }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
