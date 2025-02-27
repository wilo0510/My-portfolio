'use client';
import Image from "next/image";

const Sidebar = () => {
  return (
    <>
      {/* Email - Desktop Only */}
      <div className="w-32 fixed bottom-0 right-0 flex flex-col items-center gap-4 mr-2 hidden md:flex">
        <a
          href="mailto:wrpachonl@email.com"
          className="text-foreground hover:text-secondary-lightBlue tracking-widest rotate-90 origin-bottom bg-background my-24"
        >
          wrpachonl@gmail.com
        </a>
        <div className="w-[2px] h-24 bg-foreground ml-5"></div>
      </div>

      {/* Social Icons - Desktop (Left Sidebar) */}
      <div className="fixed bottom-0 left-14 flex-col items-center gap-4 hidden md:flex">
        <a
          href="https://github.com/wilo0510"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-purple hover:text-secondary-lightBlue"
        >
          <Image
            src="/images/GithubLogo.svg"
            alt="Github logomark"
            width={30}
            height={30}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/wilmer-pachon/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-purple hover:text-secondary-lightBlue"
        >
          <Image
            src="/images/LinkedinLogo.svg"
            alt="Linkedin logomark"
            width={30}
            height={30}
          />
        </a>
        <div className="w-[2px] h-24 bg-foreground"></div>
      </div>

      {/* Social Icons - Mobile (Bottom Center) */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-6 bg-background px-6 py-3 rounded-full shadow-lg md:hidden">
        <a
          href="https://github.com/wilo0510"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-secondary-lightBlue"
        >
          <Image
            src="/images/GithubLogo.svg"
            alt="Github logomark"
            width={28}
            height={28}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/wilmer-pachon/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-secondary-lightBlue"
        >
          <Image
            src="/images/LinkedinLogo.svg"
            alt="Linkedin logomark"
            width={28}
            height={28}
          />
        </a>
      </div>
    </>
  );
};

export default Sidebar;
