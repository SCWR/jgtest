<script setup>
import { computed } from 'vue'
import ChatFrame from './components/ChatFrame.vue'

function generateRandomId() {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let id = ''
  for (let i = 0; i < 8; i++) {
    id += chars[Math.floor(Math.random() * chars.length)]
  }
  return id
}

const useId = computed(() => generateRandomId())

</script>

<template>
  <main>
    <ChatFrame :useId="useId"/>
  </main>
</template>

<style scoped>
</style>
