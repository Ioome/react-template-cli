# 常见问题



### 1. Vite 导入 npm i -D vite-plugin-logger ,安装依赖产生

```ts
TS2349: This expression is not callable.   Type 'typeof import("E:/react-all-vite-template/node_modules/vite-plugin-logger/dist/index")' has no call signatures

```

这个错误提示（TS2349）是TypeScript的一种类型错误，指示您正在尝试对一个不可调用的表达式进行调用操作。根据您提供的错误信息，看起来是在使用"vite-plugin-logger"插件时出现了问题。可能的原因是导入插件时的类型声明不正确或没有正确使用插件的方法

### 2. TS2820: Type '"DELETE"' is not assignable to type 'ReqType'. Did you mean '"delete"'?

是TypeScript的一种类型错误，指示您尝试将一个不可赋值的值分配给特定类型的变量,

看起来是在给一个类型为`ReqType`的变量分配值时出现了问题。该变量可能是用于指示请求类型的枚举类型，而您尝试将字符串`"DELETE"`分配给该变量。

