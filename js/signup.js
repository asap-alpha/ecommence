async function createSignUpValues( ){
    var x = document.getElementById("gender").selectedIndex;
    let gender = document.getElementsByTagName("option")[x].value;
 
    let firstName = document.getElementById('firstName').value;
    let secondName = document.getElementById('secondName').value;
    let userName = document.getElementById('username').value; 
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
   body: password === confirmPassword ?
   JSON.stringify({
    "firstName": firstName,
    "secondName": secondName,
    "userName": userName,
    "gender": gender,
    "countryName": country,
    "firstPassword": password,
    "confirmPassword": confirmPassword
   }): alert("password mismatch")
});
   let data =  await sendData.json();

   window.location.replace("./login.html")

   console.log(data);
   } catch (error) {
    alert(error);
   }
//    .then(result => result.json()).then(console.log("result"));
//    console.log(sendData["userName"] );
//    console.log(sendData);

  
    // if(username == getdata["userName"] &&  password == getdata["firstPassword"] &&   confirmPassword ==  getdata["confirmPassword"])
    // {
    //     console.log("we are in");
    //     // routeToNextScreen.addEventListener("click", routeToNextScreen  );
    // }
    
    // else{
    //     // routeToNextScreen.addEventListener("click", routeError  );
 
    //     }


} 
    
