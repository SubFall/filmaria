import './style.css'
import Rota from './routes';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return(
      <div className='app'>
        <Rota/>
        <ToastContainer 
        position='top-right'
        autoClose='3000'
        hideProgressBar='true'
        />
      </div>
  )
}

export default App;
