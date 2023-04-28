const COOP_STAGE_KEYS: { [key: string]: number } = {
  // '913f866ec025356131b85c94d185e3f361c28053a7c65a72b2d861f2c3f0d277': 3,
// b28206c853a342f236a6b64a4768451c60ba09341cb6e7c11e8e1a5353cfaa77: 4,
// '0b0376955f3909e9e95b81c640c66094f8f5d6b316d4fdf89f865dd332d6a13a': 5,
"1a29476c1ab5fdbc813e2df99cd290ce56dfe29755b97f671a7250e5f77f4961": 6,
  


"2276a46e42a11637776ebc15cf2d46a589f1dba34a76d5c940c418ed7371d071": 100,
  
  
  
  "3418d2d89ef84288c78915b9acb63b4ad48df7bfcb48c27d6597920787e147ec": 2,
  "3598b7f54248b84c47cde6b99aa45ff296a41d3d5f38eaccfe2327b2874fff0b": 102,
  be584c7c7f547b8cbac318617f646680541f88071bc71db73cd461eb3ea6326e: 1,
  f1e4df4cff1dc5e0acc66a9654fecf949224f7e4f6bd36305d4600ac3fa3db7b: 7,
};

const CoopStageKey = (id: number): string => {
  return Object.keys(COOP_STAGE_KEYS)[
    Object.values(COOP_STAGE_KEYS).indexOf(id)
  ];
};

export const CoopStageTitle = (id: number): string => {
  return CoopStageKey(id);
};

export const CoopStageURL = (id: number): string => {
  return `/assets/stages/${CoopStageKey(id)}.png`;
};

export const CoopStageLazyURL = (id: number): string => {
  return "/assets/stages/ffa84f05a6437395a0a128cad1a99e8dd0f303ce4fd687fa648617a0075d7ad9.png";
};
