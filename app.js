

let left_btn = document.getElementsByClassName('bi-chevron-left')[0];
let right_btn = document.getElementsByClassName('bi-chevron-right')[0];
let cards = document.getElementsByClassName('cards')[0];
let search = document.getElementsByClassName('search')[0];
let search_input = document.getElementById('search_input');

// to scroll towards left on clicking left-chevron icon
left_btn.addEventListener('click', () => {
    cards.scrollLeft -= 140;
})

// to scroll towards right on clciking right-chevron icon
right_btn.addEventListener('click', () => {
    cards.scrollLeft += 140;
})

// This JavaScript code is using the Fetch API to retrieve data from a JSON file ("movie.json") and 
// then dynamically creating HTML elements to display the movie information on a webpage.
 let json_url = "movie.json";
// This code uses the fetch function to make an HTTP request to the "movie.json" file. 
// The 'then' method is used to handle the response asynchronously. 
// The first 'then' converts the response to JSON format, and the second then receives the actual data.
fetch(json_url).then(Response => Response.json())
    .then((data) => {
        data.forEach((ele, i) => {
            let {name, imdb, date, sposter, bposter, genre, url} = ele;
            let card = document.createElement('a');
            card.classList.add('card');
            card.href = url;
            card.innerHTML = `
            <img src="${sposter}" alt="${name}" class="poster">
            <div class="rest_card">
                <img src="${bposter}" alt="">
                <div class="cont">
                    <h4>${name}</h4>
                    <div class="sub">
                        <p>${genre}, ${date}</p>
                        <h3><span>IMDB</span> <i class="bi bi-star-fill"></i> ${imdb}</h3>
                    </div>
                </div>
            </div>
            `
            // Adding the fetched data to cards div so that all the movie cards are now shown to User.
            cards.appendChild(card);
        });

        // Each movie must show its title when respective card is selected
        // Adding the recent data "name" from "movie.json"
        document.getElementById("title").innerText = data[0].name;
        // Adding the recent data "genre" from "movie.json"
        document.getElementById("gen").innerText = data[0].genre;
        // Adding the recent data "date" from "movie.json"
        document.getElementById("date").innerText = data[0].date;
        // Adding the recent data "imdb" from "movie.json" 
        document.getElementById("rate").innerHTML = `<span>IMDB</span> <i class="bi bi-star-fill"></i> ${data[0].imdb}`;

        // h1 for home page
        document.querySelector("#title").innerText = "Anitopia";

        // Search data load
        data.forEach(element => {
            let {name, imdb, date, sposter, genre, url} = element;
            let card = document.createElement('a');
            card.classList.add('card');
            card.href = url;
            card.innerHTML = `
            <img src="${sposter}" id="movie_pic" alt="">
                        <div class="cont">
                            <h3>${name}</h3>
                            <p>${genre}, ${date}, <span>IMDB</span> <i class="bi bi-star-fill"></i> ${imdb}</p>
                        </div>
            `
            search.appendChild(card);
        });

        // Search filter
        search_input.addEventListener("keyup", () => {
            let filter = search_input.value.toUpperCase();
            let a = search.getElementsByTagName('a');

            for (let index = 0; index< a.length; index++) {
                let b = a[index].getElementsByClassName('cont')[0];
                // console.log(a.textContent);
                let TextValue = b.textContent || b.innerText;
                if (TextValue.toUpperCase().indexOf(filter) > -1) {
                    a[index].style.display = "flex";
                    search.style.visibility = "visible";
                    search.style.opacity = 1;
                }
                else {
                    a[index].style.display = "none";
                }
                if (search_input.value == 0) {
                    search.style.visibility = "hidden";
                    search.style.opacity = 0;                    
                }
            }
        });
        // code to work on video
        let video = document.getElementsByTagName("video")[0];
        let play = document.getElementById("play"); 

        play.addEventListener("click", ()=>{
            if (video.paused) {
                video.play();
                play.innerHTML = `Play <i class="bi bi-pause-fill"></i>`
            } else {
                play.innerHTML = `Watch <i class="bi bi-play-fill"></i>`
                video.pause();
            }
        })

        //Adding functionality to navbar anchor tags
        let series = document.getElementById("series");
        let movies = document.getElementById("movies");

        series.addEventListener("click", ()=> {
            // to clear all cards on clicking on "Series"
            cards.innerHTML = ''

            let series_array = data.filter(ele => {
                return ele.type === "Anime series"
            });
            
        series_array.forEach((ele, i) => {
            let {name, imdb, date, sposter, bposter, genre, url} = ele;
            let card = document.createElement('a');
            card.classList.add('card');
            card.href = url;
            card.innerHTML = `
                <img src="${sposter}" alt="${name}" class="poster">
                <div class="rest_card">
                    <img src="${bposter}" alt="">
                    <div class="cont">
                        <h4>${name}</h4>
                        <div class="sub">
                            <p>${genre}, ${date}</p>
                            <h3><span>IMDB</span> <i class="bi bi-star-fill"></i> ${imdb}</h3>
                        </div>
                    </div>
                </div>
                `
                // Adding the fetched data to cards div so that all the movie cards are now shown to User.
            cards.appendChild(card);
        });
    
        });
        
        movies.addEventListener("click", ()=> {
            // to clear all cards on clicking on "Series"
            cards.innerHTML = ''

            let movie_array = data.filter(ele => {
                return ele.type === "Movie"
        });
            
        movie_array.forEach((ele, i) => {
            let {name, imdb, date, sposter, bposter, genre, url} = ele;
            let card = document.createElement('a');
            card.classList.add('card');
            card.href = url;

            card.innerHTML = `
                <img src="${sposter}" alt="${name}" class="poster">
                <div class="rest_card">
                    <img src="${bposter}" alt="">
                    <div class="cont">
                        <h4>${name}</h4>
                        <div class="sub">
                            <p>${genre}, ${date}</p>
                            <h3><span>IMDB</span> <i class="bi bi-star-fill"></i> ${imdb}</h3>
                        </div>
                    </div>
                </div>
                `
                // Adding the fetched data to cards div so that all the movie cards are now shown to User.
            cards.appendChild(card);
        });
    
        });
    });


    