// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// adding hidden class to error
const errorMessage = document.querySelector("#modal")
errorMessage.classList = "hidden"

document.addEventListener("DOMContentLoaded", function(){
  const likeHearts = document.querySelectorAll(".like-glyph")
  
  for(const element of likeHearts) {
    element.addEventListener("click", function(e){
      mimicServerCall()
      .then(updateHeart(e))
      .catch( error => showError(error))
    })
  }
  
})

// update heart on click
function updateHeart(e) {
  if (e.target.innerHTML == EMPTY_HEART) {
    e.target.innerHTML = FULL_HEART
  } else {
    e.target.innerHTML = EMPTY_HEART
  }
}

// error handling
function showError(error) {
  const errorStatus = document.querySelector("#modal-message")
  errorStatus.innerText = (error)
  errorMessage.appendChild(errorStatus)
  errorMessage.classList = ""
  setTimeout(function(){errorMessage.classList = "hidden"}, 5000)
}


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
