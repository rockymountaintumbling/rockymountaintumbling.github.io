import React from 'react';
import ClassTemplate from '../ClassTemplate';

function Level4_5() {
  return (
    <ClassTemplate
      title="Level 4.5 Tumbling"
      heroImage="/classes/level-4-5.jpg"
      description="Level 4.5 tumbling focuses on mastering standing and running back-handsprings while introducing advanced skills on trampoline. This class emphasizes perfecting continuous back-handsprings and preparing athletes for back and front tuck progressions, building the foundation for advanced tumbling skills."
      ageRange="Ages 6+"
      prerequisites={[
        "Successfully completed Level 4 or demonstrated equivalent skills",
        "Consistent multiple back-handsprings",
        "Strong running tumbling combinations",
        "Advanced strength and flexibility requirements"
      ]}
      objectives={[
        "Master standing back-handspring technique",
        "Perfect round-off back-handspring sequences",
        "Achieve continuous 5 back-handsprings unassisted",
        "Develop back and front tuck progressions on trampoline",
        "Execute Level 4 National Junior Olympic passes"
      ]}
      skills={[
        "Standing back-handspring mastery",
        "Round-off back-handspring perfection",
        "Continuous back-handspring series (5+)",
        "Back tuck progression on trampoline",
        "Front tuck progression on trampoline",
        "Advanced jump combinations",
        "Complex running tumbling sequences",
        "Specialized strength and power training"
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
        name: "Level 4",
        path: "/classes/levels/level-4"
      }}
      nextLevel={{
        name: "Level 5",
        path: "/classes/levels/level-5"
      }}
    />
  );
}

export default Level4_5;