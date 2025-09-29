# BitFactory - Development Database Setup Instructions

## For Team Members

### 1. Copy Environment File
```bash
cp .env.example .env
```

### 2. Database Configuration
Replace the DATABASE_URL in your .env file with our shared Neon database:

```
DATABASE_URL="postgresql://neondb_owner:npg_AiuVHD4Uj5Sh@ep-misty-fog-adaebysj-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Generate Prisma Client
```bash
npx prisma generate
```

### 5. Test Database Connection
```bash
npx prisma studio --port 5555
```
Open http://localhost:5555 to view the database

### 6. Test Login
- Email: `admin@example.com`
- Password: `123456`

### 7. Start Development Server
```bash
npm run dev
```

## Notes
- We're sharing the development database for now
- Don't modify the database schema without team coordination
- Create test users through the `/api/register` endpoint if needed