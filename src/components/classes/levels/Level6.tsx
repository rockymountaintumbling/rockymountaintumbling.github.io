import React from 'react';
import ClassTemplate from '../ClassTemplate';

function Level6() {
  return (
    <ClassTemplate
      title="Level 6 Tumbling"
      heroImage="/classes/level-6.jpg"
      description="Level 6 tumbling is an elite class focused on mastering advanced skills and complex combinations. Athletes will perfect their tucks and whips while developing advanced tumbling sequences, preparing them for high-level competition and advanced gymnastics progression."
      ageRange="Ages 8+"
      prerequisites={[
        "Successfully completed Level 5 or demonstrated equivalent skills",
        "Mastery of round-off back-handspring tuck",
        "Consistent whip technique",
        "Elite level strength and flexibility requirements",
        "Strong mental preparation and focus"
      ]}
      objectives={[
        "Master round-off back-handspring tuck and whip",
        "Develop power round-off whip technique",
        "Perfect back-handspring whip combinations",
        "Learn advanced tumbling sequences",
        "Execute Level 6 National Junior Olympic passes"
      ]}
      skills={[
        "Power round-off whip progression",
        "Back-handspring whip mastery",
        "Back-handspring tuck combinations",
        "Multiple whip sequences",
        "Advanced running tumbling passes",
        "Complex jump to tumbling combinations",
        "Elite power and technique training",
        "Advanced flexibility and strength development"
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
        "Trampoline",
        "Conditioning apparatus"
      ]}
      previousLevel={{
        name: "Level 5",
        path: "/classes/levels/level-5"
      }}
      nextLevel={{
        name: "Level 7",
        path: "/classes/levels/level-7"
      }}
    />
  );
}

export default Level6;