'use client'; 
import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Navbar() {

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up, hide when scrolling down
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 10);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full bg-background p-4 transition-transform duration-300 z-20 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full px-8 flex justify-between items-center">
      <Link href="/">
        <Image
            src="/images/logo.png"
            alt="Personal Logo"
            width={120}
            height={30}
            priority
        />
        </Link>
        <ul className="flex space-x-8 items-center">
          <li className="hover:text-secondary-lightBlue align-middle"><a href="#about"><span className="text-primary-purple">{'<'}</span>About<span className="text-primary-purple">{'>'}</span></a></li>
          <li className="hover:text-secondary-lightBlue"><a href="#experience"><span className="text-primary-purple">{'<'}</span>Experience<span className="text-primary-purple">{'>'}</span></a></li>
          <li className="hover:text-secondary-lightBlue"><a href="#projects"><span className="text-primary-purple">{'<'}</span>Projects<span className="text-primary-purple">{'>'}</span></a></li>
          <li className="hover:text-secondary-lightBlue"><a href="#contact"><span className="text-primary-purple">{'<'}</span>Contact<span className="text-primary-purple">{'>'}</span></a></li>
          <li>
            <Button 
                onClick={() => alert("Primary Clicked!")} 
                variant="primary"
            >
                Resume
            </Button>
            </li>
        </ul>
      </div>
    </nav>
  );
}
