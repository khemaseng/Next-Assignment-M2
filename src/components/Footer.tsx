 
 export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-200 py-4 mt-auto">
      <p className="text-center text-xs text-slate-500">
        © {new Date().getFullYear()} My App. All rights reserved.
      </p>
    </footer>
  );
}