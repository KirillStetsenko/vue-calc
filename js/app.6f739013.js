(function(){"use strict";var A={5196:function(A,o,i){var r=i(5130),K=i(6768),f=i(4232),t="data:image/jpeg;base64,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",F=i.p+"img/battery.3c7dd1d9.png";const n={class:"wrapper"},R={class:"topbar"},U={class:"time"},s=(0,K.Lk)("div",null,[(0,K.Lk)("div",{class:"signal"},[(0,K.Lk)("img",{src:t,alt:"signal",width:"25"})]),(0,K.Lk)("div",{class:"battery"},[(0,K.Lk)("img",{src:F,alt:"battery",width:"30"})])],-1),e={class:"display"},w={class:"keyboard"},a={class:"test"};function B(A,o,i,r,t,F){return(0,K.uX)(),(0,K.CE)("div",null,[(0,K.Lk)("div",n,[(0,K.Lk)("div",R,[(0,K.Lk)("div",U,(0,f.v_)(F.time),1),s]),(0,K.Lk)("div",e,(0,f.v_)(t.obj.display),1),(0,K.Lk)("div",w,[(0,K.Lk)("div",{class:"key option",onClick:o[0]||(o[0]=(...A)=>F.clear&&F.clear(...A))},"AC"),(0,K.Lk)("div",{class:"key option",onClick:o[1]||(o[1]=(...o)=>A.sign&&A.sign(...o))},"+/-"),(0,K.Lk)("div",{class:"key option",onClick:o[2]||(o[2]=A=>F.addOperator("%"))},"%"),(0,K.Lk)("div",{class:"key operator",onClick:o[3]||(o[3]=A=>F.addOperator("/"))},"/"),(0,K.Lk)("div",{class:"key number",onClick:o[4]||(o[4]=A=>F.addNum(7))},"7"),(0,K.Lk)("div",{class:"key number",onClick:o[5]||(o[5]=A=>F.addNum(8))},"8"),(0,K.Lk)("div",{class:"key number",onClick:o[6]||(o[6]=A=>F.addNum(9))},"9"),(0,K.Lk)("div",{class:"key operator",onClick:o[7]||(o[7]=A=>F.addOperator("*"))},"x"),(0,K.Lk)("div",{class:"key number",onClick:o[8]||(o[8]=A=>F.addNum(4))},"4"),(0,K.Lk)("div",{class:"key number",onClick:o[9]||(o[9]=A=>F.addNum(5))},"5"),(0,K.Lk)("div",{class:"key number",onClick:o[10]||(o[10]=A=>F.addNum(6))},"6"),(0,K.Lk)("div",{class:"key operator",onClick:o[11]||(o[11]=A=>F.addOperator("-"))},"-"),(0,K.Lk)("div",{class:"key number",onClick:o[12]||(o[12]=A=>F.addNum(1))},"1"),(0,K.Lk)("div",{class:"key number",onClick:o[13]||(o[13]=A=>F.addNum(2))},"2"),(0,K.Lk)("div",{class:"key number",onClick:o[14]||(o[14]=A=>F.addNum(3))},"3"),(0,K.Lk)("div",{class:"key operator",onClick:o[15]||(o[15]=A=>F.addOperator("+"))},"+"),(0,K.Lk)("div",{class:"key number zero",onClick:o[16]||(o[16]=A=>F.addNum(0))},"0"),(0,K.Lk)("div",{class:"key number",onClick:o[17]||(o[17]=(...o)=>A.addPoint&&A.addPoint(...o))},"."),(0,K.Lk)("div",{class:"key operator",onClick:o[18]||(o[18]=(...A)=>F.getRes&&F.getRes(...A))},"=")])]),(0,K.Lk)("div",a,[(0,K.Lk)("div",null,"display: "+(0,f.v_)(t.obj.display),1),(0,K.Lk)("div",null,"num1: "+(0,f.v_)(t.obj.num1),1),(0,K.Lk)("div",null,"num2: "+(0,f.v_)(t.obj.num2),1),(0,K.Lk)("div",null,"operator: "+(0,f.v_)(t.obj.operator),1),(0,K.Lk)("div",null,"res: "+(0,f.v_)(t.obj.res),1)])])}var v={data(){return{obj:{display:"",num1:"",num2:"",operator:"",res:""}}},methods:{addNum(A){this.obj.operator?(this.obj.num2+=A,this.obj.display=this.obj.num2):(this.obj.num1+=A,this.obj.display=this.obj.num1)},addOperator(A){this.obj.num2&&(this.obj.num1=+this.obj.num1+ +this.obj.num2,this.obj.display=this.obj.num1,this.obj.num2=""),this.obj.operator=A},getRes(){switch(this.obj.operator){case"+":this.obj.res=+this.obj.num1+ +this.obj.num2,this.obj.display=this.obj.res,this.obj.num1=this.obj.res,this.obj.num2="";break;case"-":this.obj.res=+this.obj.num1-+this.obj.num2,this.obj.display=this.obj.res,this.obj.num1=this.obj.res;break;case"*":this.obj.res=+this.obj.num1*+this.obj.num2,this.obj.display=this.obj.res,this.obj.num1=this.obj.res;break;case"/":this.obj.res=+this.obj.num1/+this.obj.num2,this.obj.display=this.obj.res,this.obj.num1=this.obj.res;break;case"%":this.obj.res=+this.obj.num1*+this.obj.num2/100,this.obj.display=this.obj.res,this.obj.num1=this.obj.res;break;default:break}},clear(){this.obj.display="",this.obj.num1="",this.obj.num2="",this.obj.operator="",this.obj.res=""}},computed:{time(){return(new Date).getHours().toString().padStart(2,"0")+":"+(new Date).getMinutes().toString().padStart(2,"0")}}},l=i(1241);const d=(0,l.A)(v,[["render",B]]);var c=d;(0,r.Ef)(c).mount("#app")}},o={};function i(r){var K=o[r];if(void 0!==K)return K.exports;var f=o[r]={exports:{}};return A[r].call(f.exports,f,f.exports,i),f.exports}i.m=A,function(){var A=[];i.O=function(o,r,K,f){if(!r){var t=1/0;for(U=0;U<A.length;U++){r=A[U][0],K=A[U][1],f=A[U][2];for(var F=!0,n=0;n<r.length;n++)(!1&f||t>=f)&&Object.keys(i.O).every((function(A){return i.O[A](r[n])}))?r.splice(n--,1):(F=!1,f<t&&(t=f));if(F){A.splice(U--,1);var R=K();void 0!==R&&(o=R)}}return o}f=f||0;for(var U=A.length;U>0&&A[U-1][2]>f;U--)A[U]=A[U-1];A[U]=[r,K,f]}}(),function(){i.n=function(A){var o=A&&A.__esModule?function(){return A["default"]}:function(){return A};return i.d(o,{a:o}),o}}(),function(){i.d=function(A,o){for(var r in o)i.o(o,r)&&!i.o(A,r)&&Object.defineProperty(A,r,{enumerable:!0,get:o[r]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(A){if("object"===typeof window)return window}}()}(),function(){i.o=function(A,o){return Object.prototype.hasOwnProperty.call(A,o)}}(),function(){i.p="/vue-calc/"}(),function(){var A={524:0};i.O.j=function(o){return 0===A[o]};var o=function(o,r){var K,f,t=r[0],F=r[1],n=r[2],R=0;if(t.some((function(o){return 0!==A[o]}))){for(K in F)i.o(F,K)&&(i.m[K]=F[K]);if(n)var U=n(i)}for(o&&o(r);R<t.length;R++)f=t[R],i.o(A,f)&&A[f]&&A[f][0](),A[f]=0;return i.O(U)},r=self["webpackChunkcalculator"]=self["webpackChunkcalculator"]||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))}();var r=i.O(void 0,[504],(function(){return i(5196)}));r=i.O(r)})();
//# sourceMappingURL=app.6f739013.js.map