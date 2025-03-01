import Button from "@/components/ui/Button";

const ConnectSection = () => {
    return (
      <section id="contact" className="flex flex-col items-center text-center text-white py-16 px-6 w-full">
        <h4 className="text-sm uppercase tracking-wide text-gray-400">What&apos;s Next?</h4>
        <h2 className="text-4xl font-bold text-purple-400 mt-2">Let’s Connect!</h2>
        <p className="mt-4 max-w-2xl text-lg text-gray-300">
          I&apos;m currently open to new opportunities and always excited to collaborate. 
          Whether you have a job opportunity, a project idea, or just want to chat, 
          feel free to reach out—I&apos;d love to hear from you!
        </p>

        <Button 
          className="mt-6 text-lg w-60"
          onClick={() => window.location.href = "mailto:wrpachonl@gmail.com?subject=Hello&body=Hi Wilmer,"} 
          variant="primary"
        >
          Say Hello
        </Button>
      </section>
    );
  };
  
  export default ConnectSection;
  