$(document).ready(function(){
	$tweetCompose = $('.tweet-compose');
	$charCount = $('#char-count');
	$tweetSubmit = $('#tweet-submit');

	$tweetCompose.focus(function(){
		$(this).addClass('go');
		$('#tweet-controls').addClass('go');
	});
	$tweetCompose.focusout(function(){
		$(this).removeClass('go');
		$('#tweet-controls').removeClass('go');
	});
	$tweetCompose.on('keyup',function(){
		var countFellow = 140 - $tweetCompose.val().length;
		$charCount.html(countFellow);
		if(countFellow <11){
			$charCount.addClass('danger-zone');
		}
		if(countFellow<0){
			$tweetSubmit.prop('disabled',true);
		} else $tweetSubmit.prop('disabled',false);
	});

	$tweetSubmit.on('click',function(){

	});

	function makeTweet(thyTweet){
		
	}


});