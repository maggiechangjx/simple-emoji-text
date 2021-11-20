//mport "style.css";

var printBtn = document.getElementById('print-btn');

var letterArr = {
   // how letters would look in a 5x6 pixel grid 
   'a':[[0,0,1,0,0],[0,1,0,1,0],[1,0,0,0,1],[1,1,1,1,1],[1,0,0,0,1],[1,0,0,0,1]],
   'b':[[1,1,1,1,0],[1,0,0,0,1],[1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,0]],
   'c':[[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,1],[0,1,1,1,0]],
   'd':[[1,1,1,0,0],[1,0,0,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,1,0],[1,1,1,0,0]],
   'e':[[1,1,1,1,1],[1,0,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,0,0,0,0],[1,1,1,1,1]],
   'f':[[1,1,1,1,1],[1,0,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0]],
   'g':[[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,0],[1,0,1,1,1],[1,0,0,0,1],[0,1,1,1,1]],
   'h':[[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1]],
   'i':[[1,1,1,1,1],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[1,1,1,1,1]],
   'j':[[0,1,1,1,1],[0,0,0,0,1],[0,0,0,0,1],[0,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]],
   'k':[[1,0,0,1,0],[1,0,1,0,0],[1,1,0,0,0],[1,0,1,0,0],[1,0,0,1,0],[1,0,0,0,1]],
   'l':[[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,1,1,1,1]],
   'm':[[1,0,0,0,1],[1,1,0,1,1],[1,0,1,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1]],
   'n':[[1,0,0,0,1],[1,1,0,0,1],[1,0,1,0,1],[1,0,0,1,1],[1,0,0,0,1],[1,0,0,0,1]],
   'o':[[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]],
   'p':[[1,1,1,1,0],[1,0,0,0,1],[1,1,1,1,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0]],
   'q':[[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,1,0],[0,1,1,0,1]],
   'r':[[1,1,1,1,0],[1,0,0,0,1],[1,1,1,1,0],[1,0,1,0,0],[1,0,0,1,0],[1,0,0,0,1]],
   's':[[0,1,1,1,0],[1,0,0,0,1],[0,1,0,0,0],[0,0,1,1,0],[1,0,0,0,1],[0,1,1,1,0]],
   't':[[1,1,1,1,1],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0]],
   'u':[[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]],
   'v':[[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0]],
   'w':[[1,0,0,0,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,1,0,1],[1,0,1,0,1],[0,1,0,1,0]],
   'x':[[1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0],[0,0,1,0,0],[0,1,0,1,0],[1,0,0,0,1]],
   'y':[[1,0,0,0,1],[1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0]],
   'z':[[1,1,1,1,1],[0,0,0,0,1],[0,0,1,1,0],[0,1,0,0,0],[1,0,0,0,0],[1,1,1,1,1]]
}

// for each letter in the word, get corresponding letter array
// draw out each letter with emoji, with the array as guide 

// iterate through each letter in string
// match with corresponding array 
// 1 = emoji, 0 = spaces 
// draw it 

function emojiLetter(arr, emoji) {
   // returns string of emojis and spaces that corresponds to a letter
   let string = "";
   
   for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length ; j++) {
         if (arr[i][j] == 1) {
            // add emoji
            string = string.concat(emoji);
         }
         else if (arr[i][j] == 0) {
            // add 4 spaces
            string = string.concat('&nbsp&nbsp&nbsp&nbsp&nbsp');
         }
      }
      string = string.concat('<br/>');
   }
   // console.log(string);
   return string
}

function emojiText(text, emoji) {
   // makes string of emoji letters
   let eText = '';

   for (let i = 0; i < text.length; i++) {
      let char = text.charAt(i).toLowerCase();
      let charArr = letterArr[char];
      let eChar = emojiLetter(charArr, emoji);
      eText = eText.concat(eChar + '<br/>');
   }
   //console.log(arr);
   return eText;
}

function printText() { 
   let emoji = document.getElementById('emoji').value;
   let text = document.getElementById('transform-text').value;

   document.getElementById('result').innerHTML = emojiText(text, emoji);;
   // console.log(text);
}

printBtn.addEventListener('click', printText);