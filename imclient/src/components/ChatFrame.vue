<script setup>
import ChatContent from './ChatContent.vue'
import {reactive, computed}from 'vue'
const props = defineProps({
  useId: {
    type: String,
    required: true
  }
})
const socket = computed(() => new WebSocket('ws://localhost:8080'))
const msgs = reactive([])

// 连接打开事件
socket.value.addEventListener('open', () => {
  console.log('WebSocket 连接已打开')
})

// 连接关闭事件
socket.value.addEventListener('close', () => {
  console.log('WebSocket 连接已关闭')
})

// 连接错误事件
socket.value.addEventListener('error', (error) => {
  console.error('WebSocket 错误：', error)
})

socket.value.addEventListener('message', (event) => {

  let message = null
  if (event.data instanceof Blob) {
    const reader = new FileReader()
    reader.readAsText(event.data, 'UTF-8')
    reader.onload = () => {
      message = JSON.parse(reader.result)
      console.log('websocked收到', message)
      msgs.push(message)
    }
  } else {
    message = JSON.parse(event.data)
    console.log('websocked收到', message)
    msgs.push(message)
  }
})

function send(text) {
  console.log('text: ', text);
  const message = {
    type: 'chat',
    text,
    id: props.useId,
  }

  socket.value.send(JSON.stringify(message))
}
</script>

<template>
  <ChatContent @send="send" :msgs="msgs" :useId="props.useId"></ChatContent>
</template>

<style scoped>
</style>
