```javascript
const form = document.getElementById("studentForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const studentId = document.getElementById("studentId").value;
    const major = document.getElementById("major").value;
    const email = document.getElementById("email").value;
    const birthdate = document.getElementById("birthdate").value;
    const photo = document.getElementById("photo").files[0];

    document.getElementById("cardName").textContent = name;
    document.getElementById("cardId").textContent = "ID: " + studentId;
    document.getElementById("cardMajor").textContent = "Filière: " + major;
    document.getElementById("cardEmail").textContent = email;
    document.getElementById("cardBirthdate").textContent = "Date de naissance: " + birthdate;

    const photoURL = URL.createObjectURL(photo);
    document.getElementById("cardPhoto").src = photoURL;

    document.getElementById("card").classList.remove("hidden");
});
```
