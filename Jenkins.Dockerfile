FROM jenkins/jenkins:lts

USER root

RUN apt-get update && \
    apt-get install -y curl git ca-certificates lsb-release gnupg docker-compose-plugin && \
    curl -fsSL https://deb.nodesource.com/setup_22.x | bash - && \
    apt-get install -y nodejs docker.io && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*