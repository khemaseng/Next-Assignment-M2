export default function Navbar() {
  return (
    <header className="border-b py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <span className="font-bold">My Store</span>
        <nav className="space-x-4">
          <a href="/food" className="text-sm">
            Food
          </a>
        </nav>
      </div>
    </header>
  );
}
