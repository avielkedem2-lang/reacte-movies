
import { Route, Routes } from 'react-router'
import './App.css'
import Movies from './pages/Movies'
import Favorites from './pages/Favorites'
import MovieDetails from './pages/MovieDetails'
import Layout from './Layout/Layout'
import { useFetch } from './hooks/fetch'


function App() {
  const {data} = useFetch("https://api.tvmaze.com/shows") 
  console.log(data);
  
  return (
    <div className='all-pages'>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Movies />} />
          <Route path='favorite' element={<Favorites />} />
          <Route path='moviesDetails/:id' element={<MovieDetails />} />
        </Route>
        <Route path='*' element="404 not found"   />
      </Routes>
    </div>
  )
}

export default App
