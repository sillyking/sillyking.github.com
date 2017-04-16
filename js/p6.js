// if (typeof jQuery == 'undefined') {
//   console.log('jQuery hasn\'t loaded');
// } else {
//   console.log('jQuery has loaded');
// }

$('.ui-mainfir img').click(function(){
		var bimg=$('<img src=""/>');
		var show=$('<div></div>');
		bimg.attr("src",$(this).attr("src"));
		bimg.addClass('childdiv')
		show.addClass('parentdiv');
		bimg.appendTo(show);
		show.appendTo('body');
		show.click(function(){
			show.remove();
		});
});



$(".ui-mainsec-hd div").eq(0).css({"background":"gray"});
$(".ui-mainsec-hd div").click(function(){
	$(".ui-mainsec-hd div").css({"background":"none"});
	$(this).css({"background":"gray"});
	$('.ui-mainsec-bd').text($(this).index()+1);
});




function Del(e){
	$(this).parent().remove();
	for(var i=0;i<$(".ui-mainthi-list>div").length;i++)
	$(".ui-mainthi-list>div").eq(i).children(".ui-mainthi-list-num").text(i+1);
};
$(".ui-mainthi-list-del").on("click",Del);
$(".ui-mainthi-addbtn div").click(function(){
	var newlist=$("<div></div>"),
		newlistnum=$("<div></div>"),
		newlistdel=$("<div></div>");
	newlist.addClass('ui-mainthi-list>div');
	newlistnum.addClass('ui-mainthi-list-num');
	newlistdel.addClass('ui-mainthi-list-del');
	newlistnum.text($(".ui-mainthi-list>div").length+1);
	newlistdel.text('Delete');
	newlistdel.on("click",Del)
	newlistnum.appendTo(newlist);
	newlistdel.appendTo(newlist);
	newlist.appendTo('.ui-mainthi-list');
});
