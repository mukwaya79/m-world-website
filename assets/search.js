const search =document.getElementById("search")
const part = document.getElementById("sec")
output = part.innerHTML
search.addEventListener("click", () =>
    fetch(url)
    .then((response) => response.json)
    .then((data) => 
       output += `<div id ="part1">
        <img src="${data.image} " />
        <h4> ${data.title} </h4>
       </div>`
    )
    .catch()
)