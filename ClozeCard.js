var ClozeCard = function (text, cloze) {
	this.text = text;
	this.cloze = cloze;
	this.fullText = this.text + this.cloze;
	this.error = function(){
		console.log('There has been an error');
	};
};

module.exports = ClozeCard;