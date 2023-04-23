import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const subjectRouter = createTRPCRouter({
  create: publicProcedure.input(z.string()).mutation(async ({ ctx, input }) => {
    return ctx.prisma.subject.create({
      data: {
        name: input,
      },
    });
  }),
  getAll: publicProcedure.query(({ ctx }) => {
    const response = ctx.prisma.subject.findMany();
    return response;
  }),
});
