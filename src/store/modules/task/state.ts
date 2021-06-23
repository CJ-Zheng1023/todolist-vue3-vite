export interface ITask {
  id: number
  content: string
  status: Status
}
export enum Status {
  todo = 'TODO',
  doing = 'DOING',
  done = 'DONE'
}
export interface IChangeInfo {
  id: number
  status: Status
}
export interface IState {
  tasks: Array<ITask>
}
export const state: IState = {
  tasks: []
}
