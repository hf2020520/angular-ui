# ui-input 组件

## 当 type="radio" 时

### @Input()

| 输入属性名 | 输入类型  | 说明    |
| --        | --        | --        |
| `value`      | `string`   |  |
| `name`      | `string`   |  |
| `disabled`      | `boolean`   |  |
| `readonly`      | `boolean`   |  |
| `checked`      | `boolean`   |  |
| `checkedIcon`      | `string`   | 在选中时候的icon |
| `uncheckedIcon`      | `string`   |  在未选中时候的icon |

### @Output()
| 输出属性名 | 输出值（$event）  | 说明    |
| --        | --        | --        |
| `change` | `string`   | 当前组件的value |

## 当 type="checkbox" 时

### @Input()

| 输入属性名 | 输入类型  | 说明    |
| --        | --        | --        |
| `value`      | `string`   |  |
| `name`      | `string`   |  |
| `disabled`      | `boolean`   |  |
| `readonly`      | `boolean`   |  |
| `checked`      | `boolean`   |  |
| `checkedIcon`      | `string`   | 在选中时候的icon |
| `uncheckedIcon`      | `string`   |  在未选中时候的icon |

### @Output()
| 输出属性名 | 输出值（$event）  | 说明    |
| --        | --        | --        |
| `change` | `boolean`   | 当前组件的是否选中 |

## 当 type="range" 时

### @Input()

| 输入属性名 | 输入类型  | 说明    |
| --        | --        | --        |
| `value`      | `string`   |  |
| `name`      | `string`   |  |
| `disabled`      | `boolean`   |  |
| `readonly`      | `boolean`   |  |
| `max`      | `number`   | 最大值 |
| `min`      | `number`   |  最小值 |
| `step`      | `number`   |  步长 |

### @Output()
| 输出属性名 | 输出值（$event）  | 说明    |
| --        | --        | --        |
| `change` | `number`   | 当前组件的value |