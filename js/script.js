 // スケールの初期値（CSSの初期値と合わせる）
 var sc="0.8";
 var place = ["FUKUOKA","OSAKA","TOKYO"];

 $( function() {

   $( "#draggable" ).draggable();

   $( "#zoomIn" ).click( function(){
     sc *= 1.1;
     $( "#draggable" ).css( {Transform: 'scale(' + sc + ')' } );
   });

   $( "#zoomOut" ).click( function(){
     sc /= 1.1;
     $( "#draggable" ).css( {Transform: 'scale(' + sc + ')' } );
   });

   $(".marker").hover(
     function(){
        var index = $('.marker').index(this);
         $("#messageBox").html(place[index]);
       },
         function(){
         $("#messageBox").html("　");
       }
      );

 } );
