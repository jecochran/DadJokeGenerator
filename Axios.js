// const getStarWarsPerson = async (id) => {
//     try {

//         const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//         console.log(res.data);

//     } catch (e) {
//         console.log("ERROR")
//     }
// }

// getStarWarsPerson(5);

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');


const addNewJoke = async () => {
    const joke = await getDadJoke();
    const newLI = document.createElement('LI');
    newLI.append(joke);
    jokes.append(newLI);
}

button.addEventListener('click', addNewJoke);


const getDadJoke = async () => {

    try {
        const config = {
            headers: { Accept: 'application/json' }
        }
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        return res.data.joke;
    } catch (e) {
        console.log("No Jokes Available, sorry");
    }
}
getDadJoke();
