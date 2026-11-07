export type SkillItem = {
  name: string;
  icon: string;
  bgColor: string;
};

export type SkillCategories = {
  [category: string]: SkillItem[];
};
