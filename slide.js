const reviews = [
    "This is the first review.",
    "Great product! I'm satisfied.",
    "Not bad, but could be improved.",
    "Amazing experience with this service.",
    "I would recommend it to others."
  ];
  
  const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg"
  ];
  
  let currentIndex = 0;
  
  function showReview(index) {
    const reviewTextElement = document.getElementById('review-text');
    reviewTextElement.textContent = reviews[index];
    const sliderImageElement = document.getElementById('slider-image');
    sliderImageElement.src = images[index];
  }
  
  function nextReview() {
    currentIndex = (currentIndex + 1) % reviews.length;
    showReview(currentIndex);
  }
  
  function prevReview() {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    showReview(currentIndex);
  }
  
  function randomReview() {
    currentIndex = Math.floor(Math.random() * reviews.length);
    showReview(currentIndex);
  }
  
  // Initial review display
  showReview(currentIndex);
  