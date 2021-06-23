<template>
  <div class="t-item">
    <div class="t-item__status">
      <div :class="['t-circle', statusClass]"></div>
    </div>
    <div :class="['t-item__content', contentClass]">{{ content }}</div>
    <div class="t-item__tools">
      <div class="t-button-group">
        <button class="t-button t-button--success" @click="handleChangeStatus(Status.done)">完成</button>
        <button class="t-button t-button--warning" @click="handleChangeStatus(Status.doing)">进行中</button>
        <button class="t-button t-button--danger" @click="handleRemove">删除</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { defineComponent, PropType, watchEffect, ref, toRefs } from 'vue'
import { ITask, Status } from '@/store/modules/task/state'
export default defineComponent({
  name: 'TItem',
  props: {
    task: {
      type: Object as PropType<ITask>,
      require: true,
      default: () => {}
    }
  },
  setup(props, ctx) {
    const statusClass = ref('')
    const contentClass = ref('')
    watchEffect(() => {
      const status = props.task?.status
      if (status === Status.doing) {
        statusClass.value = 't-circle--doing'
        contentClass.value = 't-item__content--doing'
      } else if (status === Status.done) {
        statusClass.value = 't-circle--done'
        contentClass.value = 't-item__content--done'
      } else {
        statusClass.value = 't-circle--todo'
        contentClass.value = 't-item__content--todo'
      }
    })
    const store = useStore()
    const handleChangeStatus = (status: Status) => {
      store.dispatch('task/changeTaskStatus', {
        id: props.task?.id,
        status
      })
    }
    const handleRemove = () => {
      store.dispatch('task/removeTask', props.task?.id)
    }
    return {
      ...toRefs(props.task),
      statusClass,
      contentClass,
      Status,
      handleChangeStatus,
      handleRemove
    }
  }
})
</script>

<style scoped lang="less">
.t-item {
  border-bottom: 1px solid #000;
  position: relative;
  padding: 10px 20px 10px 60px;
  overflow: hidden;
  &:hover {
    .t-item__tools {
      .t-button-group {
        transform: translateX(0);
      }
    }
  }
  &:last-child {
    border-bottom: none;
  }
  .t-item__status {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
  }
  .t-item__content {
    font-size: 15px;
    word-break: break-all;
    word-wrap: break-word;
    &.t-item__content--todo {
      font-style: italic;
    }
    &.t-item__content--doing {
      text-decoration: blink;
    }
    &.t-item__content--done {
      text-decoration: line-through;
    }
  }
  .t-item__tools {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    .t-button-group {
      transform: translateX(100%);
      transition: transform 0.8s;
      height: 100%;
    }
  }
}
.t-circle {
  @circleSize: 10px;
  width: @circleSize;
  height: @circleSize;
  border-radius: 50%;
  &.t-circle--todo {
    background-color: red;
  }
  &.t-circle--doing {
    background-color: pink;
  }
  &.t-circle--done {
    background-color: green;
  }
}
.t-button-group {
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
}
.t-button {
  padding: 15px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &.t-button--success {
    background-color: green;
    color: #fff;
  }
  &.t-button--warning {
    background-color: orange;
    color: #000;
  }
  &.t-button--danger {
    background-color: red;
    color: #000;
  }
}
</style>