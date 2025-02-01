# 🚀 Microservice `lists-update-service`

## 📌 Description
This microservice allows **updating lists** in a task management system.
It provides a REST API for modifying existing lists in the database, ensuring efficient updates.

## 🛠️ Technologies
- Node.js
- Express.js
- GraphQL (Apollo Server)
- PostgreSQL (AWS RDS)
- Sequelize (ORM)
- Docker

## 📂 Project Structure
```
lists-update-service/
│── src/
│   ├── models/
│   │   ├── List.js
│   ├── routes/
│   │   ├── updateRoutes.js
│   ├── config/
│   │   ├── database.js
│   ├── utils/
│   │   ├── validators.js ✅ (Reusable validation functions)
│── server.js
│── Dockerfile
│── docker-compose.yml
│── .env
│── README.md
```

## 🔧 Installation
```sh
npm install
```

## 🚀 Running the Microservice
```sh
npm start
```
Or using Docker:
```sh
docker-compose up --build
```

## 🔗 API Endpoints
### **1️⃣ Update a List**
```sh
curl -X PUT http://localhost:5016/lists/1 -H "Content-Type: application/json" -d '{
  "name": "Updated List Name"
}'
```

### **2️⃣ Response Example**
```json
{
  "message": "List updated successfully",
  "list": {
    "id": 1,
    "name": "Updated List Name"
  }
}
```

## 📄 License
This project is licensed under the MIT License.

