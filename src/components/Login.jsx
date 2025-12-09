import Header from "./Header";

const Login = () => {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      <Header />
      <div className="absolute flex justify-center items-center">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_large.jpg"
          alt="background"
        />
      </div>
      <form className="w-3/12 absolute bg-black/80 p-12 my-36 mx-auto right-0 left-0 text-black ">
        <h1 className="text-3xl py-4 text-white font-bold">Sign In</h1>
        <input
          type="text"
          className="w-full  p-4 my-4 bg-gray-800"
          placeholder="Enter Email"
        />
        <input
          type="password"
          className="w-full  p-4 my-4 bg-gray-800"
          placeholder="Enter password"
        />
        <button className="bg-red-500 px-26 py-3 w-full my-4 rounded-lg">Sign In</button>
        <p className="text-white py-4 cursor-pointer">New to Netflix ? Sign up Now</p>
      </form>
    </div>
  );
};

export default Login;
