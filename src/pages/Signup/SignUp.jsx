import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import googleIcon from "/src/google-svg.svg";

const SignUp = () => {
  const [isPasswordVisiable, setIsPasswordVisiable] = useState(false);

  const togglePassword = () => {
    setIsPasswordVisiable((p) => !p);
  };
  return (
    <>
      <Helmet>
        <title>Create Account | Learnify</title>
      </Helmet>
      <main>
        <section className="mx-auto w-full max-w-md! px-4 py-16!">
          {/* logo */}
          <div className="mx-auto text-center">
            <img
              src="/favicon.svg"
              className="mx-auto w-12"
              alt="Learnify Logo"
            />
            <h1 className="font-display mt-6 text-3xl font-bold">
              Create your account
            </h1>
            <p className="mt-2 text-gray-600">
              Start learning from 2,500+ courses today
            </p>
          </div>
          {/* sign in form */}
          <div className="mt-8 rounded-2xl border border-gray-400 p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            {/* social login*/}
            <div className="text-md flex items-center justify-center gap-3 font-medium">
              <button className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-gray-400 px-8 py-3 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img src={googleIcon} alt="Google icon" className="w-6" />
                <span>Google</span>
              </button>
              <button className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-gray-400 px-8 py-3 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <FontAwesomeIcon size="lg" icon={faGithub} />
                <span>GitHub</span>
              </button>
            </div>
            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="h-px flex-1 bg-gray-400 dark:bg-gray-600"></div>
              <span className="px-4 text-gray-600 dark:text-gray-400">
                or sign up with email
              </span>
              <div className="h-px flex-1 bg-gray-400 dark:bg-gray-600"></div>
            </div>
            <form>
              {/* name input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Full Name
                </label>
                <input
                  required
                  id="name"
                  type="name"
                  name="name"
                  placeholder="Ahmed Osama"
                  className="mt-2 w-full rounded-xl border border-gray-400 px-4 py-3 focus:border-primary-500 dark:border-gray-700 dark:bg-gray-800"
                />
              </div>
              {/* email input */}
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email address
                </label>
                <input
                  required
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-gray-400 px-4 py-3 focus:border-primary-500 dark:border-gray-700 dark:bg-gray-800"
                />
              </div>
              {/* password input */}
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Password
                  </label>
                </div>
                <div className="relative">
                  <input
                    required
                    type={isPasswordVisiable ? "text" : "password"}
                    name="password"
                    id="password"
                    className="mt-2 w-full rounded-xl border border-gray-400 px-4 py-3 focus:border-primary-500 dark:border-gray-700 dark:bg-gray-800"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    aria-label="Toggle password visability"
                    className="absolute top-5 right-4 text-gray-400 hover:text-gray-600 dark:text-gray-300"
                    onClick={togglePassword}
                  >
                    <FontAwesomeIcon
                      icon={isPasswordVisiable ? faEyeSlash : faEye}
                    />
                  </button>
                  <p className="text-xs mt-2 text-gray-400">Must be at least 8 characters</p>
                </div>
              </div>
              {/* Terms And Policy */}
              <div className="mt-4 flex items-center">
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  className="h-4 w-4 rounded-sm"
                  required
                />
                <label
                  htmlFor="terms"
                  className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                >
                  I agree to the{" "}
                  <Link className="text-primary-600" to="/terms">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link className="text-primary-600" to="/policy">
                    Privacy Policy
                  </Link>{" "}
                </label>
              </div>
              {/* Submit */}
              <button className="primary-btn" type="submit">
                Create Account
              </button>
            </form>
          </div>
          {/* sign in*/}
          <p className="text-md mt-8 text-center text-gray-700 dark:text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-primary-600 hover:text-primary-700 dark:hover:text-primary-500"
            >
              Sign in
            </Link>
          </p>
        </section>
      </main>
    </>
  );
};

export default SignUp;
