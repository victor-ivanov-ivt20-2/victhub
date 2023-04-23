import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const scheduleRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        time: z.number().lte(5).gte(0),
        day: z.number().lte(5).gte(0),
        week: z.number().lte(2).gte(0),
        subject_id: z.number().int(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.schedule.create({
        data: input,
      });
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    const response = ctx.prisma.schedule.findMany({
      select: {
        id: true,
        time: true,
        day: true,
        week: true,
        subject: {
          select: {
            name: true,
          },
        },
      },
    });

    return response;
  }),
});
