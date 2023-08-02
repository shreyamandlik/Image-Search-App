const accessKey="6jhTMc0e_e0AQFvbvebvV6gO7TZ_bHwMFWoFBl25JDc";

const form1 = document.querySelector('form')
const searchInput = document.getElementById('searchInput')
const searchButton = document.getElementById('searchButton')
const searchResult = document.getElementsByClassName("searchResult")
const searchResults =document.querySelector(".searchResults")
const showMore = document.getElementById('showMore')

let page = 1;
let InputData = "";



async function searchImages() {
    InputData = searchInput.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${InputData}&client_id=${accessKey}`


    const response = await fetch(url)
    const data = await response.json();

    const results = data.results;

    if (page === 1) {
        searchResults.innerHTML = ""
    }

    results.map((result) => {
        const imageWrapper = document.createElement('div')
        imageWrapper.classList.add("searchResult");
        const image = document.createElement('img')
        image.src = result.urls.small
        image.alt = result.alt_description
        const imageLink = document.createElement('a')
       
        imageLink.target = "_blank"  
        imageLink.href = result.links.html;
        imageLink.textContent = result.alt_description

        imageWrapper.appendChild(image)
        imageWrapper.appendChild(imageLink)
        searchResults.appendChild(imageWrapper)
    })

    page++; 
    if(page>1){
        showMore.style.display="block"
    }
}

form1.addEventListener("submit",(event)=>{
    event.preventDefault();
    page=2;
    searchImages()
})

showMore.addEventListener("click",()=>{
     
    
    searchImages()
})



