import Link from "next/link";
const ProjectsSection = () => {
return(
    <>
    <h2 id='projects' className="text-purple-400 text-4xl font-bold mb-4 px-8 mx-12">
        Some things I’ve built
    </h2>
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-8 bg-background text-foreground max-w-6xl mx-auto px-8">
    {/* Title */}
    

    {/* Project List */}
    <div className="flex flex-col gap-12">
        {/* Project Item */}
        <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image */}
        <Link href="/Bankaroo" className="md:w-1/2 relative group">
            <img 
                src="/images/projects/bankaroo.jpeg" 
                alt="Bankaroo App" 
                className="rounded-lg shadow-lg w-full"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:opacity-0 rounded-lg"></div>
            
        </Link>

        {/* Project Info */}
        <div className="md:w-1/2 bg-secondary-background text-white p-6 rounded-lg shadow-lg -ml-20 z-10 text-right">
            <h3 className="text-xl font-semibold">Bankaroo</h3>
            <p className="mt-2 text-sm">
            A modern personal finance app that helps users track spending, manage budgets, and make eco-conscious financial decisions. The app integrates a unique sustainability impact feature, allowing users to see the environmental footprint of their purchases. With an intuitive UI, seamless transaction tracking, and personalized financial insights, it empowers users to make smarter and greener financial choices.
            </p>
            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2 justify-end">
            {/* w-40 border border-primary-purple bg-background text-primary-purple hover:bg-primary-purple hover:text-background  */}
            <span className="border border-primary-blue px-3 py-1 rounded-full text-sm">Budget & Expense Tracking</span>
            <span className="border border-primary-blue px-3 py-1 rounded-full text-sm">User-Friendly Dashboard</span>
            </div>
            
        </div>
        </div>

        {/* More projects below */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
        {/* Image */}
        <div className="md:w-1/2 relative group">
            <img 
                src="/images/projects/chore app.jpeg" 
                alt="Chore App" 
                className="rounded-lg shadow-lg w-full"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:opacity-0 rounded-lg"></div>
        </div>

        {/* Project Info */}
        <div className="md:w-1/2 bg-secondary-background text-white p-6 rounded-lg shadow-lg md:-mr-16 z-10">
            <h3 className="text-xl font-semibold">Chore App</h3>
            <p className="mt-2 text-sm">
            A simple yet efficient app designed to help roommates organize and track household chores. Users can assign tasks, set deadlines, and monitor progress collaboratively, ensuring a fair and balanced distribution of responsibilities. The intuitive interface makes household management effortless and stress-free.
            </p>
            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
            <span className="border border-primary-blue px-3 py-1 rounded-full text-sm">Productivity</span>
            <span className="border border-primary-blue px-3 py-1 rounded-full text-sm">Home Organization</span>
            </div>
        </div>
        </div>


        <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image */}

        <div className="md:w-1/2 relative group">
            <img 
                src="/images/projects/chorezilla.jpeg" 
                alt="Chore App" 
                className="rounded-lg shadow-lg w-full"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:opacity-0 rounded-lg"></div>
        </div>

        {/* Project Info */}
        <div className="md:w-1/2 bg-secondary-background text-white p-6 rounded-lg shadow-lg -ml-20 z-10 text-right">
            <h3 className="text-xl font-semibold">Simple login</h3>
            <p className="mt-2 text-sm">
            Designed a simple yet efficient login system for a home chore management app, allowing roommates to securely access their accounts and track shared responsibilities. The authentication process ensures a smooth user experience with intuitive UI elements, keeping household organization seamless and collaborative.
            </p>
            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2 justify-end">
            {/* w-40 border border-primary-purple bg-background text-primary-purple hover:bg-primary-purple hover:text-background  */}
            <span className="border border-primary-blue px-3 py-1 rounded-full text-sm">Authentication</span>
            <span className="border border-primary-blue px-3 py-1 rounded-full text-sm">WebApp</span>
            </div>
        </div>
        </div>
    </div>
    </section>
</>
);
};

export default ProjectsSection;