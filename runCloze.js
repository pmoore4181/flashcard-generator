var inquirer = require('inquirer');
var ClozeCard = require('./ClozeCard.js');

// New Cloze Cards
var firstPresidentCloze = new ClozeCard(' ...was the first president of the United States', 'George Washington');
var independenceYearCloze = new ClozeCard(' ...was the year they signed the Declaration of Independence','1776');
var seatsInSenateCloze = new ClozeCard(' ...is the amount of seats in the US Senate', '100');
var capitolCloze = new ClozeCard(' ...is where the capitol building is', 'Washington DC');

// Ask questions through terminal with inquirer

inquirer.prompt([
	{
		name: 'firstPresidentClozeQ',
		message: firstPresidentCloze.text,
		validate: function(answer){
			if (answer === firstPresidentCloze.cloze) {
				console.log(firstPresidentCloze.fullText);
				return true;
			} else{
				console.log('\nTry again');
			}
		}	
	},
	{
		name: 'independenceYearClozeQ',
		message: independenceYearCloze.text,
		validate: function(answer) {
			if(answer === independenceYearCloze.cloze) {
				console.log(independenceYearCloze.fullText);
				return true;
			} else {
				console.log('\nTry again');
			}
		}
	},
	{
		name: 'seatsInSenateClozeQ',
		message: seatsInSenateCloze.text,
		validate: function(answer) {
			if(answer === seatsInSenateCloze.cloze) {
				console.log(seatsInSenateCloze.fullText);
				return true;
			} else {
				console.log('\nTry again');
			}
		}
	},
	{
		name: 'capitolClozeQ',
		message: capitolCloze.text,
		validate: function(answer) {
			if(answer === capitolCloze.cloze) {
				console.log(capitolCloze.fullText);
				return true;
			} else {
				console.log('\nTry again');
			}
		}
	}
])