$("button").on("dblclick",function(){
    $("button").css("color","red");

    
    
   
})

$(document).on("keyup",function(event){
    if (event.key =="d")
        $("h1").hide();

      $(document).on("keyup",function(event){
        if(event.key =="p")
            $("h1").show();
      })

      $("h1").on("click",function(){
        $("h1")
      })
})

