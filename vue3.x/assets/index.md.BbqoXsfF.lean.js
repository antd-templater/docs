import{d as p,f as d,o as r,V as o,W as h,X as a,E as i,as as n,$ as k}from"./chunks/framework.dgqL06lB.js";const b={class:"vp-code-group vp-adaptive-theme"},g={class:"blocks"},m={class:"language-bash vp-adaptive-theme active"},c={class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},u={class:"line"},v={style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},f=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"Antd Templater","text":"后台管理系统模版","tagline":"基于 Vue3 + Ant Design Vue 组件库开发","actions":[{"theme":"brand","text":"在线演示","link":"/redirect?antd-templater.${domain}.io/previews/vue3.x","target":"_blank"},{"theme":"alt","text":"文档说明","link":"/guide/introduction"},{"theme":"alt","text":"源码仓库","link":"/redirect?${domain}.com/antd-templater/vue-template-3.x","target":"_blank"}],"image":{"light":{"style":"max-width: 75%; max-height: none;","src":"index.light.svg","alt":"antd-templater"},"dark":{"style":"max-width: 75%; max-height: none;","src":"index.dark.svg","alt":"antd-templater"}}},"features":[{"title":"特性","details":"轻量化: 仅预设基础访问页, 没有冗余 Demo 页<br/>多主题: 支持亮色风格、暗色风格、暗黑风格等<br/>多布局: 侧边菜单、顶部菜单、混合菜单等导航<br>标签栏: 支持面包屑，支持多页签及其数据缓存<br/>现数据 - 由 `msw` + 预设的 mock data 提供<br/>"},{"title":"组件库 <a href=\\"./library/quick.html\\" style=\\"color: #bd34fe;\\">更多</a>","details":"SForm: 根据配置选项渲染各表单组件<br/>SEditCell: 单元格编辑 (输入框、下拉框等)<br/>STable: 多功能表格组件 (并非 ATable 的封装)<br/>STree: 对 ATree 封装, 扩展 link 模式和新 API <br/>SIcon: 根据 type 渲染 Icon, 也支持 iconfont<br/>"},{"title":"开发规范 <a href=\\"./standard/develop_guide.html\\" style=\\"color: #bd34fe;\\">详情</a>","details":"a. 提供 项目指南 (目录结构、依赖管理)<br/>b. 提供 Vue 组件规范 和 Vue 组件范式<br/>c. 提供 Git 分支规范、Git Commit 规范<br/>d. 提供 Git Commit 校验工具和辅助工具<br/>e. 提供 VSCode 推荐使用的插件和配置项<br/>"}]},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1730997731000}'),F={name:"index.md"},x=p({...F,setup(y){const s=d("https://github.com/antd-templater/vue-template-3.x.git");return r(()=>{const e=window.location.href,t="https://antd-templater.atomgit.net/",l="https://atomgit.com/antd-templater/vue-template-3.x.git";e.startsWith(t)&&(s.value=l)}),(e,t)=>(o(),h("div",null,[t[9]||(t[9]=a("h2",{id:"快速使用",tabindex:"-1"},[i("快速使用 "),a("a",{class:"header-anchor",href:"#快速使用","aria-label":'Permalink to "快速使用"'},"​")],-1)),a("div",b,[t[8]||(t[8]=n('<div class="tabs"><input type="radio" name="group-afB2F" id="tab--d4ZeBq" checked><label data-title="下载源码" for="tab--d4ZeBq">下载源码</label><input type="radio" name="group-afB2F" id="tab-C1-9VOe"><label data-title="安装依赖" for="tab-C1-9VOe">安装依赖</label><input type="radio" name="group-afB2F" id="tab-6nqHs6o"><label data-title="本地启动" for="tab-6nqHs6o">本地启动</label><input type="radio" name="group-afB2F" id="tab-927KBNo"><label data-title="本地构建" for="tab-927KBNo">本地构建</label></div>',1)),a("div",g,[a("div",m,[t[5]||(t[5]=a("button",{title:"Copy Code",class:"copy"},null,-1)),t[6]||(t[6]=a("span",{class:"lang"},"bash",-1)),a("pre",c,[a("code",null,[t[3]||(t[3]=a("span",{class:"line"},[a("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  # Download")],-1)),t[4]||(t[4]=i(`
`)),a("span",u,[t[0]||(t[0]=a("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"  git",-1)),t[1]||(t[1]=a("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," clone",-1)),a("span",v," "+k(s.value),1),t[2]||(t[2]=a("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," Antd-Template-Vue",-1))])])])]),t[7]||(t[7]=n(`<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Enter project</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Antd-Template-Vue</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Install denpendencies</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Start develop server</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Run build create dist</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Start server and preview</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> preview</span></span></code></pre></div>`,3))])])]))}});export{f as __pageData,x as default};