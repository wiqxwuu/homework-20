const box = document.querySelector('.content')
const API = 'https://dummyjson.com/users'

async function getUsers() {
    try {
        const res = await fetch(API)
        const data = await res.json()

        console.log(data);
        
    } catch (error) {
        console.log(error);
        
    }
}

getUsers()