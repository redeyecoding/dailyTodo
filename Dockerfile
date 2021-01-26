FROM ubuntu:latest

RUN mkdir /home/myapp
RUN apt-get update && apt-get install -y node


