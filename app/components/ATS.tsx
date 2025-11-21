import React from "react";

interface Suggestion {
  type: "good" | "improve";
  tip: string;
}

interface ATSProps {
  score: number;
  suggestions: Suggestion[];
}

const ATS: React.FC<ATSProps> = ({ score, suggestions }) => {
  // Gradient based on score (dark-mode friendly)
  const gradientClass =
    score > 69
      ? "from-green-900/40"
      : score > 49
      ? "from-yellow-900/40"
      : "from-red-900/40";

  // Icon based on score
  const iconSrc =
    score > 69
      ? "/icons/ats-good.svg"
      : score > 49
      ? "/icons/ats-warning.svg"
      : "/icons/ats-bad.svg";

  // Subtitle
  const subtitle =
    score > 69 ? "Great Job!" : score > 49 ? "Good Start" : "Needs Improvement";

  return (
    <div
      className={`bg-gradient-to-b ${gradientClass} to-[#0d0d0d] rounded-2xl shadow-xl w-full p-6 border border-[#1f1f1f]`}
    >
      {/* Top section with icon */}
      <div className="flex items-center gap-4 mb-6">
        <img src={iconSrc} alt="ATS Score Icon" className="w-12 h-12" />
        <div>
          <h2 className="text-2xl font-bold text-gray-100">
            ATS Score - {score}/100
          </h2>
        </div>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-yellow-300">
          {subtitle}
        </h3>

        <p className="text-gray-400 mb-4">
          This score represents how well your resume is likely to perform in
          Applicant Tracking Systems used by employers.
        </p>

        {/* Suggestions */}
        <div className="space-y-3">
          {suggestions.map((suggestion, index) => (
            <div key={index} className="flex items-start gap-3">
              <img
                src={
                  suggestion.type === "good"
                    ? "/icons/check.svg"
                    : "/icons/warning.svg"
                }
                alt={suggestion.type === "good" ? "Check" : "Warning"}
                className="w-5 h-5 mt-1"
              />
              <p
                className={
                  suggestion.type === "good"
                    ? "text-green-400"
                    : "text-yellow-400"
                }
              >
                {suggestion.tip}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Closing Encouragement */}
      <p className="text-gray-400 italic">
        Keep refining your resume to improve your chances of getting past ATS
        filters and into the hands of recruiters.
      </p>
    </div>
  );
};

export default ATS;
