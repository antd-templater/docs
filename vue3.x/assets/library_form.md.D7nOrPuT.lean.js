import{_ as s}from"./chunks/Base.md_vue_type_script_setup_true_lang.Bn5lVIh7.js";import{_ as n}from"./chunks/Group.md_vue_type_script_setup_true_lang.C0b85Jey.js";import{_ as f}from"./chunks/Check.md_vue_type_script_setup_true_lang.BjgkV3YP.js";import{_ as r}from"./chunks/GroupSlot.md_vue_type_script_setup_true_lang.-4lqEZHs.js";import{_ as i}from"./chunks/ComponentSlot.md_vue_type_script_setup_true_lang.C2UjfC1D.js";import{d as c,V as o,W as v,as as l,X as t,k as e,u as d,_ as g}from"./chunks/framework.dgqL06lB.js";import"./chunks/theme.BR6Pba3T.js";const y={"code-runner":"",style:{height:"398px",overflow:"hidden"}},h={style:{padding:"1px"}},p={"code-runner":"",style:{height:"1315px",overflow:"hidden"}},x={style:{padding:"1px"}},k={"code-runner":"",style:{height:"603px",overflow:"hidden"}},m={style:{padding:"1px"}},b={"code-runner":"",style:{height:"531px",overflow:"hidden"}},u={style:{padding:"1px"}},E={"code-runner":"",style:{height:"607px",overflow:"hidden"}},F={style:{padding:"1px"}},V=JSON.parse('{"title":"表单组件 - SForm","description":"","frontmatter":{},"headers":[],"relativePath":"library/form.md","filePath":"library/form.md","lastUpdated":1720658174000}'),A={name:"library/form.md"},_=c({...A,setup(P){return(S,a)=>(o(),v("div",null,[a[5]||(a[5]=l('<h1 id="表单组件-sform" tabindex="-1" data-v-c41441f5>表单组件 - SForm <a class="header-anchor" href="#表单组件-sform" aria-label="Permalink to &quot;表单组件 - SForm&quot;" data-v-c41441f5>​</a></h1><p data-v-c41441f5>通过 Groups 配置渲染表单内容，当然也支持卡槽自定义组件。 (目前 Groups 已支持的表单组件如下)</p><p data-v-c41441f5>ARate、<br data-v-c41441f5> ASlider、<br data-v-c41441f5> ASwitch、<br data-v-c41441f5> ASelect、ATreeSelect、<br data-v-c41441f5> ACascader、AAutoComplete、<br data-v-c41441f5> ARadioGroup、ACheckboxGroup、<br data-v-c41441f5> ADatePicker、AYearPicker、AMonthPicker、<br data-v-c41441f5> AQuarterPicker、AWeekPicker、ATimePicker、ARangePicker、<br data-v-c41441f5> AInput、AInputSearch、AInputNumber、AInputPassword、AInputTextarea</p><h2 id="演示" tabindex="-1" data-v-c41441f5>演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;" data-v-c41441f5>​</a></h2>',4)),t("div",y,[a[0]||(a[0]=t("div",{"code-runner-title":""},[t("h3",{id:"基本用法"},"基本用法")],-1)),t("div",h,[e(d(s))])]),t("div",p,[a[1]||(a[1]=t("div",{"code-runner-title":""},[t("h3",{id:"表单分组"},"表单分组")],-1)),t("div",x,[e(d(n))])]),t("div",k,[a[2]||(a[2]=t("div",{"code-runner-title":""},[t("h3",{id:"表单校验"},"表单校验")],-1)),t("div",m,[e(d(f))])]),t("div",b,[a[3]||(a[3]=t("div",{"code-runner-title":""},[t("h3",{id:"自定义分组"},"自定义分组")],-1)),t("div",u,[e(d(r))])]),t("div",E,[a[4]||(a[4]=t("div",{"code-runner-title":""},[t("h3",{id:"自定义组件"},"自定义组件")],-1)),t("div",F,[e(d(i))])]),a[6]||(a[6]=l(`<h2 id="api" tabindex="-1" data-v-c41441f5>API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;" data-v-c41441f5>​</a></h2><h3 id="props" tabindex="-1" data-v-c41441f5>Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;" data-v-c41441f5>​</a></h3><h4 id="sform-props" tabindex="-1" data-v-c41441f5>SForm Props <a class="header-anchor" href="#sform-props" aria-label="Permalink to &quot;SForm Props&quot;" data-v-c41441f5>​</a></h4><table tabindex="0" data-v-c41441f5><thead data-v-c41441f5><tr data-v-c41441f5><th style="text-align:left;" data-v-c41441f5>参数</th><th style="text-align:left;" data-v-c41441f5>说明</th><th style="text-align:left;" data-v-c41441f5>类型</th><th style="text-align:center;" data-v-c41441f5>默认值</th></tr></thead><tbody data-v-c41441f5><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>rules</strong></td><td style="text-align:left;" data-v-c41441f5>表单各组件验证规则，可以被组件的 <strong data-v-c41441f5>rlues</strong> 覆盖其定义</td><td style="text-align:left;" data-v-c41441f5>object</td><td style="text-align:center;" data-v-c41441f5>-</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>grid</strong></td><td style="text-align:left;" data-v-c41441f5>表单各组件的布局，可以在 <strong data-v-c41441f5>props.groups</strong> 里重新定义</td><td style="text-align:left;" data-v-c41441f5>SFormGrid</td><td style="text-align:center;" data-v-c41441f5>-</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>border</strong></td><td style="text-align:left;" data-v-c41441f5>是否设置 <code data-v-c41441f5>SFormGroupHeader</code> 的 bottom 边框</td><td style="text-align:left;" data-v-c41441f5>string | boolean</td><td style="text-align:center;" data-v-c41441f5>-</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>groups</strong></td><td style="text-align:left;" data-v-c41441f5>表单各组件配置选项, 有 <strong data-v-c41441f5><a href="#sform-component" data-v-c41441f5>[Component]</a></strong>、 <strong data-v-c41441f5><a href="#sform-agroup" data-v-c41441f5>AGroup</a></strong>、 <strong data-v-c41441f5><a href="#sform-arow" data-v-c41441f5>ARow</a></strong></td><td style="text-align:left;" data-v-c41441f5>Array&lt;object&gt;</td><td style="text-align:center;" data-v-c41441f5>[]</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>model (v-model)</strong></td><td style="text-align:left;" data-v-c41441f5>表单表单数据对象</td><td style="text-align:left;" data-v-c41441f5>object</td><td style="text-align:center;" data-v-c41441f5>-</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>disabled</strong></td><td style="text-align:left;" data-v-c41441f5>是否将表单设置禁用</td><td style="text-align:left;" data-v-c41441f5>boolean</td><td style="text-align:center;" data-v-c41441f5>false</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>readonly</strong></td><td style="text-align:left;" data-v-c41441f5>是否将表单设置只读 (本质还是禁用，只是消除了禁用样式影响)</td><td style="text-align:left;" data-v-c41441f5>boolean</td><td style="text-align:center;" data-v-c41441f5>false</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>spinning</strong></td><td style="text-align:left;" data-v-c41441f5>是否显示表单 loading</td><td style="text-align:left;" data-v-c41441f5>boolean</td><td style="text-align:center;" data-v-c41441f5>false</td></tr></tbody></table><h4 id="sform-component" tabindex="-1" data-v-c41441f5>SForm [Component] <a class="header-anchor" href="#sform-component" aria-label="Permalink to &quot;SForm [Component]&quot;" data-v-c41441f5>​</a></h4><table tabindex="0" data-v-c41441f5><thead data-v-c41441f5><tr data-v-c41441f5><th style="text-align:left;" data-v-c41441f5>参数</th><th style="text-align:left;" data-v-c41441f5>说明</th><th style="text-align:left;" data-v-c41441f5>类型</th><th style="text-align:center;" data-v-c41441f5>默认值</th></tr></thead><tbody data-v-c41441f5><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>type</strong></td><td style="text-align:left;" data-v-c41441f5>表单组件 类型，例：<strong data-v-c41441f5>AInput</strong>、<strong data-v-c41441f5>APassword</strong></td><td style="text-align:left;" data-v-c41441f5>SFormType</td><td style="text-align:center;" data-v-c41441f5>-</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>slot</strong></td><td style="text-align:left;" data-v-c41441f5>表单组件 自定义，例如 <code data-v-c41441f5>slot=&#39;input&#39;</code>, 在 <code data-v-c41441f5>SForm</code> 中 <strong data-v-c41441f5>&lt;template #s-component-input&gt;</strong> 自定义</td><td style="text-align:left;" data-v-c41441f5>string</td><td style="text-align:center;" data-v-c41441f5>-</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>label</strong></td><td style="text-align:left;" data-v-c41441f5>表单组件 <strong data-v-c41441f5>label</strong></td><td style="text-align:left;" data-v-c41441f5>string</td><td style="text-align:center;" data-v-c41441f5>-</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>field</strong></td><td style="text-align:left;" data-v-c41441f5>表单组件 绑定的字段</td><td style="text-align:left;" data-v-c41441f5>string | string[]</td><td style="text-align:center;" data-v-c41441f5>-</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>grid</strong></td><td style="text-align:left;" data-v-c41441f5>表单组件 布局大小 (24 栅格)</td><td style="text-align:left;" data-v-c41441f5>SFormGrid</td><td style="text-align:center;" data-v-c41441f5>-</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>layer</strong></td><td style="text-align:left;" data-v-c41441f5>表单组件 所应用的 <strong data-v-c41441f5>FormItem</strong> 的 <strong data-v-c41441f5>props</strong></td><td style="text-align:left;" data-v-c41441f5>object</td><td style="text-align:center;" data-v-c41441f5>{}</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>rules</strong></td><td style="text-align:left;" data-v-c41441f5>表单组件 验证规则, 可覆盖 <strong data-v-c41441f5>props.rules</strong></td><td style="text-align:left;" data-v-c41441f5>object</td><td style="text-align:center;" data-v-c41441f5>-</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>props</strong></td><td style="text-align:left;" data-v-c41441f5>表单组件 <strong data-v-c41441f5>props</strong> 定义</td><td style="text-align:left;" data-v-c41441f5>object</td><td style="text-align:center;" data-v-c41441f5>{}</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>slots</strong></td><td style="text-align:left;" data-v-c41441f5>表单组件 <strong data-v-c41441f5>slots</strong> 定义，例. 在 <strong data-v-c41441f5>AInputSearch</strong> 中定义 <strong data-v-c41441f5>enterButton</strong> 卡槽</td><td style="text-align:left;" data-v-c41441f5>object</td><td style="text-align:center;" data-v-c41441f5>{}</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>default</strong></td><td style="text-align:left;" data-v-c41441f5>表单组件 数据为空时的默认值 (<strong data-v-c41441f5>input</strong> -&gt; 传输给表单, <strong data-v-c41441f5>output</strong> -&gt; 从表单获取)</td><td style="text-align:left;" data-v-c41441f5>object</td><td style="text-align:center;" data-v-c41441f5>-</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>transfer</strong></td><td style="text-align:left;" data-v-c41441f5>表单组件 数据预处理 (<strong data-v-c41441f5>input</strong> -&gt; 传输给表单, <strong data-v-c41441f5>output</strong> -&gt; 从表单获取)</td><td style="text-align:left;" data-v-c41441f5>object</td><td style="text-align:center;" data-v-c41441f5>-</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>readonly</strong></td><td style="text-align:left;" data-v-c41441f5>表单组件 是否只读</td><td style="text-align:left;" data-v-c41441f5>boolean</td><td style="text-align:center;" data-v-c41441f5>false</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>disabled</strong></td><td style="text-align:left;" data-v-c41441f5>表单组件 是否禁用</td><td style="text-align:left;" data-v-c41441f5>boolean</td><td style="text-align:center;" data-v-c41441f5>false</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>render</strong></td><td style="text-align:left;" data-v-c41441f5>表单组件 是否渲染</td><td style="text-align:left;" data-v-c41441f5>boolean</td><td style="text-align:center;" data-v-c41441f5>true</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>show</strong></td><td style="text-align:left;" data-v-c41441f5>表单组件 是否显示</td><td style="text-align:left;" data-v-c41441f5>boolean</td><td style="text-align:center;" data-v-c41441f5>true</td></tr></tbody></table><h4 id="sform-agroup" tabindex="-1" data-v-c41441f5>SForm AGroup <a class="header-anchor" href="#sform-agroup" aria-label="Permalink to &quot;SForm AGroup&quot;" data-v-c41441f5>​</a></h4><table tabindex="0" data-v-c41441f5><thead data-v-c41441f5><tr data-v-c41441f5><th style="text-align:left;" data-v-c41441f5>参数</th><th style="text-align:left;" data-v-c41441f5>说明</th><th style="text-align:left;" data-v-c41441f5>类型</th><th style="text-align:center;" data-v-c41441f5>默认值</th></tr></thead><tbody data-v-c41441f5><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>type</strong></td><td style="text-align:left;" data-v-c41441f5>类型</td><td style="text-align:left;" data-v-c41441f5>&#39;AGroup&#39;</td><td style="text-align:center;" data-v-c41441f5>&#39;AGroup&#39;</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>slot</strong></td><td style="text-align:left;" data-v-c41441f5>表单分组 自定义，例如 <code data-v-c41441f5>slot=&#39;title&#39;</code>, 在 <code data-v-c41441f5>SForm</code> 中 <strong data-v-c41441f5>&lt;template #s-header-title&gt;</strong> 自定义</td><td style="text-align:left;" data-v-c41441f5>string</td><td style="text-align:center;" data-v-c41441f5>-</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>label</strong></td><td style="text-align:left;" data-v-c41441f5>表单分组 标题</td><td style="text-align:left;" data-v-c41441f5>string</td><td style="text-align:center;" data-v-c41441f5>-</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>border</strong></td><td style="text-align:left;" data-v-c41441f5>设置表单分组 <code data-v-c41441f5>GroupHeader</code> 的 bottom 边框</td><td style="text-align:left;" data-v-c41441f5>string | boolean</td><td style="text-align:center;" data-v-c41441f5>{}</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>grid</strong></td><td style="text-align:left;" data-v-c41441f5>表单分组下 所属组件 布局大小 (24 栅格)</td><td style="text-align:left;" data-v-c41441f5>SFormGrid</td><td style="text-align:center;" data-v-c41441f5>-</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>readonly</strong></td><td style="text-align:left;" data-v-c41441f5>表单分组下 所属组件 是否只读</td><td style="text-align:left;" data-v-c41441f5>boolean</td><td style="text-align:center;" data-v-c41441f5>false</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>disabled</strong></td><td style="text-align:left;" data-v-c41441f5>表单分组下 所属组件 是否禁用</td><td style="text-align:left;" data-v-c41441f5>boolean</td><td style="text-align:center;" data-v-c41441f5>false</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>render</strong></td><td style="text-align:left;" data-v-c41441f5>表单分组下 所属组件 是否渲染</td><td style="text-align:left;" data-v-c41441f5>boolean</td><td style="text-align:center;" data-v-c41441f5>true</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>show</strong></td><td style="text-align:left;" data-v-c41441f5>表单分组下 所属组件 是否显示</td><td style="text-align:left;" data-v-c41441f5>boolean</td><td style="text-align:center;" data-v-c41441f5>true</td></tr></tbody></table><h4 id="sform-arow" tabindex="-1" data-v-c41441f5>SForm ARow <a class="header-anchor" href="#sform-arow" aria-label="Permalink to &quot;SForm ARow&quot;" data-v-c41441f5>​</a></h4><table tabindex="0" data-v-c41441f5><thead data-v-c41441f5><tr data-v-c41441f5><th style="text-align:left;" data-v-c41441f5>参数</th><th style="text-align:left;" data-v-c41441f5>说明</th><th style="text-align:left;" data-v-c41441f5>类型</th><th style="text-align:center;" data-v-c41441f5>默认值</th></tr></thead><tbody data-v-c41441f5><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>type</strong></td><td style="text-align:left;" data-v-c41441f5>类型</td><td style="text-align:left;" data-v-c41441f5>&#39;ARow&#39;</td><td style="text-align:center;" data-v-c41441f5>&#39;ARow&#39;</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>grid</strong></td><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>ARow</strong> 所属各组件 布局大小 (24 栅格)</td><td style="text-align:left;" data-v-c41441f5>SFormGrid</td><td style="text-align:center;" data-v-c41441f5>-</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>readonly</strong></td><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>ARow</strong> 所属各组件 是否只读</td><td style="text-align:left;" data-v-c41441f5>boolean</td><td style="text-align:center;" data-v-c41441f5>false</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>disabled</strong></td><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>ARow</strong> 所属下各组件 是否禁用</td><td style="text-align:left;" data-v-c41441f5>boolean</td><td style="text-align:center;" data-v-c41441f5>false</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>render</strong></td><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>ARow</strong> 所属下各组件 是否渲染</td><td style="text-align:left;" data-v-c41441f5>boolean</td><td style="text-align:center;" data-v-c41441f5>true</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>show</strong></td><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>ARow</strong> 所属下各组件 是否显示</td><td style="text-align:left;" data-v-c41441f5>boolean</td><td style="text-align:center;" data-v-c41441f5>true</td></tr></tbody></table><h3 id="slots" tabindex="-1" data-v-c41441f5>Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;" data-v-c41441f5>​</a></h3><table tabindex="0" data-v-c41441f5><thead data-v-c41441f5><tr data-v-c41441f5><th style="text-align:left;" data-v-c41441f5>插槽名</th><th style="text-align:left;" data-v-c41441f5>插槽说明</th><th style="text-align:left;" data-v-c41441f5>插槽参数</th></tr></thead><tbody data-v-c41441f5><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>before</strong></td><td style="text-align:left;" data-v-c41441f5>定义 <strong data-v-c41441f5>SForm</strong> 表单之前内容</td><td style="text-align:left;" data-v-c41441f5></td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>after</strong></td><td style="text-align:left;" data-v-c41441f5>定义 <strong data-v-c41441f5>SForm</strong> 表单之后内容</td><td style="text-align:left;" data-v-c41441f5></td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>s-header-*</strong></td><td style="text-align:left;" data-v-c41441f5>定义 <strong data-v-c41441f5>SForm</strong> 分组内容</td><td style="text-align:left;" data-v-c41441f5>className, group, disabled, readonly</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>s-component-*</strong></td><td style="text-align:left;" data-v-c41441f5>定义 <strong data-v-c41441f5>SForm</strong> 某组件内容</td><td style="text-align:left;" data-v-c41441f5>col, row, group, attrs, slots, disabled, readonly, source, field</td></tr></tbody></table><h3 id="expose" tabindex="-1" data-v-c41441f5>Expose <a class="header-anchor" href="#expose" aria-label="Permalink to &quot;Expose&quot;" data-v-c41441f5>​</a></h3><table tabindex="0" data-v-c41441f5><thead data-v-c41441f5><tr data-v-c41441f5><th style="text-align:left;" data-v-c41441f5>属性/方法名</th><th style="text-align:left;" data-v-c41441f5>说明描述</th><th style="text-align:left;" data-v-c41441f5>类型</th></tr></thead><tbody data-v-c41441f5><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>resetFields</strong></td><td style="text-align:left;" data-v-c41441f5>对整个表单进行重置，将所有字段值重置为初始值并移除校验结果</td><td style="text-align:left;" data-v-c41441f5>(name?: NamePath) =&gt; any</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>clearValidate</strong></td><td style="text-align:left;" data-v-c41441f5>移除表单项的校验结果。传入待移除的表单项的 name 属性或者 name 组成的数组</td><td style="text-align:left;" data-v-c41441f5>(name?: NamePath) =&gt; any</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>getFieldsValue</strong></td><td style="text-align:left;" data-v-c41441f5>获取表单数据，不建议使用。更推荐 <strong data-v-c41441f5>v-model</strong>，直接通过 <strong data-v-c41441f5>model.value</strong> 获取</td><td style="text-align:left;" data-v-c41441f5>(nameList?: InternalNamePath[] | true) =&gt; any</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>scrollToField</strong></td><td style="text-align:left;" data-v-c41441f5>滚动到对应字段位置</td><td style="text-align:left;" data-v-c41441f5>(name: NamePath, options?: any) =&gt; any</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>validateFields</strong></td><td style="text-align:left;" data-v-c41441f5>触发表单验证</td><td style="text-align:left;" data-v-c41441f5>(nameList?: NamePath[] | string, options?: ValidateOptions) =&gt; any</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>validate</strong></td><td style="text-align:left;" data-v-c41441f5>触发表单验证</td><td style="text-align:left;" data-v-c41441f5>(nameList?: NamePath[] | string, options?: ValidateOptions) =&gt; any</td></tr></tbody></table><h3 id="definer" tabindex="-1" data-v-c41441f5>Definer <a class="header-anchor" href="#definer" aria-label="Permalink to &quot;Definer&quot;" data-v-c41441f5>​</a></h3><table tabindex="0" data-v-c41441f5><thead data-v-c41441f5><tr data-v-c41441f5><th style="text-align:left;" data-v-c41441f5>定义</th><th style="text-align:left;" data-v-c41441f5>说明</th></tr></thead><tbody data-v-c41441f5><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>formValidator</strong></td><td style="text-align:left;" data-v-c41441f5>预设了表单某组件校验规则，例 <strong data-v-c41441f5>password</strong> 规则。 详见 <strong data-v-c41441f5><a href="#validator" data-v-c41441f5>Validator</a></strong></td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>formGridDefiner</strong></td><td style="text-align:left;" data-v-c41441f5>定义 <strong data-v-c41441f5>Props.grid</strong> 时的 TypeScript 提示和校验</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>formRulesDefiner</strong></td><td style="text-align:left;" data-v-c41441f5>定义 <strong data-v-c41441f5>Props.rules</strong> 时的 TypeScript 提示和校验</td></tr><tr data-v-c41441f5><td style="text-align:left;" data-v-c41441f5><strong data-v-c41441f5>formGroupsDefiner</strong></td><td style="text-align:left;" data-v-c41441f5>定义 <strong data-v-c41441f5>Props.groups</strong> 时的 TypeScript 提示和校验</td></tr></tbody></table><h3 id="validator" tabindex="-1" data-v-c41441f5>Validator <a class="header-anchor" href="#validator" aria-label="Permalink to &quot;Validator&quot;" data-v-c41441f5>​</a></h3><p data-v-c41441f5>目前只预设了 密码(password) 和 数字(number) 校验规则。 当然你也可以自定义校验规则 =&gt; <a href="/docs/vue3.x/redirect.html?\${domain}.com/antd-templater/library-3.x/blob/main/src/core/S-Form/form.helper.ts" data-v-c41441f5>详情</a></p><div class="vp-code-group vp-adaptive-theme" data-v-c41441f5><div class="tabs" data-v-c41441f5><input type="radio" name="group-l8w6i" id="tab-990Bk_9" checked data-v-c41441f5><label data-title="范例 - 校验密码" for="tab-990Bk_9" data-v-c41441f5>范例 - 校验密码</label><input type="radio" name="group-l8w6i" id="tab-k8QituU" data-v-c41441f5><label data-title="范例 - 校验数字" for="tab-k8QituU" data-v-c41441f5>范例 - 校验数字</label></div><div class="blocks" data-v-c41441f5><div class="language-typescript vp-adaptive-theme active" data-v-c41441f5><button title="Copy Code" class="copy" data-v-c41441f5></button><span class="lang" data-v-c41441f5>typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-c41441f5><code data-v-c41441f5><span class="line" data-v-c41441f5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c41441f5>const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c41441f5> rules</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c41441f5> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c41441f5> formRulesDefiner</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c41441f5>({</span></span>
<span class="line" data-v-c41441f5><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c41441f5>  password: formValidator.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c41441f5>password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c41441f5>({</span></span>
<span class="line" data-v-c41441f5><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c41441f5>    message: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c41441f5>&quot;请输入用户密码&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c41441f5>,</span></span>
<span class="line" data-v-c41441f5><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c41441f5>    validator: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c41441f5>&quot;用户密码过短&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c41441f5>,</span></span>
<span class="line" data-v-c41441f5><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c41441f5>    pattern:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c41441f5> /</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c41441f5>.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c41441f5>{8,}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c41441f5>/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c41441f5>,</span></span>
<span class="line" data-v-c41441f5><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c41441f5>    required: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c41441f5>true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c41441f5>,</span></span>
<span class="line" data-v-c41441f5><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c41441f5>  }),</span></span>
<span class="line" data-v-c41441f5><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c41441f5>});</span></span></code></pre></div><div class="language-typescript vp-adaptive-theme" data-v-c41441f5><button title="Copy Code" class="copy" data-v-c41441f5></button><span class="lang" data-v-c41441f5>typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-c41441f5><code data-v-c41441f5><span class="line" data-v-c41441f5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c41441f5>const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c41441f5> rules</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c41441f5> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c41441f5> formRulesDefiner</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c41441f5>({</span></span>
<span class="line" data-v-c41441f5><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c41441f5>  number: formValidator.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c41441f5>number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c41441f5>({</span></span>
<span class="line" data-v-c41441f5><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c41441f5>    message: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c41441f5>&quot;请输入数字&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c41441f5>,</span></span>
<span class="line" data-v-c41441f5><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c41441f5>    validator: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c41441f5>&quot;请输入正确的数字&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c41441f5>,</span></span>
<span class="line" data-v-c41441f5><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c41441f5>    required: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c41441f5>true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c41441f5>,</span></span>
<span class="line" data-v-c41441f5><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c41441f5>  }),</span></span>
<span class="line" data-v-c41441f5><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c41441f5>});</span></span></code></pre></div></div></div>`,19))]))}}),I=g(_,[["__scopeId","data-v-c41441f5"]]);export{V as __pageData,I as default};
