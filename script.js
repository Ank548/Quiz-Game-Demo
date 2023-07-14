let questions_array = [
    {
        "ques": "1) What kind of government dominated most of Europe during the 17th century?",
        "Option1": "Democracy",
        "Option2": "Constitutional Monarchy",
        "Option3": "Parliamentary Democracy",
        "Option4": "Absolute Monarchy",
        "Correct": "Absolute Monarchy"
    },
    {
        "ques": "2) Which actor played the role of Frank Booth in Blue Velvet?",
        "Option1": "Robert Mitchum",
        "Option2": "Dennis Hopper",
        "Option3": "Kevin Spacey",
        "Option4": "James Stewart",
        "Correct": "Dennis Hopper"
    },
    {
        "ques": "3) In which of Shakespeare's plays does the character 'Prospero' appear?",
        "Option1": "Othello",
        "Option2": "A Midsummer Night's Dream",
        "Option3": "The Tempest",
        "Option4": "Othello",
        "Correct": "The Tempest"
    },
    {
        "ques": "4) Which band includes 'Nico'?",
        "Option1": "The Velvet Underground",
        "Option2": "Marilyn Manson",
        "Option3": "Alice in Chains",
        "Option4": "Fall Out Boy",
        "Correct": "The Velvet Underground"
    },
    {
        "ques": "5) The Term 'Dutch Courage' Originally Came From The Consumption Of Which Drinkt?",
        "Option1": "Rum",
        "Option2": "Vodka",
        "Option3": "Gin",
        "Option4": "Avocaat",
        "Correct": "Gin"
    },
    {
        "ques": `<div style="text-align: center;">Do you want to Submit?</div>`
    }


];

let question = document.getElementsByClassName('question')[0].firstElementChild;
let option = document.getElementsByTagName('label');
let submit = document.getElementsByClassName('submit')[0];
let backbtn = document.getElementsByClassName('backbtn')[0];
let forwardbtn = document.getElementsByClassName('forwardbtn')[0];
let options = document.getElementsByClassName('options')[0].innerHTML;

let index = 0;
let attempt = 0;
let right = 0;
let total = questions_array.length;
let ans;
let data;
function loadquestion() {

    if (index == (questions_array.length)) {
        let final = confirm(`Do you really want to Submit?\nYou attemted ${attempt} out of ${total-1}`)
        if(final){
            return quizend()
        }
        else{
            index=questions_array.length-1
        }

        // return quizend()
    }
    if (questions_array.length==0) {
        alert('You have attempted all questions');
        return quizend()
    }
    
    reset()
    data = questions_array[index];
    question.innerHTML = `${data["ques"]}`;

    if (index == questions_array.length - 1) {
        document.getElementsByClassName('options')[0].innerHTML='';
    }
    else{
        document.getElementsByClassName('options')[0].innerHTML=options;
        option[0].lastElementChild.innerHTML = data["Option1"];
        option[1].lastElementChild.innerHTML = data["Option2"];
        option[2].lastElementChild.innerHTML = data["Option3"];
        option[3].lastElementChild.innerHTML = data["Option4"];
    }
}

loadquestion()

submit.addEventListener('click', getAnswer)
backbtn.addEventListener('click', back)
forwardbtn.addEventListener('click', forward)


function getAnswer() {
    if (index == questions_array.length - 1) {
    } else {
        answer()
        attempt++;
    }
    questions_array.splice(index, 1)
    loadquestion()
}

function answer() {
    Array.from(option).map((value, ind) => {

        if (option[ind].firstElementChild.checked) {
            ans = value.lastElementChild.innerHTML;
        }

    })

    data = questions_array[index];
    if (ans === data["Correct"]) {
        right++
    }
}

function quizend() {
    document.getElementsByClassName('container')[0].innerHTML = `
    <div><h2 style="margin-bottom: 20px;">The Quiz Ended </h2></div>
    <div><h2 style="margin-bottom: 20px;">You have attempted ${attempt} out of ${total - 1}</h2></div>
    <div><h2>Correct Answers ${right} out of ${total - 1}</h2></div>`
}

function reset() {
    Array.from(option).map((value) => {
        value.firstElementChild.checked = false;

    })
}


function back() {
    if (index > 0 && index < questions_array.length) {
        // console.log('back')
        index--
        loadquestion()
    }
}


function forward() {
    if (index >= 0 && index < (questions_array.length - 1)) {
        // console.log('forward')
        index++
        // console.log(index)
        loadquestion()
    }
}