FROM ubuntu:latest

RUN apt-get update && apt-get install -y \
    python \
    node \

COPY . /home/myapp/dailytodo/

WORKDIR /home/myapp/dailytodo/

CMD ["npm", "install"] 
