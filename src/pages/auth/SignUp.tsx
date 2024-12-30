import { Link } from "react-router-dom";
import { UserPlus } from "lucide-react";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthForm from "../../components/auth/AuthForm";

function SignUp() {
  const handleSignUp = (email: string, password: string) => {
    // Handle sign up logic here
    console.log("Sign up:", email, password);
  };

  return (
    <AuthLayout>
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 mb-6 rounded-2xl bg-indigo-500 text-white flex items-center justify-center shadow-neumorph-colored">
          <UserPlus size={32} />
        </div>
        <h1 className="text-3xl font-bold mb-8">Create Account</h1>

        <AuthForm buttonText="Sign Up" onSubmit={handleSignUp} />

        <p className="mt-6 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-500 hover:text-indigo-600">
            Log In
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}

export default SignUp;
