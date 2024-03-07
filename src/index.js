const timeRemai = document.getElementById("time")
const buttonStart = document.getElementById("start-btn")
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
      // showToast()
    }
  }, 1000)


  // ? On each interval tick, the remaining time (seconds) should be decreased by 1.
  // ? On each interval tick, the div#time element should be updated to display the remaining time.
  // ? When the remaining time reaches 0, the countdown timer should be stopped.
  // ? When the remaining time reaches 0, the showToast() function should be called to display a toast message to the user (you'll implement this function in the next iteration).

  // ?? The start button (#start-btn) should be disabled during the countdown using the disabled property, so that the user can't click it.


}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
