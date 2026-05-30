import Button from "../components/Button"

const LandingPage = () => {
  return (
    <section className="h-screen w-60 flex flex-col justify-end gap-5 pl-2 pb-2">
      <h1 className="font-bold text-xl">Welcome to PopX</h1>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <div className="flex flex-col gap-2">
        <Button bgColor="bg-purple-700">Create Account</Button>
        <Button bgColor="bg-purple-300">Already Registered? Login</Button>
      </div>
    </section>
  )
}

export default LandingPage