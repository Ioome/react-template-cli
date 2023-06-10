# 常见问题



### 1. Vite 导入 npm i -D vite-plugin-logger ,安装依赖产生

```ts
TS2349: This expression is not callable.   Type 'typeof import("E:/react-all-vite-template/node_modules/vite-plugin-logger/dist/index")' has no call signatures

```

这个错误提示（TS2349）是TypeScript的一种类型错误，指示您正在尝试对一个不可调用的表达式进行调用操作。根据您提供的错误信息，看起来是在使用"vite-plugin-logger"插件时出现了问题。可能的原因是导入插件时的类型声明不正确或没有正确使用插件的方法

### 2. TS2820: Type '"DELETE"' is not assignable to type 'ReqType'. Did you mean '"delete"'?

是TypeScript的一种类型错误，指示您尝试将一个不可赋值的值分配给特定类型的变量,

看起来是在给一个类型为`ReqType`的变量分配值时出现了问题。该变量可能是用于指示请求类型的枚举类型，而您尝试将字符串`"DELETE"`分配给该变量。





### 3 --legacy-peer-deps

其实从上文其作用来看也比较清楚了，忽略所有对等依赖，以npm版本4到6的样式安装。 但是，从npm v7开始如果在安装过程中发现没有安装相关依赖就会默认安装peerDendencies；所以说遇到对等依赖冲突也是在npm v7开始的，所以说以npm v4 through v6安装的话不会安装peerDependenices.

In the new version of npm (v7), by default, `npm install` will fail when it encounters conflicting *peerDependencies*.

npm install 使用 npm v6, 依赖项中不会存在peerDependencies
