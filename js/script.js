const formElement = document.querySelector('.form');
formElement.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData);
    console.log(JSON.stringify(data));
});
