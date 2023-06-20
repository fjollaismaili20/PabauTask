import imgageSrc from "../src/images/wrinkle.jpg";
import dermalFillers from "../src/images/dermalFillers.jpg";
import facials from "../src/images/facials.jpg";
import fatDissolve from "../src/images/fatDissolve.jpg";
import secretRF from "../src/images/secretRf.jpg";
import profhilo from "../src/images/profhilo.jpg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import InfoBox from "./InfoBox";
import Footer from "./Footer";

function Body({ step }) {
  const navigate = useNavigate();
  const navigateToOptions = (optionName) => {
    navigate(`/optionspage/${optionName}`);
  };
  return (
    <>
      <Header step={step} />
      <div className="Body">
        <button
          onClick={() => navigateToOptions("Anti Wrinkle")}
          className="option"
        >
          <img src={imgageSrc} alt="" />
          Anti Wrinkle
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
        <button
          onClick={() => navigateToOptions("Dermal Fillers")}
          className="option"
        >
          <img src={dermalFillers} alt="" />
          Dermal Fillers
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
        <button
          onClick={() => navigateToOptions(" Secret RF")}
          className="option"
        >
          <img src={secretRF} alt="" />
          Secret RF
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
        <button
          onClick={() => navigateToOptions(" Facials")}
          className="option"
        >
          <img src={facials} alt="" />
          Facials
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
        <button
          onClick={() => navigateToOptions("Fat Dissolve")}
          className="option"
        >
          <img src={fatDissolve} alt="" />
          Fat Dissolve
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
        <button
          onClick={() => navigateToOptions("Profhilo")}
          className="option"
        >
          <img src={profhilo} alt="" />
          Profhilo
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <div>
        <InfoBox />
      </div>
    </>
  );
}

export default Body;
