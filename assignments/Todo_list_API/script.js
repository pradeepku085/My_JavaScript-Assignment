document.querySelector('.button1').addEventListener('click', getText);
document.querySelector(".button1").style.marginLeft= "42%";


function getText(){
  let url = "https://jsonplaceholder.typicode.com/todos";

fetch(url)
    .then(response => {
        if(response.ok){
            return response.json();
        }else{
            throw new Error("Something Went wrong!")
        }
        
    })
    .then(data => {
        let output = `<table id='table'>
        <tr>
        <td >Id</td>
        <td>User Id</td>
        <td>Title</td>
        <td>Status</td>
        </tr>`
        data.forEach(function(user){
          output += `<tr>
          <td>${user.id}</td>
          <td>${user.userId}</td>
          <td>${user.title}</td>
          <td>${user.completed}</td>
          </tr>`
        })
        document.getElementById('output').innerHTML = output;
        document.getElementById("table").style.marginLeft= "350px";
        document.getElementById("table").style.textAlign= "center";
    })
    .catch(error => {
        console.log("inside catch");
        console.log(error);
    })
}

document.querySelector('.button2').addEventListener('click', completed);

function completed(){
  let url = "https://jsonplaceholder.typicode.com/todos";

fetch(url)
    .then(response => {
        if(response.ok){
            return response.json();
        }else{
            throw new Error("Something Went wrong!")
        }
        
    })
    .then(data => {
        let output = `<table id='table'>
        <tr>
        <td>Id</td>
        <td>User Id</td>
        <td>Title</td>
        <td>Status</td>
        </tr>`
        data.forEach(function(user){
          if(user.completed===true){
            output += `<tr>
            <td>${user.id}</td>
            <td>${user.userId}</td>
            <td>${user.title}</td>
            <td>${user.completed}</td>
            </tr>`
          }

        })
        document.getElementById('output').innerHTML = output;
        document.getElementById("table").style.marginLeft= "350px";
        document.getElementById("table").style.textAlign= "center";
    })
    .catch(error => {
        console.log("inside catch");
        console.log(error);
    })
}

document.querySelector('.button3').addEventListener('click', pending);

function pending(){
  let url = "https://jsonplaceholder.typicode.com/todos";

fetch(url)
    .then(response => {
        if(response.ok){
            return response.json();
        }else{
            throw new Error("Something Went wrong!")
        }
        
    })
    .then(data => {
        let output = `<table id='table'>
        <tr>
        <td>Id</td>
        <td>User Id</td>
        <td>Title</td>
        <td>Status</td>
        </tr>`
        data.forEach(function(user){
          if(user.completed===false){
            output += `<tr>
            <td>${user.id}</td>
            <td>${user.userId}</td>
            <td>${user.title}</td>
            <td>${user.completed}</td>
            </tr>`
          }

        })
        document.getElementById('output').innerHTML = output;
        document.getElementById("table").style.marginLeft= "350px";
        document.getElementById("table").style.textAlign= "center";
    })
    .catch(error => {
        console.log("inside catch");
        console.log(error);
    })
}


// async function getText() {
//     let response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     let data = await response.json()
//     .then(response => {response.json()})
//     .then(data => {
//       let output = '';
//       data.forEach(function(post) {
//         output +=`<li>${post.title}: ${post.body}</li>`
//       });
//       document.getElementById('output').innerHTML = output;
// })
//     .catch((error) => {
//       console.error(error);
//     });
// }