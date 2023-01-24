 
 async function getUserLoginValues( ){



    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm_password').value;

    //for routing to the next screen
  let routeToNextScreen = document.getElementById('link_to_main_page');
  let routeError = document.getElementById('link_to_main_pag');

    

    // alert(username);
    // alert(password);
    // alert(confirmPassword);

   const getdata = await fetch(`https://localhost:7086/api/login?userName=${username} &firstPassword=${password}&confirmPassword=${confirmPassword}`).then(result => result.json()).then(console.log("result"));
  // console.log(getdata["userName"] );
   //console.log(getdata);
    let mylocalStorage =  window.localStorage.setItem('getdata', JSON.stringify(getdata));
    //console.log(mylocalStorage)
  
    if(username == getdata["userName"] &&  password == getdata["firstPassword"] &&   confirmPassword ==  getdata["confirmPassword"]){
        console.log("we are in");
        // routeToNextScreen.addEventListener("click", routeToNextScreen  );
         document.location.replace("./main.html");
         alert("please wait...");
    }     
    else{
        alert("wrong credentials");
 
}


} 
    
