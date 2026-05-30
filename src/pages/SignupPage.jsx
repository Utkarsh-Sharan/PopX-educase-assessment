import SignupForm from "../components/forms/SignupForm.jsx";

const SignupPage = () => {
  return (
    <section className="h-screen w-60 flex flex-col p-2">
        <h1 className='font-bold text-xl pb-2'>Create your PopX account</h1>

        <SignupForm />
    </section>
  )
}

export default SignupPage