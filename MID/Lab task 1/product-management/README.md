# Product & Employee Management API (NestJS)

**SL:** 21  
**Name:** MD. Firoj Koraishi Sourov  
**ID:** 23-53516-3  
**Section:** D

## Tech
NestJS, TypeORM, PostgreSQL (Docker)

## Setup
1. Install Node.js (LTS) and Docker Desktop.
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env` (adjust values if needed).
4. Start the database: `docker compose up -d`
5. Run the app: `npm run start:dev`
6. API runs at http://localhost:3000

## Database setup
PostgreSQL runs in Docker using `docker-compose.yml`
(database: shop_db). Tables are created automatically by TypeORM.

## Endpoints
### Products
| Method | Endpoint |
|---|---|
| POST | /products |
| GET | /products |
| GET | /products/:id |
| PATCH | /products/:id |
| DELETE | /products/:id |

### Employees
| Method | Endpoint |
|---|---|
| POST | /employees |
| GET | /employees |
| GET | /employees/:id |
| PATCH | /employees/:id |
| DELETE | /employees/:id |

## Screenshots
See the `screenshots/` folder (01-create.png to 07-confirm-delete.png).