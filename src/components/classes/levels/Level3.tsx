import React from 'react';
import ClassTemplate from '../ClassTemplate';

function Level3() {
  return (
    <ClassTemplate
      title="Level 3 Tumbling"
      heroImage="/classes/level-3.jpg"
      description="Level 3 tumbling focuses on mastering fundamental skills while introducing more advanced techniques. This class emphasizes proper progression through back-handsprings and limber skills, building upon the strong foundation established in Level 2.5. Students will develop increased body awareness, strength, and confidence necessary for executing complex tumbling combinations."
      ageRange="Ages 3+"
      prerequisites={[
        "Successfully completed Level 2.5 or demonstrated equivalent skills",
        "Consistent round-off technique",
        "Strong bridge and kickover skills",
        "Basic strength and flexibility requirements"
      ]}
      objectives={[
        "Master Level 2.5 skills with proper technique",
        "Develop back-handspring progression",
        "Perfect limber skills and variations",
        "Build strength and flexibility for advanced skills",
        "Execute Level 3 National Junior Olympic passes"
      ]}
      skills={[
        "Back-handspring drills and progressions",
        "Standing back-handspring",
        "Round-off back-handspring",
        "Front and back limbers",
        "Advanced jump combinations",
        "Front walkover variations",
        "Back walkover variations",
        "Strength and flexibility training"
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
        name: "Level 2.5",
        path: "/classes/levels/level-2-5"
      }}
      nextLevel={{
        name: "Level 3.5",
        path: "/classes/levels/level-3-5"
      }}
    />
  );
}

export default Level3;