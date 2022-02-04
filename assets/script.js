// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Joshua Delgado" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total=0

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')

const ccPlusBtn = document.querySelector('#add-cc');
const ccMinusBtn = document.querySelector('#minus-cc')

const ssPlusBtn = document.querySelector('#add-sugar')
const ssMinusBtn =document.querySelector('#minus-sugar')

let quantitygb = document.querySelector('#qty-gb')
let quantitycc = document.querySelector('#qty-cc')
let quantitysugar = document.querySelector('#qty-sugar')
let quantitytotal = document.querySelector('#qty-total')

function updatequantity(){
    quantitygb.textContent = gb
    quantitycc.textContent = cc
    quantitysugar.textContent = sugar
    quantitytotal.textContent = total

}


// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function(e) {
// HINT: You can delete this console.log after you no longer need it!
console.log('Gingerbread + button was clicked!')
    gb++
    total++
    updatequantity()
// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})

gbMinusBtn.addEventListener('click', function(e) {
console.log('Gingerbread - button was clicked!')
if(gb>0)
{    gb--
    total--
    updatequantity()
}
else {window.alert ("cant go negative! :[")}
})

ccPlusBtn.addEventListener('click', function(e) {
console.log('Chocolate chip + button was clicked!')
    cc++
    total++
    updatequantity();

})

ccMinusBtn.addEventListener('click',function(e){
    console.log('Chocolate chip - buttong was clicked!')
    if(cc>0)
    {cc--
    total--
    updatequantity()
    }
    else {window.alert("i said you cant go negative :P")}

})

ssPlusBtn.addEventListener('click', function(e){
    console.log('Sugar sprinkle + button was clicked!')
    sugar++
    total++
    updatequantity()
})

ssMinusBtn.addEventListener('click', function(e){
    console.log('Sugar sprinkle - button was clicked!')
    if(sugar>0)
    {
        sugar--
        total--
    updatequantity()}
    else{window.alert('are you trying to get on my bad side? :* ')}

})

// TODO: Hook up event listeners for the rest of the buttons