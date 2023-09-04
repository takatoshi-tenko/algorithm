const xmlHttpRequest = new XMLHttpRequest()
xmlHttpRequest.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    const json = JSON.parse(this.responseText)
    console.log(json)
    console.log(this.responseText)
  }
}
xmlHttpRequest.open('GET', 'https://jsonplaceholder.typicode.com/users/1', true)
xmlHttpRequest.send()


axios
  .get('https://jsonplaceholder.typicode.com/users/1')
  .then((response) => console.log(response));
console.log('呼ばれた')

fetch('https://jsonplaceholder.typicode.com/users/1')
  .then((response) => response.json())
  .then((data) => console.log(data));


localStorage.setItem('name', 'Takatoshi Tenko')
console.log(localStorage.getItem('name'))

const user = { name: 'John Doe', age: 20, };
// localStorage.removeItem('user', user);
localStorage.setItem('user', JSON.stringify(user))

const obj = JSON.parse(localStorage.getItem('user'))
console.log(obj.name)
