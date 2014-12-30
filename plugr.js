function plugr($css,$js){
  var head = document.getElementsByTagName('head')[0];
  var body = document.getElementsByTagName('body')[0];
  var pluginsJs = $js;
  var pluginsCss = $css;
  var pluginPath = 'plugins/';

  var rcjs = document.createElement('div');
  rcjs.id = "scripts";
  

  for (var i = 0; i < pluginsCss.length; i++){
    var innerCss = document.createElement('link');
    innerCss.id  = "plugin_css_"+[i];
    innerCss.rel = "stylesheet";
    innerCss.type = "text/css";
    innerCss.href = pluginPath+pluginsCss[i]+"/"+pluginsCss[i]+".css";   

    if(pluginsCss[i].indexOf("!") > -1){
      innerCss.href = pluginPath.replace('!','')+pluginsCss[i].replace('!','')+"/"+pluginsCss[i].replace('!','')+".css";   
      head.appendChild(innerCss);      
      console.log(innerCss)
    }
    else{
      head.appendChild(innerCss);   
    }
  } 

  for (var i = 0; i < pluginsJs.length; i++){
    var innerJs = document.createElement('script');
    innerJs.id  = "plugin_js_"+[i];
    innerJs.type = "text/javascript";
    innerJs.src = pluginPath+pluginsJs[i]+"/"+pluginsJs[i]+".js"; 
    
    innerJs.deffer = "true"; 

    rcjs.appendChild(innerJs);  

    if(pluginsJs[i].indexOf("!") > -1){
      innerJs.src = pluginPath.replace('!','')+pluginsJs[i].replace('!','')+"/"+pluginsJs[i].replace('!','')+".js"; 
      rcjs.appendChild(innerJs);  

      body.appendChild(rcjs);      
      console.log(innerJs)
    }
    else{
      body.appendChild(rcjs);   
    }
  }  
}

function plugrDelay($css,$js,$time){
  var head = document.getElementsByTagName('head')[0];
  var body = document.getElementsByTagName('body')[0];
  var pluginsJs = $js;
  var pluginsCss = $css;
  var pluginPath = 'plugins/';

  var rcjs = document.createElement('div');
  rcjs.id = "scriptsDelayed";

  for (var i = 0; i < pluginsCss.length; i++){
    var innerCss = document.createElement('link');
    innerCss.id  = "plugin_css_"+[i];
    innerCss.rel = "stylesheet";
    innerCss.type = "text/css";
    innerCss.href = pluginPath+pluginsCss[i]+"/"+pluginsCss[i]+".css";   

    if(pluginsCss[i].indexOf("!") > -1){
      innerCss.href = pluginPath.replace('!','')+pluginsCss[i].replace('!','')+"/"+pluginsCss[i].replace('!','')+".css";   
      setTimeout(function(){
        head.appendChild(innerCss); 
        console.log(innerCss)  
      },$time);
    }
    else{
      setTimeout(function(){
        head.appendChild(innerCss);   
      },$time);
    }
  } 

  for (var i = 0; i < pluginsJs.length; i++){
    var innerJs = document.createElement('script');
    innerJs.id  = "plugin_js_"+[i];
    innerJs.type = "text/javascript";
    innerJs.src = pluginPath+pluginsJs[i]+"/"+pluginsJs[i]+".js"; 
    
    innerJs.deffer = "true";   
    rcjs.appendChild(innerJs);  


    if(pluginsJs[i].indexOf("!") > -1){
      innerJs.href = pluginPath.replace('!','')+pluginsJs[i].replace('!','')+"/"+pluginsJs[i].replace('!','')+".js";   
      setTimeout(function(){
        rcjs.appendChild(innerJs);  

        body.appendChild(rcjs);      
        console.log(innerJs)
      },$time);
    }
    else{
      setTimeout(function(){
        body.appendChild(rcjs);      
      },$time);
    }
  }  
}

