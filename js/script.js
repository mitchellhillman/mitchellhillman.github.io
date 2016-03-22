$(document).ready(function() {


// ----
// Roll a letter
// ----
$.fn.roll = function() {
  
  $(this).each(function() {

     var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        $letter = $(this),
        letter = $letter.text(),
        matchAt;

      // Transform the alphabet
      alphabet = alphabet.split('');
      alphabet = shuffle(alphabet);
      
      // turn the letter on
      $letter.css('visibility', 'visible');
      
      // check where the letter is in the alphabet
      for (var i = 0; i < alphabet.length; i++) {
        if (letter == alphabet[i]) {
          matchAt = i + 1;
        }
      }
      
      // Iterate through each letter of the alphabet until you get a match
      var i = 0;
      setInterval(function() {
        if (i < matchAt) {
          $letter.text(alphabet[i]);
          i++;
        }
      }, 20);  

  });
  
  
  // Shuffle Array
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}


// ----
// Events
// ----
var $letters = $('span');

// Init Roll
$letters.roll();

// Random letter gets reset every now and then
(function loop() {
  var randomTime = Math.round(Math.random() * (3000 - 500)) + 500,
    randomLetter = Math.round(Math.random() * ($letters.length - 1)) + 1;
  setTimeout(function() {
    $('span:nth-child('+ randomLetter +')').roll();
    loop();  
  }, randomTime);
}());


	

});
