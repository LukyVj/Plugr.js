window.onload = function(){
  
  function plugr($element){
    var body = document.getElementById($element);
    var pluginsJs = ['fontsize','gridify','bullgit4TheWin'];
    var pluginsCss = ['fontsize','gridify'];

    for (var i = 0; i < pluginsCss.length; i++){
      var innerCss = document.createElement('link');
      innerCss.id  = "plugin_css_"+[i];
      innerCss.rel = "stylesheet";
      innerCss.type = "text/css";
      innerCss.href = "path/to/plugin/"+pluginsCss[i]+".css";   
      body.appendChild(innerCss);   
    } 

    for (var i = 0; i < pluginsJs.length; i++){
      var innerJs = document.createElement('script');
      innerJs.id  = "plugin_js_"+[i];
      innerJs.type = "text/javascript";
      innerJs.src = "path/to/plugin/"+pluginsJs[i]+".js";   
      body.appendChild(innerJs);  
    }  
  }

  plugr("main");
} 