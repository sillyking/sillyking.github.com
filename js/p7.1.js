
	var time=$('<div></div>');
	time.addClass('time')
		var hour=$('<div>10</div>');
		hour.addClass('hour');
		hour.appendTo(time);
		var symbol=$('<div>:</div>');
		symbol.addClass('symbol');
		symbol.appendTo(time);
		var minute=$('<div>56</div>');
		minute.addClass('minute');
		minute.appendTo(time);
		var symbol2=$('<div>:</div>');
		symbol2.addClass('symbol');
		symbol2.appendTo(time);
		var second=$('<div>24</div>');
		second.addClass('second');
		second.appendTo(time);
		time.appendTo(".msg-top-right-downr");
