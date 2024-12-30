import { Link } from "react-router-dom";
import { LogIn } from "lucide-react";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthForm from "../../components/auth/AuthForm";

function Login() {
  const handleLogin = (email: string, password: string) => {
    // Handle login logic here
    console.log("Login:", email, password);
  };

  return (
    <AuthLayout>
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 mb-6 rounded-2xl bg-indigo-500 text-white flex items-center justify-center shadow-neumorph-colored">
          <LogIn size={32} />
        </div>
        <h1 className="text-3xl font-bold mb-8">Welcome Back</h1>

        <AuthForm buttonText="Log In" onSubmit={handleLogin} />

        <p className="mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-indigo-500 hover:text-indigo-600">
            Sign Up
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}

export default Login;
