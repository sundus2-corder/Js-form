
let form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get form values

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    // Display data in second card

    document.getElementById("showName").innerText = name;
    document.getElementById("showEmail").innerText = email;
    document.getElementById("showPhone").innerText = phone;
    document.getElementById("showMessage").innerText = message;

    // Hide first card

    document.getElementById("formCard").style.display = "none";

    // Show second card

    document.getElementById("resultCard").style.display = "block";

});

// Close second card

function closeCard() {

    document.getElementById("resultCard").style.display = "none";

    document.getElementById("formCard").style.display = "block";

    document.getElementById("myForm").reset();

}
