import Image from "next/image";

export default function CaseStudy() {
  return (
    <div className="bg-background text-white px-6 md:px-20">
      {/* Header with Images */}
      <div className="flex flex-col items-center text-center">
        <div className="flex gap-4">
          <Image src="/images/bankaroo/cover.png" alt="Bankaroo App" width={800} height={500} />
        </div>
        <h1 className="text-4xl font-bold text-purple-400 mt-6">Bankaroo</h1>
      </div>

      {/* Project Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 text-sm">
        <div>
          <p><span className="font-semibold">Client:</span> Student project at Cornerstone International Community College</p>
          <p><span className="font-semibold">Sector:</span> Education, Design, Banking</p>
          <p><span className="font-semibold">My Role:</span> Entire product design from research to wireframes, visualization, and testing</p>
          <p><span className="font-semibold">Project Time:</span> 2 weeks</p>
        </div>
      </div>

      {/* Overview */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-blue-400 text-center">Overview</h2>
        <p className="mt-2 text-gray-300">
        This project initially aimed to introduce gamification into a banking app targeted at adult users. The goal was to enhance engagement and financial literacy through interactive elements. However, as the design evolved, usability testing and feedback revealed a significant misalignment between the playful interface and the expectations of the target audience.
        </p>
      </section>

      {/* Research & Assumptions */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-blue-400 text-center">Initial Research & Assumptions</h2>
        <ul className="list-disc pl-5 mt-2 text-gray-300">
          <li>Target Audience: Adults looking for a modern way to manage finances.</li>
          <li>Key Features: A leaderboard, avatar customization, and goal-based rewards to encourage financial responsibility.</li>
          <li>Hypothesis: Gamification would make financial management more engaging and enjoyable.</li>
        </ul>
      </section>

      {/* User Testing & Findings */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-blue-400 text-center">User Testing & Findings</h2>
        <p className="mt-2 text-gray-300">
          <strong>Persona Feedback:</strong> While younger users found the playful elements fun, professionals and older adults perceived them as distracting and unnecessary.
        </p>

        {/* Persona Section */}
        <div className="flex flex-col md:flex-row gap-6 mt-6">
          <div className="bg-gray-800 p-6 rounded-lg w-full md:w-1/3">
            <h3 className="text-lg font-bold text-white">Amy Murphy</h3>
            <p className="text-gray-400">Dog Daycare Attendant, Age 27</p>
            <p className="mt-4 text-gray-300">
              Between her busy job and personal aspirations, she is focused on managing her finances efficiently. She wants a straightforward, trustworthy app.
            </p>
          </div>

          {/* Pain Points & Goals */}
          <div className="bg-gray-800 p-6 rounded-lg w-full md:w-2/3">
            <h3 className="text-lg font-bold text-white">Pain Points</h3>
            <ul className="list-disc pl-5 mt-2 text-gray-300">
              <li>Difficulty navigating between app sections.</li>
              <li>Overemphasis on playful elements like the mascot and leaderboard.</li>
              <li>Struggles to find savings insights with detailed progress.</li>
            </ul>
            <h3 className="text-lg font-bold text-white mt-6">Goals</h3>
            <ul className="list-disc pl-5 mt-2 text-gray-300">
              <li>Easily track and achieve savings goals.</li>
              <li>Access a professional, structured, and engaging platform.</li>
              <li>Simple UI with intuitive navigation and relevant features.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* The Pivot & Lessons Learned */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-blue-400">The Pivot: Lessons from Failure</h2>
        <ul className="list-disc pl-5 mt-2 text-gray-300">
          <li><strong>Mismatch with User Expectations:</strong> The gamified design felt more suitable for a financial literacy app rather than a personal financial management app.</li>
          <li><strong>Credibility Issues:</strong> Users equate financial apps with security and professionalism. A playful interface raised concerns about legitimacy.</li>
          <li><strong>Design Realignments:</strong> The UI was redesigned to be a minimalist, sleek design with subtle motivational elements rather than overt gamification.</li>
        </ul>
      </section>

      {/* Conclusion */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-blue-400">Conclusion</h2>
        <p className="mt-2 text-gray-300">
          While gamification can improve engagement, it must align with user needs and expectations. This project highlighted the importance of iterative design, user 
          feedback, and balancing engagement with professionalism.
        </p>
      </section>
    </div>
  );
}
