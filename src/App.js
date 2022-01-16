import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';

const accessToken = window.location.hash.substring(1).split('&')[0].split('=')[1];

console.log(accessToken)
function App() {

  return (accessToken === undefined) ? 
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
