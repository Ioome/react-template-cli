<h1 align="center">Vite  + React 通用模板😈</h1>

![4k](https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)

`开箱即用的项目模板，拥有主流的技术搭配` 快速构建同通用系统框架 ,该项目模板提供了一个现成的基础框架，使您能够立即开始开发项目，无需从头构建系统。它集成了一系列主流的技术.

# 特性 🧱

- 🍇  支持 Vite 打包模式，省略系统搭建过程，专注业务开发
-  🍈 开箱即用的工程能力：TypeScript/Webpack5/Vite/CSS/Mock/Axios
-  🍉 贴合业务的最佳实践：目录规范、代码规范、路由方案、状态管理、提交规范，数据请求等等.....
-   🍊 单体系统的应用模式：CSR，SPA 模式处理数据渲染层.

# 目录 📗

[TOC]

# 启动项目 🛩️

请按照以下步骤启动项目📦：首先，确保您的开发环境已经配置好，并且已经安装了以下软件和工具：node.js：确保您已经安装了 node.js 运行时。npm 或 yarn：这是用于安装项目依赖项的软件包管理器。 打开命令行终端，并导航到项目的根目录。
在终端中运行以下命令以安装项目所需的依赖项：

```shell
npm install
或
yarn install
```
依赖项安装完成后，您可以执行以下命令来启动项目的开发服务器：
```shell
npm run dev

yarn dev
```
这将使用 vite 命令来启动开发服务器，并自动编译和热重载您的代码。您将能够在浏览器中访问项目。如果您想构建项目以进行生产部署，可以运行以下命令：

``` shell
npm run build
或
yarn build
这将使用 tsc 命令将 TypeScript 代码编译为 JavaScript，并使用 vite 命令构建优化后的项目文件。
。
```

如果您想预览构建后的项目，可以运行以下命令,这将使用  vite 命令启动一个本地服务器，并在浏览器中预览构建后的项目📦

``` shell
npm run preview
或
yarn preview
```

最后，如果您想运行项目📦的测试套件，可以使用以下命令：这将使用 jest 命令来运行项目的测试用例

``` shell
npm test
或
yarn test
```



# 项目构建基构

- "react": "^18.2.0",
- "react-dom": "^18.2.0"
- "Node": v16.14.1
- "vite": "^4.3.9"

### 项目技术组合

- mock.js 数据拦截axios 随机数据生成
- axios.js 基于 Promise 的第三方请求库
- styled-components css in js 类库



## vite 配置  ❤️‍🔥



![](https://vitejs.cn/logo.svg)

#### 为什么选择  Vite 

构建越来越大型的应用时，需要处理的 JavaScript 代码量也呈指数级增长。包含数千个模块的大型项目相当普遍，启动可能花费你在工作的好几分钟，意味着能让你多摸更多的鱼🎣。对依赖构建时， esbuild 从 js 编写的预构建器，替换成了速度更加强悍的  go 语言，这是一个十分明智的选择.所以这是我选择 Vite 的基本原因，笔者非常喜欢 Vite 带来的速度， 使用 Webpack 启动前台项目过程十分缓慢，在项目越来越大 的情况下,所以速度是我选择 Vite 的最重要因素.

构建 Vite 

`14.18+，16+ ` 对应的版本

#### 使用 NPM:

bash

```bash
$ npm create vite@latest
```

使用 Yarn:

```bash
$ yarn create vite
```

使用 PNPM:

```bash
$ pnpm create vite
```

#### 模板构建

可根据对应的模板创建指定的 前端框架，

```bash
# npm 6.x
npm create vite@latest my-vue-app --template vue

# npm 7+, extra double-dash is needed:
npm create vite@latest my-vue-app -- --template vue

# yarn
yarn create vite my-vue-app --template vue

# pnpm
pnpm create vite my-vue-app --template vue
```

对应的模板可以从社区模板查看:   [社区维护模板](https://github.com/vitejs/awesome-vite#templates) 🍥

#### 此系统启动脚本

```js
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
  }
```

#### 此系统搭建 Vite 项目目标

1. 提升项目启动配置❎
2. 别名设置 ✅
3. 增加项目插件 ❎
4. 环境变量配置 ❎
5. 打包图 ✅

#### 加快 Vite 构建速度

#### 使用 插件[plugin] 定制化

#### 打包分析

```js
yarn add --dev rollup-plugin-visualizer
```

## 别名配置

1. 在项目根目录下创建 tsconfig.json 文件，并添加以下代码：

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

2. 在 Vite 的配置文件 vite.config.ts 中添加以下代码：

```ts
ts复制代码import path from 'path';

export default {
  // ...其他配置项
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
}
```

#### 例子

tsconfig.json

```js
    "paths": {
      "@/*": ["./src/*"],
      "@component/*":["./src/component/*"],
      "@utils/*":["./src/utils/*"]
    },
```

vite.config.js

```js
  alias: {
            '@': '/src/',
            '@components':'/src/components/',
            '@utils':'/src/utils'
 },
```

#### 同时配置的原因

配置了 tsconfig.json 只是告诉 TypeScript 编译器在编译时如何解析别名，而并不会影响到 Vite 的运行时。因此，我们还需要在 Vite 配置文件中进行配置，以便让 Vite 在开发和生产环境下都能正确地解析别名。

在 vite.config.js 中配置别名的好处是，它可以确保你所有使用的别名都被正确地 resolve。比如，在使用 import './styles/global.css' 引入全局 CSS 样式时，如果需要获取某个相对路径资源，就可以使用 @/ 别名代替项目的根路径，而无需手动拼接路径。

总之，tsconfig.json 用于 TypeScript 的静态类型检查和编译，而 vite.config.js 则用于 Vite 的打包和构建过程，两者都是必需的。



## axios 配置 ❤️‍🔥

![axios](https://th.bing.com/th/id/OIP.-YH9SzgzKWU0X4MhEkxWQQHaHa?pid=ImgDet&rs=1)

Axios 是一个基于 promise 网络请求库，作用于node.js 和浏览器中。 它是 isomorphic 的(
即同一套代码可以运行在浏览器和node.js中)。在服务端它使用原生 node.js http 模块, 而在客户端 (浏览端) 则使用
XMLHttpRequests。
这里主流采用了

> npm install axios  
> yarn add axios

## ts 配置 ❤️‍🔥

![ts](https://www.leixue.com/uploads/2019/08/TypeScript.png!760)

## mock.js  配置



## styled-components

> $ yarn add styled-components
>
> TS声明：$ yarn add --dev @types/styled-components



# 规范化 ❤️‍🔥 

> 规范的代码可以促进团队合作
>
> 规范的代码可以降低维护成本
>
> 规范的代码有助于 code review（长得都不一样，我还怎么review）
>
> 养成代码规范的习惯，有助于程序员自身的成长
>

### 常见规范

1. 代码格式规范
2. 统一项目结构
3. 前后端联调沟通的规范
4. 文件命名规范
5. 样式管理规范
6. git flow 工作流
7. 代码提交规范 

###  代码格式规范  .editorconfig 

EditorConfig 有助于为**不同 IDE 编辑器**上处理同一项目的多个开发人员维护一致的编码风格。

```js
root = true # 控制配置文件 .editorconfig 是否生效的字段
[**] # 匹配全部文件
indent_style = space # 缩进风格，可选space｜tab
indent_size = 4 # 缩进的空格数
charset = utf-8 # 设置字符集
trim_trailing_whitespace = true # 删除一行中的前后空格
insert_final_newline = true # 设为true表示使文件以一个空白行结尾
end_of_line = lf
max_line_length = 120

[**.md] # 匹配md文件
trim_trailing_whitespace = false

```

###  项目结构规范

已移至 Dic.md

####  **git提交时检测语法规范** 

1. ### 代码提交前husky检测语法

2. 安装husky

3. 配置husky的pre-commit钩子

4.  安装依赖后自动husky install

5. **代码提交时检测commit备注规范**

6.  安装和配置commitlint

7. 配置husky监听commit-msg

8. **添加git commit辅助备注信息**

9. 安装commitizen

10. 配置commitizen自定义提示规则

11. 测试commitizen辅助提交

### 代码提交规范

    { type: 'feat', section: '✨ Features | 新功能' },
    { type: 'fix', section: '🐛 Bug Fixes | Bug 修复' },
    { type: 'init', section: '🎉 Init | 初始化' },
    { type: 'docs', section: '✏️ Documentation | 文档' },
    { type: 'style', section: '💄 Styles | 风格' },
    { type: 'refactor', section: '♻️ Code Refactoring | 代码重构' },
    { type: 'perf', section: '⚡ Performance Improvements | 性能优化' },
    { type: 'test', section: '✅ Tests | 测试' },
    { type: 'revert', section: '⏪ Revert | 回退' },
    { type: 'build', section: '📦‍ Build System | 打包构建' },
    { type: 'chore', section: '🚀 Chore | 构建/工程依赖/工具' },
    { type: 'ci', section: '👷 Continuous Integration | CI 配置' }

### 文件命名规范

- 每一个文件只包含一个组件，每一个基本组件只包含单一功能  
- 如果文件返回是一个类，文件名首字母大写  
- 测试用例文件名使用.spec.jsx后缀  
- 每一个组件使用一个单独的测试用例文件  

### Js规范

- 使用es6+开发，尽量使用常用的ES6+语法  
- 使用jsx语法  
- 组件文件命名使用大驼峰， ComponentDemo  
- 带命名空间的组件，如果一个组件包含只有自身使用的子组件，以该组件为命名空间编写组件，例如Table，Table.Head  
- 不使用displayName命名  
- 自定义属性使用data-  
- 使用propTypes进行props类型校验  
- 使用defaultProps定义默认参数  
- 定义props避开react关键字及保留字，常用的props及state定义可参考下表  
- 尽量少或者不使用ref获取和操作dom节点，使用state和prop进行控制dom，如遇必须使用的情况，添加详细注释信息  
- 事件调用使用在元素上onClick调用  
- 注意，react和html的表单元素的差异  
- 不支持mixin，使用decorator进行扩展和高阶组件方式扩展。  
- 不能私自添加第三方js库，如需要使用，必须通知本组组长，并在工作群里提出，At所有前端负责人，经讨论后再添加
- 尽量多而有用的代码注释，方法使用块级注释  
- 避免使用定时器类的编码，如必须使用，需添加详细注释，各组长合并代码时需要审查是否合理，合确认是否含有销毁方法  
- 自身定义的props属性应避免与react的关键字相同  

### 样式规范

- 在添加src/style/theme/default.sess中添加公共样式变量，各开发人员尽可能使用里面定义的公共样式变量  
- 组件多样式调用，使用classnames模块，进行样式处理，使用className调用  
- 所有组件类名命名以‘expo-’开头  

### 通用组件接口规范

| **参数**  | **说明**              | **类型** | **默认值** |
| --------- | --------------------- | -------- | ---------- |
| size      | 尺寸                  | string   | medium     |
| color     | 颜色                  | string   | ''         |
| shape     | 形状                  | string   | ''         |
| disabled  | 是否禁用              | bool     | false      |
| className | 增加额外的类名        | string   | ''         |
| htmlType  | html dom 的 type 属性 | string   | string     |
| style     | 内联样式              | object   | object     |









> ## 联系我们  
>
> ## 		  💬：Liow_expression
>
> ##           📮: a2572213252@gmail.com
>
> ​			
>
> ​																													🦹王兆斌