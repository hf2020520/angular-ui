# 单选框

### @Input()

| 输入属性名 | 输入类型  | 说明    |
| --        | --        | --        |
| `value`      | `string`   |  |
| `name`      | `string`   |  |
| `disabled`      | `boolean`   |  |
| `readonly`      | `boolean`   |  |
| `checked`      | `boolean`   |  |
| `forId`      | `string` | 用于<label></label>标签的for属性指定的id，当label被点击时，可选中当前的input  |
| `checkedIcon`      | `string`   | 在选中时候的icon |
| `uncheckedIcon`      | `string`   |  在未选中时候的icon |

### @Output()
| 输出属性名 | 输出值（$event）  | 说明    |
| --        | --        | --        |
| `change` | `string`   | 当前组件的value |