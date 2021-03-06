
// var config = { apiKey: "AIzaSyAVpjKpAZiIL2Ntc4cY9NuUdpAnzkodSTM", authDomain: "comments-pedia-database.firebaseapp.com", databaseURL: "https://comments-pedia-database.firebaseio.com", projectId: "comments-pedia-database", storageBucket: "comments-pedia-database.appspot.com", messagingSenderId: "878167931410" }; 
// firebase.initializeApp(config);

// gumshoe.init({
//   selector: '#toc a',
// });

// making the sidebar adjustable

$('#toc').append('<div id="split-bar"></div>');

var min = 10;
var max = 3600;
var mainmin = 200;

var sidebarWidth = localStorage.getItem("sidebarWidth");

$('#toc').css("width", sidebarWidth);
$('#content').css("margin-left", sidebarWidth);

$('#split-bar').mousedown(function (e) {
  e.preventDefault();
  $(document).mousemove(function (e) {
      e.preventDefault();
      var x = e.pageX - $('#toc').offset().left;
      if (x > min && x < max && e.pageX < ($(window).width() - mainmin)) {  
        $('#toc').css("width", x);
        $('#content').css("margin-left", x);
        localStorage.setItem("sidebarWidth", x);
      }
  })
});
$(document).mouseup(function (e) {
  $(document).unbind('mousemove');
});



// animating scroll behavior of anchor links

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 300);
});

var panel = $('#mw-navigation #mw-panel');
var toc = $('#toc');

$(toc).append(panel);

$('#toc').wrapInner('<div class="viewport"></div>');

$('.toclevel-1').click(function(event){
  var target = $( event.target );
  if ( target.is( "li" ) ) {
    $(this).find('ul').toggleClass('hide-me')
  }
  
});


// copied from https://www.w3schools.com/howto/howto_js_collapsible.asp

// • need to make .toclevel-n collapsible 
//   • by adding the "collapsible" class to it 


$("div#toc.toc ul toclevel-1").addClass("collapsible");

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


var obj = {
  "element_tag": "a",
  "x": 300,
  "y": 40,
  "user_screen_resolution": 1440
}

$('body').append('<div id="toggleNavWiki"><div class="circle"></div></div>')

attachAnnotation(obj);

function attachAnnotation(obj) {
  $('body').append('<div id="navWiki1" class="nav-wiki-element"><div class="circle"></div><div class="nav-wiki-note"><p>This is a test for nav wiki elements</p></div></div>');
  $('#navWiki1').css({"left": obj.x, "top": obj.y});
}
