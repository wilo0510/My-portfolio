const Sidebar = () => {
    return (
      <>
        {/* Left Sidebar - Email */}
        <div className="w-32 fixed bottom-0 right-0 flex flex-col items-center gap-4">
            {/* Email (Vertical Text) */}
            <a
                href="mailto:wrpachonl@email.com"
                className=" text-foreground hover:text-secondary-lightBlue tracking-widest rotate-90 origin-bottom bg-background my-24"
            >
                wrpachonl@gmail.com
            </a>
            <div className="w-[2px] h-24 bg-foreground ml-5 "></div>
        </div>
  
        {/* Right Sidebar - Socials */}
        <div className="fixed bottom-0 left-8 flex flex-col items-center gap-4">
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-purple hover:text-secondary-lightBlue"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-purple hover:text-secondary-lightBlue"
          >
            LinkedIn
          </a>
          <div className="w-[2px] h-24 bg-foreground"></div>
        </div>
      </>
    );
  };
  
  export default Sidebar;
  