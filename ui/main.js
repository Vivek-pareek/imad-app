var button=document.getElementById("counter");
button.onClick=function(){
    var request=new XMLHttpRequest();
    request.onReadyStateChange=function(){
       if(request.readyState===XMLHttpRequest.DONE)
       {
           if(request.status===200)
           {
               var counter=request.responseText;
               var span=document.getElementById('count');
               span.innerHtml=counter.toString();
           }
       }
    };
    request.open('GET','http://pareekvivek123.imad.hasura-app.io/counter',true);
    request.send(null);
};