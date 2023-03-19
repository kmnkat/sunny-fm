import features from "../../pseudodatabase/features.json";

import SectionBackgroundImg from "./SectionBackgroundImg";
import SectionWithImage from "./SectionWithImage";

const Features = () => {
  return (
    <div>
      {features.map((feature) =>
        feature.config === "background-image" ? (
          <SectionBackgroundImg feature={feature} />
        ) : (
          <SectionWithImage feature={feature} />
        )
      )}
    </div>
  );
};

export default Features;
