export type CategoryType =
  | "All"
  | "Camps & Workshops"
  | "Awards & Projects"
  | "Conferences";

export type CertificateItem = {
  title: string;
  subtitle: string;
  category: CategoryType;
  description: string;
  tags: string[];
  image?: string;
  awardBadge?: string;
  isPending?: boolean;
};
