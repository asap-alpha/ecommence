async function createSignUpValues( ){



    let firstName = document.getElementById('firstName').value;
    let secondName = document.getElementById('secondName').value;
    let userName = document.getElementById('username').value;
    let gender = document.getElementById('gender').value;
    let country = document.getElementById('country').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm_password').value;
    

    //for routing to the next screen
  let routeToNextScreen = document.getElementById('link_to_main_page');
  let routeError = document.getElementById('link_to_main_pag');

    

    // alert(username);
    // alert(password);
    // alert(confirmPassword);

   const getdata = await fetch(`https://localhost:7086/api/login?userName=${username} &firstPassword=${password}&confirmPassword=${confirmPassword}`).then(result => result.json()).then(console.log("result"));
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
    
