// 900<=document.body.clientWidth&&function(e,o){function t(){for(var e=0;e<r.length;e++)r[e].alpha<=0?(o.body.removeChild(r[e].el),r.splice(e,1)):(r[e].y--,r[e].scale+=.004,r[e].alpha-=.013,r[e].el.style.cssText="left:"+r[e].x+"px;top:"+r[e].y+"px;opacity:"+r[e].alpha+";transform:scale("+r[e].scale+","+r[e].scale+") rotate(45deg);background:"+r[e].color+";z-index:99999");requestAnimationFrame(t)}var a,r=[];e.requestAnimationFrame=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)},function(t){var a=o.createElement("style");a.type="text/css";try{a.appendChild(o.createTextNode(t))}catch(e){a.styleSheet.cssText=t}o.getElementsByTagName("head")[0].appendChild(a)}(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"),a="function"==typeof e.onclick&&e.onclick,e.onclick=function(e){a&&a(),function(e){var t=o.createElement("div");t.className="heart",r.push({el:t,x:e.clientX-5,y:e.clientY-5,scale:1,alpha:1,color:"rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"}),o.body.appendChild(t)}(e)},t()}(window,document);
900 <= document.body.clientWidth &&
  (function (e, o) {
    function t() {
      for (var e = 0; e < r.length; e++)
        r[e].alpha <= 0
          ? (o.body.removeChild(r[e].el), r.splice(e, 1))
          : (r[e].y--,
            (r[e].scale += 0.004),
            (r[e].alpha -= 0.013),
            (r[e].el.style.cssText =
              "left:" +
              r[e].x +
              "px;top:" +
              r[e].y +
              "px;opacity:" +
              r[e].alpha +
              ";transform:scale(" +
              r[e].scale +
              "," +
              r[e].scale +
              ") rotate(45deg);background:" +
              r[e].color +
              ";z-index:99999"));
      requestAnimationFrame(t);
    }
    var a,
      r = [];
    (e.requestAnimationFrame =
      e.requestAnimationFrame ||
      e.webkitRequestAnimationFrame ||
      e.mozRequestAnimationFrame ||
      e.oRequestAnimationFrame ||
      e.msRequestAnimationFrame ||
      function (e) {
        setTimeout(e, 1e3 / 60);
      }),
      (function (t) {
        var a = o.createElement("style");
        a.type = "text/css";
        try {
          a.appendChild(o.createTextNode(t));
        } catch (e) {
          a.styleSheet.cssText = t;
        }
        o.getElementsByTagName("head")[0].appendChild(a);
      })(
        ".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"
      ),
      (a = "function" == typeof e.onclick && e.onclick),
      (e.onclick = function (e) {
        a && a(),
          (function (e) {
            var t = o.createElement("div");
            (t.className = "heart"),
              r.push({
                el: t,
                x: e.clientX - 5,
                y: e.clientY - 5,
                scale: 1,
                alpha: 1,
                color: "rgb(" + ~~241 + "," + ~~196 + "," + ~~205 + ")",
              }),
              o.body.appendChild(t);
          })(e);
      }),
      t();
  })(window, document);
