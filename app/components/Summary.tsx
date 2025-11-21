import ScoreGauge from "~/components/ScoreGauge";
import ScoreBadge from "~/components/ScoreBadge";

const Category = ({ title, score }: { title: string; score: number }) => {
  const textColor =
    score > 70
      ? "text-green-400"
      : score > 49
      ? "text-yellow-400"
      : "text-red-400";

  return (
    <div className="resume-summary">
      <div className="category bg-[#1a1a1a] border border-[#2a2a2a]">
        <div className="flex flex-row gap-2 items-center justify-center">
          <p className="text-2xl text-gray-200">{title}</p>
          <ScoreBadge score={score} />
        </div>
        <p className="text-2xl text-gray-300">
          <span className={textColor}>{score}</span>/100
        </p>
      </div>
    </div>
  );
};

const Summary = ({ feedback }: { feedback: Feedback }) => {
  return (
    <div className="rounded-2xl w-full bg-[#0d0d0d] border border-[#1f1f1f] shadow-xl">
      <div className="flex flex-row items-center p-6 gap-8">
        <ScoreGauge score={feedback.overallScore} />

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-gray-100">
            Your Resume Score
          </h2>
          <p className="text-sm text-gray-400">
            This score is generated based on multiple key resume factors.
          </p>
        </div>
      </div>

      <Category title="Tone & Style" score={feedback.toneAndStyle.score} />
      <Category title="Content" score={feedback.content.score} />
      <Category title="Structure" score={feedback.structure.score} />
      <Category title="Skills" score={feedback.skills.score} />
    </div>
  );
};

export default Summary;
