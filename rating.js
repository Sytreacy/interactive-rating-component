let ratings = document.querySelectorAll(".rating");
let ratingNo;
function showActiveState(tag) {
  if (tag.classList.contains("inactive")) {
    tag.classList.remove("inactive");
    tag.classList.add("active");
  }
}

function deactivateState(tag) {
  if (tag.classList.contains("active")) {
    tag.classList.remove("active");
    tag.classList.add("inactive");
  }
}

function deactivateAll(ratings) {
  for (let i = 0; i < ratings.length; i++) {
    if (ratings[i].classList.contains("active")) {
      deactivateState(ratings[i]);
    }
  }
}

function showThanksDiv(number) {
  let main = document.getElementsByTagName("main")[0];
  let thanks = document.getElementsByClassName("thanks-wrapper")[0];
  ratingNo = document.getElementById("feedback");
  ratingNo.textContent = number;
  main.innerHTML = thanks.innerHTML;
}

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    deactivateAll(ratings);
    showActiveState(rating);
    ratingNo = rating.textContent;
  });
});

let button = document.getElementsByTagName("button")[0];
// button.addEventListener("click", showThanksDiv(ratingNo));
