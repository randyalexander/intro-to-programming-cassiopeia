


//sorta works
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