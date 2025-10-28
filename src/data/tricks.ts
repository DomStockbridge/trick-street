export interface Trick {
  id: string;
  name: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  culturalInfo: string;
  howTo: string[];
  bestObstacles: string[];
  prerequisites: string[];
  imageUrl?: string;
}

export const tricksDatabase: Trick[] = [
  {
    id: 'ollie',
    name: 'Ollie',
    difficulty: 'beginner',
    culturalInfo: 'Invented by Alan "Ollie" Gelfand in 1978. The foundation of modern street skating. Named after its creator, this trick revolutionized skateboarding by allowing skaters to jump without grabbing the board.',
    howTo: [
      'Position your back foot on the tail and front foot near the middle bolts',
      'Crouch down and prepare to jump',
      'Pop the tail hard against the ground',
      'Jump up and slide your front foot forward toward the nose',
      'Level out the board in the air by pushing down with your front foot',
      'Land with knees bent over both bolts'
    ],
    bestObstacles: ['Flat ground', 'Small gaps', 'Low ledges', 'Curbs'],
    prerequisites: [],
  },
  {
    id: 'kickflip',
    name: 'Kickflip',
    difficulty: 'intermediate',
    culturalInfo: 'Invented by Rodney Mullen in 1983. One of the most iconic tricks in skateboarding. The kickflip became a staple of street skating and is often the first flip trick skaters learn.',
    howTo: [
      'Set up like an ollie but angle your front foot slightly toward the heel edge',
      'Pop the tail and start your ollie motion',
      'As you slide your front foot up, kick it off the edge near the toe side',
      'The flicking motion makes the board spin',
      'Keep your body centered over the board',
      'Catch the board with both feet when it completes one rotation',
      'Land and roll away'
    ],
    bestObstacles: ['Flat ground', 'Small gaps', 'Manual pads', 'Banks'],
    prerequisites: ['ollie'],
  },
  {
    id: 'heelflip',
    name: 'Heelflip',
    difficulty: 'intermediate',
    culturalInfo: 'The opposite of a kickflip, using the heel to flip the board. Popularized in the late 80s and early 90s, heelflips have a distinct style and became a fundamental trick in technical skating.',
    howTo: [
      'Position like an ollie but angle your front foot toward the toe edge',
      'Pop the tail and ollie',
      'Kick your front heel out toward the heel edge of the board',
      'Let the board flip under you',
      'Watch for the grip tape to appear',
      'Catch with both feet and land',
    ],
    bestObstacles: ['Flat ground', 'Gaps', 'Stairs', 'Manual pads'],
    prerequisites: ['ollie', 'kickflip'],
  },
  {
    id: 'pop-shuvit',
    name: 'Pop Shuvit',
    difficulty: 'beginner',
    culturalInfo: 'A fundamental trick where the board spins 180 degrees beneath you. The "pop" version added height and style to the original shuvit, making it more dynamic and practical for obstacles.',
    howTo: [
      'Position your back foot on the tail edge, toes hanging off slightly',
      'Front foot in the middle of the board',
      'Pop the tail and scoop it backward with your back foot',
      'Jump up and let the board rotate 180 degrees',
      'Keep your shoulders straight - don\'t rotate your body',
      'Catch the board and land'
    ],
    bestObstacles: ['Flat ground', 'Manual pads', 'Small gaps', 'Banks'],
    prerequisites: ['ollie'],
  },
  {
    id: 'boardslide',
    name: 'Boardslide',
    difficulty: 'intermediate',
    culturalInfo: 'A classic grind trick where you slide perpendicular on the middle of your deck. Boardslides became iconic in the 90s as skaters started hitting handrails and ledges with style.',
    howTo: [
      'Approach the obstacle at a slight angle',
      'Ollie up and turn your body 90 degrees',
      'Land with the middle of your board on the obstacle',
      'Slide with your weight centered',
      'At the end, turn back and land rolling forward',
    ],
    bestObstacles: ['Rails', 'Ledges', 'Picnic tables', 'Flat bars'],
    prerequisites: ['ollie'],
  },
  {
    id: '50-50-grind',
    name: '50-50 Grind',
    difficulty: 'beginner',
    culturalInfo: 'The most fundamental grind. Named because you grind on both (50/50) trucks. This trick dates back to the earliest days of skateboarding and remains a staple.',
    howTo: [
      'Approach parallel to the obstacle',
      'Ollie up and land with both trucks on the obstacle',
      'Keep your weight centered and balanced',
      'Grind along the obstacle',
      'Ollie or drop off the end',
    ],
    bestObstacles: ['Rails', 'Ledges', 'Curbs', 'Flat bars'],
    prerequisites: ['ollie'],
  },
  {
    id: '5-0-grind',
    name: '5-0 Grind',
    difficulty: 'intermediate',
    culturalInfo: 'Pronounced "five-oh," this grind uses only the back truck. The name comes from a similar concept to the 50-50, but you\'re only on one truck. A stylish and technical grind.',
    howTo: [
      'Approach parallel to the obstacle',
      'Ollie up and land with only your back truck on the obstacle',
      'Lift your front truck by leaning back slightly',
      'Balance and grind on the back truck',
      'Turn or ollie off at the end',
    ],
    bestObstacles: ['Ledges', 'Rails', 'Curbs', 'Flat bars'],
    prerequisites: ['ollie', '50-50-grind'],
  },
  {
    id: 'nose-manual',
    name: 'Nose Manual',
    difficulty: 'intermediate',
    culturalInfo: 'Balancing on just the front wheels. Manuals (wheelies) are fundamental to technical street skating and flow. Rodney Mullen pioneered manual tricks in the 80s.',
    howTo: [
      'Roll at moderate speed',
      'Shift your weight forward over the front truck',
      'Lift the back wheels off the ground',
      'Keep your arms out for balance',
      'Look forward and find your balance point',
      'To exit, shift weight back and land on all four wheels',
    ],
    bestObstacles: ['Flat ground', 'Manual pads', 'Slight inclines'],
    prerequisites: ['ollie'],
  },
  {
    id: 'manual',
    name: 'Manual',
    difficulty: 'beginner',
    culturalInfo: 'A wheelie on a skateboard, balancing on the back two wheels. Essential for linking tricks and adding style to your skating. A fundamental of street skating since the beginning.',
    howTo: [
      'Roll at comfortable speed',
      'Shift weight back toward the tail',
      'Lift the front wheels off the ground',
      'Balance with your arms and slight movements',
      'Keep your back foot on the tail area',
      'Look ahead to maintain balance',
      'Lower front wheels to exit',
    ],
    bestObstacles: ['Flat ground', 'Manual pads', 'Parking lots'],
    prerequisites: [],
  },
  {
    id: 'varial-kickflip',
    name: 'Varial Kickflip',
    difficulty: 'advanced',
    culturalInfo: 'Combines a pop shuvit and kickflip. The board spins and flips simultaneously. This trick epitomizes technical street skating and requires precise timing and control.',
    howTo: [
      'Set up like a kickflip',
      'Pop and scoop the tail backward like a pop shuvit',
      'Simultaneously flick for the kickflip',
      'The board will flip and rotate 180 degrees',
      'Track the board carefully',
      'Catch when it completes both rotations',
      'Land and roll away',
    ],
    bestObstacles: ['Flat ground', 'Gaps', 'Stairs', 'Manual pads'],
    prerequisites: ['kickflip', 'pop-shuvit'],
  },
  {
    id: 'treflip',
    name: '360 Flip (Tre Flip)',
    difficulty: 'advanced',
    culturalInfo: 'A 360 shuvit combined with a kickflip. One of the most technical and stylish tricks. Tre flips became iconic in the 90s and represent advanced technical ability.',
    howTo: [
      'Position like a kickflip but scoop more aggressively',
      'Pop hard and scoop the tail in a forward-backward motion',
      'Flick your front foot for the kickflip',
      'The board does a full 360 rotation while flipping',
      'Stay over the board and track the rotation',
      'Catch with both feet',
      'Stomp and ride away',
    ],
    bestObstacles: ['Flat ground', 'Gaps', 'Stairs', 'Ledges'],
    prerequisites: ['kickflip', 'pop-shuvit', 'varial-kickflip'],
  },
  {
    id: 'hardflip',
    name: 'Hardflip',
    difficulty: 'advanced',
    culturalInfo: 'A frontside pop shuvit combined with a kickflip. The board flips vertically in a unique way. Named for its difficulty and the "hard" vertical flip rotation.',
    howTo: [
      'Set up like a kickflip',
      'Pop and scoop frontside (forward)',
      'Flick hard for the kickflip',
      'The board flips vertically in front of you',
      'Stay centered and watch the board',
      'Catch when the flip and rotation complete',
      'Land bolts and roll away',
    ],
    bestObstacles: ['Flat ground', 'Gaps', 'Manual pads'],
    prerequisites: ['kickflip', 'pop-shuvit', 'varial-kickflip'],
  },
];

export const searchTricks = (query: string): Trick[] => {
  const lowerQuery = query.toLowerCase().trim();
  if (!lowerQuery) return tricksDatabase;
  
  return tricksDatabase.filter(trick => 
    trick.name.toLowerCase().includes(lowerQuery)
  );
};

export const getTrickById = (id: string): Trick | undefined => {
  return tricksDatabase.find(trick => trick.id === id);
};

export const suggestNextTrick = (currentTrickId: string): Trick[] => {
  const currentTrick = getTrickById(currentTrickId);
  if (!currentTrick) return [];

  // Find tricks that have the current trick as a prerequisite
  const suggestions = tricksDatabase.filter(trick => 
    trick.prerequisites.includes(currentTrickId) && trick.id !== currentTrickId
  );

  // If no direct suggestions, recommend similar difficulty tricks
  if (suggestions.length === 0) {
    const difficultyOrder: Record<string, number> = {
      'beginner': 1,
      'intermediate': 2,
      'advanced': 3,
      'expert': 4,
    };

    const currentLevel = difficultyOrder[currentTrick.difficulty];
    
    return tricksDatabase
      .filter(trick => {
        const trickLevel = difficultyOrder[trick.difficulty];
        return trick.id !== currentTrickId && 
               trickLevel >= currentLevel && 
               trickLevel <= currentLevel + 1;
      })
      .slice(0, 3);
  }

  return suggestions;
};
