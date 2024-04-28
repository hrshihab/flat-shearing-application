
```markdown
## Flat Share Application

Welcome to the Flat Share Application! This web application helps users find and share flats for rent, making the process of finding a suitable living space hassle-free.

## **Features**

- **User Registration and Authentication**: Users can register an account and log in securely using JWT authentication.
- **Flat Listings**: Users can view a list of available flats with details such as square footage, number of bedrooms, rent amount, and more.
- **Filtering and Sorting**: Users can filter and sort flats based on various criteria such as location, rent amount, and availability.
- **Flat Booking**: Users can submit booking requests for flats they are interested in.
- **User Profiles**: Users can create and update their profiles, providing additional information such as bio, profession, and address.
- **Error Handling**: Proper error handling is implemented throughout the application, providing informative error messages for validation errors, unauthorized access attempts, and general errors.

## **Links**

- **Live URL**: [Flat Share](https://flat-share.vercel.app/)
- **Server**: [Flat Share Server](https://flat-share-server.vercel.app/)
- **Database**: [Flat Share Database](https://flat-share-db.vercel.app/)
- **GitHub Repository**: [Flat Share GitHub](https://github.com/your-username/flat-share)
- **Video Demo**: [Flat Share Demo](https://drive.google.com/file/d/1CB551x79fs2mxjYlzb-JCxzupvSDr0IQ/view?usp=sharing)
- **Postman API Documentation**: [Flat Share API Docs](https://documenter.getpostman.com/view/31300739/2sA3BuVo4n)

## **Technology Stack**
- **Backend**:
  - Node.js
  - Express.js
  - Prisma
  - JWT

- **Database**:
  - PostgreSQL

## **Setup Instructions**

To set up and run the Flat Share Application on your local machine, follow these steps:

1. Clone the repository from GitHub:

   ```bash
   git clone https://github.com/your-username/flat-share.git
   ```

2. Navigate to the project directory:

   ```bash
   cd flat-share
   ```

3. Install dependencies for the frontend and backend:

   ```bash
   # Install frontend dependencies
   cd frontend
   npm install

   # Install backend dependencies
   cd ../backend
   npm install
   ```

4. Set up the PostgreSQL database:
   - Create a PostgreSQL database with the name specified in the backend `.env` file.
   - Update the database connection string in the backend `.env` file.

5. Run database migrations:

   ```bash
   cd backend
   npx prisma migrate dev
   ```

6. Start the backend server:

   ```bash
   npm start
   ```

7. Start the frontend development server:

   ```bash
   # Navigate back to the frontend directory if you're not already there
   cd ../frontend
   npm start
   ```

8. Access the application in your web browser at [http://localhost:3000](http://localhost:3000)

## **Contributing**

Contributions are welcome! If you'd like to contribute to the project, please follow these guidelines:
- Fork the repository and create a new branch for your feature or bug fix.
- Make your changes and ensure that the code follows the project's coding style and conventions.
- Test your changes thoroughly.
- Create a pull request with a clear description of your changes.

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
