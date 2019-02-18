$(document).ready(function() {
    //each question's content contained in these objects
    var questionOne = {
        questionDirections: "Fill in the blank with the missing lyric:",
        questionText: "Chilly with enough bail money to free a big Willie. High stakes, I got more at stake than ___________",
        answerA: "a) " + "Biggie",
        answerB: "b) " + "Philly",
        answerC: "c) " + "Free Willy",
        answerD: "d) " + "Lil Silly",
        correctAns: "B",
        info: "Correct answer: " + "b) " + "Philly",
        trackInfo: "From the track: 'Can't Knock the Hustle'",
        image: "assets/images/philly_steak.jpg",
    };

    var questionTwo = {
        questionDirections: "Fill in the blank with the missing lyric:",
        questionText: "I wear black a lot, in the Ac, act a lot. Got matchin' ___________, a huge Magnavox",
        answerA: "a) " + "VCRs",
        answerB: "b) " + "Shoes",
        answerC: "c) " + "Cars",
        answerD: "d) " + "DVRs",
        correctAns: "A",
        info: "Correct answer: " + "a) " + "VCRs",
        trackInfo: "From the track: 'Politics As Usual'",
        image: "assets/images/matching_vcrs.jpeg",
    };
    var questionThree = {
        questionDirections: "Fill in the blank with the missing lyric:",
        questionText: "Time to separate the pros from the cons. The platinum from the bronze. That butter-soft @#$% from that leather on the ________",
        answerA: "a) " + "Le Mans",
        answerB: "b) " + "Dons",
        answerC: "c) " + "Moms",
        answerD: "d) " + "Fonz",
        correctAns: "D",
        info: "Correct answer: " + "d) " + "Fonz",
        trackInfo: "From the track: 'Brooklyn's Finest'",
        image: "assets/images/the_fonz_square.jpg",
    };
    var questionFour = {
        questionDirections: "Fill in the blank with the missing lyric:",
        questionText: "Life ills poisoned my body, I used to say @#$% mic skills. I never prayed to God, I prayed to ________",
        answerA: "a) " + "Nas",
        answerB: "b) " + "Rakim",
        answerC: "c) " + "Gotti",
        answerD: "d) " + "Agnolotti",
        correctAns: "C",
        info: "Correct answer: " + "c) " + "Gotti",
        trackInfo: "From the track: 'D'Evils'",
        image: "assets/images/gotti.jpeg",
    };
    var questionFive = {
        questionDirections: "Fill in the blank with the missing lyric:",
        questionText: "Let's do this, it gets tedious.  So I keep one eye open like ________",
        answerA: "a) " + "CBS",
        answerB: "b) " + "TBS",
        answerC: "c) " + "WPIX",
        answerD: "d) " + "PBS",
        correctAns: "A",
        info: "Correct answer: " + "a) " + "CBS",
        trackInfo: "From the track 'Can I Live'",
        image: "assets/images/CBS_logo.jpg",
    };
    var questionSix = {
        questionDirections: "Fill in the blank with the missing lyric:",
        questionText: "The Soviet, the Unified steady flow.  You already know: you light, I'm heavy, roll heavy dough.  Mic-macheted your flow, your paper falls slow like confetti.  Mine's a steady grow, _________",
        answerA: "a) " + "perico",
        answerB: "b) " + "amigo",
        answerC: "c) " + "politico",
        answerD: "d) " + "you know",
        correctAns: "A",
        info: "Correct answer: " + "a) " + "perico",
        trackInfo: "From the track 'Dead Presidents II'",
        image: "assets/images/perico.jpg",
    };
    var questionSeven = {
        questionDirections: "Fill in the blank with the missing lyric:",
        questionText: "I make moves that remove pebbles out of ______",
        answerA: "a) " + "grooves",
        answerB: "b) " + "smooth",
        answerC: "c) " + "dudes",
        answerD: "d) " + "shoes",
        correctAns: "D",
        info: "Correct answer: " + "d) " + "shoes",
        trackInfo: "From the track 'Bring It On'",
        image: "assets/images/pebble_in_shoe.jpg",
    };
    var questionEight = {
        questionDirections: "Fill in the blank with the missing lyric:",
        questionText: "The youth I used to be, soon to see a mill'in.  No more Big Willie, my game has grown.  Prefer you call me _______",
        answerA: "a) " + "Billy",
        answerB: "b) " + "Philly",
        answerC: "c) " + "William",
        answerD: "d) " + "Sean",
        correctAns: "C",
        info: "Correct answer: " + "c) " + "William",
        trackInfo: "From the track 'Can I Live'",
        image: "assets/images/william.jpg",
    };
    var questionNine = {
        questionDirections: "Fill in the blank with the missing lyric:",
        questionText: "This is the number one rule for your set.  In order to survive, gotta learn to live with _________",
        answerA: "a) " + "no regrets",
        answerB: "b) " + "regrets",
        answerC: "c) " + "the best",
        answerD: "d) " + "no pets",
        correctAns: "B",
        info: "Correct answer: " + "b) " + "regrets",
        trackInfo: "From the track 'Regrets'",
        image: "assets/images/jayz_ace.jpg",
    };
    var questionTen = {
        questionDirections: "Fill in the blank with the missing lyric:",
        questionText: "Make me wanna holler back at the crib in the sauna.  Prayin' my people bailed out like _________",
        answerA: "a) " + "Comcast",
        answerB: "b) " + "Cablevision",
        answerC: "c) " + "Spectrum",
        answerD: "d) " + "Time Warner",
        correctAns: "D",
        info: "Correct answer: " + "d) " + "Time Warner",
        trackInfo: "From the track 'Regrets'",
        image: "assets/images/time-warner-center.jpg",
    };

    //add question object to an array
    var questionBank = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen];
    //set baseline global variable values
    var count = 0;
    var correctTotal = 0;
    var incorrectTotal = 0;
    var questionsRemaining = 10;
    
    //hiding buttons that are not necessary at start but are necessary later
    $("#next-question-btn").hide();
    $(".answer-button").hide();
    $("#restart-game-btn").hide();
    $("#current-question").hide();

    //function to display the content necessary for each trivia question
    function displayQuestion() {
        $(".answer-button").show();
        $("#next-question-btn").hide();
        $("#question-directions").text(questionBank[count].questionDirections);
        $("#current-question").show();
        $("#current-question").text(questionBank[count].questionText);
        $("#answer-a").text(questionBank[count].answerA);
        $("#answer-b").text(questionBank[count].answerB);
        $("#answer-c").text(questionBank[count].answerC);
        $("#answer-d").text(questionBank[count].answerD);
    }

    //function that moves user to following question and checks if game has ended. If ended, displays stats for the game.
    function nextQuestion() {
        count ++;
        questionsRemaining = 10 - count;
        $("#show-questions-remaining").text("Questions remaining: " + questionsRemaining);
        if (count < 10) {
            $("#question-display").show();
            displayQuestion();
        }
        else if (count >= 10) {
            var skippedTotal = 10 - (correctTotal + incorrectTotal);
            $("#correctTotal-display").text("Correct: " + correctTotal);
            $("#incorrectTotal-display").text("Incorrect: " + incorrectTotal);
            $("#skippedTotal-display").text("Skipped: " + skippedTotal);
            $("#next-question-btn").hide();
            $("#restart-game-btn").show();
        }
    }

    //function that shows answer inormation for each question, includeing whether user was correct or not.
    function displayAnswer() {
        $("#answer-display").text(questionBank[count].info);
        $("#answer-display").show();
        $("#image-display").html("<img src=" + questionBank[count].image + " width='400px'>");
        $("#image-display").show();
        $("#trackInfo-display").text(questionBank[count].trackInfo);
        $("#trackInfo-display").show();
        $("#next-question-btn").show();
    }

    //calls function from start button to begin the game and display first question
    $("#start-btn").on("click", function() {
        displayQuestion();
        startTimer(29.9*10);
        $("#start-btn").hide();
    });

    //calls function to show next question when button is clicked
    $("#next-question-btn").on("click", function() {
        nextQuestion();
        $("#image-display").hide();
        $("#trackInfo-display").hide();
        $("#answer-display").hide();
        $("#feedback").empty();

    });

    //calls function to show answer after user selects an answer choice
    $(".answer-button").on("click", function() {
        $("#question-display").hide();
        // $("#answer-display").show();
        displayAnswer();
        answerChoice = $(this).val();
        if (answerChoice === questionBank[count].correctAns) {
            $("#feedback").text("That's right!");
            correctTotal ++;
        } else {
            $("#feedback").text("Wrong");
            incorrectTotal ++;
        }
    });

    //calls function to restart game once user has reached the end of the game.
    $("#restart-game-btn").on("click", function() {
        location.reload();
    });

    //function that runs timer for the game
    function startTimer(duration) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            seconds = seconds < 10 ? "0" + seconds : seconds;
            $("#show-timer").text("Time remaining: " + minutes + ":" + seconds);
            if (--timer < 0) {
                count = 10;
                $("#show-timer").hide();
                $("#next-question-btn").show();
            }
        }, 1000);
    }
    
    //
    // $("#start-btn").on("click", function() {
    //     // startTimer(29.9*10);
    // });

});