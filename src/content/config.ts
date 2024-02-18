import { defineCollection, z } from "astro:content";

const showcase = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      titulo: z.string().min(1),
      subTitulo: z.string().min(1),
      idCss: z.string().min(1),
      image: image(),
      featured: z.number().min(1).optional(),
    }),
});

const trabajos = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      imagen: image(),
      titulo: z.string().min(1),
      tamanyo: z.number().min(1).optional(),
      orden: z.number().min(1).optional(),
    }),
});

export const collections = {
  showcase, trabajos
};
