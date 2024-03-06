var questions = [
    {
    "question": "I like to work with cars",
    "result":"R"
},
{
    "question": "I like to do puzzle",
    "result":"I"
},
{
    "question": "I am good at working independently",
    "result":"A"
},
{
    "question": "I like to work in teams",
    "result":"S"
},
{
    "question": "I am an ambitious person, I set goals for myself",
    "result":"E"
},
{
    "question": "I like to organize things,(files, desks/offices)",
    "result":"C"
},
{
    "question": "I like to build things",
    "result":"R"
},
{
    "question": "I like to read about art and music",
    "result":"A"
},
{
    "question": "I like to have clear instructions to follow",
    "result":"C"
},
{
    "question": "I like to try to influence or persuade people",
    "result":"E"
},
{
    "question": "I like to do experiments",
    "result":"I"
},
{
    "question": "I like to teach or train people",
    "result":"S"
},
{
    "question": "I like trying to help people solve their problem",
    "result":"S"
},
{
    "question": "I like to take care of animals",
    "result":"R"
},
{
    "question": " I wouldn’t mind working 8 hours per day in an office",
    "result":"C"
},
{
    "question": "I like selling things",
    "result":"E"
},
{
    "question": "I enjoy creative writing",
    "result":"A"
},
{
    "question": "I enjoy science",
    "result":"I"
},
{
    "question": "I am quick to take on new responsibilities",
    "result":"E"
},
{
    "question": "I am interested in healing people",
    "result":"S"
},
{
    "question": "I enjoy trying to figure out how things work",
    "result":"I"
},
{
    "question": "I like putting things together or assembling things",
    "result":"R"
},
{
    "question": "I am a creative person",
    "result":"A"
},
{
    "question": "I pay attention to details",
    "result":"C"
},
{
    "question": "I like to do filing or typing",
    "result":"C"
},
{
    "question": "I like to analyze things (problems/situations)",
    "result":"I"
},
{
    "question": "I like to play instruments or sing",
    "result":"A"
},
{
    "question": "I enjoy learning about other cultures",
    "result":"S"
},
{
    "question": "I would like to start my own business",
    "result":"E"
},

{
    "question": "I like to cook",
    "result":"R"
},
{
    "question": "I like acting in plays",
    "result":"A"
},
{
    "question": "I am a practical person",
    "result":"R"
},
{
    "question": "I like working with numbers or charts",
    "result":"I"
},
{
    "question": "I like to get into discussions about issues",
    "result":"S"
},
{
    "question": "I am good at keeping records of my work",
    "result":"C"
},
{
    "question": "I like to lead",
    "result":"E"
},
{
    "question": "I like working outdoors",
    "result":"R"
},
{
    "question": "I would like to work in an office",
    "result":"C"
},
{
    "question": "I’m good at math",
    "result":"I"
},
{
    "question": "I like helping people",
    "result":"S"
},
{
    "question": "I like to draw",
    "result":"A"
},
{
    "question": "I like to give speeches",
    "result":"E"
}
];

// raisec = [{"res":"R","points":0}, {"res":"I","points":0}, {"res":"A","points":0}, 
// {"res":"S","points":0}, {"res":"E","points":0}, {"res":"C","points":0}];

raisec = {
    "R" : 0,
    "I": 0,
    "A":0,
    "S":0,
    "E":0,
    "C":0
}

var question = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
// 
// var finish = document.getElementById("finish");
var currrentQues = 0;
var totalQuestions = questions.length;
var container = document.getElementById("container");
// console.log(totalQuestions);

function startTest()
{
    var t = document.getElementById("raisec");
    t.style.display="block"
    var s = document.getElementById("start");
    s.style.display="none";
    var n = document.getElementById("nextBtn");
    n.style.display="block"
}
function loadQues(index)
{
    var data = questions[index];
    question.textContent = (index+1) + '. ' + data.question;
    option1.textContent = "Agree";
    option2.textContent = "Disagree";
    var selectedOption = document.querySelector('#container input[type=radio]:checked');
    // selectedOption.checked  = false;
    
}


loadQues(currrentQues);



function nextQues(){
    var selectedOption = document.querySelector('#container input[type=radio]:checked');
    if(!selectedOption){
        alert("Please select one answer!");
        return false;
    }
    if(selectedOption.value === "agree"){
        // console.log(selectedOption.value);
        var a = questions[currrentQues].result
        raisec[a]++;
    }
    console.log(raisec);
    
    currrentQues++;
    if(currrentQues === totalQuestions-1){
        var t = document.getElementById("finish");
        var nextBtn = document.getElementById("nextBtn");
        // nextBtn.textContent = "FINISH"
        t.style.display="flex";
        nextBtn.style.display="none";
    }
    if(currrentQues === totalQuestions){
        evaluation();
    }
    loadQues(currrentQues);
    selectedOption.checked  = false;
}
function evaluation()
{
    var t = document.getElementById("raisec");
    t.style.display="none"
    var f = document.getElementById("finish");
    f.style.display="none"
    const entries = Object.entries(raisec);
const sortedEntries = entries.sort((a, b) => b[1] - a[1]);
const topThree = sortedEntries.slice(0, 3);
const result = Object.fromEntries(topThree);
var top = Object.keys(result)
var int = document.getElementById("interestCode");
var testResult = document.getElementById("result");
testResult.style.display="block";
var container1 = document.getElementById("container1");
var bg = document.getElementsByTagName("body");
// bg.style.backgroundImage="url('RIASEC1.png')";

container1.style.display="block";
// container1.style.backgroundImage="url('RIASEC1.png')";
container.style.display="none"

var cardR = document.getElementById("cardR");
var cardI = document.getElementById("cardI");
var cardA = document.getElementById("cardA");
var cardS = document.getElementById("cardS");
var cardE = document.getElementById("cardE");
var cardC = document.getElementById("cardC");
console.log(top)
if("R" === top[0]||"R" === top[1]||"R" === top[2]){
    cardR.style.display="block";
}
if("I" === top[0]||"I" === top[1]||"I" === top[2]){
    cardI.style.display="block";
}
if("A" === top[0]||"A" === top[1]||"A" === top[2]){
    cardA.style.display="block";
}
if("S" === top[0]||"S" === top[1]||"S" === top[2]){
    cardS.style.display="block";
}
if("E" === top[0]||"E" === top[1]||"E" === top[2]){
    cardE.style.display="block";
}
if("C" === top[0]||"C" === top[1]||"C" === top[2]){
    cardC.style.display="block";
}
}