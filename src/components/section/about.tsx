import Image from "next/image";
import profilePic from "../../../public/images/Profile.png"; // Adjust the path based on your project

const AboutMe = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-background text-foreground max-w-6xl mx-auto">
    {/* Left Column - Text Content */}
    <div className="max-w-lg text-left">
      <h2 className="text-purple-400 text-4xl font-bold mb-4">About me</h2>
      <p className="mt-4">
        Hello! My name is Wilmer, and I love building things for the web. My
        passion for development started when I began experimenting with
        frontend technologies, discovering how small tweaks in code could
        bring digital experiences to life!
      </p>

      <p className="mt-4">
        Fast-forward to today, I’ve had the opportunity to work on diverse
        projects,{" "}
        <span className="text-cyan-400">
          from internal business solutions to frontend architectures
        </span>{" "}
        that enhance accessibility and performance. I’ve contributed to{" "}
        <span className="text-cyan-400">
          fraud detection platforms, security ecosystems, and UI/UX
          improvements
        </span>
        , helping teams transition to modern frameworks like micro-frontends
        for better scalability.
      </p>

      <p className="mt-4">
        Currently, I’m expanding my expertise in UI/UX design to build more
        intuitive, user-friendly applications. I’m always looking for new
        challenges and innovative ways to create engaging digital
        experiences.
      </p>
    </div>

    {/* Right Column - Image */}
    <div className="mt-8 md:mt-0 md:ml-20">
      <Image
        src={profilePic}
        alt="Wilmer's Profile"
        width={400}
        height={400}
        className="rounded-lg"
      />
    </div>
  </section>
  );
};

export default AboutMe;
