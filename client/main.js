const form = document.getElementById("commentForm");

async function fetchAndShowReviews() {
  const response = await fetch(
    "https://teched-week04-assignment.onrender.com/reviews"
  );
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

form.addEventListener("submit", submitButton);

async function submitButton(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData);

  try {
    const response = await fetch(
      "https://teched-week04-assignment.onrender.com/reviews",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formValues),
      }
    );

    const data = await response.json();

    if (data.success) {
      console.log("Comment uploaded to database");
      fetchAndShowReviews();
      form.reset(); //need to clear the form one submit
    } else {
      console.log("Error with database update.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
