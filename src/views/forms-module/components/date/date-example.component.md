# 时间选择器

可以通过添加`.top`、`.bottom`来控制弹出方向

### @Input()

| 输入属性名 | 输入类型  | 说明    |
| --        | --        | --        |
| `value`      | `string`   |  |
| `name`      | `string`   |  |
| `format`      | `string`   | 在不传入format的时，会以时间戳的形式输入值，如有传入，则按传入的格式输出值 |
| `disabled`      | `boolean`   |  |
| `readonly`      | `boolean`   |  |
| `maxDate`      | `string`   | 最小时间，以年月日 时分秒的字符串传入，如2014-12-02、2103/03/23 09:34:09 |
| `minDate`      | `string`   | 最大时间，以年月日 时分秒的字符串传入，如2014-12-02、2103/03/23 09:34:09 |

### @Output()
| 输出属性名 | 输出值（$event）  | 说明    |
| --        | --        | --        |
| `change` | `number`   | 当前组件的value |