FROM ubuntu:latest

RUN mkdir /home/myapp

RUN apt-get update && apt-get install -y \
    python \
    node 

COPY . /home/myapp/dailytodo/

WORKDIR /home/myapp/dailytodo/

CMD ["npm", "install"] 
