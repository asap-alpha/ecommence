async function createSignUpValues( ){
    var x = document.getElementById("gender").selectedIndex;
    let gender = document.getElementsByTagName("option")[x].value;
 
    let firstName = document.getElementById('firstName').value;
    let secondName = document.getElementById('secondName').value;
    let userName = document.getElementById('username').value; 
    let email = document.getElementById('email').value; 
    let country = document.getElementById('country').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm_password').value;

   try {
    const sendData = await fetch(`https://localhost:7086/api/createUser`, {
    
   method: 'post', 
   headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
   },
   body: userName !=null && email !=null && password === confirmPassword ?
   JSON.stringify({
    "firstName": firstName,
    "secondName": secondName,
    "userName": userName,
    "email": email,
    "gender": gender,
    "countryName": country,
    "firstPassword": password,
    "confirmPassword": confirmPassword
   }): alert("error")
});
   //let data =  await sendData.json();
    alert(`Account created successfully, with: username ${userName} and email: ${email}`);
   window.location.replace("./login.html");

//    console.log(data);
//    alert(data);

   } catch (error) {
    alert(error);
   }
 
} 
    
