var taglines = ["0tter $quad 4 Lyfe", "The Greatest Fam on Earth", "Long Live The Holy FSM!", "Some Resident Street Punks", "Welcome to the Hive Mind", "The End is Nigh", "Neo-L.A. Night Life", "Normal is B O R I N G", "We Don't Care", "Wild Animals Reside", "Bustin' a Move", "Boots to the Ceiling~", "Who Watches the Watchmen?", "<('-' <) <( '-' )> (> '-')>", "Remember the Dreamcast?", "Down 2 Ryd, Born 2 Dye", "Far out, man.", "We way out here.", "Daydreams @ Night", "Otters Never Die", "Pushin' Real Style", "Miss me?", "Can't stop me, foo'.", "EST 2015", "Flippin' your lunch tables~", "L0CALS ~ ALL ACCE$$", "Freedom Forever"];
var rando = -1;
var currentTagline = -1;

function addTaglines() {
  if (currentTagline != -1) {
    $('#taglines').animateCss('bounceIn');
  }
  if (taglines.length > 1) {
    while (rando == currentTagline) {
      rando = Math.floor(Math.random() * taglines.length);
    }
    currentTagline = rando;
    document.getElementById('taglines').innerHTML = "<h2>" + taglines[rando] + "</h2>";
  }
  else if (taglines.length == 1) {
    document.getElementById('taglines').innerHTML = "<h2>" + taglines[0] + "</h2>"
  }
  else {
    document.getElementById('taglines').innerHTML = "<h2>Error: No taglines!</h2>";
  }
}

// animate.css stuff idek
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});