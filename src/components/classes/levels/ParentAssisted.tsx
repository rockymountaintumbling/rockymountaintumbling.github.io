import React from 'react';
import ClassTemplate from '../ClassTemplate';

function ParentAssisted() {
  return (
    <ClassTemplate
      title="Parent Assisted Tumbling"
      heroImage="/classes/parent-assisted.jpg"
      description="Our Parent Assisted program is specially designed for our youngest athletes, creating a supportive environment where parents actively participate in their child's early tumbling journey. This class focuses on developing fundamental movement patterns, body awareness, and basic coordination skills through fun, engaging activities."
      ageRange="Ages 3 & Under"
      objectives={[
        "Develop basic motor skills and physical coordination",
        "Build body awareness and spatial recognition",
        "Introduce fundamental tumbling movements",
        "Foster parent-child bonding through physical activity",
        "Create a positive association with exercise and movement"
      ]}
      skills={[
        "Basic body positions and shapes",
        "Forward rolls with assistance",
        "Balance beam walking with support",
        "Jumping and landing mechanics",
        "Basic flexibility exercises",
        "Coordination activities",
        "Strength-building exercises appropriate for toddlers"
      ]}
      duration="45 minutes"
      classSize="N/A"
      attire={[
        "Comfortable, fitted clothing",
        "No shoes (socks or bare feet)",
        "No jewelry",
        "Hair secured away from face",
        "Parents: Athletic attire and socks"
      ]}
      equipment={[
        "Soft mats",
        "Trampolines",
        "Foam shapes and blocks",
        "Sensory equipment",
        "Age-appropriate props"
      ]}
      nextLevel={{
        name: "Level 2.5",
        path: "/classes/levels/level-2-5"
      }}
    />
  );
}

export default ParentAssisted;