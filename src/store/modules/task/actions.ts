import { IState, ITask, IChangeInfo } from './state'
import { ActionContext } from 'vuex'
import { IStore } from '@/store/types'
import { ADD_TASK, REMOVE_TASK, CHANGE_TASK_STATUS } from '@/store/mutation-types'
export const actions = {
  addTask({ commit }: ActionContext<IState, IStore>, task: ITask) {
    commit(ADD_TASK, task)
  },
  removeTask({ commit }: ActionContext<IState, IStore>, taskId: number) {
    commit(REMOVE_TASK, taskId)
  },
  changeTaskStatus({ commit }: ActionContext<IState, IStore>, changeInfo: IChangeInfo) {
    commit(CHANGE_TASK_STATUS, changeInfo)
  }
}
