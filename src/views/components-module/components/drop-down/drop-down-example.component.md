# drop-down 组件

## class
可通过在`ui-drop-down`组件添加以下类名，来控制下拉框的显示位置。
`top`、`bottom`、`left-top`、`right-top`、`left-bottom`、`right-bottom`。

## @Input()

| 输入属性名 | 输入类型  | 说明    |
| --        | --        | --        |
| open      | boolean   | 用于控制`ui-drop-down-menu`是否显示 |

## @Output()
| 输出属性名 | 输出值（$event）  | 说明    |
| --        | --        | --        |
| trigger | void   | 当`ui-drop-down-fixed`点击时的回调 |
| escape | void   | 当`ui-drop-down`失去焦点时的回调 |