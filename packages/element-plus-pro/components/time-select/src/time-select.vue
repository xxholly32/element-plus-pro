<script lang="ts" setup>
import { computed, ref } from 'vue'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat.js'
import { ElIcon, ElSelect } from '@element-plus/components'
// import ElSelect from '@element-plus/components/select'
// import ElIcon from '@element-plus/components/icon'
import { useDisabled, useNamespace } from '@element-plus/hooks'
import { timeSelectProps } from './time-select'
import { compareTime, formatTime, nextTime, parseTime } from './utils'

const props = defineProps(timeSelectProps)

defineEmits(['change', 'blur', 'focus', 'update:modelValue'])

dayjs.extend(customParseFormat)

const { Option: ElOption } = ElSelect

defineOptions({
  name: 'HTimeSelect',
})

const nsInput = useNamespace('input')
const select = ref<typeof ElSelect>()

const _disabled = useDisabled()

const value = computed(() => props.modelValue)
const start = computed(() => {
  const time = parseTime(props.start)
  return time ? formatTime(time) : null
})

const end = computed(() => {
  const time = parseTime(props.end)
  return time ? formatTime(time) : null
})

const step = computed(() => {
  const time = parseTime(props.step)
  return time ? formatTime(time) : null
})

const minTime = computed(() => {
  const time = parseTime(props.minTime || '')
  return time ? formatTime(time) : null
})

const maxTime = computed(() => {
  const time = parseTime(props.maxTime || '')
  return time ? formatTime(time) : null
})

const items = computed(() => {
  const result: { value: string; disabled: boolean }[] = []
  if (props.start && props.end && props.step) {
    let current = start.value
    let currentTime: string
    while (current && end.value && compareTime(current, end.value) <= 0) {
      currentTime = dayjs(current, 'HH:mm').format(props.format)
      result.push({
        value: currentTime,
        disabled:
          compareTime(current, minTime.value || '-1:-1') <= 0
          || compareTime(current, maxTime.value || '100:100') >= 0,
      })
      current = nextTime(current, step.value!)
    }
  }
  return result
})

const blur = () => {
  select.value?.blur?.()
}

const focus = () => {
  select.value?.focus?.()
}

defineExpose({
  blur,
  focus,
})
</script>

<template>
  <ElSelect
    ref="select"
    :model-value="value"
    :disabled="_disabled"
    :clearable="clearable"
    :clear-icon="clearIcon"
    :suffix-icon="prefixIcon"
    :size="size"
    :effect="effect"
    :placeholder="placeholder"
    default-first-option
    :filterable="editable"
    @update:model-value="(event) => $emit('update:modelValue', event)"
    @change="(event) => $emit('change', event)"
    @blur="(event) => $emit('blur', event)"
    @focus="(event) => $emit('focus', event)"
  >
    <ElOption
      v-for="item in items"
      :key="item.value"
      :label="item.value"
      :value="item.value"
      :disabled="item.disabled"
    />
    <!-- <template #prefix>
      <ElIcon v-if="prefixIcon" :class="nsInput.e('prefix-icon')">
        <component :is="prefixIcon" />
      </ElIcon>
    </template> -->
  </ElSelect>
</template>
