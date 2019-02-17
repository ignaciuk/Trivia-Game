$(document).ready(function() {

    var questionOne = {
        questionDirections: "Fill in the blank for the missing lyric:",
        questionText: "Chilly with enough bail money to free a big Willie. High stakes, I got more at stake than ___________",
        answerA: "a) " + "Biggie",
        answerB: "b) " + "Philly",
        answerC: "c) " + "Free Willy",
        answerD: "d) " + "Lil Silly",
        correctAns: "B",
        info: "b) " + "Philly",
        image: "assets/images/philly_steak.jpg",
    };

    var questionTwo = {
        questionDirections: "Fill in the blank for the missing lyric:",
        questionText: "I wear black a lot, in the Ac, act a lot. Got matchin' ___________, a huge Magnavox",
        answerA: "a) " + "VCRs",
        answerB: "b) " + "Shoes",
        answerC: "c) " + "Cars",
        answerD: "d) " + "DVRs",
        correctAns: "A",
        info: "a) " + "VCRs",
        image: "assets/images/matching_vcrs.jpeg",
    };
    var questionThree = {
        questionDirections: "Fill in the blank for the missing lyric:",
        questionText: "Time to separate the pros from the cons. The platinum from the bronze. That butter-soft @#$% from that leather on the ________",
        answerA: "a) " + "Le Mans",
        answerB: "b) " + "Dons",
        answerC: "c) " + "Moms",
        answerD: "d) " + "Fonz",
        correctAns: "D",
        info: "d) " + "Fonz",
        image: "assets/images/the_fonz.jpg",
    };
    var questionFour = {
        questionDirections: "Fill in the blank for the missing lyric:",
        questionText: "",
        answerA: "",
        answerB: "",
        answerC: "",
        answerD: "",
        correctAns: "",
        info: "",
        image: "",
    };
    var questionFive = {
        questionText: "",
        answerA: "",
        answerB: "",
        answerC: "",
        answerD: "",
        correctAns: "",
        info: "",
        image: "",
    };
    var questionSix = {
        questionText: "",
        answerA: "",
        answerB: "",
        answerC: "",
        answerD: "",
        correctAns: "",
        info: "",
        image: "",
    };
    var questionSeven = {
        questionText: "",
        answerA: "",
        answerB: "",
        answerC: "",
        answerD: "",
        correctAns: "",
        info: "",
        image: "",
    };
    var questionEight = {
        questionText: "",
        answerA: "",
        answerB: "",
        answerC: "",
        answerD: "",
        correctAns: "",
        info: "",
        image: "",
    };
    var questionNine = {
        questionText: "",
        answerA: "",
        answerB: "",
        answerC: "",
        answerD: "",
        correctAns: "",
        info: "",
        image: "",
    };
    var questionTen = {
        questionText: "",
        answerA: "",
        answerB: "",
        answerC: "",
        answerD: "",
        correctAns: "",
        info: "",
        image: "",
    };

    var questionBank = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen];
    var count = 0;
    var correctTotal = 0;
    var incorrectTotal = 0;
    var unansweredTotal = 0;

    console.log(questionBank[count].questionText);
    
    $(".answer-button").hide();

    function displayQuestion() {
        $(".answer-button").show();
        $("#question-directions").text(questionBank[count].questionDirections);
        $("#current-question").text(questionBank[count].questionText);
        $("#answer-a").text(questionBank[count].answerA);
        $("#answer-b").text(questionBank[count].answerB);
        $("#answer-c").text(questionBank[count].answerC);
        $("#answer-d").text(questionBank[count].answerD);
    }

    function nextQuestion() {
        count ++;
        $("#answer-display").hide();
        $("#question-display").show();
        displayQuestion();
    }

    function displayAnswer() {
        $("#answer-display").text(questionBank[count].info);
        $("#image-display").show();
        $("#image-display").html("<img src=" + questionBank[count].image + " width='400px'>");
    }

    $("#start").on("click", function() {
        displayQuestion();
    });

    $("#next-question").on("click", function() {
        nextQuestion();
        $("#image-display").hide();
    });

    $(".answer-button").on("click", function() {
        $("#question-display").hide();
        $("#answer-display").show();
        displayAnswer();
        answerChoice = $(this).val();
        if (answerChoice === questionBank[count].correctAns) {
            //show correctness here somehow
            correctTotal ++;
        } else {
            //show incorrectness here somehow
            incorrectTotal ++;
        }
        console.log("Num Correct: " + correctTotal + " Num Incorrect: " + incorrectTotal);
    });

});