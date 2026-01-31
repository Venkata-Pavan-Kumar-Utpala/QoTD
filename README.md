# QOTD Backend

A robust, RESTful API built for the **Question of the Day (QOTD)** feature. This backend serves daily DSA challenges to students globally, handles solution submissions with mock evaluation logic, and is designed for high scalability and clear separation of concerns.

---

## Tech Stack
* **Runtime:** Node.js (ES Modules)
* **Framework:** Express.js
* **Database:** MongoDB (Mongoose ODM)
* **Validation:** Custom logic in Controllers
* **Deployment:** Render

---

## API Endpoints

### 1. Questions
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/api/v1/qotd` | Fetches today's coding challenge based on server date. |
| **POST** | `/api/v1/qotd/submit` | Submits user code and returns mock evaluation. |

#### **Sample Request (POST /submit)**
**URL:** `{{base_url}}/api/v1/qotd/submit`  
**Body:**
```json
{
  "questionId": "65b8f1...",
  "code": "function twoSum(nums, target) { ... }",
  "language": "javascript"
}
```
Sample Response
```json
{
  "status": "Accepted",
  "feedback": "All test cases passed!",
  "submittedAt": "2026-01-31T10:46:44Z"
}
```

Data Model (Mongoose)

The Question model uses an activeDate string (YYYY-MM-DD) to ensure consistency across global time zones.

title: String (Required)
difficulty: Enum [Easy, Medium, Hard]
problemStatement: String (Markdown support)
sampleInput/Output: String
activeDate: String (Indexed for O(1) daily lookups)

How to Run Locally
Clone the repo:

```Bash
git clone [YOUR_GITHUB_LINK]
cd qotd-backend
```
Install dependencies:

```Bash
npm install
```

Setup Environment:
Create a .env file in the root and add:

```Plaintext
PORT=5000
MONGO_URI=your_mongodb_connection_string
```
Seed Data:

```Bash
node seed.js
```
Start Development Server:

```Bash
npm run dev
```

## Future Improvements

Given more time, I would implement the following:

Redis Caching: Since the "Question of the Day" only changes once every 24 hours, caching the result in Redis would drastically reduce database load.

Secure Code Execution: Integrate with a remote execution engine like Judge0 or a custom Dockerized Sandbox to run user code against hidden test cases safely.


## Live Project Links

| Resource | Link |
| :--- | :--- |
| **GitHub Repository** | [Insert your GitHub URL here] |
| **Live Deployed API** | [Insert your Render URL here] |

> **Note:** Since this is hosted on a free tier, the API may take 30–60 seconds to "wake up" on the first request if it has been inactive.

---

Leaderboard Aggregation: Implement a daily leaderboard using MongoDB's aggregation pipeline or Redis Sorted Sets for real-time ranking.

JWT Authentication: Secure the submission endpoint so only logged-in students can submit and track their progress.
