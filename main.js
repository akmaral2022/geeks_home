const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    const request = new XMLHttpRequest()  //создание запроса
    request.open("GET", "data.json") //open() принимает два парамета: 1) метод запроса, 2)адрес запроса
    request.setRequestHeader("Content-type", "application/json")  //указываение заголовка
    request.send()
    request.addEventListener('load', () => {
        const data = JSON.parse(request.response)
        document.querySelector('.name').innerHTML = data.name
        document.querySelector('.age').innerHTML = data.age


    })
})
// то что было в app.js
const people = [
    {
        name: "Akmaral",
        age: 23
    },
    {
        name: "Mustafa",
        age: null
    },
    {
        name: "Nurdin",
        age: 19
    },
    {
        name: "Hadidja",
        age: 15
    },
    {
        name: "Dias",
        age: 15
    },
    {
        name: "Nurzada",
        age: 25
    },
    {
        name: "Manas",
        age: 21
    },
    {
        name: "Saiat",
        age: 23
    },
    {
        name: "Rustam",
        age: 16
    },
    {
        name: "Kamila",
        age: 18
    }
]

const wrapper = document.querySelector('.wrapper')



people.forEach((person) => {
    const personCard = document.createElement('div')
    personCard.setAttribute('class', 'person__card')
    personCard.innerHTML = `
    <img src="img/1.png" alt="">
    <h3>Name: ${person.name}</h3>
    <span>Age:${person.age}</span>
    
    `
    wrapper.append(personCard)
})