import LandingPage from "./pages/LandingPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <section className='w-full flex items-center justify-center'>
      <section className="relative h-screen w-72 flex flex-col gap-5 p-2 bg-gray-50">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignupPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </section>
    </section>
  )
}

export default App
