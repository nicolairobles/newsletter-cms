app.directive('quiza', function(quizAFactory, $localStorage) {
	return {
		restrict: 'AE',
		scope: {},
		templateUrl: '../../tpl/module-1/section-1/is-this-media/game.html',
		link: function(scope, elem, attrs) {

			scope.start = function() {
				scope.questionId = 0;
				scope.quizOver = false;
				scope.inProgress = true;

				// starts out true as default, so that it's not undefined
				scope.correctAns = true;
				scope.showChoices = true;
				scope.showExplanation = false;
				scope.showTryAgain = false;

				// number of questions in game
				scope.questions = quizAFactory.getQuestions();
				scope.questionCount = scope.questions.length;

				// create arrays to track answered and notAnswered questions
				scope.answeredQuestions = [];
				scope.notAnsweredQuestions = [];
				for (var i = 0; i < scope.questionCount; i++) {
					// create initial array based on number of questions
					scope.notAnsweredQuestions.push(i)
					console.log("notAnsweredQuestions: " +scope.notAnsweredQuestions)
				}

				// Get first question
				scope.getQuestion();
			};


			scope.reset = function() {
				scope.inProgress = false;
				scope.score = 0;
			}

			scope.getQuestion = function() {
				// current question
				console.log("current question: " + scope.questionId );
				console.log("correctAns: " + scope.correctAns );
				console.log("inProgress: " + scope.inProgress );

				// queries questionFactory for info on the questions
				var q = quizAFactory.getQuestion(scope.questionId);
				if(q) {
					scope.question = q.question;
					scope.options = q.options;
					scope.answer = q.answer;
					scope.explanation = q.explanation;
					scope.answerMode = true;
				} else {
					scope.quizOver = true;
					console.log("quizOver: " + scope.quizOver)
					// Set quiza_done to true in localStorage
					$localStorage.quiz.quiza_done = true;
				}
			};

			scope.checkAnswer = function(id) {
				console.log("checking answer")

				console.log("option id: "+ id)
				console.log("option value: "+ scope.options[id].value)

				var ans = id;

				if(ans == scope.options[scope.answer].id) {
					scope.score++;
					scope.correctAns = true;
					// increase size of answeredQuestions array
					scope.answeredQuestions.push(scope.questionId);
					console.log("answeredQuestions: " + scope.answeredQuestions)
					// decrease size of notAnsweredQuestions array
					scope.notAnsweredQuestions.pop();
					console.log("notAnsweredQuestions: " + scope.notAnsweredQuestions)

					scope.showExplanation = true;
					scope.showChoices = false;
					scope.showTryAgain = false;

				} else {
					scope.correctAns = false;
					scope.showTryAgain = true;
					setTimeout(function(){
						scope.$apply(function(){
					       console.log("try again disapperas")
							scope.showTryAgain = false;
							console.log(scope.showTryAgain)
					     });
					}, 750);
					console.log(scope.showTryAgain)
				}

				scope.answerMode = false;
			};


			scope.nextQuestion = function() {
				scope.questionId++;
				scope.getQuestion();
				scope.showExplanation = false;
				scope.showChoices = true;
			}

			scope.init = function() {
				console.log("init function");
      			// if quiz hasn't been played before, launch it immediately 
	      		if ( angular.isDefined($localStorage.quiz) && ($localStorage.quiz.quiza_done == false) ) {
				  	console.log("$localstorage.quiza_done: "+ $localStorage.quiz.quiza_done);
	      			scope.start();
				  	console.log("quiz initialized");
				}
				// if quiz has already been played, launch "Congrats" page with reset option 
				else if ( angular.isDefined($localStorage.quiz) && ($localStorage.quiz.quiza_done == true) ) {
					scope.quizOver = true;

				}
			};

			scope.reset();
			scope.init();
		}
	}
});

	// super simple service for quiz questions
	// each function returns a promise object 
	app.factory('quizAFactory', function() {
		var questions = [
			{
				question: "Which is the largest country in the world by population?",
				options: [{id:0, "value":"India"},{id:1, "value":"USA" },{id:2, "value":"China"},{id:3, "value":"Russia"}],
				explanation: "China has the world's largest population, followed by India, then USA.",
				answer: 2
			},
			{
				question: "When did the second world war end?",
				options: [{id:0, "value":"1945"},{id:1, "value":"1939" },{id:2, "value":"1944"},{id:3, "value":"1942"}],
				explanation: "The second world war ended in 1945 after the surrender of the Axis Powers.",
				answer: 0
			},
			{
				question: "Which was the first country to issue paper currency?",
				options: [{id:0, "value":"USA"},{id:1, "value":"France" },{id:2, "value":"Italy"},{id:3, "value":"China"}],
				explanation: "The Chinese dynasties, in what is now China, were the first to issue paper currency.",
				answer: 3
			},
			{
				question: "Which city hosted the 1996 Summer Olympics?",
				options: [{id:0, "value":"Atlanta"},{id:1, "value":"Sydney" },{id:2, "value":"Athens"},{id:3, "value":"Beijing"}],
				explanation: "Atlanta was the last American city to host the Olympics in 1996.",
				answer: 0
			},
			{	
				question: "Who invented the telephone?",
				options: [{id:0, "value":"Alber Einstein"},{id:1, "value":"Alexander Graham Bell" },{id:2, "value":"Isaac Newton"},{id:3, "value":"Marie Curie"}],
				explanation: "Alexander Graham Bell invented the telephone. Bell Atlantic, named after Bell, became the first telephone company, which is now Verizon.",
				answer: 1
			}
		];

		return {
			getQuestion: function(id) {
				if(id < questions.length) {
					return questions[id];
				} else {
					return false;
				}
			},
			getQuestions: function(){
				return questions;
			}
		};
	});


app.directive('quizb', function(quizBFactory) {
	return {
		restrict: 'AE',
		scope: {},
		templateUrl: '../../tpl/module-1/key-terminology/what-type-of-media-do-you-interact-with/game.html',
		link: function(scope, elem, attrs) {
			scope.start = function() {
				scope.id = 0;
				scope.quizOver = false;
				scope.inProgress = true;
				scope.getQuestion();
			};

			scope.reset = function() {
				scope.inProgress = false;
				scope.score = 0;
			}

			scope.getQuestion = function() {
				var q = quizBFactory.getQuestion(scope.id);
				if(q) {
					scope.question = q.question;
					scope.options = q.options;
					scope.answer = q.answer;
					scope.answerMode = true;
				} else {
					scope.quizOver = true;
				}
			};

			scope.checkAnswer = function() {
				if(!$('input[name=answer]:checked').length) return;

				var ans = $('input[name=answer]:checked').val();

				if(ans == scope.options[scope.answer]) {
					scope.score++;
					scope.correctAns = true;
				} else {
					scope.correctAns = false;
				}

				scope.answerMode = false;
			};

			scope.nextQuestion = function() {
				scope.id++;
				scope.getQuestion();
			}

			scope.reset();
		}
	}
});

	// super simple service for quiz questions
	// each function returns a promise object 
	app.factory('quizBFactory', function() {
		var questions = [
			{
				question: "Which is the largest country in the world by population?",
				options: ["India", "USA", "China", "Russia"],
				answer: 2
			},
			{
				question: "When did the second world war end?",
				options: ["1945", "1939", "1944", "1942"],
				answer: 0
			},
			{
				question: "Which was the first country to issue paper currency?",
				options: ["USA", "France", "Italy", "China"],
				answer: 3
			},
			{
				question: "Which city hosted the 1996 Summer Olympics?",
				options: ["Atlanta", "Sydney", "Athens", "Beijing"],
				answer: 0
			},
			{	
				question: "Who invented telephone?",
				options: ["Albert Einstein", "Alexander Graham Bell", "Isaac Newton", "Marie Curie"],
				answer: 1
			}
		];

		return {
			getQuestion: function(id) {
				if(id < questions.length) {
					return questions[id];
				} else {
					return false;
				}
			}
		};
	});