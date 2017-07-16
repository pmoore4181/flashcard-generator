var inquirer = require('inquirer');
var BasicCard = require('./BasicCard.js');


// New Basic Cards
var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");
var independenceYear = new BasicCard('In what year was the Declaration of Independence signed?', '1776');
var seatsInSenate = new BasicCard('How many seats are in the Senate?', '100');
var capitol = new BasicCard('Where is the capitol building?', 'Washington DC');



// Ask questions through terminal with inquirer
inquirer.prompt([
	{
		name: 'firstPresidentBasic',
		message: firstPresident.front,
		validate: function(answer) {
			var wrongAnswers = 0;
			if(answer === firstPresident.back) {
				return true;
			} else {
				console.log("\nTry again");
			}
		}
	},
	{
		name: 'independenceYearBasic',
		message: independenceYear.front,
		validate: function(answer) {
			if(answer === independenceYear.back) {
				return true;
			} else {
				console.log("\nTry again");
			}
		}
	},
	{
		name: 'seatsInSenateBasic',
		message: seatsInSenate.front,
		validate: function(answer) {
			if(answer===seatsInSenate.back) {
				return true;
			} else {
				console.log('\nTry Again');
			}
		}
	},
	{
		name: 'capitolBasic',
		message: capitol.front,
		validate: function(answer) {
			if(answer === capitol.back) {
				return true;
			} else {
				console.log('\nTry Again')
			}
		}
	}
]);