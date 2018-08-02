var a = 0;






$("#counter").on("click", function(){
	
	a++;
	$("h1").eq(1).text(a);

});


$("#reset").on("click", function(){
	a=0;


});

