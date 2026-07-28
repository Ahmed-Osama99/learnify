import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import googleIcon from "/src/google-svg.svg";

const SignIn = () => {
  const [isPasswordVisiable, setIsPasswordVisiable] = useState(false);

  const togglePassword = () => {
    setIsPasswordVisiable((p) => !p);
  };
  return (
    <>
      <Helmet>
        <title>Sign In | Learnify</title>
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
              Welcome back
            </h1>
            <p className="mt-2 text-gray-600">
              Sign in to continue your learning journey
            </p>
          </div>
          {/* sign in form */}
          <div className="mt-8 rounded-2xl border border-gray-400 p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <form>
              {/* email input */}
              <div>
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
                  <a
                    href="/forgot-password"
                    className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400"
                  >
                    Forgot password?
                  </a>
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
                </div>
              </div>
              {/* Remember me */}
              <div className="mt-4 flex items-center">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className="h-4 w-4 rounded-sm"
                />
                <label
                  htmlFor="remember"
                  className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                >
                  Remember me for 30 days
                </label>
              </div>
              {/* Submit */}
              <button className="primary-btn" type="submit">
                Sign In
              </button>
            </form>
            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="h-px flex-1 bg-gray-400 dark:bg-gray-600"></div>
              <span className="px-4 text-gray-600 dark:text-gray-400">
                or continue with
              </span>
              <div className="h-px flex-1 bg-gray-400 dark:bg-gray-600"></div>
            </div>
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
          </div>
          {/* sign up CTA */}
          <p className="mt-8 text-center text-md dark:text-gray-400 text-gray-700">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="font-semibold text-primary-600 hover:text-primary-700 dark:hover:text-primary-500">Sign up for free</Link>
          </p>
        </section>
      </main>
    </>
  );
};

export default SignIn;
