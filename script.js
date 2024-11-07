function confirmAnesthesia() {
    const patientName = document.getElementById("patient-name").value;
    const patientAge = document.getElementById("age").value;
    const patientWeight = document.getElementById("weight").value;
    const bodyPart = document.getElementById("body-part").value;
    const anesthesiaType = document.getElementById("type-of-anesthesia").value;
    const anesthesiaName = document.getElementById("anesthetic-name").value;

    if (patientName === "" || patientAge === "" || patientWeight === "" || anesthesiaName === "") {
        alert("Please fill out all fields before confirming the anesthesia.");
        return;
    }

    alert(`Anesthesia confirmed!\nPatient Name: ${patientName}\nBody Part: ${bodyPart}\nType: ${anesthesiaType}\nAnesthesia Name: ${anesthesiaName}`);
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Validate Age Input
function validateAge() {
    const ageInput = document.getElementById('age');
    const ageError = document.getElementById('age-error');
    
    if (ageInput.value < 0) {
        ageError.innerText = "Age cannot be negative.";
        ageError.style.display = "block";
        ageInput.classList.add('error'); // Add error styling
    } else {
        ageError.style.display = "none";
        ageInput.classList.remove('error');
    }
}

// Validate Weight Input
function validateWeight() {
    const weightInput = document.getElementById('weight');
    const weightError = document.getElementById('weight-error');
    
    if (weightInput.value < 0) {
        weightError.innerText = "Weight cannot be negative.";
        weightError.style.display = "block";
        weightInput.classList.add('error'); // Add error styling
    } else {
        weightError.style.display = "none";
        weightInput.classList.remove('error');
    }
}

// Form Validation to Ensure No Negative Values on Submit
function validateForm() {
    const ageInput = document.getElementById('age');
    const weightInput = document.getElementById('weight');
    let isValid = true;

    if (ageInput.value < 0) {
        isValid = false;
        document.getElementById('age-error').innerText = "Age cannot be negative.";
        document.getElementById('age-error').style.display = "block";
        ageInput.classList.add('error');
    }

    if (weightInput.value < 0) {
        isValid = false;
        document.getElementById('weight-error').innerText = "Weight cannot be negative.";
        document.getElementById('weight-error').style.display = "block";
        weightInput.classList.add('error');
    }

    return isValid; // Prevent form submission if there are invalid inputs
}

// Change button to green after form submission
function submitForm() {
    const button = document.querySelector('button');
    
    if (validateForm()) { // Assuming validateForm() returns true if inputs are valid
        // Simulate form submission
        button.innerText = "Submission Confirmed"; // Change button text
        button.classList.add('submitted'); // Change button color to green
    }

    return false; // Prevents page reload for demo purposes
}

// Modify the form's onsubmit attribute to call submitForm()
document.getElementById('anesthesia-form').onsubmit = submitForm;



const scriptURL = 'https://script.google.com/macros/s/AKfycbybUAzpRR6faMdn-NGPqqJn_mI2YRjYqqL28TnbWKH3GtTeM-JZMvOL7P6ADR04dv5D/exec'
const form = document.forms['submit-to-google-sheet']
      
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
    
