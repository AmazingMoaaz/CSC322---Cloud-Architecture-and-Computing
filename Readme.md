# 📌 Category API

This project provides a simple **Category Management API** using **Express.js** and **MongoDB**.

## 🚀 Features
- 📂 Create a new category
- 📋 Get all categories
- 🔍 Get a category by ID
- ✏️ Update a category
- 🗑️ Delete a category
- 🛠️ API testing with Postman

---

## 🛠️ Installation

1️⃣ **Clone the repository**
```sh
git clone https://github.com/AmazingMoaaz/CSC322-Cloud-Architecture-and-Computing.git
cd CSC322-Cloud-Architecture-and-Computing
```

2️⃣ **Install dependencies**
```sh
npm install
```

3️⃣ **Set up environment variables**
Create a `.env` file in the root directory and add:
```env
MONGO_URI=mongodb://localhost:27017/categorydb
PORT=5000
```

4️⃣ **Run the server**
```sh
node server.js
```

---

## 📌 API Endpoints

### 1️⃣ Create a Category 🆕
- **Endpoint:** `POST /api/categories/Create_Category`
- **Body:**
  ```json
  {
    "name": "Tech"
  }
  ```
- **Response:**
  ```json
  {
    "_id": "65a3d8b5f4a6c4b5e2e5d123",
    "name": "Tech"
  }
  ```

---

### 2️⃣ Get All Categories 📋
- **Endpoint:** `GET /api/categories/GetAllCategories`
- **Response:**
  ```json
  [
    {
      "_id": "65a3d8b5f4a6c4b5e2e5d123",
      "name": "Tech"
    },
    {
      "_id": "65a3d8b5f4a6c4b5e2e5d124",
      "name": "Health"
    }
  ]
  ```

---

### 3️⃣ Get Category by ID 🔍
- **Endpoint:** `GET /api/categories/GetCategoryByBId/:id`
- **Example:** `/api/categories/GetCategoryByBId/65a3d8b5f4a6c4b5e2e5d123`

---

### 4️⃣ Update Category ✏️
- **Endpoint:** `PUT /api/categories/Update_Category/:id`
- **Body:**
  ```json
  {
    "name": "Updated Tech"
  }
  ```
- **Response:**
  ```json
  {
    "_id": "65a3d8b5f4a6c4b5e2e5d123",
    "name": "Updated Tech"
  }
  ```

---

### 5️⃣ Delete Category 🗑️
- **Endpoint:** `DELETE /api/categories/DeleteCategoryByBId/:id`
- **Example:** `/api/categories/DeleteCategoryByBId/65a3d8b5f4a6c4b5e2e5d123`
- **Response:**
  ```json
  {
    "message": "Category deleted successfully"
  }
  ```

---

## 🛠️ Tools & Technologies
- ⚡ **Express.js** (Server-side framework)
- 🍃 **MongoDB** (Database)
- 🔄 **Mongoose** (MongoDB ODM)
- 🌍 **REST API**
- 🛠 **Postman** (API testing)

---

## ✅ Testing with Postman
You can import the Postman collection for easy API testing.
1. Open **Postman**
2. Click **Import** → **Raw Text**
3. Paste API URLs & test requests
