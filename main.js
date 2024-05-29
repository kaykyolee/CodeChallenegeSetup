//Global currentCatTax variable
let currentCatTax = 0;

// TODO: calcButtonClick function
// Function should handle the following items:
// 1) Generate a random, whole number between 0 and 20.
// 2) If the random number is not 0, update the amountOwed div to display "You owe {random number} cat tax! Pay up!"
// 3) If the random number is not 0, update the pay button text to display "Pay Cat Tax"
// 4) If the random number is not 0, update the pay button so that it is no longer hidden
// 5) If the random number is 0, update the amountOwed div to display "You owe {random number} cat tax! You've escaped this time!"
// 6) If the random number is 0, update the pay button so that it is hidden.
// 7) Both the amountOwed and pay amount button should be updated every time the calculate cat tax button is clicked.


function calcButtonClick() {
currentCatTax= Math.floor (Math.random ()*21)
let amountOwed=document.getElementById('amountOwed')
let payButton=document.getElementById ('payButton')


if (currentCatTax!==0){
    amountOwed.textContent=`You owe ${currentCatTax} cat tax! Pay up!`
    payButton.style.display='inline-block'
} else {
    amountOwed.textContent=`You owe ${currentCatTax} cat tax! You've escaped this time!`
}}

// TODO: payButton function
// Function should handle the following items:
// 1) Decrement the currentCatTax amount by 1
// 2) If the remaining cat tax is greater than zero, update the amountOwed div to display "You still owe {remaining amount} cat tax! Pay up!"
// 3) If the remaining cat tax is zero or fewer, update the amountOwed div to display "Your debts are paid..."
// 4) If the cat tax was payable (amount was greater than 0) when the button was clicked, make a call to the cat api to get a cat image (https://api.thecatapi.com/v1/images/search)
// 5) Once the cat image is retrieved, append the image to the image container
// 6) If the cat tax was not payable (amount was less than or equal to 0) when the button was clicked, replace the entire contents of the container with the gif found here (https://gfycat.com/snivelingbeautifuljoey-cat)

function payButton() {
let catImage=document.createElement("IMG")

    currentCatTax--;
    if (currentCatTax>0){
        amountOwed.textContent=`You still owe ${currentCatTax} cat tax! Pay up!`
        fetch("https://api.thecatapi.com/v1/images/search")
        .then (response => {
            response.json()
            .then (resp =>{
                catImage.src=resp[0].url
                catImage.style.size='100px,100px,100px,100px'
                imageContainer.append(catImage)
                console.log (resp)    
            })
        })
    } else{
        amountOwed.textContent='Your debts are paid...'
    }
}
