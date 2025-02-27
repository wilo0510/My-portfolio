'use client';
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (section: string) => {
    setMenuOpen(false); // Close menu on selection
    if (pathname === "/") {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${section}`);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full bg-background p-4 transition-transform duration-300 z-20 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full px-6 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Personal Logo"
            width={120}
            height={30}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 items-center">
          {["about", "experience", "projects", "contact"].map((item) => (
            <li key={item} className="hover:text-secondary-lightBlue">
              <button onClick={() => handleNavClick(item)}>
                <span className="text-primary-purple">{"<"}</span>
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="text-primary-purple">{">"}</span>
              </button>
            </li>
          ))}
          <li>
            <Button onClick={() => router.push("/resume")} variant="primary">
              Resume
            </Button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col items-center bg-background absolute w-full left-0 top-16 py-4 transition-all duration-300 ${
          menuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-95 hidden"
        }`}
      >
        {["about", "experience", "projects", "contact"].map((item) => (
          <button
            key={item}
            onClick={() => handleNavClick(item)}
            className="py-2 text-lg hover:text-secondary-lightBlue"
          >
            <span className="text-primary-purple">{"<"}</span>
            {item.charAt(0).toUpperCase() + item.slice(1)}
            <span className="text-primary-purple">{">"}</span>
          </button>
        ))}
        <Button onClick={() => router.push("/resume")} variant="primary" className="mt-4">
          Resume
        </Button>
      </div>
    </nav>
  );
}
