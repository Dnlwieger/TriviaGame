


$('#start').on('click', function(){
trivia.setup();

$('#done').on('click', function(){

console.log("clicked!");
trivia.end();


})


})


// an object containing our questions, possible answers and correct answer.
var triviaQ =[{
	question:"In 'The Lion King', who was Simba's father?",
	answers:["Scar","Mufasa", "Simon", "Raffiki"],
	correctAnswer:"Mufasa"
},  {
	question:"In 'Toy Story', who was the voice actor for the character 'Woody'?",
	answers:["Sylvester Stallone", "Tim Allen", "Sigourney Weaver", "Tom Hanks"],
	correctAnswer:"Tom Hanks"
},  {
    question:"In 'The Emperor's New Groove', what is the teenage Emperor protagonist transformed into?",
	answers:["A Llama", "A Singing Crab", "A Clown Fish", "A Boston Terrier"],
	correctAnswer:"A Llama"
},  {
	question:"In 'The Little Mermaid', who is Ariel's best fishy friend?",
	answers:["Sebastian", "Nemo", "Flounder", "Iago"],
	correctAnswer:"Flounder"
},  {
	question:"In 'Alladin', who is the evil wizard antagonist?",
	answers:["Ursula", "Cruella de Vil", "Genie", "Jafar"],
	correctAnswer:"Jafar"
},	{
	question:"In 'The Beauty and the Beast', who is main antagonist?",
	answers:["The Beast", "Mor'du", "Gaston", "Hades"],
	correctAnswer:"Gaston"
},	{
	question:"In 'The Incredibles', who is the voice actor of the protagonist 'Bob'?",
	answers:["Jason Lee", "Craig T. Nelson", "Samuel L. Jackson", "Peter Sellers"],
	correctAnswer:"Craig T. Nelson"
},	{
	question:"In 'Finding Nemo', who helps Marlin the clown fish find his son?",
	answers:["Nala", "Moana", "Jasmine", "Dory"],
	correctAnswer:"Dory"
}];
//holders for the values that will change and get printed to the screen

	
// a countdown


var trivia = {
	counter: 5,
	correct: 0,
	incorrect: 0,
	 	countdown:function() {
	
			trivia.counter--;
			$('#counter').html(trivia.counter);
				if(trivia.counter<=0){
					trivia.end();
				}},

  setup: function()  {
		timer = setInterval(trivia.countdown,1000);
		$('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
	for (var i = 0; i < triviaQ.length; i++) {
			$('#start').remove();
			$('#subwrapper').append('<h2>' + triviaQ[i].question+'</h2>')
				for (var j = 0; j < triviaQ[i].answers.length; j++){
				$('#subwrapper').append("<input type='radio' name='question-"+ i +"value='' ' " + triviaQ[i].answers[j]+">"+triviaQ[i].answers[j]);

				}
	}
$('#subwrapper').append('<br><br><button id="done">Done</button>');
		
			
 },


	 end: function(){
	
	 $.each($('input[name="question-0"]:checked'),function(){
		if ($(this).val()==triviaQ[0].correctAnswer){
			trivia.correct++;
			console.log(this);
			} else {
			trivia.incorrect++;
			}
});
	 $.each($('input[name="question-1"]:checked'),function(){
		if ($(this).val()==triviaQ[1].correctAnswer){
			trivia.correct++;
			} else {
			trivia.incorrect++;
			}
});
	 $.each($('input[name="question-2"]:checked'),function(){
		if ($(this).val()==triviaQ[2].correctAnswer){
			trivia.correct++;
			} else {
			trivia.incorrect++;
			}
});
	 $.each($('input[name="question-3"]:checked'),function(){
		if ($(this).val()==triviaQ[3].correctAnswer){
			trivia.correct++;
			} else {
			trivia.incorrect++;
			}
});
	 $.each($('input[name="question-4"]:checked'),function(){
		if ($(this).val()==triviaQ[4].correctAnswer){
			trivia.correct++;
			} else {
			trivia.incorrect++;
			}
});
	 $.each($('input[name="question-5"]:checked'),function(){
		if ($(this).val()==triviaQ[5].correctAnswer){
			trivia.correct++;
			} else {
			trivia.incorrect++;
			}
});
	 $.each($('input[name="question-6"]:checked'),function(){
		if ($(this).val()==triviaQ[6].correctAnswer){
			trivia.correct++;
			} else {
			trivia.incorrect++;
			}
});
	 $.each($('input[name="question-7"]:checked'),function(){
		if ($(this).val()==triviaQ[7].correctAnswer){
			trivia.correct++;
			} else {
			trivia.incorrect++;
			}

			
}),
					
		this.result();
	
},
  result: function(){
	clearInterval(timer);
	$('#subwrapper h2' ).remove();
			$('#subwrapper').html("<h2>All done!</h2>");
			$('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
			$('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
			$('#subwrapper').append("<h3>Unanswered: "+(triviaQ.length-(this.incorrect+this.correct))+"</h3>");
}}

