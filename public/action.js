let answers = document.querySelector('.answers');

main();


function main(){
    document.addEventListener('DOMContentLoaded', getFeedback);
}
function getFeedback(){
    fetch('/users')
  .then(response => response.json())
  .then(data =>{
      console.log(data)
      data.forEach(myFunction);
      function myFunction(value){
        let x = document.querySelector('.answers')
        let ul= document.createElement('ul');
        ul.innerHTML = 
    `
        <li>Name: ${value.Name}</li>
        <li>Password: ${value.Password}</li>
        <li>Feedback: ${value.Feedback}</li>
        <li>Preferred contact: ${value.Contact}</li>
        `
        x.appendChild(ul);

      }
  });
}