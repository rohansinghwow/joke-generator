const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("get_joke")

jokeBtn.addEventListener("click", jokeGenerator)

jokeGenerator()

async function jokeGenerator(){

    const jokeFetch = await fetch('https://icanhazdadjoke.com/' , {

    headers : {
        'Accept' : 'application/json'
    }
    });

    let jokeObj = await jokeFetch.json()
    
    jokeEl.innerHTML = jokeObj.joke;

}