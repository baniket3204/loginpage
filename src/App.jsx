import { signInWithGoogle } from "./Firebase"

function App() {
  

  return (
    <div className="App">
     <button onClick = {signInWithGoogle}>Login using your gmail</button>
     <h1>{localStorage.getItem("name")}</h1>
     <h1>{localStorage.getItem("email")}</h1>
     <img src={localStorage.getItem("profilepic")}></img>
    </div>
  )
}

export default App
