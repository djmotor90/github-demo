import { useState} from 'react'

function Input({setUser}) {
    const [username, setUsername] = useState("");
    const handleChange = (e) => {
       setUsername(e.target.value)
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const url = `https://api.github.com/users/${username}`
        const response = await fetch(url)
        const data = await response.json()
        setUsername("")
        setUser(data)
    }
    const clear = () => {
        setUsername("")
        setUser(null)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input value ={username} onChange={handleChange} placeholder="username"/>
            <input type='submit'/>
            </form>
        <button onClick={clear} >Clear</button>
        </div>
    );
}



export default Input;
