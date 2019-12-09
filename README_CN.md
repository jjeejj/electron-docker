
[![Build Status](https://travis-ci.org/dockeron/dockeron.svg?branch=master)](https://travis-ci.org/dockeron/dockeron)
[![AppVeyor](https://img.shields.io/appveyor/ci/gruntjs/grunt.svg)](https://ci.appveyor.com/project/fluency03/dockeron)
[![Tag](https://img.shields.io/github/tag/dockeron/dockeron.svg)](https://github.com/dockeron/dockeron/tags)
[![GitHub (pre-)release](https://img.shields.io/github/release/dockeron/dockeron/all.svg)](https://github.com/dockeron/dockeron/releases)
[![Version npm](https://img.shields.io/npm/v/dockeron.svg)](https://www.npmjs.com/package/dockeron)
[![Downloads npm](https://img.shields.io/npm/dt/dockeron.svg)](https://www.npmjs.com/package/dockeron)
[![MIT license](https://img.shields.io/npm/l/dockeron.svg)](https://opensource.org/licenses/MIT)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/dockeron-project)
[![GitHub stars](https://img.shields.io/github/stars/dockeron/dockeron.svg?style=social&label=Star)](https://github.com/dockeron/dockeron)

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

dockeron 项目, 利用 Electron + Vue.js 为 Docker 构建一个客户端.
  - 模板生成: [electron-vue](https://github.com/SimulatedGREG/electron-vue)
  - Docker Engine API: [dockerode](https://github.com/apocas/dockerode).
  - UI 组件: [iView](https://github.com/iview/iview)

*注意: 这个项目还在一直在进行开发, 许多功能特性还没有实现, 一些地方还是有功能性的bug.*

欢迎提 PR 和 [issues](https://github.com/dockeron/dockeron/issues/new).


## 开发

首先确定你你已经成功安装 Node.js (建议安装 node@^6.5.0 或者更高的版本 ).

- 克隆项目文件到你的机器上
```
git clone git@github.com:jjeejj/electron-docker.git
cd electron-docker
```

- 新建功能分支或者bug分支，并切换

- 安装依赖，并运行服务

```
npm install
npm run dev
```

## 贡献

[向该项目做贡献](./CONTRIBUTING.md)

## 示例

![](./docs/dockeron-screenshot1.png)
![](./docs/dockeron-screenshot2.png)
![](./docs/dockeron-screenshot3.png)
![](./docs/dockeron-screenshot4.png)
![](./docs/dockeron-screenshot5.png)
![](./docs/dockeron-screenshot6.png)


## 其他类似的项目

- [Docker Station](https://dockstation.io/)
- [Kitematic](https://kitematic.com/)
- [Weave Scope](https://github.com/weaveworks/scope) (Web Application)
- [Portainer](https://github.com/portainer/portainer) (Web Application)


*该项目使用 [electron-vue](https://github.com/SimulatedGREG/electron-vue) 生成*
