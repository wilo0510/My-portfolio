"use client";

import { useRouter } from "next/navigation";

export default function ResumePage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <button
        className="mb-4 bg-primary-purple text-white py-2 px-4 rounded"
        onClick={() => router.back()}
      >
        Back
      </button>
      <iframe
        src="/pdfs/resume.pdf"
        className="w-full max-w-4xl h-[90vh] border rounded shadow-lg"
      />
    </div>
  );
}
