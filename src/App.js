import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';

const code = new URLSearchParams(window.location.search).get('code')

function App() {
  return code ? 
  <div>
    <Sidebar />
    <Dashboard code={code} /> 
  </div>
  : <Login />
}

export default App;
