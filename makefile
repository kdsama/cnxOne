start: 
	docker build -f  "$$(pwd)/deploys/Dockerfile" --no-cache -t nodeapp .
	docker run -d  --restart always -p 3000:3000 nodeapp 

build :
	docker build -f  "$$(pwd)/deploys/Dockerfile" --no-cache -t nodeapp .
	

run : 
	docker run -d  --restart always -p 3000:3000 nodeapp 


