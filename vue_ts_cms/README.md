# vue_ts_cms

该模板将帮助您开始在 Vite 中使用 Vue 3 进行开发。

## Type Support for `.vue` Imports in TS

默认情况下，TypeScript 无法处理“.vue”导入的类型信息，因此我们将“tsc”CLI 替换为“vue-tsc”进行类型检查。在编辑器中，我们需要[TypeScript Vue 插件（Volar）](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript vue 插件），以使 typescript 语言服务了解“.vue”类型。

如果你觉得独立的 TypeScript 插件不够快，Volar 还实现了一个〔接管模式〕(https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669），其性能更高。您可以通过以下步骤启用它：

1.禁用内置 TypeScript 扩展

1.从 VSCode 的命令调色板运行“扩展：显示内置扩展”

2.查找“TypeScript 和 JavaScript 语言功能”，右键单击并选择“禁用（工作区）”`

2.通过从命令调色板运行“Developer:Reload window”重新加载 VSCode 窗口。

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
