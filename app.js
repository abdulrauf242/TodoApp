var btn = document.querySelector('#inpBtn')
var input = document.querySelector('#inp')
var todositems = document.querySelector('#todoList')

// console.log(btn)
btn.addEventListener('click', () => {
 var inputValue = input.value
// console.log(inputValue)
if(inputValue != ''){
    todositems.innerHTML += `<li>${inputValue}</li>`
    input.value = ''
}
else{
    alert('Please enter some order')}


});
function deleteTodoItem(btn) {
    var li = btn.parentElement;
    todositems.removeChild(li);
}

// var btn = document.querySelector('#inpBtn')
// var input = document.querySelector('#inp')
// var todositems = document.querySelector('#todoList')
// var todos = []
// // console.log(btn)
// btn.addEventListener('click', () => {
//  var inputValue = input.value
//  // console.log(inputValue)
//     if(inputValue != ''){
//         todos.push(inputValue)
//         todositems.innerHTML += `<li>${inputValue}</li>`
//         input.value = ''
//     }
//     else{
//         alert('Please enter some value')}
//     })