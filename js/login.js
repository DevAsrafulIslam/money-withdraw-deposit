// step-1:add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // step-2: get the email address inside the email input field
    // aleays remember to use   .value   to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3: get password
    // 3.a: set id on the html element
    // 3.b: get the element 
    // 3.c:get the value from the element

    document.getElementById('btn-submit').addEventListener('click', function () {
        const passwordField = document.getElementById('user-password');
        const password = passwordField.value

        // DO NOT VERIVY email password on the client site

        // step-4:verity email and password
        if (email === 'asrafulislam.dev@gmail.com', password === '123456') {
            window.location.href = 'bank.html'
        }
        else {
            alert('Wrong Password!! Please Enter Your Correct Password'
            )
        }
    })
})