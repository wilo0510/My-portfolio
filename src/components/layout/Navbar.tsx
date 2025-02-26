'use client'; 

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Navbar() {
  return (
    <nav className="text-foreground p-4">
      <div className="w-full px-8 flex justify-between items-center">
        <Image
            src="/images/logo.png"
            alt="Personal Logo"
            width={150}
            height={30}
            priority
        />
        <ul className="flex space-x-8 items-center">
          <li className="hover:text-secondary-lightBlue align-middle"><Link href="/"><span className="text-primary-purple">{'<'}</span>About<span className="text-primary-purple">{'>'}</span></Link></li>
          <li className="hover:text-secondary-lightBlue"><Link href="/"><span className="text-primary-purple">{'<'}</span>Experience<span className="text-primary-purple">{'>'}</span></Link></li>
          <li className="hover:text-secondary-lightBlue"><Link href="/"><span className="text-primary-purple">{'<'}</span>Projects<span className="text-primary-purple">{'>'}</span></Link></li>
          <li className="hover:text-secondary-lightBlue"><Link href="/"><span className="text-primary-purple">{'<'}</span>Contact<span className="text-primary-purple">{'>'}</span></Link></li>
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
