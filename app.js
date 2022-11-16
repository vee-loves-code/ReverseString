function reverseString() {
    var newString = " ";
    var str = prompt("type a word");
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; 
    }
    alert(newString);
}
reverseString();

