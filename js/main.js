let userName = document.getElementById('shop_And_Department');



console.log("we are here" + userName);

const retrieveData = JSON.parse(window.localStorage.getItem('getdata'));

//console.table( retrieveData["firstName"]);
userName.innerHTML = (`welcome to myShop, Mr ${retrieveData.userName}`);
userName = retrieveData["firstName"];

let logout = document.getElementById('logout').addEventListener('click', alert(`Thank for trading with us ${retrieveData.userName}`));
