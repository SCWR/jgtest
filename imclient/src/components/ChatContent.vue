<script setup>
import { ref } from 'vue'
const props = defineProps({
  msgs: {
    type: String,
    required: true
  },
  useId: {
    type: String,
    required: true
  }
})
const emit = defineEmits(['send'])
const text = ref('')
function send() {
  if (text.value.trim()) {
    emit('send', text.value.trim())
    text.value = ''
  }
}
console.log(props.msgs, props.useId)
</script>

<template>
  <div class="chat-app-body">
    <div class="chat-box">
      <div
        :class="`chat-row ${msg.id === props.useId ? 'chat-row-right' : ''}`"
        v-for="(msg, index) in props.msgs"
        :key="index"
      >
        <div class="chat-msg-content">
          <div class="chat-username">{{ msg.id }}</div>
          <div class="chat-content">{{ msg.text }}</div>
        </div>
      </div>
    </div>
    <div class="chat-bottom">
      <div class="chat-area">
        <textarea class="chat-area-input" v-model="text" placeholder="请输入内容点击发送"></textarea>
        <div class="chat-btn">添加</div>
        <div class="chat-btn" @click="send">发送</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chat-app-body {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: #f1f5f8;
}

.chat-box {
  flex: 1;
  padding: 0 5px;
  overflow: auto;
}
.chat-bottom {
  background: #fff;
  display: flex;
}

.chat-input {
  background-color: transparent;
  font-size: 15px;
  line-height: 17.5px;
  border: none;
  padding: 0;
  margin: 0;
  max-height: 150px;
  overflow-x: hidden;
}
.chat-row {
  display: flex;
  align-items: flex-end;
  margin: 5px 0px;
}
.chat-username {
  font-size: 12px;
  white-space: nowrap;
  color: #999;
  margin-bottom: 2px;
}
.chat-content {
  border-radius: 10px 10px 10px 0px;
  padding: 10px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 5px 30px rgb(50 50 93 / 8%), 0 1px 3px rgb(0 0 0 / 5%);
  font-size: 14px;
  word-break: break-all;
  line-height: 21px;
}
.chat-row-right {
  justify-content: flex-end;
}
.chat-row-right .chat-content {
  border-radius: 10px 10px 0px 10px;
}

.chat-area {
  margin: 0px 10px;
  margin-bottom: 10px;
  display: flex;
  padding: 6px 5px;
  align-items: center;
  flex: 1;
  box-shadow: 0 5px 30px rgb(50 50 93 / 8%), 0 1px 3px rgb(0 0 0 / 5%);
  border-radius: 10px;
  background: #fff;
}
.chat-area .iconfont {
  color: #383838;
  font-size: 14px;
  margin: 0px 5px;
  cursor: pointer;
}
.chat-area .iconfont:hover {
  color: #409eff;
}
.chat-area-input {
  border-radius: 10px;
  border: none;
  flex: 1;
  outline: none;
  resize: none;
  box-sizing: border-box;
  color: #505050;
  min-height: 35px;
  font-size: 16px;
}
.chat-btn {
  margin-right: 8px;
}
</style>
