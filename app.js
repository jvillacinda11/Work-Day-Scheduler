//this updates the time
let now = moment().format('dddd, MMMM Do YYYY');

document.getElementById('currentDay').textContent = now


//this saves all the textarea value to localStorage
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('saveBtn')) {
    let toDo = {
      0: document.getElementById('9').value,
      1: document.getElementById('10').value,
      2: document.getElementById('11').value,
      3: document.getElementById('12').value,
      4: document.getElementById('13').value,
      5: document.getElementById('14').value,
      6: document.getElementById('15').value,
      7: document.getElementById('16').value,
      8: document.getElementById('17').value
    }
    localStorage.setItem('toDoList', JSON.stringify(toDo))

  }
})
//this colo codes the time blocks
let x = moment().hour()
let currentHour = parseInt(x)
console.log(currentHour)
let item = document.getElementsByClassName('form-control')
console.log(item.length)

for (let i = 0, len = item.length; i < len; i++) {

  let blockHour = parseInt(item[i].id)
  console.log('blockhour:' + blockHour)
  if (currentHour > blockHour) {
    console.log(item[i].id)
    document.getElementById(`${item[i].id}`).classList.add('past')
  }
  if (currentHour == blockHour) {
    document.getElementById(`${item[i].id}`).classList.add('present')
  }
  if (currentHour < blockHour) {
    document.getElementById(`${item[i].id}`).classList.add('future')
  }
}

//this recalls everything form the localStorage into the textAreas
let toDoList = JSON.parse(localStorage.getItem('toDoList')) || []
console.log(item.length)
console.log(toDoList[0])
for (let i = 0, len = item.length; i < len; i++) {
  document.getElementById(`${item[i].id}`).textContent = toDoList[i]
}
//clear localStorage function
document.getElementById('clear').addEventListener('click', event => {
  localStorage.clear(event)
  location.reload(event)

})







