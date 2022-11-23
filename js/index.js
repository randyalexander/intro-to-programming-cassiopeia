//copyright
let fullName =  "Randy Alexander";
let today = new Date();
let thisYear = today.getFullYear();

let footer = document.querySelector('footer');

const copyright = document.createElement('p');
copyright.innerHTML = `${fullName} - ${"Ⓒ"} ${thisYear}`;
footer.appendChild(copyright);


//Array - Skills
let skills = ["HTML", "CSS", "JavaScript"];
let skillsSection = document.querySelector('#my-skills');
skillsSection.innerHTML = skillsList(skills);

function skillsList(arr) {
    let htmlString = "";
    for (let i = 0; i < arr.length; i++) {
        htmlString = htmlString + `<div>${arr[i]}</div>`;
    }
    return htmlString;
}


//DOM Manipulation - Create Message
const messageForm = document.querySelector('[name="leave_message"]');
const submission = messageForm.addEventListener('submit', handleSubmit);
const messageSection = document.querySelector('.messages');
const messageList = messageSection.querySelector('ul');
messageSection.style.visibility = 'hidden';


function handleSubmit(e){
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const msg = e.target.message.value;

    let newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a> <span class="msg">${msg}</span>`;
    let removeButton = document.createElement('button');
    removeButton.innerHTML = "Remove";
    removeButton.type = "button";
    removeButton.classList.add("remove_button");
    removeButton.addEventListener('click', removeElement);
    let editButton = document.createElement('button');
    editButton.innerHTML = "Edit";
    editButton.type = "button";
    editButton.classList.add("edit_button");
    editButton.addEventListener('click', editElement);
    newMessage.appendChild(editButton);
    newMessage.appendChild(removeButton);
    messageSection.appendChild(newMessage);
    if (messageSection.style.visibility === 'hidden') messageSection.style.visibility = 'visible';

    message.reset();
}

function removeElement(e){
    e.target.parentElement.remove();
    if (messageSection.chldNodes.length < 6) messageSection.style.visibility = 'hidden';
}

function editElement(e){
    const item = e.target.parentElement;
    let textElement = item.childNodes[2];
    let newInput = document.createElement('input');
    newInput.type = "text";
    newInput.name = "edited_text";
    newInput.value = textElement.innerHTML;
    let submitted = document.createElement('button');
    submitted.innerHTML = "Submit edit";
    submitted.type = "button";
    submitted.addEventListener('click', editMessage);
    textElement.innerHTML = "";
    textElement.appendChild(newInput);
    textElement.appendChild(submitted);
    e.target.remove();
}

function editMessage(e){
    let li = e.path[2];
    li.children[1].innerHTML = e.path[1].children[0].value;
    let editButton = document.createElement('button');
    editButton.innerHTML = "Edit";
    editButton.type = "button";
    editButton.addEventListener('click', editElement);
    let children = [].slice.call(li.childNodes);
    children.splice(3, 0, editButton);
    li.innerHTML = "";
    children.forEach((item, i) => {
        li.appendChild(item);
    });
}


//XMLHttpRequest & Fetch API
const projectSection = document.querySelector('#project-section');


//XMLHttpRequest
// const githubRequest = new XMLHttpRequest();
// githubRequest.open("GET", "https://api.github.com/users/randyalexander/repos");
// githubRequest.send();

// githubRequest.onreadystatechange = () => {
//     if (githubRequest.readyState === XMLHttpRequest.DONE && githubRequest.status == 200) {
//         const response = JSON.parse(githubRequest.responseText);
//         for (let i = 0; i < response.length; i++) {
//             let name = response[i].name;
//             let project = document.createElement("li");
//             project.innerHTML = `<a href="https://github.com/randyalexander/${name}">${name}</a>`;
//             let details = document.createElement("ul");
//             let description = document.createElement("li");
//             description.innerHTML = response[i].description;
//             details.appendChild(description);
//             let date = document.createElement("li");
//             date.innerHTML = response[i].created_at;
//             details.appendChild(date);
//             project.appendChild(details);
//             if (i === 0) console.log(response[i]);
//             project.classList.add("projects");
//             projectSection.appendChild(project);
//         }
//     }
// }


//Fetch API
fetch('https://api.github.com/users/randyalexander/repos')
    .then((response) => response.json())
    .then(afterResponse)
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