# Vite-React 😈









# 启动项目 🛩️

请按照以下步骤启动项目📦：
首先，确保您的开发环境已经配置好，并且已经安装了以下软件和工具：Node.js：确保您已经安装了 Node.js 运行时。npm 或 yarn：这是用于安装项目依赖项的软件包管理器。 打开命令行终端，并导航到项目的根目录。
在终端中运行以下命令以安装项目所需的依赖项：

```yaml
npm install
或
yarn install
```
依赖项安装完成后，您可以执行以下命令来启动项目的开发服务器：
```markdown
npm run dev
或
yarn dev
```
这将使用 vite 命令来启动开发服务器，并自动编译和热重载您的代码。您将能够在浏览器中访问项目。

如果您想构建项目以进行生产部署，可以运行以下命令：

shell
Copy code
npm run build
或

shell
Copy code
yarn build
这将使用 tsc 命令将 TypeScript 代码编译为 JavaScript，并使用 vite 命令构建优化后的项目文件。

如果您想预览构建后的项目，可以运行以下命令：

shell
Copy code
npm run preview
或

shell
Copy code
yarn preview
这将使用 vite 命令启动一个本地服务器，并在浏览器中预览构建后的项目。

最后，如果您想运行项目的测试套件，可以使用以下命令：

shell
Copy code
npm test
或

shell
Copy code
yarn test
这将使用 jest 命令来运行项目的测试用例
### description

开箱即用的项目模板，拥有主流的技术搭配

### 规范化

规范的代码可以促进团队合作

规范的代码可以降低维护成本

规范的代码有助于 code review（长得都不一样，我还怎么review）

养成代码规范的习惯，有助于程序员自身的成长

#### 常见规范

1. 代码格式规范
2. 统一项目结构
3. 前后端联调沟通的规范
4. 文件命名规范
5. 样式管理规范
6. git flow 工作流
7. 代码提交规范

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

### 项目构建基础

- "react": "^18.2.0",
- "react-dom": "^18.2.0"
- "Node": v16.14.1
- "vite": "^4.3.9"

### 项目技术组合

- mock.js 数据拦截axios 随机数据生成
- axios.js 基于 Promise 的第三方请求库
- styled-components css in js 类库

#### mock.js  配置

#### axios.js 配置

Axios 是一个基于 promise 网络请求库，作用于node.js 和浏览器中。 它是 isomorphic 的(
即同一套代码可以运行在浏览器和node.js中)。在服务端它使用原生 node.js http 模块, 而在客户端 (浏览端) 则使用
XMLHttpRequests。
这里主流采用了
> npm install axios  
> yarn add axios

#### styled-components

> $ yarn add styled-components
>
> TS声明：$ yarn add --dev @types/styled-components

