import{_ as s,c as a,o,a as l}from"./app.98c6a835.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u89E3\u51B3\u65B9\u6848","slug":"\u89E3\u51B3\u65B9\u6848","link":"#\u89E3\u51B3\u65B9\u6848","children":[]}],"relativePath":"articles/\u8DE8\u57DF\u95EE\u9898.md"}'),e={name:"articles/\u8DE8\u57DF\u95EE\u9898.md"},n=l(`<p>\u5F88\u591A\u65F6\u5019\uFF0C\u4F60\u4F1A\u9047\u5230\u83AB\u540D\u7684\u8DE8\u57DF\u95EE\u9898\uFF0C\u6709\u65F6\u5019\u540E\u53F0\u62A5\u9519\u4E5F\u4F1A\u663E\u793A\u524D\u53F0\u8DE8\u57DF\uFF0C\u5BFC\u81F4\u4E5F\u4E0D\u77E5\u9053\u662F\u4E0D\u662F\u771F\u7684\u8DE8\u57DF\u3002</p><h2 id="\u89E3\u51B3\u65B9\u6848" tabindex="-1">\u89E3\u51B3\u65B9\u6848 <a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a></h2><ol><li>\u5B89\u88C5 \u53CC\u6838\u6D4F\u89C8\u5668 \u6700\u65B0\u7684chrome\u5DF2\u7ECF\u4E0D\u652F\u6301\u8DE8\u57DF\u8BBE\u7F6E</li><li>chrome://flags/#same-site-by-default-cookies \u8BBE\u7F6E Disabled</li><li>chrome://flags/#enable-removing-all-third-party-cookies \u8BBE\u7F6E Disabled</li><li>\u5982\u679C\u4F60\u662F\u591A\u7AD9\u70B9\uFF0C\u4F7F\u7528Nginx\uFF0C\u4F7F\u5176\u53D8\u6210\u4E00\u4E2A\u57DF,\u6211\u7684\u914D\u7F6E\u6587\u4EF6\u8FD8\u6709\u4EE3\u7406\u4E2D\u8F6C\u540E\u53F0\u3002 Nginx \u914D\u7F6E\u6587\u4EF6\u4EE3\u7801</li><li>\u540E\u53F0\u8BF7\u6C42\u5934\u8BBE\u7F6E\u8DE8\u57DF\u4EE3\u7801\uFF0C\u8FD9\u6837\u524D\u540E\u53F0\u5C31\u6253\u901A\u4E0D\u8DE8\u57DF\u4E86\u3002\u540E\u53F0\u5904\u7406\u597Doption\u8BF7\u6C42\uFF0C\u4E0D\u8981\u62A5\u9519\u3002</li></ol><div class="language-java"><button class="copy"></button><span class="lang">java</span><pre><code><span class="line"><span style="color:#82AAFF;">header</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Access-Control-Allow-Origin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u6E90\u5730\u5740</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">header</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Access-Control-Allow-Credentials</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u91CC \u6E90\u5730\u5740 \u4E0D\u80FD\u662F*\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u6210 \u8C01\u8BF7\u6C42\u4F60\uFF0C\u4F60\u5C31\u8BBE\u7F6E\u6210\u4ED6\u7684\u5730\u5740</p><ol><li>\u5982\u679C\u540E\u53F0\u9700\u8981session\uFF0C\u524D\u53F0\u8BF7\u6C42\u7684axios\u8BBE\u7F6E withCredentials: true,\u53D1\u9001\u8BF7\u6C42\u81EA\u52A8\u643A\u5E26cookie\u3002 java \u643A\u5E26session \u524D\u53F0\u4F20\u9012cookie \u8DE8\u57DF\u89E3\u51B3\u65B9\u6848 vue + java \u5982\u679C\u8FD9\u4E2A\u65F6\u5019\u8FD8\u53D1\u751F\u8DE8\u57DF \u5F53\u4F60\u53D1\u73B0\uFF0C\u67D0\u4E2A\u63A5\u53E3\uFF0C\u6216\u67D0\u51E0\u4E2A\u63A5\u53E3\u8DE8\u57DF\uFF0C\u5176\u4ED6\u63A5\u53E3\u4E0D\u8DE8\u57DF\uFF0C\u57FA\u672C\u4E0A\u5C31\u662F\u540E\u53F0\u4EE3\u7801\u53D1\u751F\u9519\u8BEF\u5BFC\u81F4\u3002</li></ol>`,6),t=[n];function p(c,r,i,D,F,_){return o(),a("div",null,t)}const u=s(e,[["render",p]]);export{y as __pageData,u as default};
