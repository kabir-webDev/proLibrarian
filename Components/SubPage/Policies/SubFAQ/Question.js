import { useState } from "react";
import style from "./style.module.css";

const Question = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="px-2 sm:px-8 lg:px-20 3xl:px-80 transition duration-500">
      <div
        className={`shadow-md border rounded-sm px-5 pt-5 mb-4 transition duration-500 cursor-pointer`}
        style={{ background: "#F9F4F4" }}
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <div className="flex justify-between cursor-pointer">
          <p className="text-lg  font-semibold text-gray-900">{question}</p>
          <div className="mt-1">
            <div
              className={`w-4 h-1 transform translate-y-full ${
                showAnswer ? "rotate-0 bg-primary" : "rotate-90 bg-gray-300"
              }  transition duration-500 cursor-pointer`}
            ></div>
            <div
              className={`w-4 h-1 transform ${
                showAnswer ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              }  bg-gray-300 transition duration-500 cursor-pointer`}
            ></div>
          </div>
        </div>

        <p
          className={` ${
            showAnswer
              ? `${style["FAQ-answer-Open"]}  border-t-2 pt-4 font-semibold`
              : `${style["FAQ-answer-Close"]}`
          } mt-3 mb-2`}
        >
          {answer}
        </p>
      </div>
    </div>
  );
};

export default Question;
