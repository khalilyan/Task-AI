//GET ELEMENTS
const form = document.querySelector('form')
const input = document.querySelector('input')
const submit = document.getElementById('submit')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const question = input.value;
    window.location.href+=`ask?message=${question}`;
})