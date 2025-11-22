Simple email backend for the portfolio

Setup
1. Copy `.env.example` to `.env` and fill in SMTP settings.
2. Install dependencies and start the server:

```bash
cd server
npm install
# development with auto-reload
npm run dev
# or run in production mode
npm start
```

By default the server listens on port 5000. The front-end development server is configured to proxy `/api` to `http://localhost:5000`.

Environment variables (see `.env.example`):
- SMTP_HOST, SMTP_PORT, SMTP_SECURE (true/false), SMTP_USER, SMTP_PASS
- FROM_EMAIL — sender email used in the message `From:`
- TO_EMAIL — recipient address where contact messages are delivered

Test endpoint (after server is running):

```bash
curl -X POST http://localhost:5000/api/send-email \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Hello world"}'
```f3
