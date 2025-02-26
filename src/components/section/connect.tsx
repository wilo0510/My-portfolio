import Button from "@/components/ui/Button";

const ConnectSection = () => {
    return (
      <section id="contact" className="flex flex-col items-center text-center text-white py-16 px-6 w-full">
        <h4 className="text-sm uppercase tracking-wide text-gray-400">What's Next?</h4>
        <h2 className="text-4xl font-bold text-purple-400 mt-2">Let’s Connect!</h2>
        <p className="mt-4 max-w-2xl text-lg text-gray-300">
          I’m currently open to new opportunities and always excited to collaborate. 
          Whether you have a job opportunity, a project idea, or just want to chat, 
          feel free to reach out—I’d love to hear from you!
        </p>

        <Button 
            className="mt-6 text-lg w-60"
            onClick={() => alert("Primary Clicked!")} 
            variant="primary"
        >
            Say Hello
        </Button>
        {/* <a
          href="mailto:your.email@example.com"
          className="mt-6 px-6 py-3 border-2 border-purple-400 text-purple-400 text-lg font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition"
        >
          
        </a> */}
      </section>
    );
  };
  
  export default ConnectSection;
  