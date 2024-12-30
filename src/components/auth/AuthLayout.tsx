interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => (
  <div className="min-h-screen bg-gray-100 flex flex-col">
    <main className="flex-1 flex items-center justify-center p-6">
      <div className="w-full max-w-md p-8 rounded-2xl bg-gray-100 shadow-neumorph">
        {children}
      </div>
    </main>
  </div>
);

export default AuthLayout;
