<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <el-time-select
    v-model="value"
    start="00:00"
    step="00:30"
    end="23:59"
    placeholder="Select time"
    format="hh:mm A"
  />
</template>
