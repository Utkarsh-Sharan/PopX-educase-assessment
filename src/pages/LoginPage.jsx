import LoginForm from "../components/forms/LoginForm.jsx"

const LoginPage = () => {
  return (
    <section className="w-60 flex flex-col gap-5 pl-2 pt-2">
        <h2 className="font-bold text-xl">Signin to your PopX account</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <LoginForm />
    </section>
  )
}

export default LoginPage