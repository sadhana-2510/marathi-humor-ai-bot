export default function AuthLayout({ title, children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="w-full max-w-md p-8 rounded-2xl bg-white/40 shadow-xl backdrop-blur-md border border-white/20">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          {title}
        </h1>

        {children}
      </div>
    </div>
  );
}
