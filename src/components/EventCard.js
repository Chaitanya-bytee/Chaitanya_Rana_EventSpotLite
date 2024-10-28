.event-card {
  background: rgba(255, 255, 255, 0.1); /* Light background with transparency */
  border-radius: 15px; /* Rounded corners for a softer look */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); /* Deeper shadow for a floating effect */
  backdrop-filter: blur(10px); /* Blur effect for glass-like appearance */
  border: 1px solid rgba(255, 255, 255, 0.2); /* Light border for definition */
  overflow: hidden; /* Prevents child elements from overflowing */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth hover transition */
  margin: 20px; /* Space between cards */
  max-width: 300px; /* Set a max width for the card */
  cursor: pointer; /* Indicates clickable cards */
}

.event-card:hover {
  transform: scale(1.05); /* Slightly enlarge card on hover */
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3); /* Stronger shadow on hover */
}

.event-card img {
  width: 100%; /* Full width of the card */
  height: 200px; /* Fixed height for uniformity */
  object-fit: cover; /* Maintain aspect ratio */
  border-top-left-radius: 15px; /* Round top corners */
  border-top-right-radius: 15px; /* Round top corners */
}

.event-card-title {
  font-size: 1.5em; /* Larger font size for the title */
  margin: 10px 0; /* Space around the title */
  color: #ffffff; /* White color for the title */
  text-align: center; /* Center align title */
}

.event-card-description {
  font-size: 1em; /* Standard font size for description */
  color: rgba(255, 255, 255, 0.8); /* Light grey for the text */
  margin: 10px 15px; /* Space around the description */
  text-align: center; /* Center align description */
}

.event-card-date {
  font-size: 0.9em; /* Smaller font size for the date */
  color: rgba(255, 255, 255, 0.6); /* Lighter grey for the date text */
  margin-bottom: 10px; /* Space below the date */
  text-align: center; /* Center align date */
}
