async function createSignUpValues( ){



    let firstName = document.getElementById('firstName').value;
    let secondName = document.getElementById('secondName').value;
    let userName = document.getElementById('username').value;
    let gender = document.getElementById('gender').value;
    let country = document.getElementById('country').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm_password').value;
    //getting data from the options
    var x = document.getElementById("gender").selectedIndex;
    alert(document.getElementsByTagName("option")[x].value);
     
 alert(firstName);
 alert(secondName);
 alert(userName);
 alert(x);
 alert(country);
 alert(password);
 alert(confirmPassword);

   const getdata = await fetch(`https://localhost:7086/api/createUser`, {method: "post", body: {
    "firstName": firstName,
    "secondName": secondName,
    "userName": userName,
    "gender": gender,
    "countryName": country,
    "firstPassword": password,
    "confirmPassword": confirmPassword

   }}).then(result => result.json()).then(console.log("result"));
   console.log(getdata["userName"] );
   console.log(getdata);

  
    if(username == getdata["userName"] &&  password == getdata["firstPassword"] &&   confirmPassword ==  getdata["confirmPassword"]){
        console.log("we are in");
        routeToNextScreen.addEventListener("click", routeToNextScreen  );
    }
    
    else{
        routeToNextScreen.addEventListener("click", routeError  );
 
}


}
//  }
//  console.log(getUserLoginValues.getdata);
//  for(let i = 0; i < getUserLoginValues.getdata.length; i++){
   
//   }
    
