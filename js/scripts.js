jQuery(function ($) {

    'use strict';

    // --------------------------------------------------------------------
    // PreLoader
    // --------------------------------------------------------------------

    (function () {
        $('#preloader').delay(200).fadeOut('slow');
    }());



    // --------------------------------------------------------------------
    // Sticky Sidebar
    // --------------------------------------------------------------------

    $('.left-col-block, .right-col-block').theiaStickySidebar();

}); // JQuery end

	
$('#contactForm').on('submit',function(e) {
  e.preventDefault();
 
  $('#contactForm *').fadeOut(200);
  $('#contactForm').prepend('Your submission is being processed...');
 
  $.ajax('https://api.mailgun.net/v3/sandboxa7a849c3cff44971abc01801482b866c.mailgun.org/messages',
	{
		type:"POST",
		username: 'api',
		password: 'key-YOUR-KEY',
		data:{
			"html": $('#InputName').val(),
			"subject": $('#InputSubject').val(),
			"from": "esteban.calderon@gmail.com",
			"to": "esteban.calderon@gmail.com"
		},
		success:function(a,b,c){
			console.log( 'mail sent: ', b );
		}.bind(this),
		error:function( xhr, status, errText ){console.log( 'mail sent failed: ', xhr.responseText );}
	});
 
  return false;
 
});
 
function responseSuccess(data) {
 
  data = JSON.parse(data);
 
  if(data.status === 'success') {
    $('#mailgun').html('Submission sent succesfully.');
  } else {
    $('#mailgun').html('Submission failed, please contact directly.');
  }
 
}	