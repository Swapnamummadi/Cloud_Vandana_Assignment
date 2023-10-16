function reversedWords(str){

    let words = str.split(" ");
    let outputWord = " ";

    for(let i = 0; i < words.length; i++){

        word = words[i];
        reversedString = " ";
        for(let j = word.length-1; j >= 0; j--){

            reversedString += word.charAt(j);
        }
        outputWord += reversedString + " ";
    }
    console.log("The reverse of each word is :" + outputWord)
}
let inputstr = prompt("Enter the String");

reversedWords(inputstr)
