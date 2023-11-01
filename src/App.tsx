
import { Outlet } from 'react-router';
import './components/styles/app.css'
import HomePage from './Pages/HomePage/HomePage';



function App() {

  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
