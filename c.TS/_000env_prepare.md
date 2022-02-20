# vscode typescripte 环境准备
## 1.安装node及npm
    brew install nvm
    nvm install node
    nvm current
    brew install npm
    更换国内镜像
    npm config set registry https://registry.npm.taobao.org
    npm config get registry
## 2.安装typescript
    npm install -g typescript
    tsc -v
    tsc demo.ts
    node demo.js
## 3.vscode直接执行typescript
    npm install -g ts-node tslib @types/node
    ts-node demo.ts
    安装Code Runner插件
    