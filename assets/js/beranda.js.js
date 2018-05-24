$(window).scroll(function () {
if ($(window).scrollTop() >= 50) {
$('#navbarutama').removeClass('navtransparant');
} else {
$('#navbarutama').addClass('navtransparant');
}
});