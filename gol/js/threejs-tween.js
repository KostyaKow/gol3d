"use strict";var TWEEN=TWEEN||function(){var a=[];return{REVISION:"7",getAll:function(){return a},removeAll:function(){a=[]},add:function(b){a.push(b)},remove:function(b){b=a.indexOf(b),-1!==b&&a.splice(b,1)},update:function(b){if(0===a.length)return!1;for(var c=0,d=a.length,b=void 0!==b?b:Date.now();d>c;)a[c].update(b)?c++:(a.splice(c,1),d--);return!0}}}();TWEEN.Tween=function(a){var b={},c={},d=1e3,e=0,f=null,g=TWEEN.Easing.Linear.None,h=TWEEN.Interpolation.Linear,i=[],j=null,k=!1,l=null,m=null;this.to=function(a,b){return null!==b&&(d=b),c=a,this},this.start=function(d){TWEEN.add(this),k=!1,f=void 0!==d?d:Date.now(),f+=e;for(var g in c)if(null!==a[g]){if(c[g]instanceof Array){if(0===c[g].length)continue;c[g]=[a[g]].concat(c[g])}b[g]=a[g]}return this},this.stop=function(){return TWEEN.remove(this),this},this.delay=function(a){return e=a,this},this.easing=function(a){return g=a,this},this.interpolation=function(a){return h=a,this},this.chain=function(){return i=arguments,this},this.onStart=function(a){return j=a,this},this.onUpdate=function(a){return l=a,this},this.onComplete=function(a){return m=a,this},this.update=function(e){if(f>e)return!0;!1===k&&(null!==j&&j.call(a),k=!0);var p,n=(e-f)/d,n=n>1?1:n,o=g(n);for(p in b){var q=b[p],r=c[p];a[p]=r instanceof Array?h(r,o):q+(r-q)*o}if(null!==l&&l.call(a,o),1==n){for(null!==m&&m.call(a),n=0,o=i.length;o>n;n++)i[n].start(e);return!1}return!0}},TWEEN.Easing={Linear:{None:function(a){return a}},Quadratic:{In:function(a){return a*a},Out:function(a){return a*(2-a)},InOut:function(a){return 1>(a*=2)?.5*a*a:-.5*(--a*(a-2)-1)}},Cubic:{In:function(a){return a*a*a},Out:function(a){return--a*a*a+1},InOut:function(a){return 1>(a*=2)?.5*a*a*a:.5*((a-=2)*a*a+2)}},Quartic:{In:function(a){return a*a*a*a},Out:function(a){return 1- --a*a*a*a},InOut:function(a){return 1>(a*=2)?.5*a*a*a*a:-.5*((a-=2)*a*a*a-2)}},Quintic:{In:function(a){return a*a*a*a*a},Out:function(a){return--a*a*a*a*a+1},InOut:function(a){return 1>(a*=2)?.5*a*a*a*a*a:.5*((a-=2)*a*a*a*a+2)}},Sinusoidal:{In:function(a){return 1-Math.cos(a*Math.PI/2)},Out:function(a){return Math.sin(a*Math.PI/2)},InOut:function(a){return.5*(1-Math.cos(Math.PI*a))}},Exponential:{In:function(a){return 0===a?0:Math.pow(1024,a-1)},Out:function(a){return 1===a?1:1-Math.pow(2,-10*a)},InOut:function(a){return 0===a?0:1===a?1:1>(a*=2)?.5*Math.pow(1024,a-1):.5*(-Math.pow(2,-10*(a-1))+2)}},Circular:{In:function(a){return 1-Math.sqrt(1-a*a)},Out:function(a){return Math.sqrt(1- --a*a)},InOut:function(a){return 1>(a*=2)?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)}},Elastic:{In:function(a){var b,c=.1;return 0===a?0:1===a?1:(!c||1>c?(c=1,b=.1):b=.4*Math.asin(1/c)/(2*Math.PI),-(c*Math.pow(2,10*(a-=1))*Math.sin(2*(a-b)*Math.PI/.4)))},Out:function(a){var b,c=.1;return 0===a?0:1===a?1:(!c||1>c?(c=1,b=.1):b=.4*Math.asin(1/c)/(2*Math.PI),c*Math.pow(2,-10*a)*Math.sin(2*(a-b)*Math.PI/.4)+1)},InOut:function(a){var b,c=.1;return 0===a?0:1===a?1:(!c||1>c?(c=1,b=.1):b=.4*Math.asin(1/c)/(2*Math.PI),1>(a*=2)?-.5*c*Math.pow(2,10*(a-=1))*Math.sin(2*(a-b)*Math.PI/.4):.5*c*Math.pow(2,-10*(a-=1))*Math.sin(2*(a-b)*Math.PI/.4)+1)}},Back:{In:function(a){return a*a*(2.70158*a-1.70158)},Out:function(a){return--a*a*(2.70158*a+1.70158)+1},InOut:function(a){return 1>(a*=2)?.5*a*a*(3.5949095*a-2.5949095):.5*((a-=2)*a*(3.5949095*a+2.5949095)+2)}},Bounce:{In:function(a){return 1-TWEEN.Easing.Bounce.Out(1-a)},Out:function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},InOut:function(a){return.5>a?.5*TWEEN.Easing.Bounce.In(2*a):.5*TWEEN.Easing.Bounce.Out(2*a-1)+.5}}},TWEEN.Interpolation={Linear:function(a,b){var c=a.length-1,d=c*b,e=Math.floor(d),f=TWEEN.Interpolation.Utils.Linear;return 0>b?f(a[0],a[1],d):b>1?f(a[c],a[c-1],c-d):f(a[e],a[e+1>c?c:e+1],d-e)},Bezier:function(a,b){var g,c=0,d=a.length-1,e=Math.pow,f=TWEEN.Interpolation.Utils.Bernstein;for(g=0;d>=g;g++)c+=e(1-b,d-g)*e(b,g)*a[g]*f(d,g);return c},CatmullRom:function(a,b){var c=a.length-1,d=c*b,e=Math.floor(d),f=TWEEN.Interpolation.Utils.CatmullRom;return a[0]===a[c]?(0>b&&(e=Math.floor(d=c*(1+b))),f(a[(e-1+c)%c],a[e],a[(e+1)%c],a[(e+2)%c],d-e)):0>b?a[0]-(f(a[0],a[0],a[1],a[1],-d)-a[0]):b>1?a[c]-(f(a[c],a[c],a[c-1],a[c-1],d-c)-a[c]):f(a[e?e-1:0],a[e],a[e+1>c?c:e+1],a[e+2>c?c:e+2],d-e)},Utils:{Linear:function(a,b,c){return(b-a)*c+a},Bernstein:function(a,b){var c=TWEEN.Interpolation.Utils.Factorial;return c(a)/c(b)/c(a-b)},Factorial:function(){var a=[1];return function(b){var d,c=1;if(a[b])return a[b];for(d=b;d>1;d--)c*=d;return a[b]=c}}(),CatmullRom:function(a,b,c,d,e){var a=.5*(c-a),d=.5*(d-b),f=e*e;return(2*b-2*c+a+d)*e*f+(-3*b+3*c-2*a-d)*f+a*e+b}}};