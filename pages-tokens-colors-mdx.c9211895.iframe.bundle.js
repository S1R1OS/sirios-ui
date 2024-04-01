(self.webpackChunk_sirios_docs=self.webpackChunk_sirios_docs||[]).push([[535],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.W8,di:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.di});__webpack_require__("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs"),__webpack_require__("../../node_modules/@storybook/addon-docs/dist/chunk-GN5PWX3D.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs")},"./src/pages/tokens/colors.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("../../node_modules/next/dist/compiled/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/next/dist/compiled/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/index.mjs"),tokens_dist=__webpack_require__("../tokens/dist/index.mjs");function ColorsGrid(){return Object.entries(tokens_dist.Tj).map((param=>{let[key,color]=param;return(0,jsx_runtime.jsx)("div",{style:{backgroundColor:color,padding:"2rem"},children:(0,jsx_runtime.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",fontFamily:"monospace"},children:[(0,jsx_runtime.jsxs)("strong",{children:["$",key]}),(0,jsx_runtime.jsx)("span",{children:color})]})},key)}))}function _createMdxContent(props){const _components={h1:"h1",p:"p",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Tokens/Colors"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"colors",children:"Colors"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Essas são as cores utilizadas no SiRiOS UI."}),"\n",(0,jsx_runtime.jsx)(dist.di,{children:(0,jsx_runtime.jsx)(ColorsGrid,{})})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"../tokens/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{GR:()=>fontSizes,NM:()=>fontWeights,O7:()=>radii,Tj:()=>colors,lG:()=>fonts,lm:()=>lineHeights,xe:()=>space});var colors={gray50:"#F9F9F9",gray100:"#F3F3F3",gray200:"#ECECEC",gray300:"#E6E6E6",gray400:"#CFCFCF",gray500:"#B8B8B8",gray600:"#A1A1A1",gray700:"#8A8A8A",gray800:"#737373",orange50:"#E0C59F",orange100:"#E1B980",orange200:"#E1AD62",orange300:"#E1A044",orange400:"#E29425",orange500:"#E28807",orange600:"#C97906",orange700:"#B06A05",orange800:"#975B05",orange900:"#7E4C04",orange950:"#643C03",blue200:"#708395",blue300:"#536A81",blue400:"#35516D",blue500:"#183859",blue600:"#142F4A",blue700:"#10253B",blue800:"#0C1C2D",blue900:"#08131E",blue950:"#04090F",information:"#4f7faa",alert:"#efb71b",success:"#0a7a58",error:"#991313"},space={1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",40:"10rem",64:"16rem",80:"20rem"},radii={px:"1px",xs:"4px",sm:"6px",md:"8px",lg:"16px",full:"99999px"},fonts={default:"Plus Jakarta Sans, sans-serif",code:"monospace"},fontSizes={xxs:"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","4xl":"2rem","5xl":"2.25rem","6xl":"3rem","7xl":"4rem","8xl":"4.5rem","9xl":"6rem"},fontWeights={light:"300",regular:"400",medium:"500",semibold:"600",bold:"700"},lineHeights={shorter:"125%",short:"140%",base:"160%",tall:"180%"}},"../../node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"../../node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/next/dist/compiled/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("../../node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js")}}]);