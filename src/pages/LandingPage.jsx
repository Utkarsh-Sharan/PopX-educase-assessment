import { useNavigate } from "react-router-dom"
import Button from "../components/Button"

const LandingPage = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(`/${e.target.id}`);
  }

  return (
    <section className="h-full flex flex-col justify-end gap-5 font-rubik">
      <h1 className="font-bold text-xl">Welcome to PopX</h1>

      <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <div className="flex flex-col gap-2">
        <Button id={"register"} bgColor="bg-purple-700" color="text-white" onClick={handleClick}>
          Create Account
        </Button>
        <Button id={"login"} bgColor="bg-purple-300" onClick={handleClick}>Already Registered? Login</Button>
      </div>
    </section>
  )
}

export default LandingPage