
## **API Documentation**

### **Overview**

This API allows users to upload Excel files containing Company and contact data. It validates the data, provides feedback on any errors, and saves the valid data to a MongoDB database.

### **Base URL**

```
http://localhost:5000/api
```

### **Endpoints**

#### 1. **Upload Excel File**

- **Endpoint**: `/upload`
- **Method**: `POST`
- **Description**: Uploads an Excel file and validates the contents.
- **Request Body**: Form-data with a key of `file` and the Excel file as the value.
- **File Size Limit**: 5 MB
- **Response**:
  - **Status 200**: Returns the valid data and any errors found during validation.
  - **Status 400**: No file uploaded or file size exceeds the limit.
- 

#### 2. **Save Valid Data to Database**

- **Endpoint**: `/save`
- **Method**: `POST`
- **Description**: Saves the valid data from the uploaded Excel file to the database.
- **Request Body**: JSON object with a `validData` array containing the valid Company and Contact information.
- **Response**:
  - **Status 201**: Data saved successfully.
  - **Status 204**: No data to save.
  - **Status 400**: Validation errors or bad request.
- 

- **Example Response**:
  ```json
  {
    "message": "Data saved successfully"
  }
  ```

### **Error Handling**

All error responses will include a status code and a message. For example, if the file size exceeds the limit, a `413` status code will be returned with a message explaining the issue.

---

## **README.md**

```markdown
# Company and Contact Management API

This project is a REST API for managing Company and Contact data using Excel file uploads. The API validates data from the Excel file and saves the valid entries into a MongoDB database.

## **Table of Contents**

1. [Folder Structure](#folder-structure)
2. [Getting Started](#getting-started)
3. [Environment Variables](#environment-variables)
4. [Running the Application](#running-the-application)
5. [API Endpoints](#api-endpoints)

## **Folder Structure**

```plaintext
.
├── config
│   └── db.js             # Database connection setup
├── controllers
│   └── fileUploadController.js # Controllers for handling file upload and saving data
├── middlewares
│   └── errorMiddleware.js # Error handling middleware
├── models
│   ├── Contact.js         # Mongoose schema for Contact
│   └── Company.js           # Mongoose schema for Company
├── routes
│   └── fileUploadRoutes.js # Routes for file upload and data saving
├── utils
│   └── excelParser.js    # Utility functions for parsing Excel files
├── uploads               # Directory for uploaded files (created automatically)
├── .env                  # Environment configuration file
├── .gitignore            # Git ignore file
├── package.json          # NPM package file
└── server.js             # Main server file
```

## **Getting Started**

### **Prerequisites**

- Node.js (version 14 or higher)
- MongoDB (local or remote instance)
- npm (Node Package Manager)

### **Installation**

1. Clone the repository:

   ```bash
   git clone https://github.com/DINESH-JUMANI/ShipmntsTask1.git
   cd BACKEND
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   ```bash
    npm install cors@^2.8.5
    npm install dotenv@^16.4.5
    npm install express@^4.19.2
    npm install express-async-handler@^1.2.0
    npm install mongoose@^8.5.3
    npm install multer@^1.4.5-lts.1
    npm install nodemon@^3.1.4
    npm install vercel@^37.1.0
    npm install xlsx@^0.18.5
   ```

3. Set up your `.env` file (see [Environment Variables](#environment-variables)).

## **Environment Variables**

Create a `.env` file in the root directory and add the following variables:

```plaintext
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

## **Running the Application**

1. Start the server:

   ```bash
   npm start
   ```

   The server will run on `http://localhost:5000` by default.

2. You can now use tools like Postman or cURL to interact with the API.

## **API Endpoints**

For detailed API usage, refer to the [API Documentation](#api-documentation) section above.


### **Final Notes**

- Ensure the MongoDB server is running and accessible.
- Replace `your_mongodb_connection_string` in the `.env` file with your MongoDB URI.
- This documentation provides a clear guide on how to set up, run, and use the API.