import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';

const accessToken = window.location.hash.substring(1).split('&')[0].split('=')[1];

function App() {

  return (accessToken === null) ? 
  <div>
    <Login />
  </div>
  : 
  <div>
    <Sidebar />
    <Dashboard token={accessToken} /> 
  </div>
  
}

export default App;
