import { BrowserRouter } from 'react-router-dom';
import Rout from './routes';
import AuthProvider from './contexts/auth';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';

function App(){
    return(
        <AuthProvider>
            <BrowserRouter>
                <ToastContainer autoClose={3000}/>
                <Rout />
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App;