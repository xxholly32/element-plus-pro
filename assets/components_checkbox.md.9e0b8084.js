import{_ as n,o as h,c as a,a as c,w as l,b as e,d as t,e as s,r as d}from"./app.a617c546.js";const h2=JSON.parse('{"title":"Checkbox","description":"","frontmatter":{"title":"Checkbox","lang":"en-US"},"headers":[{"level":2,"title":"Basic usage","slug":"basic-usage","link":"#basic-usage","children":[]},{"level":2,"title":"Disabled State","slug":"disabled-state","link":"#disabled-state","children":[]},{"level":2,"title":"Checkbox group","slug":"checkbox-group","link":"#checkbox-group","children":[]},{"level":2,"title":"Indeterminate","slug":"indeterminate","link":"#indeterminate","children":[]},{"level":2,"title":"Minimum / Maximum items checked","slug":"minimum-maximum-items-checked","link":"#minimum-maximum-items-checked","children":[]},{"level":2,"title":"Button style","slug":"button-style","link":"#button-style","children":[]},{"level":2,"title":"With borders","slug":"with-borders","link":"#with-borders","children":[]},{"level":2,"title":"Checkbox API","slug":"checkbox-api","link":"#checkbox-api","children":[{"level":3,"title":"Checkbox Attributes","slug":"checkbox-attributes","link":"#checkbox-attributes","children":[]},{"level":3,"title":"Checkbox Events","slug":"checkbox-events","link":"#checkbox-events","children":[]},{"level":3,"title":"Checkbox Slots","slug":"checkbox-slots","link":"#checkbox-slots","children":[]}]},{"level":2,"title":"CheckboxGroup API","slug":"checkboxgroup-api","link":"#checkboxgroup-api","children":[{"level":3,"title":"CheckboxGroup Attributes","slug":"checkboxgroup-attributes","link":"#checkboxgroup-attributes","children":[]},{"level":3,"title":"CheckboxGroup Events","slug":"checkboxgroup-events","link":"#checkboxgroup-events","children":[]},{"level":3,"title":"CheckboxGroup Slots","slug":"checkboxgroup-slots","link":"#checkboxgroup-slots","children":[]}]},{"level":2,"title":"CheckboxButton API","slug":"checkboxbutton-api","link":"#checkboxbutton-api","children":[{"level":3,"title":"CheckboxButton Attributes","slug":"checkboxbutton-attributes","link":"#checkboxbutton-attributes","children":[]},{"level":3,"title":"CheckboxButton Slots","slug":"checkboxbutton-slots","link":"#checkboxbutton-slots","children":[]}]}],"relativePath":"components/checkbox.md","lastUpdated":null}'),r={name:"components/checkbox.md"},b=e("h1",{id:"checkbox",tabindex:"-1"},[t("Checkbox "),e("a",{class:"header-anchor",href:"#checkbox","aria-hidden":"true"},"#")],-1),u=e("p",null,"A group of options for multiple choices.",-1),A=e("h2",{id:"basic-usage",tabindex:"-1"},[t("Basic usage "),e("a",{class:"header-anchor",href:"#basic-usage","aria-hidden":"true"},"#")],-1),k=e("p",null,"Checkbox can be used alone to switch between two states.",-1),C=e("p",null,"checkbox/basic",-1),D=e("h2",{id:"disabled-state",tabindex:"-1"},[t("Disabled State "),e("a",{class:"header-anchor",href:"#disabled-state","aria-hidden":"true"},"#")],-1),p=e("p",null,"Disabled state for checkbox.",-1),x=e("p",null,"checkbox/disabled",-1),m=e("h2",{id:"checkbox-group",tabindex:"-1"},[t("Checkbox group "),e("a",{class:"header-anchor",href:"#checkbox-group","aria-hidden":"true"},"#")],-1),E=e("p",null,"It is used for multiple checkboxes which are bound in one group, and indicates whether one option is selected by checking if it is checked.",-1),g=e("p",null,"checkbox/grouping",-1),v=e("h2",{id:"indeterminate",tabindex:"-1"},[t("Indeterminate "),e("a",{class:"header-anchor",href:"#indeterminate","aria-hidden":"true"},"#")],-1),f=e("p",null,[t("The "),e("code",null,"indeterminate"),t(" property can help you to achieve a 'check all' effect.")],-1),F=e("p",null,"checkbox/intermediate",-1),_=e("h2",{id:"minimum-maximum-items-checked",tabindex:"-1"},[t("Minimum / Maximum items checked "),e("a",{class:"header-anchor",href:"#minimum-maximum-items-checked","aria-hidden":"true"},"#")],-1),y=e("p",null,[t("The "),e("code",null,"min"),t(" and "),e("code",null,"max"),t(" properties can help you to limit the number of checked items.")],-1),B=e("p",null,"checkbox/limitation",-1),z=e("h2",{id:"button-style",tabindex:"-1"},[t("Button style "),e("a",{class:"header-anchor",href:"#button-style","aria-hidden":"true"},"#")],-1),O=e("p",null,"Checkbox with button styles.",-1),S=e("p",null,"checkbox/button-style",-1),w=e("h2",{id:"with-borders",tabindex:"-1"},[t("With borders "),e("a",{class:"header-anchor",href:"#with-borders","aria-hidden":"true"},"#")],-1),G=e("p",null,"checkbox/with-border",-1),I=e("h2",{id:"checkbox-api",tabindex:"-1"},[t("Checkbox API "),e("a",{class:"header-anchor",href:"#checkbox-api","aria-hidden":"true"},"#")],-1),T=e("h3",{id:"checkbox-attributes",tabindex:"-1"},[t("Checkbox Attributes "),e("a",{class:"header-anchor",href:"#checkbox-attributes","aria-hidden":"true"},"#")],-1),j=e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Description"),e("th",null,"Type"),e("th",null,"Default")])],-1),N=e("tr",null,[e("td",null,"model-value / v-model"),e("td",null,"binding value"),e("td",null,"^[string] / ^[number] / ^[boolean]"),e("td",null,"—")],-1),P=e("tr",null,[e("td",null,"label"),e("td",null,[t("value of the Checkbox when used inside a "),e("code",null,"checkbox-group")]),e("td",null,"^[string] / ^[number] / ^[boolean] / ^[object]"),e("td",null,"—")],-1),V=e("tr",null,[e("td",null,"true-label"),e("td",null,"value of the Checkbox if it's checked"),e("td",null,"^[string] / ^[number]"),e("td",null,"—")],-1),L=e("tr",null,[e("td",null,"false-label"),e("td",null,"value of the Checkbox if it's not checked"),e("td",null,"^[string] / ^[number]"),e("td",null,"—")],-1),M=e("tr",null,[e("td",null,"disabled"),e("td",null,"whether the Checkbox is disabled"),e("td",null,"^[boolean]"),e("td",null,"false")],-1),W=e("tr",null,[e("td",null,"border"),e("td",null,"whether to add a border around Checkbox"),e("td",null,"^[boolean]"),e("td",null,"false")],-1),$=e("tr",null,[e("td",null,"size"),e("td",null,"size of the Checkbox"),e("td",null,[t("^[enum]"),e("code",null,"'large' | 'default' | 'small'")]),e("td",null,"—")],-1),U=e("tr",null,[e("td",null,"name"),e("td",null,"native 'name' attribute"),e("td",null,"^[string]"),e("td",null,"—")],-1),R=e("tr",null,[e("td",null,"checked"),e("td",null,"if the Checkbox is checked"),e("td",null,"^[boolean]"),e("td",null,"false")],-1),J=e("tr",null,[e("td",null,"indeterminate"),e("td",null,"Set indeterminate state, only responsible for style control"),e("td",null,"^[boolean]"),e("td",null,"false")],-1),Y=e("tr",null,[e("td",null,"validate-event"),e("td",null,"whether to trigger form validation"),e("td",null,"^[boolean]"),e("td",null,"true")],-1),q=e("tr",null,[e("td",null,"tabindex"),e("td",null,"input tabindex"),e("td",null,"^[string] / ^[number]"),e("td",null,"—")],-1),H=e("tr",null,[e("td",null,"id"),e("td",null,"input id"),e("td",null,"^[string]"),e("td",null,"—")],-1),K=e("td",null,[t("same as "),e("a",{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls",target:"_blank",rel:"noreferrer"},"aria-controls"),t(", takes effect when "),e("code",null,"indeterminate"),t(" is "),e("code",null,"true")],-1),Q=e("td",null,"^[boolean]",-1),X=e("td",null,"—",-1),Z=s('<h3 id="checkbox-events" tabindex="-1">Checkbox Events <a class="header-anchor" href="#checkbox-events" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>change</td><td>triggers when the binding value changes</td><td>^[Function]<code>(value: string | number | boolean) =&gt; void</code></td></tr></tbody></table><h3 id="checkbox-slots" tabindex="-1">Checkbox Slots <a class="header-anchor" href="#checkbox-slots" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>customize default content</td></tr></tbody></table><h2 id="checkboxgroup-api" tabindex="-1">CheckboxGroup API <a class="header-anchor" href="#checkboxgroup-api" aria-hidden="true">#</a></h2><h3 id="checkboxgroup-attributes" tabindex="-1">CheckboxGroup Attributes <a class="header-anchor" href="#checkboxgroup-attributes" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>binding value</td><td>^[object]<code>string[] | number[]</code></td><td>[]</td></tr><tr><td>size</td><td>size of checkbox</td><td>^[enum]<code>&#39;large&#39; | &#39;default&#39; | &#39;small&#39;</code></td><td>—</td></tr><tr><td>disabled</td><td>whether the nesting checkboxes are disabled</td><td>^[boolean]</td><td>false</td></tr><tr><td>min</td><td>minimum number of checkbox checked</td><td>^[number]</td><td>—</td></tr><tr><td>max</td><td>maximum number of checkbox checked</td><td>^[number]</td><td>—</td></tr><tr><td>label</td><td>label for screen reader</td><td>^[string]</td><td>—</td></tr><tr><td>text-color</td><td>font color when button is active</td><td>^[string]</td><td>#ffffff</td></tr><tr><td>fill</td><td>border and background color when button is active</td><td>^[string]</td><td>#409EFF</td></tr><tr><td>tag</td><td>element tag of the checkbox group</td><td>^[string]</td><td>div</td></tr><tr><td>validate-event</td><td>whether to trigger form validation</td><td>^[boolean]</td><td>true</td></tr></tbody></table><h3 id="checkboxgroup-events" tabindex="-1">CheckboxGroup Events <a class="header-anchor" href="#checkboxgroup-events" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>change</td><td>triggers when the binding value changes</td><td>^[Function]<code>(value: string[] | number[]) =&gt; void</code></td></tr></tbody></table><h3 id="checkboxgroup-slots" tabindex="-1">CheckboxGroup Slots <a class="header-anchor" href="#checkboxgroup-slots" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Description</th><th>Subtags</th></tr></thead><tbody><tr><td>default</td><td>customize default content</td><td>Checkbox / Checkbox-button</td></tr></tbody></table><h2 id="checkboxbutton-api" tabindex="-1">CheckboxButton API <a class="header-anchor" href="#checkboxbutton-api" aria-hidden="true">#</a></h2><h3 id="checkboxbutton-attributes" tabindex="-1">CheckboxButton Attributes <a class="header-anchor" href="#checkboxbutton-attributes" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>label</td><td>value of the checkbox when used inside a <code>checkbox-group</code></td><td>^[string] / ^[number] / ^[boolean] / ^[object]</td><td>—</td></tr><tr><td>true-label</td><td>value of the checkbox if it&#39;s checked</td><td>^[string] / ^[number]</td><td>—</td></tr><tr><td>false-label</td><td>value of the checkbox if it&#39;s not checked</td><td>^[string] / ^[number]</td><td>—</td></tr><tr><td>disabled</td><td>whether the checkbox is disabled</td><td>^[boolean]</td><td>false</td></tr><tr><td>name</td><td>native &#39;name&#39; attribute</td><td>^[string]</td><td>—</td></tr><tr><td>checked</td><td>if the checkbox is checked</td><td>^[boolean]</td><td>false</td></tr></tbody></table><h3 id="checkboxbutton-slots" tabindex="-1">CheckboxButton Slots <a class="header-anchor" href="#checkboxbutton-slots" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>customize default content</td></tr></tbody></table>',16);function e2(t2,c2,o2,l2,d2,i2){const o=d("Demo"),i=d("A11yTag");return h(),a("div",null,[b,u,A,k,c(o,{source:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cel-checkbox%20v-model%3D%22checked1%22%20label%3D%22Option%201%22%20size%3D%22large%22%20%2F%3E%0A%20%20%20%20%3Cel-checkbox%20v-model%3D%22checked2%22%20label%3D%22Option%202%22%20size%3D%22large%22%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cel-checkbox%20v-model%3D%22checked3%22%20label%3D%22Option%201%22%20%2F%3E%0A%20%20%20%20%3Cel-checkbox%20v-model%3D%22checked4%22%20label%3D%22Option%202%22%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cel-checkbox%20v-model%3D%22checked5%22%20label%3D%22Option%201%22%20size%3D%22small%22%20%2F%3E%0A%20%20%20%20%3Cel-checkbox%20v-model%3D%22checked6%22%20label%3D%22Option%202%22%20size%3D%22small%22%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cel-checkbox%20v-model%3D%22checked5%22%20label%3D%22Option%201%22%20size%3D%22small%22%20disabled%20%2F%3E%0A%20%20%20%20%3Cel-checkbox%20v-model%3D%22checked6%22%20label%3D%22Option%202%22%20size%3D%22small%22%20disabled%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aconst%20checked1%20%3D%20ref(true)%0Aconst%20checked2%20%3D%20ref(false)%0Aconst%20checked3%20%3D%20ref(false)%0Aconst%20checked4%20%3D%20ref(false)%0Aconst%20checked5%20%3D%20ref(false)%0Aconst%20checked6%20%3D%20ref(false)%0A%3C%2Fscript%3E%0A",path:"checkbox/basic","raw-source":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cel-checkbox%20v-model%3D%22checked1%22%20label%3D%22Option%201%22%20size%3D%22large%22%20%2F%3E%0A%20%20%20%20%3Cel-checkbox%20v-model%3D%22checked2%22%20label%3D%22Option%202%22%20size%3D%22large%22%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cel-checkbox%20v-model%3D%22checked3%22%20label%3D%22Option%201%22%20%2F%3E%0A%20%20%20%20%3Cel-checkbox%20v-model%3D%22checked4%22%20label%3D%22Option%202%22%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cel-checkbox%20v-model%3D%22checked5%22%20label%3D%22Option%201%22%20size%3D%22small%22%20%2F%3E%0A%20%20%20%20%3Cel-checkbox%20v-model%3D%22checked6%22%20label%3D%22Option%202%22%20size%3D%22small%22%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cel-checkbox%20v-model%3D%22checked5%22%20label%3D%22Option%201%22%20size%3D%22small%22%20disabled%20%2F%3E%0A%20%20%20%20%3Cel-checkbox%20v-model%3D%22checked6%22%20label%3D%22Option%202%22%20size%3D%22small%22%20disabled%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aconst%20checked1%20%3D%20ref(true)%0Aconst%20checked2%20%3D%20ref(false)%0Aconst%20checked3%20%3D%20ref(false)%0Aconst%20checked4%20%3D%20ref(false)%0Aconst%20checked5%20%3D%20ref(false)%0Aconst%20checked6%20%3D%20ref(false)%0A%3C%2Fscript%3E%0A",description:"%3Cp%3EDefine%20%3Ccode%3Ev-model%3C%2Fcode%3E(bind%20variable)%20in%20%3Ccode%3Eel-checkbox%3C%2Fcode%3E.%20The%20default%20value%20is%20a%20%3Ccode%3EBoolean%3C%2Fcode%3E%20for%20single%20%3Ccode%3Echeckbox%3C%2Fcode%3E%2C%20and%20it%20becomes%20%3Ccode%3Etrue%3C%2Fcode%3E%20when%20selected.%20Content%20inside%20the%20%3Ccode%3Eel-checkbox%3C%2Fcode%3E%20tag%20will%20become%20the%20description%20following%20the%20button%20of%20the%20checkbox.%3C%2Fp%3E%0A"},{default:l(()=>[C]),_:1}),D,p,c(o,{source:"%3Ctemplate%3E%0A%20%20%3Cel-checkbox%20v-model%3D%22checked1%22%20disabled%3EDisabled%3C%2Fel-checkbox%3E%0A%20%20%3Cel-checkbox%20v-model%3D%22checked2%22%3ENot%20disabled%3C%2Fel-checkbox%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0Aconst%20checked1%20%3D%20ref(false)%0Aconst%20checked2%20%3D%20ref(true)%0A%3C%2Fscript%3E%0A",path:"checkbox/disabled","raw-source":"%3Ctemplate%3E%0A%20%20%3Cel-checkbox%20v-model%3D%22checked1%22%20disabled%3EDisabled%3C%2Fel-checkbox%3E%0A%20%20%3Cel-checkbox%20v-model%3D%22checked2%22%3ENot%20disabled%3C%2Fel-checkbox%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0Aconst%20checked1%20%3D%20ref(false)%0Aconst%20checked2%20%3D%20ref(true)%0A%3C%2Fscript%3E%0A",description:"%3Cp%3ESet%20the%20%3Ccode%3Edisabled%3C%2Fcode%3E%20attribute.%3C%2Fp%3E%0A"},{default:l(()=>[x]),_:1}),m,E,c(o,{source:"%3Ctemplate%3E%0A%20%20%3Cel-checkbox-group%20v-model%3D%22checkList%22%3E%0A%20%20%20%20%3Cel-checkbox%20label%3D%22Option%20A%22%20%2F%3E%0A%20%20%20%20%3Cel-checkbox%20label%3D%22Option%20B%22%20%2F%3E%0A%20%20%20%20%3Cel-checkbox%20label%3D%22Option%20C%22%20%2F%3E%0A%20%20%20%20%3Cel-checkbox%20label%3D%22disabled%22%20disabled%20%2F%3E%0A%20%20%20%20%3Cel-checkbox%20label%3D%22selected%20and%20disabled%22%20disabled%20%2F%3E%0A%20%20%3C%2Fel-checkbox-group%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aconst%20checkList%20%3D%20ref(%5B'selected%20and%20disabled'%2C%20'Option%20A'%5D)%0A%3C%2Fscript%3E%0A",path:"checkbox/grouping","raw-source":"%3Ctemplate%3E%0A%20%20%3Cel-checkbox-group%20v-model%3D%22checkList%22%3E%0A%20%20%20%20%3Cel-checkbox%20label%3D%22Option%20A%22%20%2F%3E%0A%20%20%20%20%3Cel-checkbox%20label%3D%22Option%20B%22%20%2F%3E%0A%20%20%20%20%3Cel-checkbox%20label%3D%22Option%20C%22%20%2F%3E%0A%20%20%20%20%3Cel-checkbox%20label%3D%22disabled%22%20disabled%20%2F%3E%0A%20%20%20%20%3Cel-checkbox%20label%3D%22selected%20and%20disabled%22%20disabled%20%2F%3E%0A%20%20%3C%2Fel-checkbox-group%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aconst%20checkList%20%3D%20ref(%5B'selected%20and%20disabled'%2C%20'Option%20A'%5D)%0A%3C%2Fscript%3E%0A",description:"%3Cp%3E%3Ccode%3Echeckbox-group%3C%2Fcode%3E%20element%20can%20manage%20multiple%20checkboxes%20in%20one%20group%20by%20using%20%3Ccode%3Ev-model%3C%2Fcode%3E%20which%20is%20bound%20as%20an%20%3Ccode%3EArray%3C%2Fcode%3E.%20Inside%20the%20%3Ccode%3Eel-checkbox%3C%2Fcode%3E%20element%2C%20%3Ccode%3Elabel%3C%2Fcode%3E%20is%20the%20value%20of%20the%20checkbox.%20If%20no%20content%20is%20nested%20in%20that%20tag%2C%20%3Ccode%3Elabel%3C%2Fcode%3E%20will%20be%20rendered%20as%20the%20description%20following%20the%20button%20of%20the%20checkbox.%20%3Ccode%3Elabel%3C%2Fcode%3E%20also%20corresponds%20with%20the%20element%20values%20in%20the%20array.%20It%20is%20selected%20if%20the%20specified%20value%20exists%20in%20the%20array%2C%20and%20vice%20versa.%3C%2Fp%3E%0A"},{default:l(()=>[g]),_:1}),v,f,c(o,{source:"%3Ctemplate%3E%0A%20%20%3Cel-checkbox%0A%20%20%20%20v-model%3D%22checkAll%22%0A%20%20%20%20%3Aindeterminate%3D%22isIndeterminate%22%0A%20%20%20%20%40change%3D%22handleCheckAllChange%22%0A%20%20%20%20%3ECheck%20all%3C%2Fel-checkbox%0A%20%20%3E%0A%20%20%3Cel-checkbox-group%0A%20%20%20%20v-model%3D%22checkedCities%22%0A%20%20%20%20%40change%3D%22handleCheckedCitiesChange%22%0A%20%20%3E%0A%20%20%20%20%3Cel-checkbox%20v-for%3D%22city%20in%20cities%22%20%3Akey%3D%22city%22%20%3Alabel%3D%22city%22%3E%7B%7B%0A%20%20%20%20%20%20city%0A%20%20%20%20%7D%7D%3C%2Fel-checkbox%3E%0A%20%20%3C%2Fel-checkbox-group%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aconst%20checkAll%20%3D%20ref(false)%0Aconst%20isIndeterminate%20%3D%20ref(true)%0Aconst%20checkedCities%20%3D%20ref(%5B'Shanghai'%2C%20'Beijing'%5D)%0Aconst%20cities%20%3D%20%5B'Shanghai'%2C%20'Beijing'%2C%20'Guangzhou'%2C%20'Shenzhen'%5D%0A%0Aconst%20handleCheckAllChange%20%3D%20(val%3A%20boolean)%20%3D%3E%20%7B%0A%20%20checkedCities.value%20%3D%20val%20%3F%20cities%20%3A%20%5B%5D%0A%20%20isIndeterminate.value%20%3D%20false%0A%7D%0Aconst%20handleCheckedCitiesChange%20%3D%20(value%3A%20string%5B%5D)%20%3D%3E%20%7B%0A%20%20const%20checkedCount%20%3D%20value.length%0A%20%20checkAll.value%20%3D%20checkedCount%20%3D%3D%3D%20cities.length%0A%20%20isIndeterminate.value%20%3D%20checkedCount%20%3E%200%20%26%26%20checkedCount%20%3C%20cities.length%0A%7D%0A%3C%2Fscript%3E%0A",path:"checkbox/intermediate","raw-source":"%3Ctemplate%3E%0A%20%20%3Cel-checkbox%0A%20%20%20%20v-model%3D%22checkAll%22%0A%20%20%20%20%3Aindeterminate%3D%22isIndeterminate%22%0A%20%20%20%20%40change%3D%22handleCheckAllChange%22%0A%20%20%20%20%3ECheck%20all%3C%2Fel-checkbox%0A%20%20%3E%0A%20%20%3Cel-checkbox-group%0A%20%20%20%20v-model%3D%22checkedCities%22%0A%20%20%20%20%40change%3D%22handleCheckedCitiesChange%22%0A%20%20%3E%0A%20%20%20%20%3Cel-checkbox%20v-for%3D%22city%20in%20cities%22%20%3Akey%3D%22city%22%20%3Alabel%3D%22city%22%3E%7B%7B%0A%20%20%20%20%20%20city%0A%20%20%20%20%7D%7D%3C%2Fel-checkbox%3E%0A%20%20%3C%2Fel-checkbox-group%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aconst%20checkAll%20%3D%20ref(false)%0Aconst%20isIndeterminate%20%3D%20ref(true)%0Aconst%20checkedCities%20%3D%20ref(%5B'Shanghai'%2C%20'Beijing'%5D)%0Aconst%20cities%20%3D%20%5B'Shanghai'%2C%20'Beijing'%2C%20'Guangzhou'%2C%20'Shenzhen'%5D%0A%0Aconst%20handleCheckAllChange%20%3D%20(val%3A%20boolean)%20%3D%3E%20%7B%0A%20%20checkedCities.value%20%3D%20val%20%3F%20cities%20%3A%20%5B%5D%0A%20%20isIndeterminate.value%20%3D%20false%0A%7D%0Aconst%20handleCheckedCitiesChange%20%3D%20(value%3A%20string%5B%5D)%20%3D%3E%20%7B%0A%20%20const%20checkedCount%20%3D%20value.length%0A%20%20checkAll.value%20%3D%20checkedCount%20%3D%3D%3D%20cities.length%0A%20%20isIndeterminate.value%20%3D%20checkedCount%20%3E%200%20%26%26%20checkedCount%20%3C%20cities.length%0A%7D%0A%3C%2Fscript%3E%0A",description:""},{default:l(()=>[F]),_:1}),_,y,c(o,{source:"%3Ctemplate%3E%0A%20%20%3Cel-checkbox-group%20v-model%3D%22checkedCities%22%20%3Amin%3D%221%22%20%3Amax%3D%222%22%3E%0A%20%20%20%20%3Cel-checkbox%20v-for%3D%22city%20in%20cities%22%20%3Akey%3D%22city%22%20%3Alabel%3D%22city%22%3E%7B%7B%0A%20%20%20%20%20%20city%0A%20%20%20%20%7D%7D%3C%2Fel-checkbox%3E%0A%20%20%3C%2Fel-checkbox-group%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aconst%20checkedCities%20%3D%20ref(%5B'Shanghai'%2C%20'Beijing'%5D)%0Aconst%20cities%20%3D%20%5B'Shanghai'%2C%20'Beijing'%2C%20'Guangzhou'%2C%20'Shenzhen'%5D%0A%3C%2Fscript%3E%0A",path:"checkbox/limitation","raw-source":"%3Ctemplate%3E%0A%20%20%3Cel-checkbox-group%20v-model%3D%22checkedCities%22%20%3Amin%3D%221%22%20%3Amax%3D%222%22%3E%0A%20%20%20%20%3Cel-checkbox%20v-for%3D%22city%20in%20cities%22%20%3Akey%3D%22city%22%20%3Alabel%3D%22city%22%3E%7B%7B%0A%20%20%20%20%20%20city%0A%20%20%20%20%7D%7D%3C%2Fel-checkbox%3E%0A%20%20%3C%2Fel-checkbox-group%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aconst%20checkedCities%20%3D%20ref(%5B'Shanghai'%2C%20'Beijing'%5D)%0Aconst%20cities%20%3D%20%5B'Shanghai'%2C%20'Beijing'%2C%20'Guangzhou'%2C%20'Shenzhen'%5D%0A%3C%2Fscript%3E%0A",description:""},{default:l(()=>[B]),_:1}),z,O,c(o,{source:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cel-checkbox-group%20v-model%3D%22checkboxGroup1%22%20size%3D%22large%22%3E%0A%20%20%20%20%20%20%3Cel-checkbox-button%20v-for%3D%22city%20in%20cities%22%20%3Akey%3D%22city%22%20%3Alabel%3D%22city%22%3E%0A%20%20%20%20%20%20%20%20%7B%7B%20city%20%7D%7D%0A%20%20%20%20%20%20%3C%2Fel-checkbox-button%3E%0A%20%20%20%20%3C%2Fel-checkbox-group%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%20class%3D%22demo-button-style%22%3E%0A%20%20%20%20%3Cel-checkbox-group%20v-model%3D%22checkboxGroup2%22%3E%0A%20%20%20%20%20%20%3Cel-checkbox-button%20v-for%3D%22city%20in%20cities%22%20%3Akey%3D%22city%22%20%3Alabel%3D%22city%22%3E%7B%7B%0A%20%20%20%20%20%20%20%20city%0A%20%20%20%20%20%20%7D%7D%3C%2Fel-checkbox-button%3E%0A%20%20%20%20%3C%2Fel-checkbox-group%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%20class%3D%22demo-button-style%22%3E%0A%20%20%20%20%3Cel-checkbox-group%20v-model%3D%22checkboxGroup3%22%20size%3D%22small%22%3E%0A%20%20%20%20%20%20%3Cel-checkbox-button%0A%20%20%20%20%20%20%20%20v-for%3D%22city%20in%20cities%22%0A%20%20%20%20%20%20%20%20%3Akey%3D%22city%22%0A%20%20%20%20%20%20%20%20%3Alabel%3D%22city%22%0A%20%20%20%20%20%20%20%20%3Adisabled%3D%22city%20%3D%3D%3D%20'Beijing'%22%0A%20%20%20%20%20%20%20%20%3E%7B%7B%20city%20%7D%7D%3C%2Fel-checkbox-button%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%3C%2Fel-checkbox-group%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%20class%3D%22demo-button-style%22%3E%0A%20%20%20%20%3Cel-checkbox-group%20v-model%3D%22checkboxGroup4%22%20size%3D%22small%22%20disabled%3E%0A%20%20%20%20%20%20%3Cel-checkbox-button%20v-for%3D%22city%20in%20cities%22%20%3Akey%3D%22city%22%20%3Alabel%3D%22city%22%3E%7B%7B%0A%20%20%20%20%20%20%20%20city%0A%20%20%20%20%20%20%7D%7D%3C%2Fel-checkbox-button%3E%0A%20%20%20%20%3C%2Fel-checkbox-group%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0Aconst%20checkboxGroup1%20%3D%20ref(%5B'Shanghai'%5D)%0Aconst%20checkboxGroup2%20%3D%20ref(%5B'Shanghai'%5D)%0Aconst%20checkboxGroup3%20%3D%20ref(%5B'Shanghai'%5D)%0Aconst%20checkboxGroup4%20%3D%20ref(%5B'Shanghai'%5D)%0Aconst%20cities%20%3D%20%5B'Shanghai'%2C%20'Beijing'%2C%20'Guangzhou'%2C%20'Shenzhen'%5D%0A%3C%2Fscript%3E%0A%0A%3Cstyle%20scoped%3E%0A.demo-button-style%20%7B%0A%20%20margin-top%3A%2024px%3B%0A%7D%0A%3C%2Fstyle%3E%0A",path:"checkbox/button-style","raw-source":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cel-checkbox-group%20v-model%3D%22checkboxGroup1%22%20size%3D%22large%22%3E%0A%20%20%20%20%20%20%3Cel-checkbox-button%20v-for%3D%22city%20in%20cities%22%20%3Akey%3D%22city%22%20%3Alabel%3D%22city%22%3E%0A%20%20%20%20%20%20%20%20%7B%7B%20city%20%7D%7D%0A%20%20%20%20%20%20%3C%2Fel-checkbox-button%3E%0A%20%20%20%20%3C%2Fel-checkbox-group%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%20class%3D%22demo-button-style%22%3E%0A%20%20%20%20%3Cel-checkbox-group%20v-model%3D%22checkboxGroup2%22%3E%0A%20%20%20%20%20%20%3Cel-checkbox-button%20v-for%3D%22city%20in%20cities%22%20%3Akey%3D%22city%22%20%3Alabel%3D%22city%22%3E%7B%7B%0A%20%20%20%20%20%20%20%20city%0A%20%20%20%20%20%20%7D%7D%3C%2Fel-checkbox-button%3E%0A%20%20%20%20%3C%2Fel-checkbox-group%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%20class%3D%22demo-button-style%22%3E%0A%20%20%20%20%3Cel-checkbox-group%20v-model%3D%22checkboxGroup3%22%20size%3D%22small%22%3E%0A%20%20%20%20%20%20%3Cel-checkbox-button%0A%20%20%20%20%20%20%20%20v-for%3D%22city%20in%20cities%22%0A%20%20%20%20%20%20%20%20%3Akey%3D%22city%22%0A%20%20%20%20%20%20%20%20%3Alabel%3D%22city%22%0A%20%20%20%20%20%20%20%20%3Adisabled%3D%22city%20%3D%3D%3D%20'Beijing'%22%0A%20%20%20%20%20%20%20%20%3E%7B%7B%20city%20%7D%7D%3C%2Fel-checkbox-button%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%3C%2Fel-checkbox-group%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%20class%3D%22demo-button-style%22%3E%0A%20%20%20%20%3Cel-checkbox-group%20v-model%3D%22checkboxGroup4%22%20size%3D%22small%22%20disabled%3E%0A%20%20%20%20%20%20%3Cel-checkbox-button%20v-for%3D%22city%20in%20cities%22%20%3Akey%3D%22city%22%20%3Alabel%3D%22city%22%3E%7B%7B%0A%20%20%20%20%20%20%20%20city%0A%20%20%20%20%20%20%7D%7D%3C%2Fel-checkbox-button%3E%0A%20%20%20%20%3C%2Fel-checkbox-group%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0Aconst%20checkboxGroup1%20%3D%20ref(%5B'Shanghai'%5D)%0Aconst%20checkboxGroup2%20%3D%20ref(%5B'Shanghai'%5D)%0Aconst%20checkboxGroup3%20%3D%20ref(%5B'Shanghai'%5D)%0Aconst%20checkboxGroup4%20%3D%20ref(%5B'Shanghai'%5D)%0Aconst%20cities%20%3D%20%5B'Shanghai'%2C%20'Beijing'%2C%20'Guangzhou'%2C%20'Shenzhen'%5D%0A%3C%2Fscript%3E%0A%0A%3Cstyle%20scoped%3E%0A.demo-button-style%20%7B%0A%20%20margin-top%3A%2024px%3B%0A%7D%0A%3C%2Fstyle%3E%0A",description:"%3Cp%3EYou%20just%20need%20to%20change%20%3Ccode%3Eel-checkbox%3C%2Fcode%3E%20element%20into%20%3Ccode%3Eel-checkbox-button%3C%2Fcode%3E%20element.%20We%20also%20provide%20%3Ccode%3Esize%3C%2Fcode%3E%20attribute.%3C%2Fp%3E%0A"},{default:l(()=>[S]),_:1}),w,c(o,{source:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cel-checkbox%20v-model%3D%22checked1%22%20label%3D%22Option1%22%20size%3D%22large%22%20border%20%2F%3E%0A%20%20%20%20%3Cel-checkbox%20v-model%3D%22checked2%22%20label%3D%22Option2%22%20size%3D%22large%22%20border%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%20class%3D%22mt-4%22%3E%0A%20%20%20%20%3Cel-checkbox%20v-model%3D%22checked3%22%20label%3D%22Option1%22%20border%20%2F%3E%0A%20%20%20%20%3Cel-checkbox%20v-model%3D%22checked4%22%20label%3D%22Option2%22%20border%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%20class%3D%22mt-4%22%3E%0A%20%20%20%20%3Cel-checkbox-group%20v-model%3D%22checkboxGroup1%22%20size%3D%22small%22%3E%0A%20%20%20%20%20%20%3Cel-checkbox%20label%3D%22Option1%22%20border%20%2F%3E%0A%20%20%20%20%20%20%3Cel-checkbox%20label%3D%22Option2%22%20border%20%2F%3E%0A%20%20%20%20%3C%2Fel-checkbox-group%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%20class%3D%22mt-4%22%3E%0A%20%20%20%20%3Cel-checkbox-group%20v-model%3D%22checkboxGroup1%22%20size%3D%22small%22%3E%0A%20%20%20%20%20%20%3Cel-checkbox%20label%3D%22Option1%22%20border%20disabled%20%2F%3E%0A%20%20%20%20%20%20%3Cel-checkbox%20label%3D%22Option2%22%20border%20disabled%20%2F%3E%0A%20%20%20%20%3C%2Fel-checkbox-group%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aconst%20checked1%20%3D%20ref(true)%0Aconst%20checked2%20%3D%20ref(false)%0Aconst%20checked3%20%3D%20ref(false)%0Aconst%20checked4%20%3D%20ref(true)%0Aconst%20checkboxGroup1%20%3D%20ref(%5B'Option1'%5D)%0A%3C%2Fscript%3E%0A",path:"checkbox/with-border","raw-source":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cel-checkbox%20v-model%3D%22checked1%22%20label%3D%22Option1%22%20size%3D%22large%22%20border%20%2F%3E%0A%20%20%20%20%3Cel-checkbox%20v-model%3D%22checked2%22%20label%3D%22Option2%22%20size%3D%22large%22%20border%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%20class%3D%22mt-4%22%3E%0A%20%20%20%20%3Cel-checkbox%20v-model%3D%22checked3%22%20label%3D%22Option1%22%20border%20%2F%3E%0A%20%20%20%20%3Cel-checkbox%20v-model%3D%22checked4%22%20label%3D%22Option2%22%20border%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%20class%3D%22mt-4%22%3E%0A%20%20%20%20%3Cel-checkbox-group%20v-model%3D%22checkboxGroup1%22%20size%3D%22small%22%3E%0A%20%20%20%20%20%20%3Cel-checkbox%20label%3D%22Option1%22%20border%20%2F%3E%0A%20%20%20%20%20%20%3Cel-checkbox%20label%3D%22Option2%22%20border%20%2F%3E%0A%20%20%20%20%3C%2Fel-checkbox-group%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%20class%3D%22mt-4%22%3E%0A%20%20%20%20%3Cel-checkbox-group%20v-model%3D%22checkboxGroup1%22%20size%3D%22small%22%3E%0A%20%20%20%20%20%20%3Cel-checkbox%20label%3D%22Option1%22%20border%20disabled%20%2F%3E%0A%20%20%20%20%20%20%3Cel-checkbox%20label%3D%22Option2%22%20border%20disabled%20%2F%3E%0A%20%20%20%20%3C%2Fel-checkbox-group%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aconst%20checked1%20%3D%20ref(true)%0Aconst%20checked2%20%3D%20ref(false)%0Aconst%20checked3%20%3D%20ref(false)%0Aconst%20checked4%20%3D%20ref(true)%0Aconst%20checkboxGroup1%20%3D%20ref(%5B'Option1'%5D)%0A%3C%2Fscript%3E%0A",description:"%3Cp%3EThe%20%3Ccode%3Eborder%3C%2Fcode%3E%20attribute%20adds%20a%20border%20to%20Checkboxes.%3C%2Fp%3E%0A"},{default:l(()=>[G]),_:1}),I,T,e("table",null,[j,e("tbody",null,[N,P,V,L,M,W,$,U,R,J,Y,q,H,e("tr",null,[e("td",null,[t("controls "),c(i)]),K,Q,X])])]),Z])}const a2=n(r,[["render",e2]]);export{h2 as __pageData,a2 as default};
