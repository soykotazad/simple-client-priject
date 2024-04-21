

import './App.css'

function App() {
  const handleAddUser = event => {
    event.preventDefault();
    const form = event.target; // Fix typo here
    const name = form.name.value; // Access form elements correctly
    const email = form.email.value; // Access form elements correctly
    const user = { name, email };
    console.log(user);
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify(user)
    })  
    .then(res => res.json())
    .then ( data => { console.log(data) ;
    if (data.insertedID){
      alert('users delete successfilly');
  }
      form.reset();
    });

      
   
  }


  return (
   <>
    <div>
      <h1> simple crud client</h1>

      <h1>User Management Project</h1>
      <h3>Number of Users:</h3>
       <form onSubmit={handleAddUser}> 

       <input type="text" name="name" id="" />
       <input type="email" name="email" id="" />

       <input  type="submit" value="Add user" />
       
       </form>

    </div></>
  )
}

export default App
