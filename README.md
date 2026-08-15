# stucdx
> 基于原生 HTML/CSS/JavaScript 开发的静态站点，支持 Vercel 一键部署

[![Vercel](https://vercelbadge.vercel.app/api/chen-daoxi/stucdx)](https://stucdx.vercel.app)
[![License: AGPL-3.0](https://img.shields.io/badge/license-AGPL--3.0-blue.svg)](LICENSE)

## 📖 项目简介
`stucdx` 是由 chen-daoxi（陈*希）独立维护的轻量化静态网页项目。
不依赖大型前端框架，原生前端技术栈实现，结构简洁，易于学习与二次开发。

- 在线预览：https://mouse.indevs.in
- 技术栈：HTML / CSS / JavaScript
- 开源协议：AGPL-3.0

## 📁 目录结构
```

stucdx/
├── assets/          # 图片、字体等静态资源
├── doc/             # 项目相关文档
├── LICENSE          # AGPL-3.0 开源协议
├── README.md        # 项目说明文档
└── index.html       # 站点入口首页

```

## 🚀 本地运行开发
### 1. 克隆仓库
```bash
git clone https://github.com/chen-daoxi/stucdx.git
cd stucdx
```

### 2. 本地预览

方式一：直接打开 `index.html`
方式二：使用静态服务启动

```
python -m http.server 8080
```

访问 [http://127.0.0.1:8080](https://link.wtturl.cn/?target=http%3A%2F%2F127.0.0.1%3A8080&scene=im&aid=497858&lang=zh)

### 3. 构建脚本（可选）

```
node build.js
```

## ☁️ Vercel 一键部署

1. Fork 本仓库
2. 进入 Vercel，导入 GitHub 仓库
3. 无需额外配置，自动完成构建部署

## 📜 开源协议

本项目采用 **GNU AGPLv3** 开源协议。
简单规则：

- 允许自由修改、使用、分发代码
- 如果你修改代码并对外提供线上服务，必须公开修改后的源码
详细协议内容查看仓库内 `LICENSE` 文件。

## 🤝 贡献

欢迎提交 Issue 反馈 bug、提出新功能；
也可以 Fork 仓库后提交 PR 参与改进。

## 📮 相关链接

- GitHub 仓库：[https://github.com/chen-daoxi/stucdx](https://link.wtturl.cn/?target=https%3A%2F%2Fgithub.com%2Fchen-daoxi%2Fstucdx&scene=im&aid=497858&lang=zh)
- 在线站点：https://mouse.indevs.in

## ⚠️ 免责声明

本项目仅供学习交流使用，不提供任何形式担保，使用产生的所有风险由使用者自行承担。
