import Home from './component/Home';
import 'tailwindcss/tailwind.css'
import GetStarted from './component/GetStarted';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SignUp from './component/auth/SignUp';
import Login from './component/auth/Login';
import Recovery from './component/auth/Recovery'
import PhoneRecovery from './component/auth/PhoneRecovery';
import CallRecovery from './component/auth/CallRecovery';
import ForgetPassword from './component/auth/ForgetPassword';


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
          <Route path="/recovery" element={<Recovery />} />
          <Route path="/phone-recovery" element={<PhoneRecovery />} />
          <Route path="/call-recovery" element={<CallRecovery />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
