Installation
Prerequisites
Node.js: Ensure installation from the Node.js official website.
MongoDB: Set up a local database or use MongoDB Atlas for cloud-based solutions.
# Clone the repository
git clone <repository-url>
cd maze
Install Dependencies

**Frontend:**
cd frontend
npm install
**Backend:**
cd backend
npm install

**Admin:**

cd admin
npm install
npm run server

**Environment Variables**
Create a .env file in the backend directory with the following:
**MONGODB_URI ="<URL>"
CLOUDINARY_API_KEY ="<API KEY>"
CLOUDINARY_API_SECRET ="<SECRET KEY>"
CLOUDINARY_NAME ="Cloudinary "
JWT_SECRET = "<SECRET>"


ADMIN_EMAIL = ""
ADMIN_PASSWORD = ""

Create a .env file in the frontend directory with the following:
VITE_BACKEND_URL='http://localhost:3000'
Create a .env file in the adminn directory with the following:
VITE_BACKEND_URL='http://localhost:3000'
**
