const form = document.getElementById("commentForm");

async function fetchAndShowReviews() {
  const response = await fetch("http://localhost:6969/reviews");
  const reviewList = await response.json();
  console.log(reviewList);
  const reviewListDiv = document.getElementById("reviewsDiv");
  //blank out the div before populating with entries fetched from database
  reviewListDiv.innerHTML = "";

  //loop through the database entries fetched above
  reviewList.forEach(function (reviews) {
    const reviewDiv = document.createElement("div");

    reviewDiv.innerHTML = `<p>Username: ${reviews.username}, Comment: ${reviews.comment}, Score: ${reviews.score} </p>`;
    reviewListDiv.appendChild(reviewDiv);
  });
}

fetchAndShowReviews();
