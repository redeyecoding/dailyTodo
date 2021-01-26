FROM ubuntu:latest

RUN apt-get update && apt-get install -y \
    python \
    node 

RUN mkdir /home/myapp

COPY . /home/myapp/dailytodo/

WORKDIR /home/myapp/dailytodo/

CMD ["npm", "install"] 
