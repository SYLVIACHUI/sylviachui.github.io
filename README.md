# 聂梦溪 · 个人主页

面向学术交流的静态个人主页，包含教育经历、研究兴趣、项目经历、技术能力与荣誉。可直接在 GitHub Pages 上发布，无需安装依赖或编译。

## 本地查看

双击 `index.html` 即可查看。所有图片、样式、脚本均保存在本地，不依赖外部字体或网络服务。页面中的邮箱链接需要系统配置邮件客户端。

## 发布到 GitHub Pages

1. 登录 GitHub，新建公开仓库，名称为 `你的用户名.github.io`（把“你的用户名”替换为真实 GitHub 用户名，使用小写）。若同名仓库已存在，先检查已有内容，避免覆盖已有网站。
2. 解压网站压缩包，进入 `niemengxi-homepage` 文件夹。
3. 在仓库中选择 **Add file → Upload files**，上传文件夹里的全部文件。`index.html` 必须直接位于仓库根目录，不能多嵌套一层 `niemengxi-homepage` 文件夹。不要只上传 ZIP 压缩包。
4. 提交后，进入仓库 **Settings → Pages**。
5. 在 **Build and deployment → Source** 中选择 **Deploy from a branch**，分支选择 `main`，目录选择 **/(root)**，点击 **Save**。
6. 等待部署成功，在 Pages 设置页点击 **Visit site**。个人主页地址将是 `https://你的用户名.github.io/`。

也可以上传到任意项目仓库，例如 `homepage`；启用 Pages 后地址为 `https://你的用户名.github.io/homepage/`。本网站使用相对资源路径，两种部署方式均适用。

发布设置及部署耗时以 [GitHub 创建 Pages 网站文档](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) 和 [发布源配置文档](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) 为准。

## 日常更新

- `index.html`：修改个人简介、教育经历、项目、荣誉和邮箱。
- `styles.css`：修改配色、字体与布局，包含手机和打印样式。
- `script.js`：导航高亮与打印时自动展开项目详情。
- `portrait.jpg`：替换个人照片时保留同名文件。
- `.nojekyll`：告知 GitHub Pages 直接发布静态文件。

修改内容并提交到发布分支后，GitHub Pages 会自动更新。点击网站中的“打印 / 保存为 PDF”，在浏览器打印面板中选择“另存为 PDF”即可导出当前主页；项目详情会自动展开。

## 内容说明

内容根据提供的简历整理，硕士毕业时间标记为预计，Agent 项目标记为进行中；奖项保留简历原有等级，未补充未经提供的赛事级别、年份或论文成果。贝鱼儿项目名称按本人确认使用，技术描述来自简历。联系方式使用学校邮箱。网站包未包含原始简历 PDF。

GitHub 账号：SYLVIACHUI。主页仓库：https://github.com/SYLVIACHUI/sylviachui.github.io 。启用 Pages 并部署成功后的地址：https://sylviachui.github.io/ 。各项目代码仓库尚未提供。


