// Store the wallet amount to your local storage with key "amount"
 
let money = document.querySelector("#wallet")
 
money.innerText = localStorage.getItem("amount") 
 
  let previous = localStorage.getItem("amount") 
   

let add =()=>{

 let input = document.querySelector("#amount").value


 total = eval(+input + +previous)
 money.textContent =  total

 localStorage.setItem("amount" ,total)


}
 
