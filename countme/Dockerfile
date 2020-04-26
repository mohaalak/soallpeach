node:13.12.0
    
WORKDIR /usr/src/app
           
COPY package*.json ./
                    
RUN npm ci --only=production
                            
COPY . .
                                  

EXPOSE 3000
CMD [ "node", "src/index.js" ]

