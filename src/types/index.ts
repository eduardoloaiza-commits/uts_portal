export type SubsidyType =
  | "DS1 / TRAMO 1"
  | "DS1 / TRAMO 2"
  | "DS1 / TRAMO 3"
  | "DS19 (Automático)"
  | "DS49"
  | "FOGAES"
  | "Subsidio a la Tasa";

export type PropertyType = "Casa" | "Departamento";

export type Property = {
  id: string;
  title: string;
  region: string;
  commune: string;
  locationLabel: string;
  propertyType: PropertyType;
  bedroomsMax: number;
  bathroomsMax: number;
  minIncome: number;
  priceUF?: number;
  subsidies: SubsidyType[];
  area: string;
  deliveryStatus: string;
  developerId: string;
  developerName: string;
  images: string[];
  description: string;
  videoUrl?: string;
  virtualTourUrl?: string;
  highlighted?: boolean;
};

export type Developer = {
  id: string;
  name: string;
  logoUrl: string;
  about: string;
  address: string;
  email: string;
  website: string;
};

export type Article = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
};

export type RegionOption = {
  name: string;
  communes: string[];
};
