import React from 'react';
import ClassTemplate from '../ClassTemplate';

function Level8() {
  return (
    <ClassTemplate
      title="Level 8 Tumbling"
      heroImage="/classes/level-8.jpg"
      description="Level 8 tumbling represents the pinnacle of our tumbling program, focusing on elite-level skills and complex combinations. Athletes will master advanced layouts, twisting techniques, and sophisticated tumbling sequences, preparing them for the highest levels of competitive performance."
      ageRange="Ages 8+"
      prerequisites={[
        "Successfully completed Level 7 or demonstrated equivalent skills",
        "Mastery of back layout and basic twisting skills",
        "Consistent advanced tumbling combinations",
        "Elite level strength and flexibility requirements",
        "Strong mental preparation and competitive focus"
      ]}
      objectives={[
        "Master unassisted advanced skills on all surfaces",
        "Perfect layout and twisting techniques",
        "Develop complex combination passes",
        "Execute elite-level competitive sequences",
        "Prepare for advanced competitive progression"
      ]}
      skills={[
        "Back layout mastery",
        "Back layout ½ turn perfection",
        "Back full technique",
        "Whip/full combinations",
        "Back full tumble out",
        "Back double full progression",
        "Elite power and technique training",
        "Advanced competitive sequence development"
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
        name: "Level 7",
        path: "/classes/levels/level-7"
      }}
    />
  );
}

export default Level8;