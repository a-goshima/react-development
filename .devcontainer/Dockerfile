FROM mcr.microsoft.com/devcontainers/typescript-node:22-bullseye

# Install additional packages
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
    git \
    curl \
    wget \
    vim \
    && apt-get clean -y && rm -rf /var/lib/apt/lists/*

# Set proper permissions
RUN chmod -R 777 /frontend || true
EXPOSE 3000