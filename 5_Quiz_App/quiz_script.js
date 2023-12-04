/*
  TODO: 2. Select all elements needed
    * The form element (has the id `quiz-form`)
    * The answer inputs (have the class `answer`)
    * BONUS: The questions (have the class `question-item`)
    * BONUS: The alert (has the id `alert`)
*/

// TODO: 3. Create a submit event listener for the form that does the following.
//    1. Prevent the default behaviour
//    2. Get all selected answers (use the `checked` property on the input to determine if it is selected or not)
//    3. Loop through the selected answer to see if they are correct or not (Check the value of the answer to see if it is the string "true")
//    4. For each correct answer add the class `correct` to the parent with the class `question-item` and remove the class `incorrect`.
//    5. For each incorrect answer add the class `incorrect` to the parent with the class `question-item` and remove the class `correct`.
//    6. BONUS: Make sure unanswered questions show up as incorrect. The easiest way to do this is to add the incorrect class and removing the correct class from all question items before checking the correct answers
//    7. BONUS: If all answers are correct show the element with the id `alert` and hide it after one second (look into setTimeout) (use the class active to show the alert and remove the class to hide it)

const quizForm = document.querySelector('#quiz-form');
const answerInput = document.querySelectorAll('.answer');
// const answerInput = document.querySelectorAll('.answer:checked');
console.log(answerInput);
const submit = document.querySelector('button');

//Bonus
const questionItem = document.querySelectorAll('.question-item');
const alertModal = document.querySelector('#alert');

console.log(alertModal);

// console.log(ansSelection);

// quizForm.addEventListener('click', (e) => {
//   e.preventDefault();
//   answerInput.forEach((ans) => console.log(ans.value));
//   // console.log(answerInput.checked);
// });

quizForm.addEventListener('click', () => {
  // console.log(answerInput);
  for (const answer of answerInput) {
    console.log(answer.name);

    for (i = 1; 1 < 4; i++) {
      console.log(`answer.name-${i}`);
    }

    // if (answer.value === true) {
    //   break;
    // }
  }
  // if (answerInput.checked) {
  //   console.log(answerInput.value);
  // }
  //

  // answerInput.forEach((ans) => {
  //   if (ans.checked) {
  //     if (ans.value) {
  //       console.log(questionItem);
  //       questionItem.forEach((que) => {
  //         que.classList.add('correct');
  //         console.log(que);
  //       });
  //       //   questionItem.classList.remove('.incorrect');
  //     }
  //     // console.log(ans.value);
  //   }
  //   // ans.forEach((item) => console.log(item.value));
  // });
});

submit.addEventListener('click', (e) => {
  e.preventDefault();

  console.log('e.preventDefault');
});
