import { 
    BrowserRouter, 
    Route, 
    Routes}
from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Filme from './pages/Filme'
import Favoritos from './pages/Favoritos'
import Error from './pages/Error'

 function Rota() {
     return (
         <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/filmes/:id' element={<Filme/>}/>
                <Route path='/favoritos' element={<Favoritos/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
         </BrowserRouter>
     )
 }

 export default Rota
