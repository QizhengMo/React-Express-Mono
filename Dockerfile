FROM node:22-alpine AS pnpm-base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN npm i -g pnpm@latest-10

FROM pnpm-base AS base
COPY . /app
WORKDIR /app

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install
RUN pnpm run build


FROM pnpm-base AS arex
# runtime server
COPY --from=build /app/packages/server/dist /app

# frontend build product
COPY --from=build /app/packages/front/dist /app/frontDist

WORKDIR /app
EXPOSE 3000
CMD [ "node", "./main.js"]
