import features from "../../pseudodatabase/features.json";
import useWindowSize from "../../utils/useWindowSize";
import SectionBackgroundImg from "./SectionBackgroundImg";
import SectionWithImage from "./SectionWithImage";

const Features = () => {
  const windowSize = useWindowSize();

  return (
    <div>
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
