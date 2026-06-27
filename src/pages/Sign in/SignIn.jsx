import { Helmet } from "react-helmet-async";

const SignIn = () => {
  return (
    <>
      <Helmet>
        <title>Sign In | Learnify</title>
      </Helmet>
      <main>
        <section className="container flex justify-center items-center">
            {/* logo */}
            <div className="text-center">
                <img src="/favicon.svg" className="w-12 mx-auto" alt="Learnify Logo" />
                <h1 className="font-display text-3xl font-bold mt-6">Welcome Back</h1>
            </div>
        </section>
      </main>
    </>
  );
};


export default SignIn
