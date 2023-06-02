# Vite-React

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
>

#### styled-components

> $ yarn add styled-components
>
> TS声明：$ yarn add --dev @types/styled-components

