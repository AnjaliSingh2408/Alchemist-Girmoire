# 🌿 Alchemist's Grimoire  
### Smart Medication Adherence Tracker  
> _Developed for **Webster 2025** by Team **ChronoAlchemists** (Team ID: 892)_

---

## 👥 Team Information

| Member | Roll No. | Department | Username |
|:--------|:-----------|:------------|:------------|
| Nishi Gupta | 20243187 | CSE | nishigupta0142 |
| Anjali Singh | 20243032 | CSE | ParthKrishna |
| Paramita Ghosh | 20243197 | CSE | paramita_38708 |

---

## 🧩 Problem Description

In the fast-paced world of traveling performers, especially within circuses, managing complex medication schedules can be challenging. Forgetting doses impacts not only health but also performance consistency.

**Alchemist’s Grimoire** provides a **smart, AI-integrated wellness and medication adherence platform** that ensures performers never miss a dose.  
It centralizes medication management — enabling **easy scheduling, timely reminders, and insightful adherence tracking** through a clean, data-driven dashboard.

---

## 🌐 Website Name
**Alchemist’s Grimoire**

---

## 🔄 Process Flow

1. **Onboarding**  
   - Users create an account via email or Google sign-in.  
   - Authentication is securely handled via JWT.

2. **Dashboard**  
   - Displays today’s medication schedule, upcoming reminders, and adherence statistics.

3. **Schedule Creation**  
   - Users can add a new medication with fields like name, dosage, frequency, and time (e.g., *12:00 PM*).

4. **Automated Reminders**  
   - The backend triggers timely reminders via **browser notifications, email, or SMS** using Firebase and Twilio.

5. **Dose Logging**  
   - Users mark a medication as “taken” with a single click, updating their adherence history instantly.

6. **Tracking & Visualization**  
   - Real-time dashboard shows **interactive charts** for daily/weekly adherence trends using Chart.js / D3.js.

---

## ⚙️ Core Features

| Feature | Description |
|:---------|:-------------|
| 🔐 **Secure User Authentication** | Registration, Login, and Google OAuth integrated using JWT. |
| 📅 **Dynamic Schedule Management** | Create, edit, or delete medication schedules dynamically. |
| 🔔 **Automated Notifications** | Real-time browser or email reminders using Firebase Cloud Messaging & Twilio. |
| 📊 **Interactive Dashboard** | Visual adherence tracking and progress insights with Chart.js/D3.js. |
| 🧠 **AI Adherence Prediction** | Predicts high-risk time slots for missed doses and provides proactive nudges. |
| 💬 **AI Chatbot Health Assistant** | Natural language queries like _“What pills do I need to take today?”_ powered by OpenAI API. |
| 🔗 **Google Calendar Integration** | Auto-syncs medication events to personal Google Calendar for cross-platform visibility. |

---

## 🧰 Tech Stack

| Category | Technology |
|:-----------|:------------|
| **Frontend** | React.js + Tailwind CSS |
| **Backend** | Node.js + Express.js |
| **Database** | MongoDB |
| **Authentication** | JWT (JSON Web Tokens) |
| **Notifications** | Firebase Cloud Messaging, Twilio |
| **Visualization** | Chart.js / D3.js |
| **AI Integration** | OpenAI API |
| **Calendar Sync** | Google Calendar API |

---

## 🧪 External Libraries / APIs

- **Google Calendar API** — Syncs medication schedules to the user’s calendar.
- **OpenAI API** — Chatbot for intelligent health and medication-related queries.
- **Firebase Cloud Messaging** — Push notifications to browsers and mobile devices.
- **Twilio API** — Sends SMS or email reminders.
- **Chart.js / D3.js** — Graphical representation of adherence data.
- **Axios** — Handles frontend-backend API communication.

---

## 💡 Future Scope

- Integration with wearable IoT devices (smartwatches, fitness bands).
- Personalized medicine tracking based on biometrics.
- Offline mode for remote locations with sync-on-connect.
- Family or caretaker access for multi-user tracking.

---

## 🏆 Credits

Developed with 💙 by Team ChronoAlchemists
Webster 2025 Submission – Team ID: 892

---
