$(document).ready(function () {
    var questionCount = 0;
    var musicQuestions = [];
    var tvQuestions = [];
    var videoQuestions = [];
    var points = 0;
    var correctCard = '<div class="card p-3 vcenter bg-light border-success none"><h5 class="h1 mb-0">CORRECT</h5></div>'
    var incorrectCard = '<div class="card p-3 vcenter bg-light border-danger none"><h5 class="h1 mb-0">INCORRECT</h5></div>'

    console.log(questionCount);

    $('#current_points').html(points);

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
        questionCount++;
        var answer = "True";
        if (answer == musicQuestions[0]['correct_answer']) {
            points += 100;
            $('#current_points').html(points);
            $('.music-a100').html($(correctCard));
            alert('Correct!');
        }
        else {
            $('.music-a100').html($(incorrectCard));
            alert('Incorrect!');
        }
    });

    $('#mq100-false').click(function () {
        questionCount++;
        var answer = "False";
        if (answer == musicQuestions[0]['correct_answer']) {
            points += 100;
            $('#current_points').html(points);
            $('.music-a100').html($(correctCard));
            alert('Correct!');
        }
        else {
            $('.music-a100').html($(incorrectCard));
            alert('Incorrect!');
        }
    });

    $('#mq200-true').click(function () {
        questionCount++;
        var answer = "True";
        if (answer == musicQuestions[1]['correct_answer']) {
            points += 200;
            $('#current_points').html(points);
            $('.music-a200').html($(correctCard));
            alert('Correct!');
        }
        else {
            $('.music-a200').html($(incorrectCard));
            alert('Incorrect!');
        }
    });

    $('#mq200-false').click(function () {
        questionCount++;
        var answer = "False";
        if (answer == musicQuestions[1]['correct_answer']) {
            points += 200;
            $('#current_points').html(points);
            $('.music-a200').html($(correctCard));
            alert('Correct!');
        }
        else {
            $('.music-a200').html($(incorrectCard));
            alert('Incorrect!');
        }
    });

    $('#mq300-true').click(function () {
        questionCount++;
        var answer = "True";
        if (answer == musicQuestions[2]['correct_answer']) {
            points += 300;
            $('#current_points').html(points);
            $('.music-a300').html($(correctCard));
            alert('Correct!');
        }
        else {
            $('.music-a300').html($(incorrectCard));
            alert('Incorrect!');
        }
    });

    $('#mq300-false').click(function () {
        questionCount++;
        var answer = "False";
        if (answer == musicQuestions[2]['correct_answer']) {
            points += 300;
            $('#current_points').html(points);
            $('.music-a300').html($(correctCard));
            alert('Correct!');
        }
        else {
            $('.music-a300').html($(incorrectCard));
            alert('Incorrect!');
        }
    });

    $('#mq400-true').click(function () {
        questionCount++;
        var answer = "True";
        if (answer == musicQuestions[3]['correct_answer']) {
            points += 400;
            $('#current_points').html(points);
            $('.music-a400').html($(correctCard));
            alert('Correct!');
        }
        else {
            $('.music-a400').html($(incorrectCard));
            alert('Incorrect!');
        }
    });

    $('#mq400-false').click(function () {
        questionCount++;
        var answer = "False";
        if (answer == musicQuestions[3]['correct_answer']) {
            points += 400;
            $('#current_points').html(points);
            $('.music-a400').html($(correctCard));
            alert('Correct!');
        }
        else {
            $('.music-a400').html($(incorrectCard));
            alert('Incorrect!');
        }
    });

    $('#mq500-true').click(function () {
        questionCount++;
        var answer = "True";
        if (answer == musicQuestions[4]['correct_answer']) {
            points += 500;
            $('#current_points').html(points);
            $('.music-a500').html($(correctCard));
            alert('Correct!');
        }
        else {
            $('.music-a500').html($(incorrectCard));
            alert('Incorrect!');
        }
    });

    $('#mq500-false').click(function () {
        questionCount++;
        var answer = "False";
        if (answer == musicQuestions[4]['correct_answer']) {
            points += 500;
            $('#current_points').html(points);
            $('.music-a500').html($(correctCard));
            alert('Correct!');
        }
        else {
            $('.music-a500').html($(incorrectCard));
            alert('Incorrect!');
        }
    });

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
        questionCount++;
        var answer = "True";
        if (answer == tvQuestions[0]['correct_answer']) {
            points += 100;
            $('#current_points').html(points);
            $('.television-a100').html($(correctCard));
            alert('Correct!');
        }
        else {
            $('.television-a100').html($(incorrectCard));
            alert('Incorrect!');
        }
    });

    $('#tq100-false').click(function () {
        questionCount++;
        var answer = "False";
        if (answer == tvQuestions[0]['correct_answer']) {
            points += 100;
            $('#current_points').html(points);
            $('.television-a100').html($(correctCard));
            alert('Correct!');
        }
        else {
            $('.television-a100').html($(incorrectCard));
            alert('Incorrect!');
        }
    });

    $('#tq200-true').click(function () {
        questionCount++;
        var answer = "True";
        if (answer == tvQuestions[1]['correct_answer']) {
            points += 200;
            $('#current_points').html(points);
            $('.television-a200').html($(correctCard));
            alert('Correct!');
        }
        else {
            $('.television-a200').html($(incorrectCard));
            alert('Incorrect!');
        }
    });

    $('#tq200-false').click(function () {
        questionCount++;
        var answer = "False";
        if (answer == tvQuestions[1]['correct_answer']) {
            points += 200;
            $('#current_points').html(points);
            $('.television-a200').html($(correctCard));
            alert('Correct!');
        }
        else {
            $('.television-a200').html($(incorrectCard));
            alert('Incorrect!');
        }
    });

    $('#tq300-true').click(function () {
        questionCount++;
        var answer = "True";
        if (answer == tvQuestions[2]['correct_answer']) {
            points += 300;
            $('#current_points').html(points);
            $('.television-a300').html($(correctCard));
            alert('Correct!');
        }
        else {
            $('.television-a300').html($(incorrectCard));
            alert('Incorrect!');
        }
    });

    $('#tq300-false').click(function () {
        questionCount++;
        var answer = "False";
        if (answer == tvQuestions[2]['correct_answer']) {
            points += 300;
            $('#current_points').html(points);
            $('.television-a300').html($(correctCard));
            alert('Correct!');
        }
        else {
            $('.television-a300').html($(incorrectCard));
            alert('Incorrect!');
        }
    });

    $('#tq400-true').click(function () {
        questionCount++;
        var answer = "True";
        if (answer == tvQuestions[3]['correct_answer']) {
            points += 400;
            $('#current_points').html(points);
            $('.television-a400').html($(correctCard));
            alert('Correct!');
        }
        else {
            $('.television-a400').html($(incorrectCard));
            alert('Incorrect!');
        }
    });

    $('#tq400-false').click(function () {
        questionCount++;
        var answer = "False";
        if (answer == tvQuestions[3]['correct_answer']) {
            points += 400;
            $('#current_points').html(points);
            $('.television-a400').html($(correctCard));
            alert('Correct!');
        }
        else {
            $('.television-a400').html($(incorrectCard));
            alert('Incorrect!');
        }
    });

    $('#tq500-true').click(function () {
        questionCount++;
        var answer = "True";
        if (answer == tvQuestions[4]['correct_answer']) {
            points += 500;
            $('#current_points').html(points);
            $('.television-a500').html($(correctCard));
            alert('Correct!');
        }
        else {
            $('.television-a500').html($(incorrectCard));
            alert('Incorrect!');
        }
    });

    $('#tq500-false').click(function () {
        questionCount++;
        var answer = "False";
        if (answer == tvQuestions[4]['correct_answer']) {
            points += 500;
            $('#current_points').html(points);
            $('.television-a500').html($(correctCard));
            alert('Correct!');
        }
        else {
            $('.television-a500').html($(incorrectCard));
            alert('Incorrect!');
        }
    });

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
        questionCount++;
        var answer = "True";
        if (answer == videoQuestions[0]['correct_answer']) {
            points += 100;
            $('#current_points').html(points);
            $('.video-a100').html($(correctCard));
            alert('Correct!');
        }
        else {
            $('.video-a100').html($(incorrectCard));
            alert('Incorrect!');
        }
    });

    $('#vq100-false').click(function () {
        questionCount++;
        var answer = "False";
        if (answer == videoQuestions[0]['correct_answer']) {
            points += 100;
            $('#current_points').html(points);
            $('.video-a100').html($(correctCard));
            alert('Correct!');
        }
        else {
            $('.video-a100').html($(incorrectCard));
            alert('Incorrect!');
        }
    });

    $('#vq200-true').click(function () {
        questionCount++;
        var answer = "True";
        if (answer == videoQuestions[1]['correct_answer']) {
            points += 200;
            $('#current_points').html(points);
            $('.video-a200').html($(correctCard));
            alert('Correct!');
        }
        else {
            $('.video-a200').html($(incorrectCard));
            alert('Incorrect!');
        }
    });

    $('#vq200-false').click(function () {
        questionCount++;
        var answer = "False";
        if (answer == videoQuestions[1]['correct_answer']) {
            points += 200;
            $('#current_points').html(points);
            $('.video-a200').html($(correctCard));
            alert('Correct!');
        }
        else {
            $('.video-a200').html($(incorrectCard));
            alert('Incorrect!');
        }
    });

    $('#vq300-true').click(function () {
        questionCount++;
        var answer = "True";
        if (answer == videoQuestions[2]['correct_answer']) {
            points += 300;
            $('#current_points').html(points);
            $('.video-a300').html($(correctCard));
            alert('Correct!');
        }
        else {
            $('.video-a300').html($(incorrectCard));
            alert('Incorrect!');
        }
    });

    $('#vq300-false').click(function () {
        questionCount++;
        var answer = "False";
        if (answer == videoQuestions[2]['correct_answer']) {
            points += 300;
            $('#current_points').html(points);
            $('.video-a300').html($(correctCard));
            alert('Correct!');
        }
        else {
            $('.video-a300').html($(incorrectCard));
            alert('Incorrect!');
        }
    });

    $('#vq400-true').click(function () {
        questionCount++;
        var answer = "True";
        if (answer == videoQuestions[3]['correct_answer']) {
            points += 400;
            $('#current_points').html(points);
            $('.video-a400').html($(correctCard));
            alert('Correct!');
        }
        else {
            $('.video-a400').html($(incorrectCard));
            alert('Incorrect!');
        }
    });

    $('#vq400-false').click(function () {
        questionCount++;
        var answer = "False";
        if (answer == videoQuestions[3]['correct_answer']) {
            points += 400;
            $('#current_points').html(points);
            $('.video-a400').html($(correctCard));
            alert('Correct!');
        }
        else {
            $('.video-a400').html($(incorrectCard));
            alert('Incorrect!');
        }
    });

    $('#vq500-true').click(function () {
        questionCount++;
        var answer = "True";
        if (answer == videoQuestions[4]['correct_answer']) {
            points += 500;
            $('#current_points').html(points);
            $('.video-a500').html($(correctCard));
            alert('Correct!');
        }
        else {
            $('.video-a500').html($(incorrectCard));
            alert('Incorrect!');
        }
    });

    $('#vq500-false').click(function () {
        questionCount++;
        var answer = "False";
        if (answer == videoQuestions[4]['correct_answer']) {
            points += 500;
            $('#current_points').html(points);
            $('.video-a500').html($(correctCard));
            alert('Correct!');
        }
        else {
            $('.video-a500').html($(incorrectCard));
            alert('Incorrect!');
        }
    });
});