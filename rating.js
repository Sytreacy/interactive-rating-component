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

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    deactivateAll(ratings);
    showActiveState(rating);
    ratingNo = rating.textContent;
  });
});

let submitBtn = document.getElementsByTagName("button")[0];
submitBtn.addEventListener("click", () => {
  let main = document.getElementsByTagName("main")[0];
  let thanks = document.getElementsByClassName("thanks-wrapper")[0];
  ratingTag = document.getElementById("feedback");
  ratingTag.textContent = ratingNo;
  main.innerHTML = thanks.innerHTML;
});
