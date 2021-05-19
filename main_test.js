// https://www.onlinegdb.com/online_c++_compiler
// https://www.youtube.com/watch?v=PkZNo7MFNFg
//
//	https://www.youtube.com/watch?v=IsAoIqnNia4&list=PLfu_Bpi_zcDOtpXhhxL-P1wu0VkwNRXwC
// 1:09:50
//var age = prompt('what is your age ?')
//console.log(age)
//
//if ((age >- 18) && (age <= 35)){
//	console.log('target')
//} else{
//	console.log('wrong')
//}
//
//
//
//ar cout = 0;
//
//unction card_counter(card){
//
//if (!(isNaN(card))){
//	card = +card
//}
//
//console.log(card);
//switch(card){
//	case 2:
//	case 3:
//	case 4:
//	case 5:
//	case 6:
//		cout++;
//		break;
//	case 10:
//	case "J":
//	case "Q":
//	case "K":
//	case "A":
//		cout--;
//		break;
//}
//var holdbet = "Hold";
//if (cout > 0){
//	holdbet = 'Bet';
//}
//
//return cout + " " + holdbet;
//
//
//
//or (var i = 0; i < 10; i++){
//var c = prompt("chise a card?\n for the " + i + " out of 10")
//console.log(card_counter(c));
//


var aDog = {
	"name":"Camper",
	"legs":4,
	"tails":1,
	"friends":["everything!"],
};






















function getTextFromInputBox(){
	var inputText = document.getElementById('inputtext').value;  
	
	
	var regex = /\w+\b'\w+|[\w]+|\W/gm;
	// const str = `i am a cat`;
	let m;
	var spisykOtDumi = []

	while ((m = regex.exec(inputText)) !== null) {
		// This is necessary to avoid infinite loops with zero-width matches
		if (m.index === regex.lastIndex) {
			regex.lastIndex++;
		}
		
		// The result can be accessed through the `m`-variable.
		m.forEach((match, groupIndex) => {
			//console.log(`Found match, group ${groupIndex}: ${match}`);
			spisykOtDumi.push(match)
		});
	}
	console.log(spisykOtDumi)
	
}





















