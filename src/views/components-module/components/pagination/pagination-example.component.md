# pagination 分页组件

## class
可通过在`ui-pagination`组件添加以下类名，来控制控件的大小。
`pagination-xs`、`pagination-sm`、`pagination-lg`。

## @Input()

| 输入属性名 | 输入类型  | 说明    |
| --        | --        | --        |
| currentPage      | number   | 当前页 |
| pages      | number   | 总共有多少页 |
| btnLength      | number   | 控件按扭个数 |

## @Output()
| 输出属性名 | 输出值（$event）  | 说明    |
| --        | --        | --        |
| change | number   | 当`ui-pagination`页码被用户点击时的回调 |
