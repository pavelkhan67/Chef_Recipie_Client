
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Shared/Header'
import Footer from './components/Shared/Footer'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer />
    </div>
  )
}

export default App
