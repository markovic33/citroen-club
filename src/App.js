import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import { Club } from './components/Club/Club';
import  Oldtimers  from './components/Oldtimers/Oldtimers';
import Order from './components/Order/Order';
import Find from './components/Find/Find';
 

function App() {
  return (
   <div className='app'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/club' element={<Club />} />
        <Route path='/oldtimers' element={<Oldtimers />} />
        <Route path='/order' element={<Order />} />
        <Route path='/find' element={<Find />} />

      </Routes>
    
   </div>
  );
}

export default App;
