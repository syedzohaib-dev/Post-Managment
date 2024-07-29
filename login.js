document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault()

    let email = document.getElementById("email").value
    let password = document.getElementById('password').value

    if (!email || !password) {
        alert('All fields are required.');
        return;
    }
    let users = JSON.parse(localStorage.getItem('users')) || []
    const user = users.find(u => u.email === email && u.password === password)

    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user))
        alert("login Successfull")
        setTimeout(() => {
            window.location.href = 'home.html'
        }, 1000)
    } else {
        alert("Invalid Username Or Password")
        setTimeout(() => {
            window.location.href = 'index.html'
        }, 1000)
    }






})