import features from "../../pseudodatabase/features.json";
import SectionBackgroundImg from "./SectionBackgroundImg";
import SectionWithImage from "./SectionWithImage";

const Features = () => {
  return (
    <div className="features">
      {features.map((feature) =>
        feature.config === "background-image" ? (
          <SectionBackgroundImg
            feature={feature}
            key={`feature-${feature.name}`}
          />
        ) : (
          <SectionWithImage feature={feature} key={`feature-${feature.name}`} />
        )
      )}
    </div>
  );
};

export default Features;
