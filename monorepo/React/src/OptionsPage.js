import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import Header from "./Header";

function OptionsPage({ step }) {
    const navigate = useNavigate();
    const { optionName } = useParams();
    const handleBackClick = () => {
      navigate("/");
    };
    return (
      <div>
        <Header step={step} />
        <div className="option-page">
          <h2>Page of {optionName}</h2>
          <button className="back-button" onClick={handleBackClick}>Back</button>
        </div>
      </div>
    );
  }

  export default OptionsPage;