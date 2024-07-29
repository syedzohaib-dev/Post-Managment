document.getElementById('signupForm').addEventListener('submit', function (event) {

    event.preventDefault()

    console.log("form chala")

    let firstName = document.getElementById('firstName').value.trim()
    let lastName = document.getElementById('lastName').value.trim()
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let confirmPassword = document.getElementById('confirmPassword').value

    console.log('form cghale')

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
    }
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || []

    users.push({ firstName, lastName, email, password, confirmPassword, post: [] })
    // const user = { firstName, lastName, email, password, confirmPassword, post: [] }
    localStorage.setItem("users", JSON.stringify(users))

    alert("account create successfully")
    // (!firstName || !lastName || !email || !password || !confirmPassword).value = ""

    setTimeout(() => {
        window.location.href = 'login.html'
    }, 1000)


})






