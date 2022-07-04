 
import './App.css';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
import {useState, useEffect} from 'react'
import e from 'express';
import Spinner from 'react-bootstrap/Spinner'

const movieApi = 'https://imdb-api.com/en/API/SearchMovie/k_5128tt75/inception 2010'
const movieTop = "https://imdb-api.com/en/API/Top250Movies/k_5128tt75"

function App() {
 
const [movie, setMovie] = useState([]);
const [term, setTerm] = useState('');
const [ loading, setLoading] = useState(true)
const [error, setError] = useState(false);

const onHandleTerm = (e) => {
  setTerm (e.target.value)
  }
  
useEffect(() => {
  fetch(movieTop)
  .then(res => res.json())
  .then(res =>{
    setMovie(res.items)
    setLoading(false)
  })
}, [])

const onHandleSearch = () => {
     e.praventDefault()
     setLoading(true)
    fetch(movieApi + term)
    .then(res => res.json())
    .then(res => {
      if ( res.results.lenght !== 0  ) {
        setMovie(res.results)
      }
    else {
      setError(true)
    }
        setLoading(false)
    })
    setTerm('')
}


const onNotFound = () => {
  setLoading(true)
 fetch(movieTop)
 .then(res => res.json())
 .then(res =>{
  setMovie(res.items)
  setError(false)
  setLoading(false) 
})

}


  return (
   <>
      <header>
        <form action='submit' onSubmit={onHandleSearch} >
           <input type="text" placeholder="Search..." value={term} onChange={onHandleTerm} />
        </form>
       
      </header>
      <div className='movie'>
      {
      error ? <NotFound onNotFound={onNotFound} /> : 
      ( loading? 
      <Spinner animation="border" variant="dark"   
      style={{
        width:"5rem", 
        height:"5rem", 
        position:'absolute', 
        top:"50%", 
        left:"50%"}} /> :  
        movie.map((elem) => <Movie key={elem.id} {...elem}/>))}
      </div>
      </>
    
  );
}

export default App;
