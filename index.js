const { Body } = require('node-fetch');

// Add your code here
function submitData(username, email){
   return fetch('http://localhost:3000/users',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: username,
            email: email
        })
    })
    .then((response)=> response.json())
    .then((data)=>{
        console.log('Success:', data);
        document.body.innerHTML =data.id;
    })
    .catch(function(error) {
        const errorMessage = document.createElement('p');
        errorMessage.innerHTML =error.message;
        document.body.appendChild(errorMessage);
    }
       
    )
}