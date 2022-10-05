"use strict";(self.webpackChunkodra_docs=self.webpackChunkodra_docs||[]).push([[495],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=p(n),d=a,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2},l="Flipper example",i={unversionedId:"getting-started/flipper",id:"getting-started/flipper",title:"Flipper example",description:"Let's flip a flipper",source:"@site/docs/getting-started/flipper.md",sourceDirName:"getting-started",slug:"/getting-started/flipper",permalink:"/docs/getting-started/flipper",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/flipper.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/getting-started/installation"},next:{title:"Architecture",permalink:"/docs/category/architecture"}},s={},p=[{value:"Let&#39;s flip a flipper",id:"lets-flip-a-flipper",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"flipper-example"},"Flipper example"),(0,a.kt)("h2",{id:"lets-flip-a-flipper"},"Let's flip a flipper"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="flipper.rs"',title:'"flipper.rs"'},"use odra::Variable;\n\n/// A module definition. Each module struct consists Variables and Mappings or/and another modules.\n#[odra::module]\npub struct Flipper {\n    /// The module itself does not store the value, it's a proxy that writes/reads value to/from the host.\n    value: Variable<bool>,\n}\n\n/// Module implementation.\n/// \n/// To generate entrypoints, an implementation block must be marked as #[odra::module].\n#[odra::module]\nimpl Flipper {\n    /// Odra constructor.\n    /// \n    /// Initializes the contract with the value of value.\n    #[odra(init)]\n    pub fn initial_settings(&self) {\n        self.value.set(false);\n    }\n\n    /// Replaces the current value with the passed argument.\n    pub fn set(&self, value: bool) {\n        self.value.set(value);\n    }\n\n    /// Replaces the current value with the opposite value.\n    pub fn flip(&self) {\n        self.value.set(!self.get());\n    }\n\n    /// Retrieves value from the storage. If the value has never been set, the default value is returned.\n    pub fn get(&self) -> bool {\n        self.value.get_or_default()\n    }\n}\n\n#[cfg(test)]\nmod tests {\n    use crate::flipper::Flipper;\n\n    #[test]\n    fn flipping() {\n        // To test a module we need to deploy it. To do so, Odra generate for us deploy() function.\n        // To call a constructor we don't do it directly. In this case to call a constructor, we would call deploy_initial_settings() function.\n        let contract = Flipper::deploy();\n        assert!(!contract.get());\n        contract.flip();\n        assert!(contract.get());\n    }\n\n    #[test]\n    fn test_two_flippers() {\n        let contract1 = Flipper::deploy();\n        let contract2 = Flipper::deploy();\n        assert!(!contract1.get());\n        assert!(!contract2.get());\n        contract1.flip();\n        assert!(contract1.get());\n        assert!(!contract2.get());\n    }\n}\n")))}u.isMDXComponent=!0}}]);