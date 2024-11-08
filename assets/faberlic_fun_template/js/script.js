jQuery(function (f) 
{ var element = f('#absolute_menu'); 
f(window).scroll(function () { element['fade' + (f(this).scrollTop() > 100 ? 'In' : 'Out')](500) })
 });
 
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
  $(document).ready(function(){
      $(".menu_li a").click(function() {
      $(".menu_li a").removeClass("active");
      $("html").removeClass("hidden");
      $("body").removeClass("hidden");
      $(this).addClass("active");
      $(".mobile").removeClass("active");
    });
});
}
$(document).ready(function(){
    $(".mobule_menu").click(function() {
      $(".mobile").removeClass("active");
      $(".mobile").addClass("active");
      $("body").addClass("hidden");
      $("html").addClass("hidden");
    });
});
$(document).ready(function(){
    $(".close").click(function() {
      $(".mobile").removeClass("active");
      $("body").removeClass("hidden");
      $("html").removeClass("hidden");
    });
});
