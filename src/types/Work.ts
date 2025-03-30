export type Work = {
  id: string;
  name: string;
  explain: string;
  coverImage?: string;
  coverImageFit?: "cover" | "contain";
  coverImageBackground?: "transparent" | "white";
  details?: {
    explains: string[];
    technologies?: string[];
    linkForWork?: string;
    linkForRepository?: string;
    images?: string[];
  };
};
