export interface Experience {
  id: string;
  company: string;
  location: string;
  position: string;
  period: {
    from: string;
    to: string;
  };
  description: string;
  achievements: string[];
}
