export type Work = {
  id: string;
  name: string;
  explain: string;
  coverImage?: string;
  coverImageFit?: string;
  coverImageBackground?: string;
  details?: {
    explains: string[];
    technologies?: string[];
    linkForWork?: string;
    linkForRepository?: string;
    images?: string[];
  };
};
