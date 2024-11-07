import{_ as i,V as a,W as n,as as h}from"./chunks/framework.ChcVouE2.js";const g=JSON.parse('{"title":"Git Commit 规范介绍","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"standard/git_commit.md","filePath":"standard/git_commit.md","lastUpdated":1714343587000}'),l={name:"standard/git_commit.md"};function t(p,s,k,e,F,d){return a(),n("div",null,s[0]||(s[0]=[h(`<h1 id="git-commit-规范介绍" tabindex="-1">Git Commit 规范介绍 <a class="header-anchor" href="#git-commit-规范介绍" aria-label="Permalink to &quot;Git Commit 规范介绍&quot;">​</a></h1><h2 id="社区流行的-commit-规范" tabindex="-1">社区流行的 commit 规范 <a class="header-anchor" href="#社区流行的-commit-规范" aria-label="Permalink to &quot;社区流行的 commit 规范&quot;">​</a></h2><p>目前社区流行的 commit 规范（来自于 Angular 团队的 commit 规范）</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Commit Message 的三个部分：Header，Body 和 Footer, 注意两两之前空行间隔</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;(&lt;scope&gt;): </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">subject</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">BLANK</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> LIN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">E</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">BLANK</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> LIN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">E</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">footer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Commit Message 之 Header 部分</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">（必需）---</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 用于说明</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 的类别</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    a.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 初始化</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    b.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> feat:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 新增feature</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    c.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fix:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 修复bug</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    d.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 仅仅修改了文档，如readme.md</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    e.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> style:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 仅仅是对格式进行修改，如逗号、缩进、空格等。不改变代码逻辑</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    f.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> refactor:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 代码重构，没有新增功能或修复bug</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    g.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> perf:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 优化相关，如提升性能、用户体验等</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    h.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 测试用例，包括单元测试、集成测试</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    i.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chore:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 改变构建流程、或者增加依赖库、工具等</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    j.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> revert:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 版本回滚</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    k.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> merge：代码合并</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    l.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sync：同步分支</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  scope（可选）---</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 用于说明</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 影响范围，可以通过</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 名下文件夹定义，例如</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    a.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> or</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    b.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> api</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    c.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> components</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    d.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> utils</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    e.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> views</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    f.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  subject（必需）---</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 内容的简短描述，不超过70个字符</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Commit Message 之 Body 部分（可选）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  a.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 对本次</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 修改内容的具体描述,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 可以分为多行</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  b.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 描述为什么修改,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 做了什么样的修改,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 以及开发的思路等等</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Commit Message 之 footer 部分（可选，仅处理 不兼容 或 关闭 Issue使用）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  a.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 处理当前代码与上个版本不兼容,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 以</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> BREAKING</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> CHANGE:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 开头进行详细描述</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  b.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 当前</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 关闭</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> issue，如</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Closes</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #123, #245, #992</span></span></code></pre></div><h2 id="社区-git-commit-message-示范" tabindex="-1">社区 Git Commit Message 示范 <a class="header-anchor" href="#社区-git-commit-message-示范" aria-label="Permalink to &quot;社区 Git Commit Message 示范&quot;">​</a></h2><p>基于社区流行的 commit Message 示范</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Commit Message - Header + Body</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  init:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Vue3.x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 开发规范首次提交</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  a.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 包含了项目指南、注释规范、Vue</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 规范、Git规范</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  b.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 目前支持了</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Vue3.x,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 兼容</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Vue2.x</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Commit Message - 仅 Header</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  docs(README.md</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">): Vue3.x 开发规范完善 VSCode 开发等</span></span></code></pre></div>`,7)]))}const y=i(l,[["render",t]]);export{g as __pageData,y as default};
