# 洞洞板个人作品集

以工作台与洞洞板为灵感的交互式个人网站，包含个人简介、三个作品详情、经历与教育、技能和联系方式。支持手机布局、键盘操作、减少动态效果偏好，以及简历打印 / 保存 PDF。

目前为明确标注的示例版，不包含虚构的真实经历或业绩。

## 本地运行

需要 Node.js 22.13 或更新版本。

```sh
npm ci
npm run dev
```

按终端显示的本地地址访问。

## 替换个人信息

编辑 `app/portfolio.ts` 中的 `profile` 和 `projects`：

- 姓名、职业方向、城市、自我介绍。
- 工作经历、教育背景、技能。
- 三个项目的名称、描述、过程和成果。
- `email` 为空时不显示可点击的邮箱；填写后自动生成邮件链接。
- GitHub 目前链接到 SiyuanArthur。

替换内容后，移除 `app/page.tsx` 中的“示例”提示，并更新 `app/layout.tsx` 的标题与介绍。年份、首页标签文字也可以在 `app/page.tsx` 中调整。

## 项目结构

- `app/page.tsx`：首页与可访问的详情弹窗。
- `app/portfolio.ts`：个人资料与作品内容。
- `app/globals.css`：洞洞板视觉、响应式和打印样式。
- `public/assets/mustard-key-tag.png`：为本项目生成的钥匙牌图片。
- `components/ui/`：脚手架提供的 UI 组件。

## 验证与部署

```sh
npm run build
npx tsc --noEmit
```

项目使用 React、Vinext、Vite 和 Cloudflare Workers，已包含 Sites 部署配置。`npm run build` 生成 `dist/client` 静态资源和 `dist/server` 服务端文件。

GitHub 仓库保存源代码；当前输出包含服务端，不能直接把源码当作 GitHub Pages 静态站点发布。

## 设计说明

结构参考用户提供的小红书洞洞板作品集，所有页面代码为本项目编写；没有复制原作者图片或简历内容。钥匙牌为 AI 生成素材。项目无需 API 密钥，未接入分析追踪或表单收集。
