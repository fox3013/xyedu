$(document).ready(function(){


  $('a.video-button').on('click touch', function(e){
    $('.active').removeClass('active');
    $(this).parent().addClass('active');
    image = "./assets/images/img-" + $(this).data('id') +'.png';
    src = "http://ressync.xy.jxcstatic.com/" + $(this).data('src')
    $('#video-cover').attr('poster', image);
    $('#video-cover').attr('src', src);
  });
});
