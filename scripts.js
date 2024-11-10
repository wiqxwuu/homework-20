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

function showUsers(data){
    box.innerHTML = data.map((item)=>{
        return `
        <div class="card">
            <img src="${item.image}"/>
            <h4>${item.firstName} ${item.lastName}</h4>
        </div>
        `
    })
}

getUsers()