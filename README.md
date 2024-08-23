## **Documentation for Company and Contact Excel Upload Application**

### **Overview**

This application allows users to upload Excel sheets containing Company and Contact data, validate the data, view errors if any, and confirm the upload of valid data to the system.

### **Features**

- **File Upload**: Upload Excel files (.xls, .xlsx) containing Company and Contact data.
- **Data Validation**: Automatically validate the uploaded data to check for any errors or inconsistencies.
- **Error Display**: Display a list of errors for any invalid data found in the uploaded file.
- **Data Review**: View the valid data in a tabular format.
- **Data Saving**: Save the validated data to the backend for further processing.

### **How to Use the Application**

#### **1. Uploading an Excel File**

1. **Open the Application**: Navigate to the application URL in your web browser.
   
2. **Choose File**: Click on the **Choose File** button. A file dialog will appear.

3. **Select an Excel File**: Select the Excel file (.xls or .xlsx format) from your computer that you want to upload.

4. **Click Upload**: Once the file is selected, click the **Upload** button to start the upload process.

#### **2. Reviewing Data**

1. **View Valid Data**: After the file is uploaded, the application will display the valid data in a table format. This table shows all the correctly formatted rows from your Excel file.
   
2. **Check for Errors**: If there are any errors in the data (such as missing or incorrect information), an error message will be displayed, and a list of errors will appear below the table.

#### **3. Confirming the Upload**

1. **Save Valid Data**: If the data is valid, click the **Save Valid Data** button to confirm and save the data to the backend. This action will trigger a backend service that stores the data in the system.

2. **Handle Errors**: If there are errors, you can either fix them in the Excel file and re-upload or manually correct them if possible.

### **Additional Notes**

- **File Format**: Ensure the Excel file is properly formatted according to the guidelines (e.g., correct column names and data types).
- **Error Handling**: Only the rows with valid data will be uploaded. Rows with errors need to be corrected and re-uploaded.
- **Feedback**: The application provides visual feedback for file selection, uploading, and error notifications to ensure the user is aware of the application's state.

---

## **README**

### **Company and Contact Excel Upload Application**

This application allows users to upload and validate Excel files containing Company and Contact data.

### **Folder Structure**

```plaintext
Company-Contact-excel-upload-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── FileUpload.jsx
│   │   ├── DataTable.jsx
│   │   └── ErrorList.jsx
│   ├── services/
│   │   └── Api.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── .gitignore
├── package.json
├── README.md
└── yarn.lock
```

### **Getting Started**

#### **Prerequisites**

- **Node.js** and **npm** or **Yarn** installed on your machine.
- Basic knowledge of React.js.

#### **Installation**

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/DINESH-JUMANI/ShipmntsTask1.git
   cd FRONTEND
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

#### **Running the Application**

1. **Start the Development Server**:

   ```bash
   npm start
   # or
   yarn start
   ```

   The application will start, and you can access it at `http://localhost:3000`.

#### **Building for Production**

To create a production build of the application:

```bash
npm run build
# or
yarn build
```

The production build will be located in the `build/` folder.

### **Usage**

1. **Navigate to the Application**: Open your web browser and go to `http://localhost:3000`.

2. **Upload an Excel File**: Click on the **Choose File** button, select your Excel file, and click **Upload**.

3. **Review and Save Data**: Review the uploaded data for any errors. If everything is correct, click **Save Valid Data** to save it.

### **Components Overview**

- **FileUpload.jsx**: Manages the file selection, upload process, and handles displaying errors and valid data.
- **DataTable.jsx**: Displays the valid data in a tabular format.
- **ErrorList.jsx**: Displays a list of errors found in the uploaded file.
- **Api.js**: Contains functions to interact with the backend API for file uploading and data saving.
