
import { Outlet } from 'react-router';
import './components/styles/app.css'



function App() {

  return (
    <div className="app">
      <Outlet />
    </div>
  );
}

export default App;
