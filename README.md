# 🎓 Smart Attendance System using Face Recognition

🚀 An intelligent, secure, and fully automated student attendance system powered by real-time face recognition. This system eliminates proxy attendance and manual errors — modernizing classroom management with the power of AI and full-stack web development.

---

## 📸 Project Demo

📺 [Watch Demo on YouTube](https://youtu.be/ocK9qXiKrKs?si=jWXdLqLMLO2NKFSy)

---

## 🌟 Key Features

* 🧠 Real-time face detection and recognition using `@vladmandic/face-api`
* 🎥 Webcam-based attendance directly in the browser
* ✅ Automatic attendance marking on successful face match
* 🗕️ Daily logs stored in PostgreSQL using Drizzle ORM
* 🔐 Kinde authentication with role-based access
* 🧑‍🏫 Separate Teacher/Admin dashboards
* 📊 Interactive UI with attendance insights
* ⚡ Built using **Next.js**, **Drizzle**, **Neon DB**, and modern JS

---

## 🛠️ Tech Stack

### Frontend

![Next.js](https://img.shields.io/badge/Next.js-000?logo=next.js\&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?logo=react\&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css\&logoColor=white)

### Backend & Auth

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js\&logoColor=white)
![Drizzle ORM](https://img.shields.io/badge/Drizzle-3178c6?logo=typescript\&logoColor=white)
![Kinde](https://img.shields.io/badge/Kinde-000?logo=kinde\&logoColor=white)

### Database

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql\&logoColor=white)
![Neon](https://img.shields.io/badge/Neon_DB-000000?logo=postgresql\&logoColor=white)

### Face Recognition

![face-api.js](https://img.shields.io/badge/face--api.js-000?logo=javascript\&logoColor=yellow)
![vladmandic/face-api](https://img.shields.io/badge/vladmandic%2Fface--api-black?logo=github\&logoColor=white)
![Webcam Access](https://img.shields.io/badge/Webcam-black?logo=camera\&logoColor=white)

---

## 🧹 System Architecture

```
[User Interface]
       ↓
[Webcam Capturing via Face API]
       ↓
[Face Matching with /public/faces folder]
       ↓
[Attendance Marking in PostgreSQL via Drizzle]
       ↓
[Real-time Dashboard / Statistics]
```

---

## 🧪 How It Works

1. Student stands in front of the webcam.
2. Face is detected using `face-api.js`.
3. If matched, attendance is marked automatically.
4. If unmatched, attendance is not marked.
5. Admin/Teacher can view all attendance records on the dashboard.

---

## 🔧 Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/smart-attendance-system.git
   cd smart-attendance-system
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Prepare Face Data**

   * Place images in `/public/faces/`
   * Format: `<Name>.jpg` (e.g., `Aarohi.jpg`)

4. **Start the Development Server**

   ```bash
   npm run dev
   ```

5. **Open in Browser**

   * Visit: `http://localhost:3000/dashboard`
   * Login as Teacher/Admin and click 📷 to start marking attendance

---

## 🔐 Authentication & Roles

Powered by [Kinde](https://kinde.com):

* 👨‍🏫 **Teacher**: Can mark and view attendance
* 🧑‍💼 **Admin**: Can manage batches, students, and reports

---

## 🗃️ Database Schema

**Tables Used:**

* `batch` → `id`, `name`, `startDate`, `endDate`, `createdAt`
* `students` → `id`, `name`, `email`, `batchId`, `createdAt`, `createdBy`
* `attendance` → `id`, `studentId`, `date`, `isPresent`, `createdAt`

---

## 🧠 AI Model Details

* Uses `@vladmandic/face-api` (modern wrapper over `face-api.js`)
* Models stored in: `/public/models/`
* Face descriptors are compared with labeled student images

---

## 💡 Future Scope

* 🎯 Improve accuracy with YOLOv8 or Dlib
* 📱 Add mobile app using React Native
* 🧾 Export attendance data to PDF/Excel
* 🔔 Notifications for latecomers
* 📈 Student performance/insight pages

---

## 📄 License

MIT License.
Free to use, modify, and distribute for personal or academic purposes.
