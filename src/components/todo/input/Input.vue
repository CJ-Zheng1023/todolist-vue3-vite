<template>
  <div class="t-input">
    <div class="t-input__label">新增任务：</div>
    <div class="t-input__content">
      <input :placeholder="placeholder" v-model="input" @keydown.enter="handleSubmit" />
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { defineComponent, ref } from 'vue'
import { Status } from '@/store/modules/task/state'

export default defineComponent({
  name: 'TInput',
  props: {
    placeholder: {
      type: String,
      default: '请输入'
    }
  },
  setup() {
    const store = useStore()
    const input = ref('')
    const handleSubmit = () => {
      const content = input.value.trim()
      if (!content) {
        alert('请输入任务内容!')
        return
      }
      store.dispatch('task/addTask', {
        id: +new Date(),
        content,
        status: Status.todo
      })
      input.value = ''
    }
    return {
      input,
      handleSubmit
    }
  }
})
</script>

<style scoped lang="less">
.t-input {
  @inputLabelWidth: 100px;
  @inputWidth: 600px;
  @height: 40px;
  margin-bottom: 10px;
  .t-input__label {
    width: @inputLabelWidth;
    float: left;
    text-align: right;
    font-size: 16px;
    font-weight: 800;
    line-height: @height;
  }
  .t-input__content {
    text-align: left;
    margin-left: @inputLabelWidth + 5px;
    input {
      width: @inputWidth;
      box-sizing: border-box;
      margin: 0;
      height: @height;
      padding: 0 16px;
      font-size: 16px;
    }
  }
}
</style>