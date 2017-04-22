$(document).ready(function(){


  $('a.video-button').on('click touch', function(e){
    $('.active').removeClass('active');
    $(this).parent().addClass('active');
    image = "./assets/images/img-" + $(this).data('id') +'.png';
    src = "http://ressync.xy.jxcstatic.com/" + $(this).data('src')
    $('#video-cover').attr('poster', image);
    $('#video-cover').attr('src', src);
  });





  var mb = myBrowser();
  if ("IE" == mb) {

  }
  if ("FF" == mb) {

  }
  var isLoaded = false;

  if ("Chrome" == mb) {
    if (!isLoaded) {
      $('head').append("<link rel='stylesheet' href='./assets/style/video.css' media='screen'>");
    }
    isLoaded = true;

  }
  if ("Opera" == mb) {

  }
  if ("Safari" == mb) {

  }


  function myBrowser(){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1;
    if (isOpera) {
        return "Opera"
    }; //判断是否Opera浏览器
    if (userAgent.indexOf("Firefox") > -1) {
        return "FF";
    } //判断是否Firefox浏览器
    if (userAgent.indexOf("Chrome") > -1){
      return "Chrome";
    }
    if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    } //判断是否Safari浏览器
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
        return "IE";
    }; //判断是否IE浏览器
  }

});
