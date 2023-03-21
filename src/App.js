import Home from './component/Home';
import 'tailwindcss/tailwind.css'
import GetStarted from './component/GetStarted';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SignUp from './component/auth/SignUp';
import Login from './component/auth/Login';


function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
