<script setup lang="ts">
import { computed } from 'vue'
import { useClipboard, useToggle } from '@vueuse/core'
import { CaretTop } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import Prism from 'prismjs'
import { usePlayground } from '~/composables/use-playground'

const props = defineProps<{
  source: string
  path: string
  rawSource: string
  description?: string
}>()

const [sourceVisible, toggleSourceVisible] = useToggle()

const onPlaygroundClick = () => {
  const { link } = usePlayground(props.rawSource)
  window.open(link)
}

const compName = computed(() => {
  return props.path.replace('/', '-')
})
const decoded = computed(() => {
  return decodeURIComponent(props.source)
})
const decodedDescription = computed(() =>
  decodeURIComponent(props.description!),
)

const { copy, isSupported } = useClipboard({
  read: true,
  source: decoded,
  legacy: true,
})
const copyCode = async () => {
  if (!isSupported) {
    ElMessage({
      message: '复制失败',
      type: 'error',
    })
  }
  try {
    await copy()
    ElMessage({
      message: '复制成功',
      type: 'success',
    })
  }
  catch (e: any) {
    ElMessage({
      message: e.message,
      type: 'error',
    })
  }
}
</script>

<template>
  <ClientOnly>
    <!-- danger here DO NOT USE INLINE SCRIPT TAG -->
    <p text="sm" v-html="decodedDescription" />

    <div class="b-solid b-1 b-warmGray-200 b-rd">
      <div class="p-4">
        <component :is="compName" v-if="compName" />
      </div>

      <ElDivider class="!m-0" />

      <div class="flex justify-end items-center p-2 h-10 gap-3">
        <ElIcon :size="16" class="cursor-pointer" @click="onPlaygroundClick">
          <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em">
            <path
              fill="currentColor"
              d="M16 2v2h-1v3.243c0 1.158.251 2.301.736 3.352l4.282 9.276A1.5 1.5 0 0 1 18.656 22H5.344a1.5 1.5 0 0 1-1.362-2.129l4.282-9.276A7.994 7.994 0 0 0 9 7.243V4H8V2h8zm-2.612 8.001h-2.776c-.104.363-.23.721-.374 1.071l-.158.361L6.125 20h11.749l-3.954-8.567a9.978 9.978 0 0 1-.532-1.432zM11 7.243c0 .253-.01.506-.029.758h2.058a8.777 8.777 0 0 1-.021-.364L13 7.243V4h-2v3.243z"
            />
          </svg>
        </ElIcon>
        <ElIcon :size="16" class="cursor-pointer" @click="copyCode">
          <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" data-v-65a7fb6c="">
            <path
              fill="currentColor"
              d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7zM5.003 8L5 20h10V8H5.003zM9 6h8v10h2V4H9v2z"
            />
          </svg>
        </ElIcon>
        <ElIcon :size="16" class="cursor-pointer" @click="toggleSourceVisible()">
          <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" data-v-65a7fb6c="">
            <path
              fill="currentColor"
              d="m23 12l-7.071 7.071l-1.414-1.414L20.172 12l-5.657-5.657l1.414-1.414L23 12zM3.828 12l5.657 5.657l-1.414 1.414L1 12l7.071-7.071l1.414 1.414L3.828 12z"
            />
          </svg>
        </ElIcon>
      </div>

      <ElCollapseTransition>
        <pre v-show="sourceVisible">
          <code class="code language-html !overflow-y-hidden" v-html="Prism.highlight(decoded, Prism.languages.html, 'html')" />
        </pre>
      </ElCollapseTransition>

      <Transition name="el-fade-in-linear" class="flex items-center justify-center b-1 b-t-solid b-warmGray-200 h-10 cursor-pointer">
        <div v-show="sourceVisible" class="gap-1" @click="toggleSourceVisible(false)">
          <ElIcon :size="16">
            <CaretTop />
          </ElIcon>
          <span class="text-sm">隐藏代码</span>
        </div>
      </Transition>
    </div>
  </ClientOnly>
</template>
