export default function Header() {
  const navLinks = [{ label: "Home" }, { label: "Criptomoedas" }];

  return (
    <header className="flex items-center justify-between px-5 py-1 bg-blue-500">
      <h1 className="text-3xl font-bold text-white cursor-pointer">
        CryptoNext
      </h1>

      <nav>
        <ul className="flex gap-5">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="cursor-pointer font-medium text-white"
            >
              {link.label}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
