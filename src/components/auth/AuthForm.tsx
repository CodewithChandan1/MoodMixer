import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';

interface AuthFormProps {
  buttonText: string;
  onSubmit: (email: string, password: string) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ buttonText, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6">
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full pl-10 px-4 py-3 rounded-xl bg-gray-100 shadow-neumorph-inset focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="you@example.com"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full pl-10 px-4 py-3 rounded-xl bg-gray-100 shadow-neumorph-inset focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="••••••••"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 px-4 rounded-xl bg-indigo-500 text-white font-semibold shadow-neumorph-colored hover:shadow-neumorph-colored-hover active:shadow-neumorph-inset-colored transition-all"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default AuthForm;