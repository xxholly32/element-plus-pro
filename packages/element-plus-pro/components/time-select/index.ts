import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils'
import TimeSelect from './src/time-select.vue'

TimeSelect.install = (app: App): void => {
  app.component(TimeSelect.name, TimeSelect)
}

const _TimeSelect = TimeSelect as SFCWithInstall<typeof TimeSelect>

export default _TimeSelect
export const ElTimeSelect = _TimeSelect
