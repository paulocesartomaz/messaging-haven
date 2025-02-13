
import { LoginForm } from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-sm glass-morphism p-8 rounded-2xl">
        <h1 className="text-2xl font-semibold text-center mb-6">Welcome Back</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
