# 📜 Quote Voting API

A RESTful API built with Node.js and Express that allows users to submit quotes and vote on them.

## 🚀 Features

- Submit a new quote
- View all quotes
- Upvote or downvote a quote
- Delete a quote

## 🛠 Tech Stack

- Node.js
- Express.js

## 📦 Installation

```bash
git clone https://github.com/yourusername/quote-voting-api.git
cd quote-voting-api
npm install


## Run the Server
npm run dev


Server runs at: http://localhost:3000/api/quotes


📡 API Endpoints

| Method | Endpoint                  | Description        |
| ------ | ------------------------- | ------------------ |
| GET    | /api/quotes               | Get all quotes     |
| POST   | /api/quotes               | Submit a new quote |
| PUT    | /api/quotes/\:id/upvote   | Upvote a quote     |
| PUT    | /api/quotes/\:id/downvote | Downvote a quote   |
| DELETE | /api/quotes/\:id          | Delete a quote     |


## 🧪 Sample Request
POST /api/quotes
{
  "text": "Talk is cheap. Show me the code.",
  "author": "Linus Torvalds"
}

