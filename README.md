# 🌈 Life in Pixels

A full-stack journal and mood tracking web application where users can capture daily memories, track emotions, and build a personal timeline of meaningful moments.

It also includes an AI-powered title generator that suggests a title based on your journal entry using the Google Gemini API.



---

## ✨ Features

- 📝 Add daily memories
- 😊 Track moods with emoji-based categories
- 🏷️ Add tags to organize memories
- 📅 Record memories by date
-  Generate meaningful journal titles using AI.
- 📚 View recent memories (latest first)
- 📊 Dashboard showing:
  - Total memories
  - Happy days
  - Current streak (UI)
- 🗑️ Delete memories
- 📱 Clean and responsive user interface

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript (Vanilla)

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

###AI Integration
- Google Gemini API
---

## 📂 Project Structure

```
LifeInPixels/
│
├── client/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/LifeInPixels.git
```

### Install backend dependencies

```bash
cd server
npm install
```

### Create a `.env` file

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### Start the backend

```bash
npm run dev
```

### Start the frontend

Open `client/index.html` using Live Server in VS Code.

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/memories | Fetch all memories |
| POST | /api/memories | Create a new memory |
| DELETE | /api/memories/:id | Delete a memory |

---

## 📸 Preview

The application allows users to:

- Save memorable moments
- Organize memories by mood and tags
- View memories in chronological order
- Track personal journaling activity

---
**What I Learned
**
Building Life in Pixels helped me understand how a frontend communicates with a backend, how REST APIs handle data, and how MongoDB stores application data. Integrating Gemini also gave me hands-on experience connecting an AI model to a real application.

Future Improvements

- Edit existing memories.
- Add memory search and filtering.
- Explore more AI-powered journaling features.
## 👩‍💻 Author

**Chandana**

Computer Science Engineering Student

Built with ❤️ using HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB.
