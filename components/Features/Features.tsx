import { FEATURES } from "@/constants";
import Image from "next/image";
import "./Features.css";
const Features = () => {
  return (
    <div className="app__features section__padding">
      <div className="app__container">
        <div className="app__features_heading">
          <h3>Top Features</h3>
          <h1 className="app__heading">Built-in Robust Features <br /> Versatile Purposes</h1>
        </div>
        <div className="app__features_cards">
          {FEATURES.map((features) => (
          <FeatureItem 
          key={features.title}
          icon={features.icon}
          title={features.title}
          text={features.text}
          />
          ))}
        </div>
      </div>
    </div>
  )
}

type FeatureItem = {
  icon: string;
  title: string;
  text: string;
}

const FeatureItem = ({ icon, title, text } : FeatureItem) => {
  return(
    <div className="app__featureItem">
      <div className="app__featureItem_icon">
        <Image 
        src={icon}
        width={55}
        height={55}
        alt="Icon"
        />
      </div>
      <div className="app__featureItem_title">
        <h2 className="app__card_title">{title}</h2>
      </div>
      <div className="app__featureItem_text">
        <p className="app__text">{text}</p>
      </div>
    </div>
  )
}

export default Features