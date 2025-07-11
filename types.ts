
export enum ProjectCategory {
  RESIDENTIAL = 'Residential',
  COMMERCIAL = 'Commercial',
  MAPPING = '3D Mapping',
}

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  imageBefore: string;
  imageAfter: string;
  description: string;
  interactive?: 'slider' | 'toggle';
}
