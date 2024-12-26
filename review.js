// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeklfKOLl_3zIZ1sA81aqtWM3xikIbKas",
  authDomain: "mgkvp-website.firebaseapp.com",
  projectId: "mgkvp-website",
  storageBucket: "mgkvp-website.appspot.com",
  messagingSenderId: "306111041649",
  appId: "1:306111041649:web:1c51ba0f01dfa5d1000bd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

// Event Listener for Form Submission
document.getElementById('reviewForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission

  const name_ = document.getElementById('name').value.trim();
  const review = document.getElementById('review').value.trim();

  if (!name_ || !review) {
    alert("Please fill in both the name and review fields.");
    return;
  }

  // Insert data into Firebase
  set(ref(db, "New Year Project/" + name_), {
    Name: name_,
    Review: review
  })
    .then(() => {
      console.log("Data inserted successfully");
      alert("Review submitted successfully!");

      // Clear the form
      document.getElementById('reviewForm').reset();
    })
    .catch((error) => {
      console.error("Error inserting data:", error);
      alert("Failed to submit review. Please try again later.");
    });
});

// Function to Fetch All Reviews and Display Them
function fetchAllReviews() {
  const reviewsRef = ref(db, "New Year Project");
  const reviewList = document.getElementById('reviewList');

  // Listen for real-time updates
  onValue(reviewsRef, (snapshot) => {
    reviewList.innerHTML = ""; // Clear the current list

    if (snapshot.exists()) {
      const data = snapshot.val();

      // Iterate through all reviews
      Object.keys(data).forEach((key) => {
        const { Name, Review } = data[key];

        // Create a new list item
        const li = document.createElement('li');
        li.innerHTML = `<strong>${Name}:</strong> ${Review}`;
        reviewList.appendChild(li);
      });
    } else {
      reviewList.innerHTML = "<li>No reviews available.</li>";
    }
  });
}

// Fetch all reviews on page load
fetchAllReviews();
  
