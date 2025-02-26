import Image from "next/image";

export default function CaseStudy() {
  return (
    <div className="bg-background text-white px-6 md:px-20">
      {/* Header with Images */}
      <div className="flex flex-col items-center text-center">
        <div className="flex gap-4">
          <Image src="/images/bankaroo/cover.png" alt="Bankaroo App" width={800} height={500} />
        </div>
        <h1 className="text-4xl font-bold text-primary-purple mt-6">Bankaroo</h1>
      </div>

      {/* Project Details */}
      <div className="flex justify-between mx-auto p-6 ">
      {/* Left Column */}
        <div className="text-left font-mono font-bold text-lg space-y-6">
          <p>Client</p>
          <p>Sector</p>
          <p>My role</p>
          <p>Project time</p>
        </div>
        
        {/* Right Column */}
        <div className="text-left font-mono text-lg space-y-6">
          <p>Student project at Cornerstone International Community College</p>
          <p>Education, Design, Banking</p>
          <p>Entire product design from research to conception, visualization and testing</p>
          <p>2 weeks</p>
        </div>
      </div>

      {/* Overview */}
      <section className="mt-10">
        <h2 className="text-3xl font-bold text-secondary-lightBlue text-center my-8">Overview</h2>
        <p className="mt-2 text-foreground">
        This project initially aimed to introduce gamification into a banking app targeted at adult users. The goal was to enhance engagement and financial literacy through interactive elements. However, as the design evolved, usability testing and feedback revealed a significant misalignment between the playful interface and the expectations of the target audience.
        </p>
      </section>

      {/* Research & Assumptions */}
      <section className="mt-10">
        <h2 className="text-3xl font-bold text-secondary-lightBlue text-center my-8">Initial Research & Assumptions</h2>
        <ul className="list-disc pl-5 mt-2 text-foreground">
          <li>Target Audience: Adults looking for a modern way to manage finances.</li>
          <li>Key Features: A leaderboard, avatar customization, and goal-based rewards to encourage financial responsibility.</li>
          <li>Hypothesis: Gamification would make financial management more engaging and enjoyable.</li>
        </ul>
      </section>

      {/* User Testing & Findings */}
      <section className="mt-10">
        <h2 className="text-3xl font-bold text-secondary-lightBlue text-center my-8">User Testing & Findings</h2>
        <p className="mt-2 text-foreground">
          <strong>Persona Feedback:</strong> While younger users found the playful elements fun, professionals and older adults perceived them as distracting and unnecessary.
        </p>

        {/* Persona Section */}
        <div className="flex flex-col items-center text-center my-10">
          <div className="flex gap-4">
            <Image src="/images/bankaroo/persona.png" alt="Bankaroo App" width={1100} height={500} />
          </div>
        </div>
        <p className="mt-2 text-foreground">
          <strong> Customer Journey Insights: </strong> Users expected a more straightforward and professional UI when dealing with finances.
        </p>
        <div className="flex flex-col items-center text-center my-10">
          <div className="flex gap-4">
            <Image src="/images/bankaroo/customer-journey.png" alt="Bankaroo App" width={1100} height={500} />
          </div>
        </div>
        <p className="mt-2 text-foreground">
          <strong> Interviews: </strong> Several participants expressed concerns that the playful UI reduced their trust in the app’s credibility.
        </p>
      </section>

      {/* The Pivot & Lessons Learned */}
      <section className="mt-10">
        <h2 className="text-3xl font-bold text-secondary-lightBlue text-center my-8">The Pivot: Lessons from Failure</h2>
        <ul className="list-disc pl-5 mt-2 text-foreground">
          <li><strong>Mismatch with User Expectations:</strong> The gamified design felt more suitable for a financial literacy app rather than a personal financial management app.</li>
          <li><strong>Credibility Issues:</strong> Users equate financial apps with security and professionalism. A playful interface raised concerns about legitimacy.</li>
          <li><strong>Design Realignments:</strong> The UI was redesigned to be a minimalist, sleek design with subtle motivational elements rather than overt gamification.</li>
        </ul>
      </section>

      {/* Conclusion */}
      <section className="my-10">
        <h2 className="text-3xl font-bold text-secondary-lightBlue text-center my-8">Conclusion</h2>
        <p className="mt-2 text-foreground">
          While gamification can improve engagement, it must align with user needs and expectations. This project highlighted the importance of iterative design, user 
          feedback, and balancing engagement with professionalism.
        </p>
      </section>
    </div>
  );
}
