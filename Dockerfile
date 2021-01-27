FROM ubuntu:latest

RUN apt-get update && apt-get install -y \
	curl 

COPY ./client/src/App.js /home/myapps

RUN curl -sL https://deb.nodesource.com/setup_15.x | bash -

RUN apt-get install nodejs

RUN mkdir /home/myapps

WORKDIR /home/myapps

CMD ["npm", "install"] 

WORKDIR /

CMD ["/bin/bash"]
