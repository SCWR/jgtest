# 习题

## 习题一

- 命令

```bash
git clone
#客户端
cd imclient
npm i
npm run dev
#服务端
cd imserver
npm i
npm run server
```

- 打开下面地址

```bash
http://localhost:5173/
```

### 开发使用的包

- 使用了 Vue 作为开发框架
- 服务端使用 ws 包 作为 websocket 服务端框架

### 开发的功能

- [x] 实时消息
- [ ] 丰富内容支持
- [ ] 上下文小部件
- [ ] 用户内容管理面板

### 未开发的功能未来的实现

第二点前期可以通过输入框中的 `添加` 按钮来实现发生图片、音视频，后续可以改造输入框，实现拖动文件即可发送。同时可以支持语音识别及语音转换等能力满足。

第三点可以输入框上面浮动一个小部件，前端和后端配合把一定限度的上下文进行整合，比如总结上下文、内容联想等。

第四点可以在每个自己输入的气泡框进行点击选项删除，同时有个文件管理界面

## 习题二

demo 主要实现了聊天机器人功能，可以发送消息、图片等，实现图片复制粘贴、拖拽发送功能，同时能够保存当前上下文内容到本地。

可以通过组件的方式把 UI 代码及一些相关的逻辑代码进行解耦，后续也能更好的进行维护。比如输入框、按钮、消息框，后续添加功能也能做的隔离。

组件化拆分后，进行相应的单元测试编写，提高代码稳定性。

鉴权的一些信息应该通过后端下发或进行安全鉴权后才发送给客户端，代码里不要有相关的信息，减少安全泄露问题。

一些逻辑可以提取出共同的逻辑，减少重复代码。比如创建 div 等的元素
