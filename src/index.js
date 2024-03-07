const timeRemai = document.getElementById("time")
const buttonStart = document.getElementById("start-btn")
const toastDiv = document.querySelector('.toast')
const closeButton = document.querySelector('#close-toast')

const DURATION = 3; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
buttonStart.addEventListener("click", startCountdown)


// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  // Your code goes here ...
  let timer = setInterval(() => {
    if (remainingTime > 0) {
      timeRemai.textContent = remainingTime;
      remainingTime--;
    } else {
      clearInterval(timer)
      timeRemai.textContent = remainingTime;
      showToast()
    }
  }, 1000)
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const toastShow = toastDiv.classList
  toastShow.add('show');

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  closeButton.addEventListener("click", (event) => {
    toastShow.remove('show');
  })

}
