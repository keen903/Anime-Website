let validator = $('form.example').jbvalidator({
    language: 'dist/lang/en.json'
});

document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector('.example');

    form.addEventListener("submit", function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Check if the input fields have information
        let nameInput = form.querySelector('input[type="name"]');
        let dateInput = form.querySelector('input[type="date"]');

        if (nameInput.value.trim() !== '' && dateInput.value.trim() !== '') {
            // Redirect the user to the specified page
            window.location.href = "Home.html";
        } else {
            // Optionally, show an error message or handle the case where fields are empty
            alert("Please fill in all the required fields.");
        }
    });
});