






//The Alerter///
let form1 = document.querySelector('#alerter');
let inputText = document.querySelector('#userInput');

form1.addEventListener('submit', function (event) {
    //prevent browser from refreshing when using 'submit' event
    event.preventDefault();
    if (inputText.value !== "") {
        alert(`Alert? ${inputText.value}`);
    } else {
        alert('Enter something you bum');
    }
    inputText.value = "";
})

//sandwichBuilder
let form2 = document.querySelector('#sandwichBuilder')
let orderText = document.querySelector('#sandwichOrderName');
let sanwichButton = document.querySelector('#submitOrder');
//bread

let sourDough = document.querySelector('#sourDough');
let wholeWheat = document.querySelector('#wholeWheat');
let whiteBread = document.querySelector('#white');
let garlicBread = document.querySelector('#garlic');
let crackedWheat = document.querySelector('#crackedWheat');
//meats
let pepperoni = document.querySelector('#pepperoni');
let ham = document.querySelector('#ham');
let salami = document.querySelector('#salami');
let turkey = document.querySelector('#turkey');
let chickenBreast = document.querySelector('#chicken');
//toppings
let lettuce = document.querySelector('#lettuce');
let tomato = document.querySelector('#tomato');
let spinach = document.querySelector('#spinach');
let bananaPeppers = document.querySelector('#bananaPeppers');
let onion = document.querySelector('#onion');
//cheese
let pepperJack = document.querySelector('#pepperJack');
let american = document.querySelector('#american');
let swiss = document.querySelector('#swiss');
let colbyJack = document.querySelector('#colbyJack');
let govtCheese = document.querySelector('#govtCheese');


form2.addEventListener('submit', function (event) {
    event.preventDefault();
    let breadType = "";
    if (sourDough.checked === true) {
        breadType = "Sour Dough ";
    } else if (wholeWheat.checked === true) {
        breadType = "Whole Wheat ";
    } else if (whiteBread.checked === true) {
        breadType = "White Bread "
    } else if (garlicBread.checked === true) {
        breadType = "Garlic Bread "
    } else if (crackedWheat.checked === true) {
        breadType = "Cracked Wheat "
    }
    console.log("Bread Type: " + breadType);

    let meatSelection = [];
    if (pepperoni.checked === true) {
        meatSelection.push(' Pepperoni')
    } if (ham.checked === true) {
        meatSelection.push(' Ham')
    } if (salami.checked === true) {
        meatSelection.push(' Salami')
    } if (turkey.checked === true) {
        meatSelection.push(' Turkey')
    } if (chicken.checked === true) {
        meatSelection.push(' Chicken Breast')
    }
    
    let toppingSelection = [];
    if (lettuce.checked === true) {
        toppingSelection.push(' Lettuce')
    } if (tomato.checked === true) {
        toppingSelection.push(' Tomato')
    } if (spinach.checked === true) {
        toppingSelection.push(' Spinach')
    } if (bananaPeppers.checked === true) {
        toppingSelection.push(' Banana Peppers')
    } if (onion.checked === true) {
        meatSelection.push(' Onions')
    }

    let cheeseSelection = [];
    if (pepperJack.checked === true) {
        cheeseSelection.push(' Pepper Jack')
    } if (american.checked === true) {
        cheeseSelection.push(' American Cheese')
    } if (swiss.checked === true) {
        cheeseSelection.push(' Swiss')
    } if (colbyJack.checked === true) {
        cheeseSelection.push(' Colby Jack')
    } if (govtCheese.checked === true) {
        cheeseSelection.push(' Government Cheese')
    }
    

    if (orderText.value !== "") {
        alert(`You have successfully submitted an order for : ${orderText.value} Your Choice of Bread: ${breadType}, Your meat selection ${meatSelection} You also chose: ${cheeseSelection} for your cheese(s), and for your toppings: ${toppingSelection}.`);
    } else {
        alert('Please input a name for the order');
    }
    orderText.value = "";
    pepperoni.checked = false;
    ham.checked = false;
    salami.checked = false;
    turkey.checked = false;
    chicken.checked = false;
    lettuce.checked = false;
    tomato.checked = false;
    spinach.checked = false;
    bananaPeppers.checked = false;
    onion.checked = false;
    pepperJack.checked = false;
    american.checked = false;
    swiss.checked = false;
    colbyJack.checked = false;
    govtCheese.checked = false;
    sourDough.checked = true;
})

///Barber shop////
let form3 = document.querySelector('#hairApt')
let aptTime = document.querySelector('#hairDateTime');
let hairInput = document.querySelector('#hairInput');
let longHair = document.querySelector('#longHair');
let shortHair = document.querySelector('#shortHair');
let hairButton = document.querySelector('#hairButton');


form3.addEventListener('submit', function (event) {
    //prevent browser from refreshing when using 'submit' event
    event.preventDefault();

    let hairType = "";
    if (longHair.checked === true){
        hairType = "Long Hair"
    } else if (shortHair.checked === true){
        hairType = "Short Hair"
    }

    if (hairInput.value !== "") {
        alert(`Barber Selected: ${hairInput.value}, Date and Time selected: ${aptTime.value}, Hair type: ${hairType}.`);
    } else {
        alert('Enter something you bum');
    }
    hairInput.value = "";
    aptTime.value = "";
    longHair = false;
    shortHair = false;
})

//Account Creation//
let form4 = document.querySelector('#acctSetup');
let userName = document.querySelector('#userName');
let userEmail = document.querySelector('#userEmail');
let userPass = document.querySelector('#userPass');
let userPassConfirm = document.querySelector('#userPassConfirm');
let submitAcct = document.querySelector('#submitAcctInfo');

form4.addEventListener('submit', function (event) {
    //prevent browser from refreshing when using 'submit' event
    event.preventDefault();

if(userName.value!== ""){
    if (userPass.value !== userPassConfirm.value){
        alert("Your passwords to not match, try again!")
    }else{
    alert(`Registered User Name: ${userName.value}, Registered Email: ${userEmail.value} Please verify your Email to complete your registration. XD`)
} 
}
userName.value = "";
userEmail.value = "";
userPass.value = "";
userPassConfirm.value = "";
})



