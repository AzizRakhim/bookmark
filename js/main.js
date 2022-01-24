let elQuestionBtn = document.getElementById('questionBtn');
let elQuestionBtnTwo = document.getElementById('questionBtnTwo');
let elQuestionBtnThree = document.getElementById('questionBtnThree');
let elQuestionBtnFour = document.getElementById('questionBtnFour');
let elModalBox = document.getElementById('modalBox');
let elModalBoxTwo = document.getElementById('modalBoxTwo');
let elModalBoxThree = document.getElementById('modalBoxThree');
let elModalBoxFour = document.getElementById('modalBoxFour');
let elUpDown = document.getElementById('upDown');
let elUpDownTwo = document.getElementById('upDownTwo');
let elUpDownThree = document.getElementById('upDownThree');
let elUpDownFour = document.getElementById('upDownFour');

elQuestionBtn.addEventListener('click', function() {
    elModalBox.classList.toggle('show');
    elUpDown.classList.toggle('degree');
})

elQuestionBtnTwo.addEventListener('click', function() {
    elModalBoxTwo.classList.toggle('show');
    elUpDownTwo.classList.toggle('degree');
})

elQuestionBtnThree.addEventListener('click', function() {
    elModalBoxThree.classList.toggle('show');
    elUpDownThree.classList.toggle('degree');
})

elQuestionBtnFour.addEventListener('click', function() {
    elModalBoxFour.classList.toggle('show');
    elUpDownFour.classList.toggle('degree');
})