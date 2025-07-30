import React from 'react';
import ClassTemplate from '../ClassTemplate';

function Adults() {
  return (
    <ClassTemplate
      title="Adults Only Tumbling"
      heroImage="/classes/adults-only.jpg"
      description="Our Adults Only class provides a supportive and focused environment for adults to learn and progress in tumbling at their own pace. Whether you're a complete beginner or looking to refresh previous skills, this class accommodates all skill levels with personalized instruction and progression paths."
      ageRange="Ages 18+"
      objectives={[
        "Build fundamental tumbling skills at your own pace",
        "Develop strength and flexibility safely",
        "Learn proper technique for basic and intermediate skills",
        "Create a supportive adult learning environment",
        "Focus on individual goals and progression"
      ]}
      skills={[
        "Forward and backward rolls",
        "Handstands and cartwheels",
        "Back walkovers",
        "Back-handspring progressions",
        "Back flip progressions",
        "Strength and conditioning exercises",
        "Flexibility training",
        "Individual skill progression"
      ]}
      duration="55 minutes"
      classSize="N/A"
      attire={[
        "Fitted athletic wear",
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
    />
  );
}

export default Adults;