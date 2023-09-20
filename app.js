const wrapper = document.querySelector('.wrapper')
const btn = document.querySelector('.btn')

function createPersonCard(person) {
    const personCard = document.createElement('div')
    personCard.setAttribute('class', 'person__card')
    personCard.innerHTML = `
<img src="${person.img}" alt="">
<h3 class="name">Name: ${person.name}</h3>
<span class="age">Age: ${person.age}</span>`
    return personCard
}
function displayPeople(people) {
    wrapper.innerHTML = ''; // Очищаем контейнер перед добавлением карточек
    people.forEach(person => {
        const card = createPersonCard(person);
        wrapper.append(card);
    });
}




const request = new XMLHttpRequest()  //создание запроса
request.open("GET", "people.json") //open() принимает два парамета: 1) метод запроса, 2)адрес запроса
request.setRequestHeader("Content-type", "application/json")  //указываение заголовка
request.send()
request.addEventListener('load', () => {
    const data = JSON.parse(request.response)
    displayPeople(data)

})

//2 задание
const showOnConsole = new XMLHttpRequest()
showOnConsole.open("GET", "second_exersice.json")
showOnConsole.setRequestHeader("Content-type", "application/json")
showOnConsole.send()
showOnConsole.addEventListener('load', () => {
    const show = JSON.parse(showOnConsole.response)
    console.log(show)
})