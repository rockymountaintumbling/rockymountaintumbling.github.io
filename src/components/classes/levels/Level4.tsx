import React from 'react';
import ClassTemplate from '../ClassTemplate';

function Level4() {
  return (
    <ClassTemplate
      title="Level 4 Tumbling"
      heroImage="/classes/level-4.jpg"
      description="Level 4 tumbling focuses on mastering fundamental skills independently while introducing continuous back-handsprings with coach assistance. This advanced class builds upon the strong foundation established in Level 3.5, preparing athletes for more complex tumbling sequences and combinations."
      ageRange="Ages 6+"
      prerequisites={[
        "Successfully completed Level 3.5 or demonstrated equivalent skills",
        "Consistent standing and running back-handsprings",
        "Strong jump to back-handspring combinations",
        "Advanced strength and flexibility requirements"
      ]}
      objectives={[
        "Master all fundamental skills independently",
        "Develop continuous back-handspring technique",
        "Build strength and power for advanced skills",
        "Perfect Level 4 National Junior Olympic passes",
        "Prepare for advanced tumbling progression"
      ]}
      skills={[
        "Multiple back-handspring series",
        "Advanced jump combinations",
        "Power hurdle development",
        "Front handspring progressions",
        "Back-handspring step-outs",
        "Advanced running tumbling sequences",
        "Specialized strength training",
        "Complex flexibility exercises"
      ]}
      duration="55 minutes"
      classSize="Maximum 8 students per instructor"
      attire={[
        "Fitted leotard or athletic wear",
        "No loose clothing",
        "Hair secured away from face",
        "No jewelry",
        "Bare feet"
      ]}
      equipment={[
        "Spring floor",
        "Tumble track",
        "Training mats",
        "Conditioning apparatus"
      ]}
      previousLevel={{
        name: "Level 3.5",
        path: "/classes/levels/level-3-5"
      }}
      nextLevel={{
        name: "Level 4.5",
        path: "/classes/levels/level-4-5"
      }}
    />
  );
}

export default Level4;