# Remotely Save

[English](./README.md) | 中文

这是Obsidian的一个非官方同步插件。如果你喜欢它或觉得它帮到了你，请考虑在Github上给它一颗[星星 ![GitHub Repo stars](https://img.shields.io/github/stars/fyears/remotely-save?style=social)](https://github.com/fyears/remotely-save)。

[![BuildCI](https://github.com/fyears/remotely-save/actions/workflows/auto-build.yml/badge.svg)](https://github.com/fyears/remotely-save/actions/workflows/auto-build.yml)

[![最新版本的下载量](https://img.shields.io/github/downloads-pre/remotely-save/remotely-save/latest/main.js?sort=semver)](https://github.com/fyears/remotely-save/releases)

## 免责声明

- **这不是 Obsidian 提供的[官方同步服务](https://obsidian.md/sync)。**

## !!!警告!!!

**在使用此插件之前，一定，一定要记得备份你的 vault。**

## 功能

- 支持：
  - Webdav（NextCloud / InfiniCloud / Synology webdav 服务器 / ...）
- **支持 Obsidian 移动版。**  vault 可以通过云服务作为“中介”在移动和桌面设备之间同步。
- **支持[端到端加密](./docs/encryption/README.md)。** 如果用户指定密码，文件在发送到云之前会使用 openssl / rclone crypt 格式加密。
- **支持计划自动同步。** 你也可以使用侧边栏按钮，或者或命令面板中的命令，来手动触发同步（又或者绑定热键组合然后触发）。
- **[最小侵入性](./docs/minimal_intrusive_design.md)。**
- 通过自定义正则表达式条件**跳过大文件和路径！**
- **[同步算法](./docs/sync_algorithm/v3/intro.md)文档公开。**
- 免费版本支持 **[基本冲突检测和处理](./docs/sync_algorithm/v3/intro.md)**。PRO 版本支持 **[高级智能冲突处理](./pro/README.md)**。
- 源代码可阅。详见[许可证](./LICENSE)。

## 限制

- **云服务会产生费用。** 始终记得注意成本和定价。具体来说，所有操作，包括但不限于下载、上传、列出所有文件、调用任何 api、存储大小，可能会或可能不会产生费用。
- **来自浏览器环境的一些限制。** 更多技术细节在[文档](./docs/browser_env.md)中。
- **记得保护你的 `data.json` 文件。** 该文件包含敏感信息。
  - 强烈建议**不要**与任何人共享你的 `data.json` 文件。
  - 通常**不要**将此文件检入版本控制。默认情况下，插件会尝试在插件目录中创建一个 `.gitignore` 文件（如果不存在），以忽略 `git` 版本控制中的 `data.json`。如果你确切知道这意味着什么并想移除设置，请修改 `.gitignore` 文件或将其设置为空。
- **Obsidian 移动版 API 在同步大文件（>= 50 MB）时存在性能问题。**
  - 设置“跳过大文件”选项可以帮助解决同步大文件的问题。

## 问题、建议或错误

非常欢迎你提出问题、发布任何建议或报告任何错误！该项目主要在GitHub上维护：

- 问题：[GitHub 仓库讨论](https://github.com/remotely-save/remotely-save/discussions)
- 建议：也在[GitHub 仓库讨论](https://github.com/remotely-save/remotely-save/discussions)
- 错误：[GitHub 仓库 Issue](https://github.com/remotely-save/remotely-save/issues)（注意这里是 bug 反馈，不是讨论）

此外，插件作者可能会偶尔访问 Obsidian 官方论坛和官方 Discord 服务器，并关注与该插件相关的信息。

## 下载和安装

- 选项 #1：在官方“社区插件列表”中搜索，或访问此链接：[https://obsidian.md/plugins?id=remotely-save](https://obsidian.md/plugins?id=remotely-save)（应该会重定向到 Obsidian app），然后安装插件。
- 选项 #2：你也可以使用 [Obsidian42 - BRAT](https://github.com/TfTHacker/obsidian42-brat) 来安装此插件。在 BRAT 的配置中输入 `remotely-save/remotely-save`。
- 选项 #3：[![GitHub release (latest by SemVer and asset including pre-releases)](https://img.shields.io/github/downloads-pre/fyears/remotely-save/latest/main.js?sort=semver)](https://github.com/fyears/remotely-save/releases) 从最新发布中手动下载文件（`main.js`，`manifest.json`，`styles.css`）。
- 选项 #4：[![BuildCI](https://github.com/fyears/remotely-save/actions/workflows/auto-build.yml/badge.svg)](https://github.com/fyears/remotely-save/actions/workflows/auto-build.yml) 每个成功的构建的“摘要”下都有构建文件。它是由每个提交自动生成的，可能不会正常工作。

## 使用方法

### webdav

- 教程/示例：
  - [Nextcloud](./docs/remote_services/webdav_nextcloud/README.md)
  - [The Good Cloud](./docs/remote_services/webdav_thegoodcloud/README.md)
  - [ownCloud](./docs/remote_services/webdav_owncloud/README.md)
  - [InfiniCloud](./docs/remote_services/webdav_infinicloud_teracloud/README.md)
  - [Synology webdav 服务器](./docs/remote_services/webdav_synology_webdav_server/README.md) | [群晖 webdav 服务器](./docs/remote_services/webdav_synology_webdav_server/README.zh-cn.md)
  - [dufs](./docs/remote_services/webdav_dufs/README.md)
  - [AList（中文）](./docs/remote_services/webdav_alist/README.zh-cn.md) | [AList (English)](./docs/remote_services/webdav_alist/README.md)
  - [坚果云](./docs/remote_services/webdav_jianguoyun/README.zh-cn.md) | [JianGuoYun/NutStore](./docs/remote_services/webdav_jianguoyun/README.md)
  - [Open Media Vault](./docs/remote_services/webdav_openmediavault/README.md)
  - [Nginx (`ngx_http_dav_module`, `nginx-dav-ext-module`, with Docker)](./docs/remote_services/webdav_nginx/README.md)
  - [Apache (with Docker)](./docs/remote_services/webdav_apache/README.md)
  - [Caddy with `http.handlers.webdav` module](./docs/remote_services/webdav_caddy/README.md)
- 非常旧版本的Obsidian需要[配置 CORS](./docs/remote_services/webdav_general/webav_cors.md)。
- 你的数据会同步到你的webdav服务器上的 `${vaultName}` 子文件夹。
- 基于密码的端到端加密也是可以的。但请注意，**vault 名称本身未加密**。
- 如果你想在多个设备之间同步文件，**在使用默认设置时，你的 vault 名称应该相同**。

## 智能冲突（PRO功能）

基本（免费）版本可以检测冲突，但用户必须选择保留较新版本或较大版本的文件两种选项之一。

PRO（付费）功能“智能冲突”为用户提供了另一个选项：合并小的 markdown 文件，或复制大的 markdown 文件或任何大小的非 markdown 文件。

文档见[这里](./docs/pro/README.md)。

## 定时自动同步

- 你可以在设置中配置每 N 分钟自动同步。
- 在自动同步模式下，如果发生任何错误，插件会**静默失败**。
- 自动同步仅在 Obsidian 打开时有效。由于插件仅在 Obsidian 提供的浏览器环境中工作，因此**技术上不可能**在 Obsidian 后台自动同步。

## 保存时同步

- 你可以在设置中配置保存时同步。
- 在保存时同步模式下，如果发生任何错误，插件会**静默失败**。

## 配置文件夹/文件和书签

默认情况下，插件不同步 obsidian 的配置文件夹/文件（通常是 `.obsidian` 文件夹），因为它是隐藏文件之一。

然而，在最新版本中，你可以在设置中启用同步配置文件夹。请注意，这是一个实验性功能。特别是一些配置文件的修改时间每次 Obsidian 打开时都会改变，这破坏了插件的假设，因此某些信息可能无法正确同步。

此外，Obsidian的书签实际上存储在 `.obsidian/bookmarks.json` 文件中的。你也可以在设置中设置同步这个文件（而不是整个配置文件夹）。插件将保持跨设备最新修改的文件。

## 隐藏文件或文件夹

**默认情况下，所有以 `.`（点）或 `_`（下划线）开头的文件或文件夹都被视为隐藏文件，不会被同步。** 如果你有一些文件只是本地保留，这很有用。但这种策略也意味着主题/其他插件/此插件的设置也不会被同步。

在最新版本中，你可以更改设置以允许同步 `_` 文件或文件夹，以及如上所述的 `.obsidian` 特殊配置文件夹（但不包括其他任何 `.` 文件或文件夹）。

## PRO（付费）功能

详见[PRO](./docs/pro/README.md)了解更多详情。

## 如何调试（debug）

如发生错误，查看[这里文档](./docs/how_to_debug/README.md)了解调试方式。

如果没有发生错误，但是运行起来很慢，你需要[开启“性能收集”](./docs/check_performance/README)来看看有没有哪一步特别慢。

## 额外功能：通过 QR 码导入和导出非 OAuth2 插件设置

详见[这里](./docs/import_export_some_settings.md)了解更多详情。

## 下载历史

下载历史可以从非官方的 [Obsidian Stats](https://www.moritzjung.dev/obsidian-stats/plugins/remotely-save/#downloads) 查阅。（和官方 Obsidian，GitHub，Remotely Save 均无利益关系。）

## 星星历史 

（和官方 Obsidian，GitHub，Remotely Save 均无利益关系。）

[![星星历史 曲线图](https://api.star-history.com/svg?repos=remotely-save/remotely-save&type=Date)](https://star-history.com/#remotely-save/remotely-save&Date)
