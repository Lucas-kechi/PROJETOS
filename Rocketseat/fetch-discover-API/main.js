const url = 'http://localhost:5500/api';

async function fetchAPI() {
    await fetch(url)
        .then(result => result.json())
        .then(data => enterAPI.textContent = JSON.stringify(data))
        .catch(error => console.error(error))
};

async function apiUser() {
    await fetch(`${url}/1`)
        .then(result => result.json())
        .then(data => {
            setName.textContent = data.name;
            setCity.textContent = data.city;
            setAvatar.src = data.avatar;
        })
        .catch(error => console.error(error))
};

fetchAPI()
apiUser()