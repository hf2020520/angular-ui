# ConfirmController 对话框服务

`ConfirmController` 主要作为对话框和业务模块之的的桥接服务，通过调用`show()`方法，以弹出方式显示相应消息，并返回一个`promise`，当用户点击 确认 时，触发 `resolve` 回调，当用户点击 取消 或关闭对话框时，触发 `reject` 回调