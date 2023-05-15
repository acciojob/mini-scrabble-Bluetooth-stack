//your code here

let input = document.querySelector('#evaluatedText');
let out = document.querySelector('#letterCount');


input.addEventListener('keyup', (e)=>{
  out.innerHTML = '';
  out.innerHTML = e.target.value.length;
})