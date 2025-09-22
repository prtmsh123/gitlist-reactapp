import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'
import SearchForm from './SearchForm'
import axios from 'axios'
import CardList from './CardList'

function App() {
  
  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(false);
  const[error,setError]=useState('')

  const fetchUserData= async (username)=>{
    setLoading(true);
    setError('');
    try {
      const response= await axios.get(`https://api.github.com/users/${username}`);  //axios is react library which is used to make http request,
      console.log(response.data);
      
      setUser(response.data)
    } catch (err) {
      setError("USER NOT FOUND ");
      setUser(null)
      
    }
    setLoading(false)
  };

  return (
    <><SearchForm onSearch={fetchUserData} />
      { user &&<Card  profile={user}/>}
      <h1>ALL</h1>
     <CardList />


      
    </>
  )
}

export default App
