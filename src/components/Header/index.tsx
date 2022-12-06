import Link from "next/link";

export default function Header() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Criptomoedas", href: "/criptomoedas?page=1" },
  ];

  return (
    <header className="flex items-center justify-center h-10 px-5 py-1 bg-blue-500">
      <nav>
        <ul className="flex gap-5">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="cursor-pointer font-medium text-white"
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
