FROM node:14

# Thiết lập thư mục làm việc trong container
WORKDIR /app
COPY package*.json ./
RUN npm install

# Sao chép toàn bộ mã nguồn vào thư mục làm việc
COPY . .
EXPOSE 3300
CMD ["node", "server.js"]
