(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2Te1":function(e,a,t){"use strict";var A=t("wx14"),r=t("zLVn"),l=t("q1tI"),n=t.n(l),c=t("TSYQ"),s=t.n(c),i=t("33Jr"),d=function(e){var a=e.className,t=e.cssModule,l=e.color,c=e.innerRef,d=e.pill,o=e.tag,m=Object(r.a)(e,["className","cssModule","color","innerRef","pill","tag"]),u=Object(i.e)(s()(a,"badge","badge-"+l,!!d&&"badge-pill"),t);return m.href&&"span"===o&&(o="a"),n.a.createElement(o,Object(A.a)({},m,{className:u,ref:c}))};d.defaultProps={color:"secondary",pill:!1,tag:"span"},a.a=d},RXBc:function(e,a,t){"use strict";t.r(a),t.d(a,"IndexQuery",(function(){return B}));var A=t("jeTL"),r=t("q1tI"),l=t.n(r),n=t("Wbzz"),c=t("rgsX"),s=t("Bl7J"),i=t("vrFN"),d=(t("XfO3"),t("HEwt"),t("a1Th"),t("Btvt"),t("wx14")),o=t("zLVn"),m=t("TSYQ"),u=t.n(m),g=t("33Jr"),f=function(e){var a,t=e.className,A=e.listClassName,r=e.cssModule,n=e.size,c=e.tag,s=e.listTag,i=e["aria-label"],m=Object(o.a)(e,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),f=Object(g.e)(u()(t),r),p=Object(g.e)(u()(A,"pagination",((a={})["pagination-"+n]=!!n,a)),r);return l.a.createElement(c,{className:f,"aria-label":i},l.a.createElement(s,Object(d.a)({},m,{className:p})))};f.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"};var p=f,E=function(e){var a=e.active,t=e.className,A=e.cssModule,r=e.disabled,n=e.tag,c=Object(o.a)(e,["active","className","cssModule","disabled","tag"]),s=Object(g.e)(u()(t,"page-item",{active:a,disabled:r}),A);return l.a.createElement(n,Object(d.a)({},c,{className:s}))};E.defaultProps={tag:"li"};var b=E,j=(t("LK8F"),function(e){var a,t=e.className,A=e.cssModule,r=e.next,n=e.previous,c=e.first,s=e.last,i=e.tag,m=Object(o.a)(e,["className","cssModule","next","previous","first","last","tag"]),f=Object(g.e)(u()(t,"page-link"),A);n?a="Previous":r?a="Next":c?a="First":s&&(a="Last");var p,E=e["aria-label"]||a;n?p="‹":r?p="›":c?p="«":s&&(p="»");var b=e.children;return b&&Array.isArray(b)&&0===b.length&&(b=null),m.href||"a"!==i||(i="button"),(n||r||c||s)&&(b=[l.a.createElement("span",{"aria-hidden":"true",key:"caret"},b||p),l.a.createElement("span",{className:"sr-only",key:"sr"},E)]),l.a.createElement(i,Object(d.a)({},m,{className:f,"aria-label":E}),b)});j.defaultProps={tag:"a"};var v=j,N=function(e){var a=e.currentPage,t=e.numberOfPages,A=1===a,r=a-1==1?"/":"/page"+(a-1).toString(),n="/page/"+(a+1).toString();return l.a.createElement(p,{className:"pagination justify-content-center","aria-label":"Page navigation example"},A?l.a.createElement(b,{disabled:!0},l.a.createElement(v,{previous:!0,href:"/"})):l.a.createElement(b,null,l.a.createElement(v,{previous:!0,href:r})),Array.from({length:t},(function(e,t){return a===t+1?l.a.createElement(b,{active:!0,key:"page-number"+(t+1)},l.a.createElement(v,{href:"/"+(0===t?"":"page/"+(t+1))},t+1)):l.a.createElement(b,{key:"page-number"+(t+1)},l.a.createElement(v,{href:"/"+(0===t?"":"page/"+(t+1))},t+1))})),l.a.createElement(b,{disabled:!0},l.a.createElement(v,{next:!0,href:n})))},B="194140900";a.default=function(e){var a;return l.a.createElement(s.a,{pageTitle:"Ana Sayfa"},l.a.createElement(i.a,{title:"KevserOzkan",keywords:["web developer","application","react","e-commerce","e-ticaret"]}),l.a.createElement(n.StaticQuery,{query:B,render:function(e){return a=Math.ceil(e.allMarkdownRemark.totalCount/5),l.a.createElement("div",null,e.allMarkdownRemark.edges.map((function(e){var a=e.node;return l.a.createElement(c.a,{key:a.id,title:a.frontmatter.title,slug:a.fields.slug,date:a.frontmatter.date,body:a.excerpt,fluid:a.frontmatter.featuredImage.childImageSharp.fluid,tags:a.frontmatter.tags})})),l.a.createElement(N,{currentPage:1,numberOfPages:a}))},data:A}))}},jeTL:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"id":"0e5233ca-54b7-5d70-8ea0-de1657e0ed88","frontmatter":{"title":"Hello World","tags":["hello world","code","yazılım","web developer","e-ticaret","e-commerce","react"],"date":"07 12 2020, 11:29","featuredImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAEDAgX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB49sOICK//8QAGhAAAgIDAAAAAAAAAAAAAAAAAAECIRARQf/aAAgBAQABBQLrsomtSx//xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAwEBPwFn/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFRABAQAAAAAAAAAAAAAAAAAAEIH/2gAIAQEABj8CY//EABwQAAICAgMAAAAAAAAAAAAAAAABITERQXGRof/aAAgBAQABPyFy74ZtaXY5V6IhGYw6HZ//2gAMAwEAAgADAAAAEI8P/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxAf/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8QJ//EABwQAQEBAAEFAAAAAAAAAAAAAAERACExQXGBof/aAAgBAQABPxBvDVwSUU8DQRfrIAwa+5nkPcDLupv/2Q==","aspectRatio":1.5,"src":"/static/d57d3ef7c12240d9300498f6be74d3a9/4fe8c/javascript.jpg","srcSet":"/static/d57d3ef7c12240d9300498f6be74d3a9/aabdf/javascript.jpg 150w,\\n/static/d57d3ef7c12240d9300498f6be74d3a9/9dc27/javascript.jpg 300w,\\n/static/d57d3ef7c12240d9300498f6be74d3a9/4fe8c/javascript.jpg 600w,\\n/static/d57d3ef7c12240d9300498f6be74d3a9/9842e/javascript.jpg 900w,\\n/static/d57d3ef7c12240d9300498f6be74d3a9/47498/javascript.jpg 1200w,\\n/static/d57d3ef7c12240d9300498f6be74d3a9/facae/javascript.jpg 6016w","sizes":"(max-width: 600px) 100vw, 600px"}}}},"fields":{"slug":"hello-world"},"excerpt":"Merhaba, İlk yazımın ne olabileceği hakkında bir süre düşündüm. Şu zamana kadar kendimi geliştirdiğim konulara tekrar dönmek istedim. Fakat…"}}]}}}')},ljDB:function(e,a,t){t("a1Th"),t("Btvt"),t("pIFo");e.exports={slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},rgsX:function(e,a,t){"use strict";var A=t("q1tI"),r=t.n(A),l=t("Wbzz"),n=t("BLzl"),c=t("/kxI"),s=t("ChEw"),i=t("wx14"),d=t("zLVn"),o=t("TSYQ"),m=t.n(o),u=t("33Jr"),g=function(e){var a=e.className,t=e.cssModule,A=e.tag,l=Object(d.a)(e,["className","cssModule","tag"]),n=Object(u.e)(m()(a,"card-subtitle"),t);return r.a.createElement(A,Object(i.a)({},l,{className:n}))};g.defaultProps={tag:"div"};var f=g,p=function(e){var a=e.className,t=e.cssModule,A=e.tag,l=Object(d.a)(e,["className","cssModule","tag"]),n=Object(u.e)(m()(a,"card-text"),t);return r.a.createElement(A,Object(i.a)({},l,{className:n}))};p.defaultProps={tag:"p"};var E=p,b=t("2Te1"),j=t("9eSz"),v=t.n(j),N=t("ljDB");a.a=function(e){var a=e.title,t=e.slug,A=e.date,i=e.body,d=e.fluid,o=e.tags;return r.a.createElement(n.a,{id:"yan"},r.a.createElement(v.a,{className:"card-img",fluid:d}),r.a.createElement(c.a,null,r.a.createElement(s.a,null,r.a.createElement(l.Link,{className:"title",to:t},a)),r.a.createElement(f,null,r.a.createElement("span",{className:"text-info"},A)," "),r.a.createElement(E,null,i),r.a.createElement("ul",{className:"post-tags"},o.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement(l.Link,{to:"/tag/"+Object(N.slugify)(e)},r.a.createElement(b.a,{className:"badge",pill:!0},e)))}))),r.a.createElement(l.Link,{to:t,className:"btn float-right buttonColor"},"Daha Fazla Oku")))}}}]);
//# sourceMappingURL=component---src-pages-index-js-6e019a71bbbfb90f5918.js.map