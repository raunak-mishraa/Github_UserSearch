let dataName;
function apiData(user) {
    const img = document.querySelector('.img');
    const name = document.querySelector('.name');
    const userName = document.querySelector('.username');
    const profession = document.querySelector('.profession');
    const followers = document.querySelector('.followers');
    const following = document.querySelector('.following');
    const requestUrl = `https://api.github.com/users/${user}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestUrl);
    // console.log(xhr.readyState)
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const data = JSON.parse(this.responseText);
            console.log(data);
            img.src = data.avatar_url;
            name.textContent = data.name;
            userName.textContent = data.login;
            profession.textContent = data.bio;
            followers.textContent = data.followers;
            following.textContent = data.following;
        }
    }
    xhr.send();
}
// apiData();
function Submit() {
    const submit = document.querySelector('.submit');
    const searchValue = document.querySelector('#search');
    submit.addEventListener('click', () => {
        apiData(searchValue.value);
        console.log(searchValue.value);
    })
}
Submit();