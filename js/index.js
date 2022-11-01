let fullName =  "Randy Alexander";
let today = new Date();
let thisYear = today.getFullYear();

let footer = document.querySelector('footer');

const copyright = document.createElement('p');
copyright.innerHTML = `${fullName} ${thisYear}`;
footer.appendChild(copyright);


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