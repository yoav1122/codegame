
function startQuiz(){

function nextWord(quizWord){
  var right = "נכון! המשך למילה הבאה"
  var wrong = "טעות! נסה שוב"
  var greet = "שלום הגעת לכתב סתרים!"
    var word = prompt("מה המילה?")
  if (word === quizWord){
    alert(right)
  }
  else {
    alert(wrong)
    nextWord(quizWord)
  }
}



alert(greet + )
nextWord("נסיך")
nextWord("קטן")
nextWord("אותך")
nextWord("נשלח")

}
