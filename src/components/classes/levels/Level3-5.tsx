import React from 'react';
import ClassTemplate from '../ClassTemplate';

function Level3_5() {
  return (
    <ClassTemplate
      title="Level 3.5 Tumbling"
      heroImage="/classes/level-3-5.jpg"
      description="Level 3.5 tumbling is designed to perfect Level 3 skills while preparing athletes for more advanced techniques. This class focuses on mastering back-handsprings and limber skills with excellent form and consistency, setting a strong foundation for future progression. Students will develop increased strength, flexibility, and technical precision."
      ageRange="Ages 6+"
      prerequisites={[
        "Successfully completed Level 3 or demonstrated equivalent skills",
        "Consistent standing back-handspring",
        "Solid round-off back-handspring",
        "Advanced strength and flexibility requirements"
      ]}
      objectives={[
        "Perfect Level 3 skills with excellent technique",
        "Master various back-handspring combinations",
        "Develop advanced limber skill variations",
        "Build strength and flexibility for Level 4 skills",
        "Execute Level 3 National Junior Olympic passes with precision"
      ]}
      skills={[
        "Multiple back-handspring connections",
        "Jump to back-handspring combinations",
        "Running tumbling sequences",
        "Advanced limber variations",
        "Front walkover to back-handspring",
        "Back walkover to back-handspring",
        "Power hurdle techniques",
        "Advanced strength and flexibility training"
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
        "Conditioning equipment"
      ]}
      previousLevel={{
        name: "Level 3",
        path: "/classes/levels/level-3"
      }}
      nextLevel={{
        name: "Level 4",
        path: "/classes/levels/level-4"
      }}
    />
  );
}

export default Level3_5;