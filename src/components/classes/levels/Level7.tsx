import React from 'react';
import ClassTemplate from '../ClassTemplate';

function Level7() {
  return (
    <ClassTemplate
      title="Level 7 Tumbling"
      heroImage="/classes/level-7.jpg"
      description="Level 7 tumbling is our advanced elite class focused on mastering complex aerial skills and sophisticated combinations. Athletes will perfect their advanced skills while developing layout and twisting techniques, preparing them for the highest levels of competitive tumbling."
      ageRange="Ages 8+"
      prerequisites={[
        "Successfully completed Level 6 or demonstrated equivalent skills",
        "Mastery of back-handspring tuck combinations",
        "Consistent whip technique",
        "Elite level strength and flexibility requirements",
        "Strong mental preparation and focus"
      ]}
      objectives={[
        "Master unassisted advanced skills on all surfaces",
        "Perfect back-handspring tuck and pike technique",
        "Develop layout and twisting progressions",
        "Learn complex aerial combinations",
        "Execute elite-level competitive passes"
      ]}
      skills={[
        "Back-handspring tuck mastery",
        "Back-handspring pike perfection",
        "Back layout progression",
        "Back layout ½ turn development",
        "Back full technique",
        "Advanced whip combinations",
        "Elite power and technique training",
        "Complex flexibility and strength development"
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
        "Conditioning apparatus",
        "Advanced safety equipment"
      ]}
      previousLevel={{
        name: "Level 6",
        path: "/classes/levels/level-6"
      }}
      nextLevel={{
        name: "Level 8",
        path: "/classes/levels/level-8"
      }}
    />
  );
}

export default Level7;