function submitForm() {
    const form = document.getElementById('surveyForm');
    if (form.checkValidity()) {
        // Form is valid, gather data and display the popup
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const dob = document.getElementById('dob').value;
        const country = document.getElementById('country').value;
        const gender = Array.from(document.querySelectorAll('input[name="gender"]:checked')).map(checkbox => checkbox.value).join(', ');
        const profession = document.getElementById('profession').value;
        const email = document.getElementById('email').value;
        const mobile = document.getElementById('mobile').value;

        const popupContent = `
            <p><bold>First Name:</strong> ${firstName}</p>
            <p><bold>Last Name:</strong> ${lastName}</p>
            <p><bold>Date of Birth:</strong> ${dob}</p>
            <p><bold>Country:</strong> ${country}</p>
            <p><bold>Gender:</strong> ${gender}</p>
            <p><bold>Profession:</strong> ${profession}</p>
            <p><bold>Email:</strong> ${email}</p>
            <p><bold>Mobile Number:</strong> ${mobile}</p>
        `;

        document.getElementById('popupContent').innerHTML = popupContent;
        document.getElementById('popup').style.display = 'block';

        // Reset the form
        form.reset();
    } else {
        alert('Please fill in all required fields.');
    }
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function resetForm() {
    const form = document.getElementById('surveyForm');
    form.reset();
}