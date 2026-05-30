import LandingPage from "./pages/LandingPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import SignupPage from "./pages/SignupPage.jsx";

function App() {
  return (
    <section className="h-screen w-60 flex flex-col gap-5 p-2">
      {/* <LandingPage />
      <LoginPage />
      <SignupPage /> */}
      <ProfilePage />
    </section>
  )
}

export default App
