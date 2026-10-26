# AccessPath BD API (NestJS)

**SL:** 21  
**Name:** MD. Firoj Koraishi Sourov  
**ID:** 23-53516-3  
**Section:** D

## Tech
NestJS, TypeORM, PostgreSQL (Docker)

## Entities
- **Building**: id, name, buildingType, address, city, createdAt
- **AccessibilityFeature**: id, buildingId, featureType, description, isAvailable, lastVerifiedAt
- **Report**: id, buildingId, reporterName, message, photoUrl, status, createdAt

## Setup
1. Install Node.js (LTS) and Docker Desktop.
2. Install dependencies:
   ```
   npm install
   ```
3. Create the environment file (copy `.env.example` to `.env`):
   ```
   cp .env.example .env
   ```
   (On Windows Command Prompt: `copy .env.example .env`)
4. Start the database:
   ```
   docker compose up -d
   ```
5. Run the migrations (creates the tables):
   ```
   npm run migration:run
   ```
6. Start the app:
   ```
   npm run start:dev
   ```
7. API runs at http://localhost:3000

## Migrations
The migration file is in `src/migrations/`. It was generated with:
```
npm run migration:generate -- src/migrations/InitialSchema
```
Tables are created only by migrations (`synchronize: false`).

## Endpoints
| Method | Endpoint |
|---|---|
| POST | /buildings |
| GET | /buildings |
| GET | /buildings/:id |
| POST | /accessibility-features |
| GET | /accessibility-features |
| GET | /accessibility-features/:id |
| POST | /reports |
| GET | /reports |
| GET | /reports/:id |

## Screenshots
See the `screenshots/` folder.