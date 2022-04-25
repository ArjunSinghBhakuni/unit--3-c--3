// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
 

let money = localStorage.getItem("amount")
let wallet = document.querySelector("#wallet")
wallet.innerText = money
let {Poster,Title} = JSON.parse(localStorage.getItem("movie"))
// console.log(movie)
let mybutton = ()=>{

 let n = document.getElementById("number_of_seats").value

 let cost = eval(100*n)
money =  +money
 if(money < cost){
  alert("Insufficient Balance!")
 } else if(money >=cost){
  let total = eval(money-cost)
  wallet.innerText = total
  alert("Booking successful!")
  localStorage.setItem("amount" ,total)
 }
}

 


 let div = document.createElement("div")

 let img = document.createElement("img")

 img.src = Poster
 let p =  document.createElement("h1")

 p.innerText = Title
  
 div.append(p,img)

 document.getElementById("movie").append(div)
 