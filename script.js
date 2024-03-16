function validateEmail() {
  // Getting the value of the emailinput
  const emailInput = document.getElementById('emailInput').value;

 // Regular expression pattern for email validation 

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the email input against the regex pattern

  if (!emailPattern.test(emailInput)) {
    document.getElementById('error').textContent = "valid enail required";

  } else {
    // Clear error message if email format is valid
    document.getElementById('error').textContent = ""; 

//  display the input email in the thanks container
    document.getElementById('score-email').textContent = emailInput

    // display-none so as to display thanks message

    document.getElementById('form-box').style.display = 'none';
    
    // Display thanks box
    document.getElementById('thanks-box').style.display = 'block';

  }
}

function returnToForm() {
  // Hide thanks box
  document.getElementById('thanks-box').style.display = 'none';

  // Display form box
  document.getElementById('form-box').style.display = 'flex';


}
