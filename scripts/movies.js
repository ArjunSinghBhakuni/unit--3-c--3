// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let read = (id)=>{
 return document.querySelector(id)
}
let create = (id)=>{
 return document.createElement(id)
}
let addedMoney = localStorage.getItem("amount")

let money = read("#wallet")
money.textContent = addedMoney


let id;


let searchmovies = async()=>{

try{
  let query = read("#search").value

const res = await fetch (`https://www.omdbapi.com/?s=${query}&apikey=2a99c6c3`)
let data = await res.json()
 console.log(data)
let movies = data.Search
return movies

}catch(err){
 console.log(err)
}

}


let main = async ()=>{

 let data = await searchmovies()

 if(data ===undefined){
  return ;
 }
console.log(data)
 append(data)
}

let  movies_div = read("#movies")
let append = (data)=>{
movies_div.innerHtml = null
data.map(function({Title,Poster}){
 let div = create("div")

 let img = create("img")
 
 img.src = Poster
 let title = create("p")
 
 title.textContent = Title
 
 let btn = create("button")
 div.append(img,title,btn)
 
 btn.innerText = "Book Now"
 btn.setAttribute("class","book_now")
 btn.addEventListener("click", mybook)
 function mybook( ){
  book(Poster,Title)
 }
 
 
 
 movies_div.append(div)
})

let book = (Poster,Title) =>{
 let data = {
  Poster,
  Title,
 }
 //console.log(Poster, Title)
 window.location.href ="checkout.html"
 localStorage.setItem("movie" ,JSON.stringify(data))

}


}

let debounce = (main,delay)=>{

 if(id){
 clearTimeout(id)
 }
 id = setTimeout(function(){
 main()
 },delay)
}