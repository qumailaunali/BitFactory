# BitFactory - Individual Database Setup

## Option: Each Team Member Creates Their Own Database

### 1. Create Neon Account
- Go to https://neon.tech
- Sign up for free account
- Create new project

### 2. Get Your Database URL
- Copy your connection string from Neon dashboard
- Should look like: `postgresql://username:password@host.neon.tech/dbname?sslmode=require`

### 3. Setup Local Environment
```bash
# Copy template
cp .env.example .env

# Edit .env file and add your database URL
DATABASE_URL="your_neon_connection_string_here"
```

### 4. Run Migrations
```bash
npx prisma migrate dev
```

### 5. Create Test User
```bash
node scripts/create-test-user.js
```

### 6. Start Development
```bash
npm run dev
```

## Benefits
- Each developer has isolated database
- No conflicts when testing
- Can experiment freely