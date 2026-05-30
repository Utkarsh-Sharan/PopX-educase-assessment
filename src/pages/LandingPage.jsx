import { useNavigate } from "react-router-dom"
import Button from "../components/Button"

const LandingPage = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(`/${e.target.id}`);
  }

  return (
    <>
      <h1 className="font-bold text-xl">Welcome to PopX</h1>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <div className="flex flex-col gap-2">
        <Button id={"register"} bgColor="bg-purple-700" onClick={handleClick}>
          Create Account
        </Button>
        <Button id={"login"} bgColor="bg-purple-300" onClick={handleClick}>Already Registered? Login</Button>
      </div>
    </>
  )
}

export default LandingPage