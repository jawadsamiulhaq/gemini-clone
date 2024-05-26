import React, { useContext } from "react";
import "./Main.css";
import { assets } from "/src/assets/assets";
import { Context } from "../../context/Context";
const Main = () => {
    // const loadPrompt=async(prompt)=>{
  //   setRecentPrompt(prompt)
  //   await onSent(prompt)
  // }
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  const loadPrompt = (prompt) => {
    setInput(prompt);
  };
  return (
    <div className="main">
      <div className="nav">
        <p>Jemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>What's up, Coder.</span>
              </p>
              <p>How can i help you today?</p>
            </div>
            <div className="cards">
              <div className="card" onClick={() => loadPrompt("Explain the difference between functional and object-oriented programming?")}>
                <p>Explain the difference between functional and object-oriented programming.</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card" onClick={() => loadPrompt("How does the JavaScript event loop work?")}>
                <p>How does the JavaScript event loop work?</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card" onClick={() => loadPrompt("Explain the concept of closures in JavaScript?")}>
                <p>Explain the concept of closures in JavaScript.</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card" onClick={() => loadPrompt("How do you manage state in a React application?")}>
                <p>How do you manage state in a React application?</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                    <hr/>
                    <hr/>
                    <hr/>
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />    
              {input ? <img onClick={onSent} src={assets.send_icon} alt="" /> : null }
            </div>
          </div>
          <p className="bottom-info">
            • Made by Jawad •
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
