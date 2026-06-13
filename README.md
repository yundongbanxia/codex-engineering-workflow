# Codex Engineering Research Workflow

工程热物理 / CFD 研究生的 AI-Augmented Engineering Research Workflow。这个仓库用于展示我如何把 Codex 作为科研与求职工作流里的工程协作者，而不是只把它当作问答工具。

> GitHub connection note: 当前 Codex GitHub App 已连接到 `yundongbanxia`，本展示包发布到公开仓库 `codex-engineering-workflow`。

- Repository: `https://github.com/yundongbanxia/codex-engineering-workflow`
- GitHub Pages: `https://yundongbanxia.github.io/codex-engineering-workflow/`
- Static page: [`index.html`](./index.html)
- Evidence map: [`evidence_map.md`](./evidence_map.md)
- Browser QA: [`qa_report.md`](./qa_report.md)

## Resume Summary

我围绕微通道液冷、Fluent/PyFluent 后处理、论文图件、自动化知识管理和求职材料构建了一套 Codex 驱动的个人工作流：

- 将三维微通道液冷与 manifold-radial microchannel cooling 研究拆成可审计任务，形成从 case/data 发现、KPI 汇总、Rth scaling、q-limit envelope、Rth-DeltaP trajectory 到论文图件的闭环。
- 用 Codex 辅助维护 Fluent 批处理与故障恢复流程，定位 T8 并行启动、license、journal 执行和 KPI 导出问题，并以 status/log/iter chunk 作为验收证据。
- 基于 `nature-figure`、PDF/文档检查和自建脚本完成论文图与 manuscript QA，包含图件边界、caption 同页、PDF 渲染、word count、作者属性和审稿风险措辞检查。
- 建立 AI HOT 到 Notion 的自动化知识流，将 AI 行业日报按工程热物理、CFD、热管理、科研工作流和求职场景转化为可执行建议。
- 将简历从多版本 PDF 整理为 V6 正本生成链路，审计内容缺失、修复两端对齐、生成多方向投递版本，并保留 PDF/DOCX/YAML/audit 证据。

## Workflow Overview

我的 Codex 工作流分为六层：

1. Problem framing: 先把科研问题、约束、禁止项和验收指标写清楚，尤其区分只读审计、新建输出和真实求解。
2. Simulation orchestration: 用 Python、PyFluent、Fluent journal、WSL/FEniCS 等工具承接批处理、重启、continuation 和失败诊断。
3. Data audit: 对 HDF5、CSV、status、log、manifest 做可追溯审计，不把缺失点、stress-derived 点或失败点伪装成真实结果。
4. Figure production: 用脚本生成可复现图件，检查坐标、单位、色标、caption、PDF/SVG/PNG 导出和页面渲染。
5. Writing and packaging: 将结果重构为论文叙事、简历版本、报告目录和交付清单。
6. Knowledge loop: 通过 Notion 自动化把外部 AI 信息转成可执行研究/求职行动。

## Verified Case Studies

### 1. 三维微通道液冷与歧管优化

围绕 connected annular-manifold radial microchannels，我用 Codex 把已有工况从“结果堆”整理成可解释的工程叙事。重点不是单纯寻找最低温度，而是把推荐逻辑重构为 compactness constraint、flow quality、backflow caveat 和 Rth-DeltaP trajectory。

公开可写的成果：

- 将 operating-boundary 叙事从 q/m matrix 改写为 `Rth scaling / q-limit envelope / Rth-DeltaP trajectory`。
- 将 normalized score 降级为 internal screening，避免把筛选指标当作论文主证据。
- 形成 Step 4 field-data、variable-property validation 和 Step 5b paper-ready figure package。
- Step 5b 图件包记录了 10 个 figure stems，其中 7 个 paper-ready、3 个 diagnostic-only，非 deferred 图均含 PNG/PDF/SVG，PNG 为 600 dpi。

### 2. Fluent/T8 故障恢复与批处理验收

一次 T8/T1 启动异常中，我用 Codex 做了从进程、license、参数解析、journal 执行到 KPI 文件落盘的诊断。

公开可写的成果：

- 确认问题不是 case/data 无法读取，而是启动参数与 license/journal 链路需要分层排查。
- 修复 debug runner 的 T1 fallback，使其走 headless `-g -t1`，并要求生成 `iter050_*` 才算真实成功。
- 通过 E50/E52 两个设计点确认 `3ddp -g -t8` 能正常启动、读取 case/data、hybrid initialization、迭代并导出 chunk KPI。

### 3. 论文图件与 Round7 文档 QA

论文图与文档不是一次性导出，而是按“图源证据、重绘、Word/PDF 渲染、页面 QA、审稿风险措辞”逐层把关。

公开可写的成果：

- 修复 Fig.7 中 REF 出框、标签压住 marker、字号过大等问题。
- 新增 Fig.12，用原始数值数据重绘 REF/UNI 温度重分布机制图，而不是复用截图。
- 将主文扩展到不含 References 5574 词，同时检查过强措辞、中文字符、作者属性、图片宽度和 PDF 页面。
- 修复 Fig.10 与 Fig.12 的图文分离问题，确认最终主文 PDF 为 26 页，blank-like 页为图页假阳性。

### 4. AI HOT 到 Notion 的知识管理自动化

我将 AI 资讯从“读完就忘”改成结构化知识流：抓取、渲染、去重、写入、回读验证、行动建议。

公开可写的成果：

- 自动化每日抓取 AI HOT 日报，并按 section label 生成中文 Markdown。
- 写入 Notion 前检查当前用户、目标工作空间、目标数据库和同日去重。
- 写入后回读验证标题、日期、关键词、状态、行动类型、父级路径、原文链接和行动建议。
- 生成面向工程热物理、CFD、热管理、科研工作流和求职的“值得立即试用 / 值得收藏但不行动”建议。

### 5. 简历工程化与多方向投递版本

简历处理被当成一个可复现文档工程，而不是手工拖拽排版。

公开可写的成果：

- 探明 V6 简历由 `python-docx`、PyMuPDF、Pillow 和 Word COM 导出 PDF，而不是 HTML/CSS 或 LaTeX。
- 定位 V6 两页版内容变短的原因是脚本 `max_bullets` 截断，而不是 YAML 源缺失。
- 修复实习经历缺失、补回 FEniCS、设置 bullet 正文两端对齐，并保持两页主版为真实可选中文本。
- 规划并生成四个方向版本：通用 CFD、热管理、新能源、半导体设备。

## Skill And Plugin Stack

| Category | Evidence-backed usage |
| --- | --- |
| Planning and verification | `Superpowers`, plan mode, execution checklist, verification-before-completion |
| Simulation workflow | Python, PyFluent, Fluent journal, HDF5/CSV audit, status/log based validation |
| Figure workflow | `nature-figure`, manuscript figure QA, PNG/PDF/SVG export, 600 dpi checks |
| Documents | Word DOCX, PDF rendering, page/contact-sheet QA, author and layout checks |
| Knowledge management | `aihot`, Notion connector, daily automation, dedup and readback verification |
| Resume workflow | RenderCV skill installed, `python-docx`, YAML source, multi-version PDF/DOCX outputs |
| Pending evidence | Chrome plugin, Computer Use plugin, 2D topology optimization, WSL/FEniCS long-run thread |

## Browser QA

Playwright Chromium has been installed in the local Codex runtime cache and used for real browser checks of `index.html`.

- Desktop viewport: `1366 x 900`
- Mobile viewport: `390 x 844`
- Result: no horizontal overflow in either viewport
- Verified DOM signals: title, H1, 6 case cards, 4 metric blocks, Evidence Map link

See [`qa_report.md`](./qa_report.md) for the exact check summary.

## Deep Usage Notes

真正有价值的不是“让 AI 做了很多事”，而是把 Codex 放进有边界的工程流程：

- 先审计后执行。对科研仿真，先读 case/data、summary、manifest、日志和脚本，再决定是否允许启动求解。
- 只读和求解分离。很多工作只需要零算力审计，不能把“分析现有数据”和“新增仿真”混成一件事。
- 输出目录可追溯。新结果优先进入带时间戳或明确 run-name 的目录，旧结果不覆盖。
- 指标要诚实。missing、stress-derived、diagnostic-only、paper-ready 必须分开标记。
- AI 负责并行阅读和机械化验证，人负责物理含义、证据强度、公开边界和最终叙事。

## Resume-Ready Bullets

- 构建 Codex + Python + PyFluent 科研仿真辅助流程，实现多工况 case/data 审计、KPI 汇总、图件生成、报告归档和失败诊断闭环，显著降低 Fluent 后处理与论文材料整理成本。
- 面向三维微通道液冷研究，重构 operating-boundary 证据链，将推荐逻辑从 normalized score 转为 compactness、flow-quality、Rth-DeltaP trajectory 与物性敏感性约束，形成可投论文图件和审计报告。
- 搭建 AI HOT 到 Notion 的个人知识管理自动化，每日完成 AI 资讯抓取、去重、结构化写入和行动建议生成，服务 CFD、热管理、科研工作流和 2027 秋招信息筛选。
- 将简历制作流程工程化，基于 YAML/脚本/DOCX/PDF/audit 管理版本差异、ATS 友好性、两端对齐、文本可选中和多方向投递版本。

## Evidence And Privacy

本展示只使用半公开证据：

- 保留：目录 basename、线程标题、产物类型、关键数值、QA 指标和方法。
- 隐藏：邮箱、私有 Notion 链接、完整本机路径、未公开论文细节、账号信息、私有数据库 ID。
- 待补：Chrome/Computer Use/二维拓扑优化等经历需要更多线程或文件证据后再进入主展示。
