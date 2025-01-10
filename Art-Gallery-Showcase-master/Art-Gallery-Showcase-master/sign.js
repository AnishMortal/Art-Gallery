function myMenuFunction() {
    var i = document.getElementById("navMenu");
    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }


   var a = document.getElementById("loginBtn");
    var b = document.getElementById("registerBtn");
    var x = document.getElementById("login");
    var y = document.getElementById("register");
    function login() {
        var firstName = document.querySelector('.register-container .input-box:nth-child(1) input').value;
        var lastName = document.querySelector('.register-container .input-box:nth-child(2) input').value;
        var email = document.querySelector('.register-container .input-box:nth-child(3) input').value;
        var password = document.querySelector('.register-container .input-box:nth-child(4) input').value;

        if (firstName && lastName && email && password) {
            x.style.left = "4px";
            y.style.right = "-520px";
            a.className += " white-btn";
            b.className = "btn";
            x.style.opacity = 1;
            y.style.opacity = 0;
        } else {

            alert("Please fill in all the fields.");
        }
    }
    function register() {
        
                x.style.left = "-510px";
                y.style.right = "5px";
                a.className = "btn";
                b.className += " white-btn";
                x.style.opacity = 0;
                y.style.opacity = 1;
    }
    

    function signIn() {
        var usernameOrEmailInput = document.querySelector('.login-container .input-box input[type="text"]');
        var passwordInput = document.querySelector('.login-container .input-box input[type="password"]');
    
        if (usernameOrEmailInput && passwordInput) {
            var usernameOrEmail = usernameOrEmailInput.value;
            var password = passwordInput.value;
    
            if (usernameOrEmail && password) {
                window.location.href = "filee.html";
            } else {
                alert("Please fill out the fields!");
            }
        } else {
            console.error("Error: Input elements not found.");
        }
    }
    
    
    