import{_ as s}from"./chunks/Base.md_vue_type_script_setup_true_lang.DE8dLSP1.js";import{_ as n}from"./chunks/Group.md_vue_type_script_setup_true_lang.BPqD6ePa.js";import{_ as f}from"./chunks/Check.md_vue_type_script_setup_true_lang.CyMrn4es.js";import{_ as r}from"./chunks/GroupSlot.md_vue_type_script_setup_true_lang.BOhoqz46.js";import{_ as i}from"./chunks/ComponentSlot.md_vue_type_script_setup_true_lang.BqarshCE.js";import{d as b,V as o,W as v,as as l,X as t,k as d,u as e,_ as g}from"./chunks/framework.dgqL06lB.js";import"./chunks/theme.VWying9J.js";const y={"code-runner":"",style:{height:"398px",overflow:"hidden"}},h={style:{padding:"1px"}},p={"code-runner":"",style:{height:"1315px",overflow:"hidden"}},x={style:{padding:"1px"}},c={"code-runner":"",style:{height:"603px",overflow:"hidden"}},k={style:{padding:"1px"}},m={"code-runner":"",style:{height:"531px",overflow:"hidden"}},u={style:{padding:"1px"}},E={"code-runner":"",style:{height:"607px",overflow:"hidden"}},F={style:{padding:"1px"}},N=JSON.parse('{"title":"表单组件 - SForm","description":"","frontmatter":{},"headers":[],"relativePath":"library/form.md","filePath":"library/form.md","lastUpdated":1720658174000}'),A={name:"library/form.md"},P=b({...A,setup(_){return(S,a)=>(o(),v("div",null,[a[5]||(a[5]=l('<h1 id="表单组件-sform" tabindex="-1" data-v-bf93d407>表单组件 - SForm <a class="header-anchor" href="#表单组件-sform" aria-label="Permalink to &quot;表单组件 - SForm&quot;" data-v-bf93d407>​</a></h1><p data-v-bf93d407>通过 Groups 配置渲染表单内容，当然也支持卡槽自定义组件。 (目前 Groups 已支持的表单组件如下)</p><p data-v-bf93d407>ARate、<br data-v-bf93d407> ASlider、<br data-v-bf93d407> ASwitch、<br data-v-bf93d407> ASelect、ATreeSelect、<br data-v-bf93d407> ACascader、AAutoComplete、<br data-v-bf93d407> ARadioGroup、ACheckboxGroup、<br data-v-bf93d407> ADatePicker、AYearPicker、AMonthPicker、<br data-v-bf93d407> AQuarterPicker、AWeekPicker、ATimePicker、ARangePicker、<br data-v-bf93d407> AInput、AInputSearch、AInputNumber、AInputPassword、AInputTextarea</p><h2 id="演示" tabindex="-1" data-v-bf93d407>演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;" data-v-bf93d407>​</a></h2>',4)),t("div",y,[a[0]||(a[0]=t("div",{"code-runner-title":""},[t("h3",{id:"基本用法"},"基本用法")],-1)),t("div",h,[d(e(s))])]),t("div",p,[a[1]||(a[1]=t("div",{"code-runner-title":""},[t("h3",{id:"表单分组"},"表单分组")],-1)),t("div",x,[d(e(n))])]),t("div",c,[a[2]||(a[2]=t("div",{"code-runner-title":""},[t("h3",{id:"表单校验"},"表单校验")],-1)),t("div",k,[d(e(f))])]),t("div",m,[a[3]||(a[3]=t("div",{"code-runner-title":""},[t("h3",{id:"自定义分组"},"自定义分组")],-1)),t("div",u,[d(e(r))])]),t("div",E,[a[4]||(a[4]=t("div",{"code-runner-title":""},[t("h3",{id:"自定义组件"},"自定义组件")],-1)),t("div",F,[d(e(i))])]),a[6]||(a[6]=l(`<h2 id="api" tabindex="-1" data-v-bf93d407>API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;" data-v-bf93d407>​</a></h2><h3 id="props" tabindex="-1" data-v-bf93d407>Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;" data-v-bf93d407>​</a></h3><h4 id="sform-props" tabindex="-1" data-v-bf93d407>SForm Props <a class="header-anchor" href="#sform-props" aria-label="Permalink to &quot;SForm Props&quot;" data-v-bf93d407>​</a></h4><table tabindex="0" data-v-bf93d407><thead data-v-bf93d407><tr data-v-bf93d407><th style="text-align:left;" data-v-bf93d407>参数</th><th style="text-align:left;" data-v-bf93d407>说明</th><th style="text-align:left;" data-v-bf93d407>类型</th><th style="text-align:center;" data-v-bf93d407>默认值</th></tr></thead><tbody data-v-bf93d407><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>rules</strong></td><td style="text-align:left;" data-v-bf93d407>表单各组件验证规则，可以被组件的 <strong data-v-bf93d407>rlues</strong> 覆盖其定义</td><td style="text-align:left;" data-v-bf93d407>object</td><td style="text-align:center;" data-v-bf93d407>-</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>grid</strong></td><td style="text-align:left;" data-v-bf93d407>表单各组件的布局，可以在 <strong data-v-bf93d407>props.groups</strong> 里重新定义</td><td style="text-align:left;" data-v-bf93d407>SFormGrid</td><td style="text-align:center;" data-v-bf93d407>-</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>border</strong></td><td style="text-align:left;" data-v-bf93d407>是否设置 <code data-v-bf93d407>SFormGroupHeader</code> 的 bottom 边框</td><td style="text-align:left;" data-v-bf93d407>string | boolean</td><td style="text-align:center;" data-v-bf93d407>-</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>groups</strong></td><td style="text-align:left;" data-v-bf93d407>表单各组件配置选项, 有 <strong data-v-bf93d407><a href="#sform-component" data-v-bf93d407>[Component]</a></strong>、 <strong data-v-bf93d407><a href="#sform-agroup" data-v-bf93d407>AGroup</a></strong>、 <strong data-v-bf93d407><a href="#sform-arow" data-v-bf93d407>ARow</a></strong></td><td style="text-align:left;" data-v-bf93d407>Array&lt;object&gt;</td><td style="text-align:center;" data-v-bf93d407>[]</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>model (v-model)</strong></td><td style="text-align:left;" data-v-bf93d407>表单表单数据对象</td><td style="text-align:left;" data-v-bf93d407>object</td><td style="text-align:center;" data-v-bf93d407>-</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>disabled</strong></td><td style="text-align:left;" data-v-bf93d407>是否将表单设置禁用</td><td style="text-align:left;" data-v-bf93d407>boolean</td><td style="text-align:center;" data-v-bf93d407>false</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>readonly</strong></td><td style="text-align:left;" data-v-bf93d407>是否将表单设置只读 (本质还是禁用，只是消除了禁用样式影响)</td><td style="text-align:left;" data-v-bf93d407>boolean</td><td style="text-align:center;" data-v-bf93d407>false</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>spinning</strong></td><td style="text-align:left;" data-v-bf93d407>是否显示表单 loading</td><td style="text-align:left;" data-v-bf93d407>boolean</td><td style="text-align:center;" data-v-bf93d407>false</td></tr></tbody></table><h4 id="sform-component" tabindex="-1" data-v-bf93d407>SForm [Component] <a class="header-anchor" href="#sform-component" aria-label="Permalink to &quot;SForm [Component]&quot;" data-v-bf93d407>​</a></h4><table tabindex="0" data-v-bf93d407><thead data-v-bf93d407><tr data-v-bf93d407><th style="text-align:left;" data-v-bf93d407>参数</th><th style="text-align:left;" data-v-bf93d407>说明</th><th style="text-align:left;" data-v-bf93d407>类型</th><th style="text-align:center;" data-v-bf93d407>默认值</th></tr></thead><tbody data-v-bf93d407><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>type</strong></td><td style="text-align:left;" data-v-bf93d407>表单组件 类型，例：<strong data-v-bf93d407>AInput</strong>、<strong data-v-bf93d407>APassword</strong></td><td style="text-align:left;" data-v-bf93d407>SFormType</td><td style="text-align:center;" data-v-bf93d407>-</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>slot</strong></td><td style="text-align:left;" data-v-bf93d407>表单组件 自定义，例如 <code data-v-bf93d407>slot=&#39;input&#39;</code>, 在 <code data-v-bf93d407>SForm</code> 中 <strong data-v-bf93d407>&lt;template #s-component-input&gt;</strong> 自定义</td><td style="text-align:left;" data-v-bf93d407>string</td><td style="text-align:center;" data-v-bf93d407>-</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>label</strong></td><td style="text-align:left;" data-v-bf93d407>表单组件 <strong data-v-bf93d407>label</strong></td><td style="text-align:left;" data-v-bf93d407>string</td><td style="text-align:center;" data-v-bf93d407>-</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>field</strong></td><td style="text-align:left;" data-v-bf93d407>表单组件 绑定的字段</td><td style="text-align:left;" data-v-bf93d407>string | string[]</td><td style="text-align:center;" data-v-bf93d407>-</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>grid</strong></td><td style="text-align:left;" data-v-bf93d407>表单组件 布局大小 (24 栅格)</td><td style="text-align:left;" data-v-bf93d407>SFormGrid</td><td style="text-align:center;" data-v-bf93d407>-</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>layer</strong></td><td style="text-align:left;" data-v-bf93d407>表单组件 所应用的 <strong data-v-bf93d407>FormItem</strong> 的 <strong data-v-bf93d407>props</strong></td><td style="text-align:left;" data-v-bf93d407>object</td><td style="text-align:center;" data-v-bf93d407>{}</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>rules</strong></td><td style="text-align:left;" data-v-bf93d407>表单组件 验证规则, 可覆盖 <strong data-v-bf93d407>props.rules</strong></td><td style="text-align:left;" data-v-bf93d407>object</td><td style="text-align:center;" data-v-bf93d407>-</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>props</strong></td><td style="text-align:left;" data-v-bf93d407>表单组件 <strong data-v-bf93d407>props</strong> 定义</td><td style="text-align:left;" data-v-bf93d407>object</td><td style="text-align:center;" data-v-bf93d407>{}</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>slots</strong></td><td style="text-align:left;" data-v-bf93d407>表单组件 <strong data-v-bf93d407>slots</strong> 定义，例. 在 <strong data-v-bf93d407>AInputSearch</strong> 中定义 <strong data-v-bf93d407>enterButton</strong> 卡槽</td><td style="text-align:left;" data-v-bf93d407>object</td><td style="text-align:center;" data-v-bf93d407>{}</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>default</strong></td><td style="text-align:left;" data-v-bf93d407>表单组件 数据为空时的默认值 (<strong data-v-bf93d407>input</strong> -&gt; 传输给表单, <strong data-v-bf93d407>output</strong> -&gt; 从表单获取)</td><td style="text-align:left;" data-v-bf93d407>object</td><td style="text-align:center;" data-v-bf93d407>-</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>transfer</strong></td><td style="text-align:left;" data-v-bf93d407>表单组件 数据预处理 (<strong data-v-bf93d407>input</strong> -&gt; 传输给表单, <strong data-v-bf93d407>output</strong> -&gt; 从表单获取)</td><td style="text-align:left;" data-v-bf93d407>object</td><td style="text-align:center;" data-v-bf93d407>-</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>readonly</strong></td><td style="text-align:left;" data-v-bf93d407>表单组件 是否只读</td><td style="text-align:left;" data-v-bf93d407>boolean</td><td style="text-align:center;" data-v-bf93d407>false</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>disabled</strong></td><td style="text-align:left;" data-v-bf93d407>表单组件 是否禁用</td><td style="text-align:left;" data-v-bf93d407>boolean</td><td style="text-align:center;" data-v-bf93d407>false</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>render</strong></td><td style="text-align:left;" data-v-bf93d407>表单组件 是否渲染</td><td style="text-align:left;" data-v-bf93d407>boolean</td><td style="text-align:center;" data-v-bf93d407>true</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>show</strong></td><td style="text-align:left;" data-v-bf93d407>表单组件 是否显示</td><td style="text-align:left;" data-v-bf93d407>boolean</td><td style="text-align:center;" data-v-bf93d407>true</td></tr></tbody></table><h4 id="sform-agroup" tabindex="-1" data-v-bf93d407>SForm AGroup <a class="header-anchor" href="#sform-agroup" aria-label="Permalink to &quot;SForm AGroup&quot;" data-v-bf93d407>​</a></h4><table tabindex="0" data-v-bf93d407><thead data-v-bf93d407><tr data-v-bf93d407><th style="text-align:left;" data-v-bf93d407>参数</th><th style="text-align:left;" data-v-bf93d407>说明</th><th style="text-align:left;" data-v-bf93d407>类型</th><th style="text-align:center;" data-v-bf93d407>默认值</th></tr></thead><tbody data-v-bf93d407><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>type</strong></td><td style="text-align:left;" data-v-bf93d407>类型</td><td style="text-align:left;" data-v-bf93d407>&#39;AGroup&#39;</td><td style="text-align:center;" data-v-bf93d407>&#39;AGroup&#39;</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>slot</strong></td><td style="text-align:left;" data-v-bf93d407>表单分组 自定义，例如 <code data-v-bf93d407>slot=&#39;title&#39;</code>, 在 <code data-v-bf93d407>SForm</code> 中 <strong data-v-bf93d407>&lt;template #s-header-title&gt;</strong> 自定义</td><td style="text-align:left;" data-v-bf93d407>string</td><td style="text-align:center;" data-v-bf93d407>-</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>label</strong></td><td style="text-align:left;" data-v-bf93d407>表单分组 标题</td><td style="text-align:left;" data-v-bf93d407>string</td><td style="text-align:center;" data-v-bf93d407>-</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>border</strong></td><td style="text-align:left;" data-v-bf93d407>设置表单分组 <code data-v-bf93d407>GroupHeader</code> 的 bottom 边框</td><td style="text-align:left;" data-v-bf93d407>string | boolean</td><td style="text-align:center;" data-v-bf93d407>{}</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>grid</strong></td><td style="text-align:left;" data-v-bf93d407>表单分组下 所属组件 布局大小 (24 栅格)</td><td style="text-align:left;" data-v-bf93d407>SFormGrid</td><td style="text-align:center;" data-v-bf93d407>-</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>readonly</strong></td><td style="text-align:left;" data-v-bf93d407>表单分组下 所属组件 是否只读</td><td style="text-align:left;" data-v-bf93d407>boolean</td><td style="text-align:center;" data-v-bf93d407>false</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>disabled</strong></td><td style="text-align:left;" data-v-bf93d407>表单分组下 所属组件 是否禁用</td><td style="text-align:left;" data-v-bf93d407>boolean</td><td style="text-align:center;" data-v-bf93d407>false</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>render</strong></td><td style="text-align:left;" data-v-bf93d407>表单分组下 所属组件 是否渲染</td><td style="text-align:left;" data-v-bf93d407>boolean</td><td style="text-align:center;" data-v-bf93d407>true</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>show</strong></td><td style="text-align:left;" data-v-bf93d407>表单分组下 所属组件 是否显示</td><td style="text-align:left;" data-v-bf93d407>boolean</td><td style="text-align:center;" data-v-bf93d407>true</td></tr></tbody></table><h4 id="sform-arow" tabindex="-1" data-v-bf93d407>SForm ARow <a class="header-anchor" href="#sform-arow" aria-label="Permalink to &quot;SForm ARow&quot;" data-v-bf93d407>​</a></h4><table tabindex="0" data-v-bf93d407><thead data-v-bf93d407><tr data-v-bf93d407><th style="text-align:left;" data-v-bf93d407>参数</th><th style="text-align:left;" data-v-bf93d407>说明</th><th style="text-align:left;" data-v-bf93d407>类型</th><th style="text-align:center;" data-v-bf93d407>默认值</th></tr></thead><tbody data-v-bf93d407><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>type</strong></td><td style="text-align:left;" data-v-bf93d407>类型</td><td style="text-align:left;" data-v-bf93d407>&#39;ARow&#39;</td><td style="text-align:center;" data-v-bf93d407>&#39;ARow&#39;</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>grid</strong></td><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>ARow</strong> 所属各组件 布局大小 (24 栅格)</td><td style="text-align:left;" data-v-bf93d407>SFormGrid</td><td style="text-align:center;" data-v-bf93d407>-</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>readonly</strong></td><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>ARow</strong> 所属各组件 是否只读</td><td style="text-align:left;" data-v-bf93d407>boolean</td><td style="text-align:center;" data-v-bf93d407>false</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>disabled</strong></td><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>ARow</strong> 所属下各组件 是否禁用</td><td style="text-align:left;" data-v-bf93d407>boolean</td><td style="text-align:center;" data-v-bf93d407>false</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>render</strong></td><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>ARow</strong> 所属下各组件 是否渲染</td><td style="text-align:left;" data-v-bf93d407>boolean</td><td style="text-align:center;" data-v-bf93d407>true</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>show</strong></td><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>ARow</strong> 所属下各组件 是否显示</td><td style="text-align:left;" data-v-bf93d407>boolean</td><td style="text-align:center;" data-v-bf93d407>true</td></tr></tbody></table><h3 id="slots" tabindex="-1" data-v-bf93d407>Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;" data-v-bf93d407>​</a></h3><table tabindex="0" data-v-bf93d407><thead data-v-bf93d407><tr data-v-bf93d407><th style="text-align:left;" data-v-bf93d407>插槽名</th><th style="text-align:left;" data-v-bf93d407>插槽说明</th><th style="text-align:left;" data-v-bf93d407>插槽参数</th></tr></thead><tbody data-v-bf93d407><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>before</strong></td><td style="text-align:left;" data-v-bf93d407>定义 <strong data-v-bf93d407>SForm</strong> 表单之前内容</td><td style="text-align:left;" data-v-bf93d407></td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>after</strong></td><td style="text-align:left;" data-v-bf93d407>定义 <strong data-v-bf93d407>SForm</strong> 表单之后内容</td><td style="text-align:left;" data-v-bf93d407></td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>s-header-*</strong></td><td style="text-align:left;" data-v-bf93d407>定义 <strong data-v-bf93d407>SForm</strong> 分组内容</td><td style="text-align:left;" data-v-bf93d407>className, group, disabled, readonly</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>s-component-*</strong></td><td style="text-align:left;" data-v-bf93d407>定义 <strong data-v-bf93d407>SForm</strong> 某组件内容</td><td style="text-align:left;" data-v-bf93d407>col, row, group, attrs, slots, disabled, readonly, source, field</td></tr></tbody></table><h3 id="expose" tabindex="-1" data-v-bf93d407>Expose <a class="header-anchor" href="#expose" aria-label="Permalink to &quot;Expose&quot;" data-v-bf93d407>​</a></h3><table tabindex="0" data-v-bf93d407><thead data-v-bf93d407><tr data-v-bf93d407><th style="text-align:left;" data-v-bf93d407>属性/方法名</th><th style="text-align:left;" data-v-bf93d407>说明描述</th><th style="text-align:left;" data-v-bf93d407>类型</th></tr></thead><tbody data-v-bf93d407><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>resetFields</strong></td><td style="text-align:left;" data-v-bf93d407>对整个表单进行重置，将所有字段值重置为初始值并移除校验结果</td><td style="text-align:left;" data-v-bf93d407>(name?: NamePath) =&gt; any</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>clearValidate</strong></td><td style="text-align:left;" data-v-bf93d407>移除表单项的校验结果。传入待移除的表单项的 name 属性或者 name 组成的数组</td><td style="text-align:left;" data-v-bf93d407>(name?: NamePath) =&gt; any</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>getFieldsValue</strong></td><td style="text-align:left;" data-v-bf93d407>获取表单数据，不建议使用。更推荐 <strong data-v-bf93d407>v-model</strong>，直接通过 <strong data-v-bf93d407>model.value</strong> 获取</td><td style="text-align:left;" data-v-bf93d407>(nameList?: InternalNamePath[] | true) =&gt; any</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>scrollToField</strong></td><td style="text-align:left;" data-v-bf93d407>滚动到对应字段位置</td><td style="text-align:left;" data-v-bf93d407>(name: NamePath, options?: any) =&gt; any</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>validateFields</strong></td><td style="text-align:left;" data-v-bf93d407>触发表单验证</td><td style="text-align:left;" data-v-bf93d407>(nameList?: NamePath[] | string, options?: ValidateOptions) =&gt; any</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>validate</strong></td><td style="text-align:left;" data-v-bf93d407>触发表单验证</td><td style="text-align:left;" data-v-bf93d407>(nameList?: NamePath[] | string, options?: ValidateOptions) =&gt; any</td></tr></tbody></table><h3 id="definer" tabindex="-1" data-v-bf93d407>Definer <a class="header-anchor" href="#definer" aria-label="Permalink to &quot;Definer&quot;" data-v-bf93d407>​</a></h3><table tabindex="0" data-v-bf93d407><thead data-v-bf93d407><tr data-v-bf93d407><th style="text-align:left;" data-v-bf93d407>定义</th><th style="text-align:left;" data-v-bf93d407>说明</th></tr></thead><tbody data-v-bf93d407><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>formValidator</strong></td><td style="text-align:left;" data-v-bf93d407>预设了表单某组件校验规则，例 <strong data-v-bf93d407>password</strong> 规则。 详见 <strong data-v-bf93d407><a href="#validator" data-v-bf93d407>Validator</a></strong></td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>formGridDefiner</strong></td><td style="text-align:left;" data-v-bf93d407>定义 <strong data-v-bf93d407>Props.grid</strong> 时的 TypeScript 提示和校验</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>formRulesDefiner</strong></td><td style="text-align:left;" data-v-bf93d407>定义 <strong data-v-bf93d407>Props.rules</strong> 时的 TypeScript 提示和校验</td></tr><tr data-v-bf93d407><td style="text-align:left;" data-v-bf93d407><strong data-v-bf93d407>formGroupsDefiner</strong></td><td style="text-align:left;" data-v-bf93d407>定义 <strong data-v-bf93d407>Props.groups</strong> 时的 TypeScript 提示和校验</td></tr></tbody></table><h3 id="validator" tabindex="-1" data-v-bf93d407>Validator <a class="header-anchor" href="#validator" aria-label="Permalink to &quot;Validator&quot;" data-v-bf93d407>​</a></h3><p data-v-bf93d407>目前只预设了 密码(password) 和 数字(number) 校验规则。 当然你也可以自定义校验规则 =&gt; <a href="/docs/vue3.x/redirect.html?\${domain}.com/antd-templater/library-3.x/blob/main/src/core/S-Form/form.helper.ts" data-v-bf93d407>详情</a></p><div class="vp-code-group vp-adaptive-theme" data-v-bf93d407><div class="tabs" data-v-bf93d407><input type="radio" name="group-lH5tF" id="tab-BADNw4U" checked data-v-bf93d407><label data-title="范例 - 校验密码" for="tab-BADNw4U" data-v-bf93d407>范例 - 校验密码</label><input type="radio" name="group-lH5tF" id="tab-st-hHk4" data-v-bf93d407><label data-title="范例 - 校验数字" for="tab-st-hHk4" data-v-bf93d407>范例 - 校验数字</label></div><div class="blocks" data-v-bf93d407><div class="language-typescript vp-adaptive-theme active" data-v-bf93d407><button title="Copy Code" class="copy" data-v-bf93d407></button><span class="lang" data-v-bf93d407>typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-bf93d407><code data-v-bf93d407><span class="line" data-v-bf93d407><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-bf93d407>const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-bf93d407> rules</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-bf93d407> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-bf93d407> formRulesDefiner</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-bf93d407>({</span></span>
<span class="line" data-v-bf93d407><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-bf93d407>  password: formValidator.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-bf93d407>password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-bf93d407>({</span></span>
<span class="line" data-v-bf93d407><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-bf93d407>    message: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-bf93d407>&quot;请输入用户密码&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-bf93d407>,</span></span>
<span class="line" data-v-bf93d407><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-bf93d407>    validator: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-bf93d407>&quot;用户密码过短&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-bf93d407>,</span></span>
<span class="line" data-v-bf93d407><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-bf93d407>    pattern:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-bf93d407> /</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-bf93d407>.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-bf93d407>{8,}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-bf93d407>/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-bf93d407>,</span></span>
<span class="line" data-v-bf93d407><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-bf93d407>    required: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-bf93d407>true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-bf93d407>,</span></span>
<span class="line" data-v-bf93d407><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-bf93d407>  }),</span></span>
<span class="line" data-v-bf93d407><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-bf93d407>});</span></span></code></pre></div><div class="language-typescript vp-adaptive-theme" data-v-bf93d407><button title="Copy Code" class="copy" data-v-bf93d407></button><span class="lang" data-v-bf93d407>typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-bf93d407><code data-v-bf93d407><span class="line" data-v-bf93d407><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-bf93d407>const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-bf93d407> rules</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-bf93d407> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-bf93d407> formRulesDefiner</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-bf93d407>({</span></span>
<span class="line" data-v-bf93d407><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-bf93d407>  number: formValidator.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-bf93d407>number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-bf93d407>({</span></span>
<span class="line" data-v-bf93d407><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-bf93d407>    message: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-bf93d407>&quot;请输入数字&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-bf93d407>,</span></span>
<span class="line" data-v-bf93d407><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-bf93d407>    validator: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-bf93d407>&quot;请输入正确的数字&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-bf93d407>,</span></span>
<span class="line" data-v-bf93d407><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-bf93d407>    required: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-bf93d407>true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-bf93d407>,</span></span>
<span class="line" data-v-bf93d407><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-bf93d407>  }),</span></span>
<span class="line" data-v-bf93d407><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-bf93d407>});</span></span></code></pre></div></div></div>`,19))]))}}),V=g(P,[["__scopeId","data-v-bf93d407"]]);export{N as __pageData,V as default};