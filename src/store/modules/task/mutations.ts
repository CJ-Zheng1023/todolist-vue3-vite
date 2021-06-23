import { IState, ITask, IChangeInfo } from './state'
import { ADD_TASK, REMOVE_TASK, CHANGE_TASK_STATUS } from '@/store/mutation-types'
export const mutations = {
  [ADD_TASK]: (state: IState, task: ITask) => {
    state.tasks.push(task)
  },
  [REMOVE_TASK]: (state: IState, taskId: number) => {
    state.tasks = state.tasks.filter(task => task.id !== taskId)
  },
  [CHANGE_TASK_STATUS]: (state: IState, changeInfo: IChangeInfo) => {
    state.tasks.some(task => {
      if (task.id === changeInfo.id) {
        task.status = changeInfo.status
        return true
      }
    })
  }
}
