import React from 'react';
import ClassTemplate from '../ClassTemplate';

function Level5() {
  return (
    <ClassTemplate
      title="Level 5 Tumbling"
      heroImage="/classes/level-5.jpg"
      description="Level 5 tumbling is an advanced class focused on mastering complex tumbling sequences and introducing back tucks. Athletes will perfect their back-handspring technique while learning new skills like whips and tucks, preparing them for high-level competitive tumbling."
      ageRange="Ages 8+"
      prerequisites={[
        "Successfully completed Level 4.5 or demonstrated equivalent skills",
        "Mastery of continuous back-handsprings",
        "Strong running tumbling combinations",
        "Advanced strength and flexibility requirements",
        "Demonstrated back tuck progression on trampoline"
      ]}
      objectives={[
        "Master unassisted round-off back-handsprings",
        "Perfect continuous back-handspring technique",
        "Develop round-off back-handspring tuck progression",
        "Learn coach-assisted whip technique",
        "Execute Level 5 National Junior Olympic passes"
      ]}
      skills={[
        "Round-off back-handspring mastery",
        "Multiple back-handspring sequences",
        "Round-off back-handspring tuck progression",
        "Whip progression with coach assistance",
        "Advanced jump to tumbling combinations",
        "Complex running tumbling sequences",
        "Specialized power and technique training",
        "Advanced flexibility development"
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
        name: "Level 4.5",
        path: "/classes/levels/level-4-5"
      }}
      nextLevel={{
        name: "Level 6",
        path: "/classes/levels/level-6"
      }}
    />
  );
}

export default Level5;