import React from 'react';
import ClassTemplate from '../ClassTemplate';

function Level2_5() {
  return (
    <ClassTemplate
      title="Level 2.5 Tumbling"
      heroImage="/classes/level-2-5.jpg"
      description="Level 2.5 is designed to build a strong foundation in tumbling fundamentals. Students will learn proper technique, safety awareness, and essential skills while developing strength, flexibility, and confidence. This class bridges the gap between basic movements and more advanced tumbling skills."
      ageRange="Ages 3+"
      prerequisites={[
        "Successfully completed Parent Assisted class or demonstrated equivalent skills",
        "Ability to follow instructions independently",
        "Basic strength and coordination"
      ]}
      objectives={[
        "Master fundamental tumbling positions and body shapes",
        "Develop proper technique for basic skills",
        "Build strength and flexibility",
        "Learn safety awareness and proper use of equipment",
        "Perform Level 1 & 2 National Junior Olympic passes"
      ]}
      skills={[
        "Forward and backward rolls",
        "Handstands and cartwheels",
        "Bridge kickovers",
        "Round-offs",
        "Back limber progression",
        "Front walkover progression",
        "Basic jump combinations",
        "Strength and conditioning exercises"
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
        name: "Parent Assisted",
        path: "/classes/levels/parent-assisted"
      }}
      nextLevel={{
        name: "Level 3",
        path: "/classes/levels/level-3"
      }}
    />
  );
}

export default Level2_5;