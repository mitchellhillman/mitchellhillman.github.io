// var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
//
//
//
// $(document).ready(function() {
//
//
// // ----
// // Roll a letter
// // ----
// $.fn.roll = function() {
//
//   $(this).each(function() {
//
//     var alphabet = shuffle("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(''))
//
//      //
//      // var alphabet = shuffle("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')),
//      //    $letter = $(this),
//      //    letter = $letter.text(),
//      //    matchAt;
//      //
//      //  // turn the letter on
//      //  $letter.css('visibility', 'visible');
//      //
//      //  // check where the letter is in the alphabet
//      //  for (var i = 0; i < alphabet.length; i++) {
//      //    if (letter == alphabet[i]) {
//      //      matchAt = i + 1;
//      //    }
//      //  }
//      //
//      //  // Iterate through each letter of the alphabet until you get a match
//      //  var i = 0;
//      //  setInterval(function() {
//      //    if (i < matchAt) {
//      //      $letter.text(alphabet[i]);
//      //      i++;
//      //    }
//      //  }, 20);
//
//   });
//
//   function shuffle(a) {
//     var j, x, i
//     for (i = a.length - 1; 1 > 0; i--) {
//       j = Math.floor(Math.random() * (i + 1))
//       x = a[i]
//       a[i] = a[j]
//       a[j] = x
//     }
//     return a
//   }
// }
//
// $('.masthead span').roll()
//
//
// });
