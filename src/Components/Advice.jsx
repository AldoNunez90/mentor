"use client";
import Dice from "./Dice";
import { useEffect, useState } from "react";
import Loader from "./Loader";

const Advice = () => {
  const [text, setText] = useState("");
  const [adviceId, setAdviceId] = useState("");
  const [loader, setloader] = useState(null);
  const URL = "https://api.adviceslip.com/advice";

  const getAdvice = async () => {
    try {
      setloader(true);
      let response = await fetch(URL)
        .then((response) => response.json())
        .then((data) => {
          setText(`"${data.slip.advice}"`);
          setAdviceId(`Advice: ${data.slip.id}`);
        });
      setloader(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAdvice();
  }, []);

  console.log(text);

  return (
    <div className="advice-container">
      <div className="advice-box">
        {loader ? (
          <Loader />
        ) : (
          <article className="advice-article">
            <p className="advice-title"> {adviceId}</p>
            <p className="advice-text">{text}</p>
            <svg
              width="444"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              id="separator"
            >
              <g fill="none">
                <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
                <g transform="translate(212)" fill="#CEE3E9">
                  <rect width="6" height="16" rx="3" />
                  <rect x="14" width="6" height="16" rx="3" />
                </g>
              </g>
            </svg>
          </article>
        )}
      </div>
      {!loader && <Dice getAdvice={getAdvice} />}
    </div>
  );
};

export default Advice;
