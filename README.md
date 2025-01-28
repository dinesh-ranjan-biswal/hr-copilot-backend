## Getting Started

### 1. Clone the Repository

```bash
[git clone https://github.com/your-username/express-prisma-app.git](https://github.com/dinesh-ranjan-biswal/hr-copilot-backend.git)
cd hr-copilot-backend
```

### 2. Install Dependencies

Run the following command to install the required dependencies:

```bash
npm install
```

or

```bash
yarn install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add your database connection string:

```env
DATABASE_URL=<your-supabase-database-url>
SUPABASE_API_KEY=<your-supabase-api-key>
PORT=8500
```

### 4. Initialize Prisma

Generate the Prisma client and push the schema to the Supabase database:

```bash
npx prisma init
npx prisma db push
```

Edit the `prisma/schema.prisma` file to define your database models.

### 5. Run the Application

Start the development server:

```bash
npm run start
# or
yarn start
```

The server will be running at `http://localhost:8300`.



## Tools & Technologies

- **Express.js**: Web framework for Node.js
- **Prisma**: Next-generation ORM for database interactions
- **Supabase**: Open-source backend as a service
- **Dotenv**: For managing environment variables
- **Nodemon**: For automatically restart your Node.js server whenever you make changes to the code
