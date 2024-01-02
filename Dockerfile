FROM directus/directus:10.8.3

USER root
RUN corepack enable
USER node

RUN pnpm install simple-git
# RUN pnpm install directus-extension-package-name
