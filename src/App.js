import {useState} from "react";
import Input from "./Components/Input";
import Display from "./Components/Display";

function App() {
const [user, setUser] = useState(null)

const userDisplay = user && <Display user={user}/>
  return (
    <div>
      <Input setUser={setUser} />
     {userDisplay}
    </div>
  );
}

export default App;
