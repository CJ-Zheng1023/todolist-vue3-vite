<template>
  <div class="t-list" v-if="tasks.length">
    <t-item v-for="task in tasks" :key="task.id" :task="task"></t-item>
  </div>
</template>

<script lang="ts">
import { IStore } from '@/store/types'
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'TList',
  setup() {
    const store = useStore<IStore>()
    const tasks = computed(() => store.state.task.tasks)
    return {
      tasks
    }
  }
})
</script>

<style scoped lang="less">
.t-list {
  border: 1px solid #000;
}
</style>