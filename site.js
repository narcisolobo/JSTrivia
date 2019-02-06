$(document).ready(function () {
    var questionCount = 0;
    var musicQuestions = [];
    var tvQuestions = [];
    var videoQuestions = [];
    var points = 0;
    var correctCard = '<div class="card p-3 vcenter bg-light border-success none"><h5 class="h1 mb-0">CORRECT</h5></div>';
    var incorrectCard = '<div class="card p-3 vcenter bg-light border-danger none"><h5 class="h1 mb-0">INCORRECT</h5></div>';

    function startGame () {
        populateQuestions ();
    }

    startGame ();

    function checkCompleteness() {
        if (questionCount >= 15) {
            $('#continue_button').show();
        }
    }

    $('.continue-button').click(function() {
        startGame();
        questionCount = 0;
    });

    function answerClick(answer, idx, qPoints, selector) {
        questionCount++;
        if (answer == musicQuestions[idx]['correct_answer']) {
            points += qPoints;
            $('#current_points').html(points);
            $(selector).html($(correctCard));
        }
        else {
            $(selector).html($(incorrectCard));
        }
        checkCompleteness();
    }

    $('#current_points').html(points);

    function populateQuestions (){
        $.get('https://opentdb.com/api.php?amount=5&category=12&difficulty=medium&type=boolean', populateMusic)
        function populateMusic(data) {
            for (let i = 0; i < data.results.length; i++) {
                var questionObj = {};
                var question = data.results[i]['question'];
                var correctAnswer = data.results[i]['correct_answer'];
                var incorrectAnswers = data.results[i]['incorrect_answers'];
                questionObj['question'] = question;
                questionObj['correct_answer'] = correctAnswer;
                questionObj['incorrect_answers'] = incorrectAnswers;
                musicQuestions[i] = questionObj;
            }
            $('.mq100').append(musicQuestions[0]['question']);
            $('.mq200').append(musicQuestions[1]['question']);
            $('.mq300').append(musicQuestions[2]['question']);
            $('.mq400').append(musicQuestions[3]['question']);
            $('.mq500').append(musicQuestions[4]['question']);
        }

        $.get('https://opentdb.com/api.php?amount=5&category=14&difficulty=medium&type=boolean', populateTelevision)
        function populateTelevision(data) {
            for (let i = 0; i < data.results.length; i++) {
                var questionObj = {};
                var question = data.results[i]['question'];
                var correctAnswer = data.results[i]['correct_answer'];
                var incorrectAnswers = data.results[i]['incorrect_answers'];
                questionObj['question'] = question;
                questionObj['correct_answer'] = correctAnswer;
                questionObj['incorrect_answers'] = incorrectAnswers;
                tvQuestions[i] = questionObj;
            }
            $('.tq100').append(tvQuestions[0]['question']);
            $('.tq200').append(tvQuestions[1]['question']);
            $('.tq300').append(tvQuestions[2]['question']);
            $('.tq400').append(tvQuestions[3]['question']);
            $('.tq500').append(tvQuestions[4]['question']);
        }

        $.get('https://opentdb.com/api.php?amount=5&category=15&difficulty=medium&type=boolean', populateVideo)
        function populateVideo(data) {
            for (let i = 0; i < data.results.length; i++) {
                var questionObj = {};
                var question = data.results[i]['question'];
                var correctAnswer = data.results[i]['correct_answer'];
                var incorrectAnswers = data.results[i]['incorrect_answers'];
                questionObj['question'] = question;
                questionObj['correct_answer'] = correctAnswer;
                questionObj['incorrect_answers'] = incorrectAnswers;
                videoQuestions[i] = questionObj;
            }
            $('.vq100').append(videoQuestions[0]['question']);
            $('.vq200').append(videoQuestions[1]['question']);
            $('.vq300').append(videoQuestions[2]['question']);
            $('.vq400').append(videoQuestions[3]['question']);
            $('.vq500').append(videoQuestions[4]['question']);
        }
    }

    // music question replacements
    $('.music-q100').click(function () {
        $('.music-q100').replaceWith($('.music-a100'));
    });
    $('.music-q200').click(function () {
        $('.music-q200').replaceWith($('.music-a200'));
    });
    $('.music-q300').click(function () {
        $('.music-q300').replaceWith($('.music-a300'));
    });
    $('.music-q400').click(function () {
        $('.music-q400').replaceWith($('.music-a400'));
    });
    $('.music-q500').click(function () {
        $('.music-q500').replaceWith($('.music-a500'));
    });

    // music question answer clicks
    $('#mq100-true').click(function () {
        answerClick('True', 0, 100, '.music-a100');
    });

    $('#mq100-false').click(function () {
        answerClick('False', 0, 100, '.music-a100');
    });

    $('#mq200-true').click(function () {
        answerClick('True', 0, 200, '.music-a200');
    });

    $('#mq200-false').click(function () {
        answerClick('False', 0, 200, '.music-a200');
    });

    $('#mq300-true').click(function () {
        answerClick('True', 0, 300, '.music-a300');
    });

    $('#mq300-false').click(function () {
        answerClick('False', 0, 300, '.music-a300');
    });

    $('#mq400-true').click(function () {
        answerClick('True', 0, 400, '.music-a400');
    });

    $('#mq400-false').click(function () {
        answerClick('False', 0, 400, '.music-a400');
    });

    $('#mq500-true').click(function () {
        answerClick('True', 0, 500, '.music-a500');
    });

    $('#mq500-false').click(function () {
        answerClick('False', 0, 500, '.music-a500');
    });

    // television question replacements
    $('.television-q100').click(function () {
        $('.television-q100').replaceWith($('.television-a100'));
    });
    $('.television-q200').click(function () {
        $('.television-q200').replaceWith($('.television-a200'));
    });
    $('.television-q300').click(function () {
        $('.television-q300').replaceWith($('.television-a300'));
    });
    $('.television-q400').click(function () {
        $('.television-q400').replaceWith($('.television-a400'));
    });
    $('.television-q500').click(function () {
        $('.television-q500').replaceWith($('.television-a500'));
    });

    // television question answer clicks
    $('#tq100-true').click(function () {
        answerClick('True', 0, 100, '.television-a100');
    });

    $('#tq100-false').click(function () {
        answerClick('False', 0, 100, '.television-a100');
    });

    $('#tq200-true').click(function () {
        answerClick('True', 0, 200, '.television-a200');
    });

    $('#tq200-false').click(function () {
        answerClick('False', 0, 200, '.television-a200');
    });

    $('#tq300-true').click(function () {
        answerClick('True', 0, 300, '.television-a300');
    });

    $('#tq300-false').click(function () {
        answerClick('False', 0, 300, '.television-a300');
    });

    $('#tq400-true').click(function () {
        answerClick('True', 0, 400, '.television-a400');
    });

    $('#tq400-false').click(function () {
        answerClick('False', 0, 400, '.television-a400');
    });

    $('#tq500-true').click(function () {
        answerClick('True', 0, 500, '.television-a500');
    });

    $('#tq500-false').click(function () {
        answerClick('False', 0, 500, '.television-a500');
    });

    // video game question replacements
    $('.video-q100').click(function () {
        $('.video-q100').replaceWith($('.video-a100'));
    });
    $('.video-q200').click(function () {
        $('.video-q200').replaceWith($('.video-a200'));
    });
    $('.video-q300').click(function () {
        $('.video-q300').replaceWith($('.video-a300'));
    });
    $('.video-q400').click(function () {
        $('.video-q400').replaceWith($('.video-a400'));
    });
    $('.video-q500').click(function () {
        $('.video-q500').replaceWith($('.video-a500'));
    });

    // video game question answer clicks
    $('#vq100-true').click(function () {
        answerClick('True', 0, 100, '.video-a100');
    });

    $('#vq100-false').click(function () {
        answerClick('False', 0, 100, '.video-a100');
    });

    $('#vq200-true').click(function () {
        answerClick('True', 0, 200, '.video-a200');
    });

    $('#vq200-false').click(function () {
        answerClick('False', 0, 200, '.video-a200');
    });

    $('#vq300-true').click(function () {
        answerClick('True', 0, 300, '.video-a300');
    });

    $('#vq300-false').click(function () {
        answerClick('False', 0, 300, '.video-a300');
    });

    $('#vq400-true').click(function () {
        answerClick('True', 0, 400, '.video-a400');
    });

    $('#vq400-false').click(function () {
        answerClick('False', 0, 400, '.video-a400');
    });

    $('#vq500-true').click(function () {
        answerClick('True', 0, 500, '.video-a500');
    });

    $('#vq500-false').click(function () {
        answerClick('False', 0, 500, '.video-a500');
    });
});