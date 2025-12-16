// app/components/Navbar.tsx
export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-md shadow-md">
      <nav className="flex justify-center py-3">
        <div className="flex gap-6 text-sm font-semibold">
          <a href="#home" className="hover:text-blue-600 transition">Home</a>
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#services" className="hover:text-blue-600 transition">Services</a>
          <a href="#courses" className="hover:text-blue-600 transition">Courses</a>
          <a href="#contactinfo" className="hover:text-blue-600 transition">Contact</a>
        </div>
      </nav>
    </header>
  );
}
