let questions = [
    {
        "question": "Zu welchem Schriftzeichen gehört 你好 zu?",
        "answer_1": "Indische Schriftzeichen",
        "answer_2": "Arabische Schriftzeichen",
        "answer_3": "Chinesische Schriftzeichen",
        "answer_4": "Japanische Schriftzeichen",
        "right_answer": "3"
    },
    {
        "question": "Zu welchem Schriftzeichen gehört こんにちは zu?",
        "answer_1": "Arabische Schriftzeichen",
        "answer_2": "Japanische Schriftzeichen",
        "answer_3": "Indische Schriftzeichen",
        "answer_4": "Chinesische Schriftzeichen",
        "right_answer": "2"
    },
    {
        "question": "Zu welchem Schriftzeichen gehört नमस्ते zu?",
        "answer_1": "Russische Schriftzeichen",
        "answer_2": "Chinesische Schriftzeichen",
        "answer_3": "Arabische Schriftzeichen",
        "answer_4": "Indische Schriftzeichen",
        "right_answer": "4"
    },
    {
        "question": "Zu welchem Schriftzeichen gehört مرحبًا zu?",
        "answer_1": "Japanische Schriftzeichen",
        "answer_2": "Chinesische Schriftzeichen",
        "answer_3": "Arabische Schriftzeichen",
        "answer_4": "Indische Schriftzeichen",
        "right_answer": "3"
    },
    {
        "question": "Zu welchem Schriftzeichen gehört Привет zu?",
        "answer_1": "Russische Schriftzeichen",
        "answer_2": "Chinesische Schriftzeichen",
        "answer_3": "Arabische Schriftzeichen",
        "answer_4": "Indische Schriftzeichen",
        "right_answer": "1"
    },
    {
        "question": "Zu welchem Schriftzeichen gehört สวัสดี zu?",
        "answer_1": "Arabische Schriftzeichen",
        "answer_2": "Indische Schriftzeichen",
        "answer_3": "Chinesische Schriftzeichen",
        "answer_4": "Thailändische Schriftzeichen",
        "right_answer": "4"
    },
    {
        "question": "Zu welchem Schriftzeichen gehört 안녕하세요 zu?",
        "answer_1": "Arabische Schriftzeichen",
        "answer_2": "Koreanische Schriftzeichen",
        "answer_3": "Chinesische Schriftzeichen",
        "answer_4": "Japanische Schriftzeichen",
        "right_answer": "2"
    },
];

let currentQuestion = 0;
let rightanswers_total = 0;

function init() {
    document.getElementById('max_questions').innerHTML = questions.length;
    ShowQuestion();
}

function ShowQuestion() {
    let Question; 

    if(currentQuestion >= questions.length){
        document.getElementById('endScreen').style = "";
        document.getElementById('questionBody').style = "display: none;";
        document.getElementById('amoutof_questions').innerHTML = questions.length;
        document.getElementById('rightanswer_total').innerHTML = rightanswers_total;
    }else
    {
        Question = questions[currentQuestion];
        document.getElementById('ask').innerHTML = Question['question'];
        document.getElementById('answer1').innerHTML = Question['answer_1'];
        document.getElementById('answer2').innerHTML = Question['answer_2'];
        document.getElementById('answer3').innerHTML = Question['answer_3'];
        document.getElementById('answer4').innerHTML = Question['answer_4'];
        document.getElementById('current_question').innerHTML = currentQuestion + 1;

        let percent = Math.floor((currentQuestion / questions.length) * 100);
        document.getElementById('progressbar').innerHTML = `${percent}%`;
        document.getElementById('progressbar').style = `width: ${percent}%`;
    }
}

function answer(selection){
    let Question = questions[currentQuestion];
    let selectionNummer = selection.slice(-1);
    if(selectionNummer == Question['right_answer']){
        document.getElementById(selection).parentNode.classList.add("bg-success");
        document.getElementById(selection).parentNode.classList.add("text-white");
        rightanswers_total++;
    } else {
        for(let i = 1; i <= 4; i++){
            if(i == Question['right_answer']){
                document.getElementById('answer'+i).parentNode.classList.add("bg-success");
                document.getElementById('answer'+i).parentNode.classList.add("text-white");
            } else {
                document.getElementById('answer'+i).parentNode.classList.add("bg-danger");
                document.getElementById('answer'+i).parentNode.classList.add("text-white");
            }
        }
    }
    document.getElementById('next-question').disabled = false;
}

function next_question(){
    currentQuestion++;
    ShowQuestion();
    document.getElementById('next-question').disabled = true;

    for(let i = 1; i <= 4; i++){
        document.getElementById('answer'+i).parentNode.classList.remove("bg-danger");
        document.getElementById('answer'+i).parentNode.classList.remove("bg-success");
        document.getElementById('answer'+i).parentNode.classList.remove("text-white");
    }
}

function restart_quiz(){
    document.getElementById('endScreen').style = "display: none;";
    document.getElementById('questionBody').style = "";
    currentQuestion = 0;
    rightanswers_total = 0;
    ShowQuestion();
}