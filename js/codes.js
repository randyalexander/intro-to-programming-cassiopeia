


//sorta works
//DOM Manipulation - Create Message
const form = document.getElementById('leave_message');
const input = form.querySelector('input');
console.log(input);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value;
    // input.value = "";
    const ul = document.getElementById('messageList');
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);

    // const email = emailInput.value;
    // email.value = "";
    // const ul2 = document.getElementById('messageList');
    // const li2 = document.createElement('li');
    // li2.textContent = email;
    // ul.appendChild(li);


    const button = document.createElement('button');
    button.textContent = 'remove';
    ul.appendChild(button);
    ul.addEventListener('click', (e) => {
    if (e.target.tagName === "BUTTON") {
        const li = e.target.parentNode;
        const ul = li.parentNode;
        ul.removeChild(li);
    }
});
    
});



// form.addEventListener('click', (e) => {
//     if (e.target.tagName === "BUTTON") {
//         const li = e.target.parentNode;
//         const ul = li.parentNode;
//         ul.removeChild(li);
//     }
// });

//XMLHttpRequest BASIC
const projectSection = document.querySelector('#project-section');

const githubRequest = new XMLHttpRequest();
githubRequest.open("GET", "https://api.github.com/users/randyalexander/repos");
githubRequest.send();

githubRequest.onreadystatechange = () => {
    if (githubRequest.readyState === XMLHttpRequest.DONE && githubRequest.status == 200) {
        const response = JSON.parse(githubRequest.responseText);
        for (let i = 0; i < response.length; i++) {
            let project = document.createElement("li");
            project.innerHTML = response[i].name;
            project.classList.add("projects");
            projectSection.appendChild(project);
        }
    }
}

//XMLHttpRequest ENHANCED
const projectSection = document.querySelector('#project-section');

const githubRequest = new XMLHttpRequest();
githubRequest.open("GET", "https://api.github.com/users/randyalexander/repos");
githubRequest.send();

githubRequest.onreadystatechange = () => {
    if (githubRequest.readyState === XMLHttpRequest.DONE && githubRequest.status == 200) {
        const response = JSON.parse(githubRequest.responseText);
        for (let i = 0; i < response.length; i++) {
            let name = response[i].name;
            let project = document.createElement("li");
            project.innerHTML = `<a href="https://github.com/randyalexander/${name}">${name}</a>`;
            let details = document.createElement("ul");
            let description = document.createElement("li");
            description.innerHTML = response[i].description;
            details.appendChild(description);
            let date = document.createElement("li");
            date.innerHTML = response[i].created_at;
            details.appendChild(date);
            project.appendChild(details);
            if (i === 0) console.log(response[i]);
            project.classList.add("projects");
            projectSection.appendChild(project);
        }
    }
}


//Fetch API BASIC
const projectSection = document.querySelector('#project-section');

fetch('https://api.github.com/users/randyalexander/repos')
    .then((response) => response.json())
    .then(afterResponse);

function afterResponse(response) {
    for (let i = 0; i < response.length; i++) {
        let name = response[i].name;
        let project = document.createElement("li");
        project.innerHTML = `<a href="https://github.com/randyalexander/${name}">${name}</a>`;
        let details = document.createElement("ul");
        let description = document.createElement("li");
        description.innerHTML = response[i].description;
        details.appendChild(description);
        let date = document.createElement("li");
        date.innerHTML = response[i].created_at;
        details.appendChild(date);
        project.appendChild(details);
        if (i === 0) console.log(response[i]);
        project.classList.add("projects");
        projectSection.appendChild(project);
    }
}


//Fetch API ENHANCED
fetch('https://api.github.com/users/randyalexander/repos')
    .then((response) => response.json())
    .then(afterResponse);
    .catch(handleErrors);

function afterResponse(response) {
    for (let i = 0; i < response.length; i++) {
        let name = response[i].name;
        let project = document.createElement("li");
        project.innerHTML = `<a href="https://github.com/randyalexander/${name}">${name}</a>`;
        let details = document.createElement("ul");
        let description = document.createElement("li");
        description.innerHTML = response[i].description;
        details.appendChild(description);
        let date = document.createElement("li");
        date.innerHTML = response[i].created_at;
        details.appendChild(date);
        project.appendChild(details);
        if (i === 0) console.log(response[i]);
        project.classList.add("projects");
        projectSection.appendChild(project);
    }
}

function handleErrors (error) {
    console.log("unable to load github api", error);
    let item = document.createElement("li");
    item.innerHTML = "Unable to load repositories. Please try again later.";
    projectSection.appendChild(item);
}