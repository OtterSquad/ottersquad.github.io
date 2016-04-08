/*

Rules and Guidelines on Adding Taglines:
 - NO DRUG REFERENCES!
 - Nothing obviously obscene
 - Proper heading format (capitalize all words except common ones)

*/

var taglines = ["0tter $quad 4 Lyfe", "The Greatest Fam on Earth", "Long Live The Holy FSM!", "Some Resident Street Punks", "Welcome to the Hive Mind", "The End is Nigh", "Neo-L.A. Night Life", "Normal is B O R I N G", "We Don't Care", "Wild Animals Reside", "Bustin' a Move", "Boots to the Ceiling~", "Who Watches the Watchmen?", "<('-' <) <( '-' )> (> '-')>", "Remember the Dreamcast?", "Down 2 Ryd, Born 2 Dye", "Far out, man.", "We way out here.", "Watch the Word, with Perd", "Down with City Hall", "We Could Rule This City, Spiderman", "Daydreams @ Night", "Otters Never Die", "Pushin' Real Style", "Miss me?", "Can't stop me, foo'.", "EST 2015", "Flippin' your lunch tables~", "L0CALS ~ ALL ACCE$$", "Freedom Forever", "The Nightman Cometh", "Dayman: Fighter of the Nightman", "Jolly Cooperation", "ALEx is Useless", "Let me out of here", "Ua mwenyewe", "What is Love", "Make it Rain", "&#x1f41f; &nbsp; &#x1f41f;&#x1f41f; &nbsp; <span style=\"color: red;\">&#x1f41f;</span> &nbsp; <span style=\"color: blue;\">&#x1f41f;</span>", "Trouble on my Mind", "Sickeningly Slick", "Toast & Toast & Toast", "Don't Flop", "31337 H4X0RZ", "Rock & Rick Roll", "Earthbound from Mars", "Crash Landed", "Who Cares", "Kickflip", "Nose Grind", "Cookies & Cream", "Ribbit", "BOOM SHAKA LAKA", "F'Ting!", "Hangin' Out", "No Wimping Allowed", "Ouch"];
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
