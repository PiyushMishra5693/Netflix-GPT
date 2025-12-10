import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );

    setErrorMessage(message);
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="w-full h-screen relative overflow-hidden">
      <Header />
      <div className="absolute flex justify-center items-center">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_large.jpg"
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute bg-black/80 p-12 my-36 mx-auto right-0 left-0 text-black "
      >
        {isSignInForm ? (
          <h1 className="text-3xl py-4 text-white font-bold">Sign In</h1>
        ) : (
          <h1 className="text-3xl py-4 text-white font-bold">Sign Up</h1>
        )}

        {!isSignInForm && (
          <input
            className="w-full text-white p-4 my-4 bg-gray-800"
            placeholder="Enter Name"
          />
        )}
        <input
          ref={email}
          type="text"
          className="w-full text-white p-4 my-4 bg-gray-800"
          placeholder="Enter Email"
        />
        <input
          ref={password}
          type="password"
          className="w-full text-white p-4 my-4 bg-gray-800"
          placeholder="Enter password"
        />
        <p className="py-4 text-red-500 font-bold">{errorMessage}</p>
        <button
          className="bg-red-500 px-26 py-3 w-full my-4 rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "SignIn" : "Signup"}
        </button>
        <p
          className="text-white py-4 cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix ? Sign up Now"
            : "Already a member Sign in "}
        </p>
      </form>
    </div>
  );
};

export default Login;
