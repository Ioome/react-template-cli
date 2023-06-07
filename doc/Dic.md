# 项目结构

```js
- react-all-vite-template
  - node_modules
    (存放项目依赖包的文件夹，由包管理器自动生成和管理)
  - public
    (存放公共静态资源的文件夹，如favicon.ico、logo.png等)
  - src
    - api
      (存放与后端接口通信的代码)
    - assets
      (存放项目使用的静态资源，如图片、字体等)
    - components
      (存放可复用的React组件)
    - config
      (存放项目的配置文件，如环境配置、全局配置等)
    - constant
      (存放项目中使用的常量)
    - enum
      (存放枚举类型的定义)
    - interface
      (存放接口和类型定义)
    - mock
      (存放用于模拟数据的文件，便于在开发阶段进行前后端解耦)
    - pages
      (存放页面组件，通常按照路由结构组织)
    - redux
      (存放Redux相关的代码，包括action、reducer和store等)
    - router
      (存放前端路由相关的配置和组件)
    - styles
      (存放样式文件，如CSS、Sass或Less等)
    - test
      (存放测试相关的代码和配置文件)
    - utils
      (存放通用的工具函数或辅助方法)
    - App.tsx
      (应用程序的根组件，作为整个应用的入口点)
    - main.tsx
      (用于渲染根组件并启动应用程序的文件)
    - vite-env.d.ts
      (Vite的类型声明文件，用于提供类型支持)
  - .eslintrc.cjs
    (ESLint的配置文件，用于定义代码规范和检查规则)
  - .gitattributes
    (Git版本控制的属性配置文件)
  - .gitignore
    (Git版本控制的忽略文件配置，指定不需要提交到版本库的文件)
  - index.html
    (应用程序的入口HTML文件，包含根节点和引用的脚本文件)
  - package.json
    (包含项目的元数据和依赖项的配置文件)
  - package-lock.json
    (由npm自动生成的锁定依赖版本的文件，确保团队成员使用相同的依赖版本)
  - tsconfig.json
    (TypeScript的配置文件，用于指定编译选项和规则)
  - tsconfig.node.json
    (用于Node.js环境的TypeScript配置文件，指定Node.js相关的编译选项)
  - vite.config.ts
    (Vite的配置文件，用于指定构建和开发服务器的选项)
  - yarn.lock
    (由Yarn自动生成的锁定依赖版本的文件，类似于package-lock.json，确保团队成员使用相同的依赖版本)
```

