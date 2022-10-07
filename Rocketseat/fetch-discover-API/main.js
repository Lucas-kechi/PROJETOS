const url = 'http://localhost:5500/api';
const newUser = {
    'name': 'Lucas Kechi',
    'avatar': 'https://scontent.fsdu37-1.fna.fbcdn.net/v/t1.6435-9/51798043_1857005967743414_4321007047060488192_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=g5irum9igHkAX9InNHX&_nc_ht=scontent.fsdu37-1.fna&oh=00_AT_7lfe2N_meYU-FjiSKKXcesl8O_XutI2aYxW-e5aVZiQ&oe=636347ED',
    'city': 'Rio de Janeiro'
};
const updateUser = {
    'name': 'Lucas de Freitas Kechi Paiva',
    'avatar': 'https://scontent.fsdu37-1.fna.fbcdn.net/v/t1.6435-9/51798043_1857005967743414_4321007047060488192_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=g5irum9igHkAX9InNHX&_nc_ht=scontent.fsdu37-1.fna&oh=00_AT_7lfe2N_meYU-FjiSKKXcesl8O_XutI2aYxW-e5aVZiQ&oe=636347ED',
    'city': 'Rio de Janeiro, Petrópolis'
};

async function fetchAPI() {
    await fetch(url)
        .then(result => result.json())
        .then(data => enterAPI.textContent = JSON.stringify(data))
        .catch(error => console.error(error))
};

async function apiUser(id) {
    await fetch(`${url}/${id}`)
        .then(result => result.json())
        .then(data => {
            setName.textContent = data.name;
            setCity.textContent = data.city;
            setAvatar.src = data.avatar;
        })
        .catch(error => console.error(error))
};

async function postNewUser() {
    await fetch(url, {
        'method': 'post',
        'body': JSON.stringify(newUser),
        'headers': {"content-type": "application/json; charset=UTF-8"}
    })
};

async function putUser(id) {
    await fetch(`${url}/${id}`, {
        'method': 'put',
        'body': JSON.stringify(updateUser),
        'headers': {"content-type": "application/json; charset=UTF-8"}
    })
};

async function deleteUser() {
    
}

// postNewUser()
putUser(2)
fetchAPI()
apiUser(2)