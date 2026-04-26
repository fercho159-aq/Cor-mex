export type Category = {
  id: number;
  name: string;
  slug: string;
  parent: number;
  description?: string;
};

export type ProductImage = {
  src: string;
  w?: number;
  h?: number;
  alt?: string;
};

export type Product = {
  id: number;
  slug: string;
  title: string;
  excerptHtml: string;
  image: ProductImage;
  categoryIds: number[];
  brandSlug?: "azar" | "cormex" | "trebol";
  mainCategorySlug: string;
  mainCategoryName: string;
};
