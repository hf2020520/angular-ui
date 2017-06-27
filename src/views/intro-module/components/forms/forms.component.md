# 表单控件

## 按大小

```html
<p><input type="text" class="form-control input-sm" placeholder="请输入姓名"></p>
<p><input type="text" class="form-control" placeholder="请输入姓名"></p>
<p><input type="text" class="form-control input-lg" placeholder="请输入姓名"></p>
```

````html
<p><input type="text" class="form-control input-sm" placeholder="请输入姓名"></p>
<p><input type="text" class="form-control" placeholder="请输入姓名"></p>
<p><input type="text" class="form-control input-lg" placeholder="请输入姓名"></p>
````

## 按风格

```html
<p><input type="text" class="form-control primary" placeholder="请输入姓名"></p>
<p><input type="text" class="form-control info" placeholder="请输入姓名"></p>
<p><input type="text" class="form-control success" placeholder="请输入姓名"></p>
<p><input type="text" class="form-control warning" placeholder="请输入姓名"></p>
<p><input type="text" class="form-control danger" placeholder="请输入姓名"></p>
```

````html
<p><input type="text" class="form-control primary" placeholder="请输入姓名"></p>
<p><input type="text" class="form-control info" placeholder="请输入姓名"></p>
<p><input type="text" class="form-control success" placeholder="请输入姓名"></p>
<p><input type="text" class="form-control warning" placeholder="请输入姓名"></p>
<p><input type="text" class="form-control danger" placeholder="请输入姓名"></p>
````

## 禁用/只读

```html
<p><input type="text" class="form-control" disabled placeholder="禁用的"></p>
<p><input type="text" class="form-control" readonly placeholder="只读的"></p>
```

````html
<p><input type="text" class="form-control" disabled placeholder="禁用的"></p>
<p><input type="text" class="form-control" readonly placeholder="只读的"></p>

````

## 带icon的输入框

```html
<div class="input-group">
    <input type="text" class="form-control" placeholder="请输入姓名">
    <div class="input-addon"><span class="icon icon-bubble"></span></div>
</div>
<br>
<div class="input-group">
    <div class="input-addon"><span class="icon icon-home"></span></div>
    <input type="text" class="form-control" placeholder="请输入姓名">
</div>
<br>
<div class="input-group primary">
    <div class="input-addon"><span class="icon icon-home"></span></div>
    <input type="text" class="form-control" placeholder="请输入姓名">
    <div class="input-addon"><span class="icon icon-bubble"></span></div>
</div>
```

````html
<div class="input-group">
    <input type="text" class="form-control" placeholder="请输入姓名">
    <div class="input-addon"><span class="icon icon-bubble"></span></div>
</div>
<br>
<div class="input-group">
    <div class="input-addon"><span class="icon icon-home"></span></div>
    <input type="text" class="form-control" placeholder="请输入姓名">
</div>
<br>
<div class="input-group primary">
    <div class="input-addon"><span class="icon icon-home"></span></div>
    <input type="text" class="form-control" placeholder="请输入姓名">
    <div class="input-addon"><span class="icon icon-bubble"></span></div>
</div>
````