import Home from './component/Home';
import 'tailwindcss/tailwind.css'
import GetStarted from './component/GetStarted';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SignUp from './component/auth/SignUp';
import Login from './component/auth/Login';
import Recovery from './component/auth/Recovery'
import PhoneRecovery from './component/auth/PhoneRecovery';
import EmailRecovery from './component/auth/EmailRecovery';
import ForgetPassword from './component/auth/ForgetPassword';
import EmailRecoveryOtp from './component/auth/EmailRecoveryOtp';
import NewPassword from './component/auth/NewPassword';
import Verify from './component/auth/Verification';
import Success from './component/auth/Success';


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
          <Route path="/email-recovery" element={<EmailRecovery />} />
          <Route path="/email-recovery-otp" element={<EmailRecoveryOtp />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/success" element={<Success />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
