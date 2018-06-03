<script src='//production-assets.codepen.io/assets/common/stopExecutionOnTimeout-b2a7b3fe212eaa732349046d8416e00a9dec26eb7fd347590fbced3ab38af52e.js'></script><script src='https://cdnjs.cloudflare.com/ajax/libs/zepto/1.2.0/zepto.min.js'></script>
<script >var $container = $('.container')
// Matchs the "url(...)"
var bigBgSrc = $container.css('background-image').match(/url\((.+?)\)/i)

if (bigBgSrc) {
  // Removes quotations
  bigBgSrc = bigBgSrc[1].replace(/'|"/g, '')

  $('assets/img/hanan.jpg')
    .on('load', function () {
      $container.find('.thumbnail')
        .addClass('thumbnail--hide') // Hides thumbnail
    })
    .prop('src', bigBgSrc)
}