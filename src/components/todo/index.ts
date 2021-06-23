import TInput from './input/Input.vue'
import TList from './list/List.vue'
import TItem from './item/Item.vue'
import { App } from 'vue'
const components = [TInput, TList, TItem]
const install = (app: App) => {
  components.forEach(comp => app.component(comp.name, comp))
}
export default {
  install
}
