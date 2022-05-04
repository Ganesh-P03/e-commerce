
	function validation(){
		var username = document.getElementById('username').value;
		var mobilenumber = document.getelementbyid('mobilenumber').value;
		var email = document.getelementbyid('email').value;
		var password = document.getelementbyid('password').value;
		var cpassword = document.getelementbyid('cpassword').value;

		var usernamecheck = /^[A-Za-z]{3,}$/;
		var mobilenumbercheck = /^[6789]{1}[0-9]{9}$/;
		var emailcheck = /^[A-Za-z0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{3,6}$/;
		var passwordcheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9]{6,}$/;

           if (usernamecheck.test(username)) {
           	document.getElementById('usererror').innerHTML="";
           } else {
           		document.getElementById('usererror').innerHTML="invalid username";
           		return false;
           }
           if (mobilenumbercheck.test(mobilenumber)) {
           	document.getelementbyid('numbererror').innerHTML="";
           } else {
           	document.getelementbyid('numbererror').innerHTML="invalid mobilenumber";
           	return false;
           }
           if (emailcheck.test(email)) {
           	document.getelementbyid('emailerror').innerHTML="";
           } else {
           	document.getelementbyid('emailerror').innerHTML="invalid email";
           	return false;
           }
           if (passwordcheck.test(password)) {
           	document.getelementbyid('passworderror').innerHTML="";
           } else {
           	document.getelementbyid('passworderror').innerHTML="invalid password format";
           	return false;
           }
           if (password.match(cpassword)) {
           	document.getelementbyid('cpassworderror').innerHTML="";
           } else {
           	document.getelementbyid('cpassworderror').innerHTML="password doesnt match";
            return false;
           }
	}

