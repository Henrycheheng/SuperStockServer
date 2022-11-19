## 上期遗留的问题

- 1. pnpm 安装报错

  - npm config set registry https://registry.npmjs.org

- 2. peerDependencies

  - 简单说，就是 ts-loader 需要依赖 webpcak.ts-loader

## controllers

- 控制器负责处理传入的 `请求`和向客户端返回 `响应`。

### 2022/11/19

- 依赖报错的问题： 删除store下面的15版本的包的问题
- pnpm安装的包的store是在node_modules/.pnpm
  - 

## nest 一键生成 curd

```bash
nest g resource
```

- 生成所有的 curd
