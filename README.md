# Klype – AI Assistant 🤖💼

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

> Revolutionize your LinkedIn presence with AI-powered content creation and personal branding optimization.

Klype is an intelligent assistant that leverages cutting-edge AI to enhance your **LinkedIn content strategy** and **personal branding**. Generate engaging posts, maintain consistent scheduling, and optimize your professional profile through advanced natural language processing.

## ✨ Key Features

### 🔁 Reference-Based Post Generator

- **Smart Input:** Generate content by analyzing successful LinkedIn profiles
- **AI Crawler:** Advanced post scraping using Puppeteer/Playwright
- **GPT-4 Integration:** Context-aware post generation with style matching
- **Smart Formatting:** Intelligent emoji placement, hashtag recommendations, and CTA optimization

### 📅 Content Calendar & Scheduling

- **Visual Planning:** Intuitive calendar interface for content strategy
- **Bulk Generation:** Create weeks or months of content in advance
- **Review Workflow:** Built-in approval system for quality control
- **Analytics Dashboard:** Track post performance and engagement metrics

### 📧 Automated Email Distribution

- **Smart Scheduling:** AI-optimized posting times
- **Rich Formatting:** Mobile-responsive email templates
- **One-Click Publishing:** Seamless LinkedIn integration
- **Custom Controls:** Flexible scheduling and formatting options

### 🧠 AI Profile Assistant

- **Comprehensive Analysis:** Deep LinkedIn profile evaluation
- **Data-Driven Scoring:** Profile strength metrics
- **Actionable Insights:** Targeted improvement recommendations
- **Interactive Optimization:** Real-time profile enhancement suggestions

## 🛠️ Technology Stack

| Category | Technologies |
|----------|-------------|
| Frontend | ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white) ![Tailwind](https://img.shields.io/badge/-Tailwind-38B2AC?logo=tailwind-css&logoColor=white) |
| Backend | ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white) |
| Database | ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white) ![Redis](https://img.shields.io/badge/-Redis-DC382D?logo=redis&logoColor=white) |
| AI/ML | ![OpenAI](https://img.shields.io/badge/-OpenAI-412991?logo=openai&logoColor=white) |
| DevOps | ![GitHub Actions](https://img.shields.io/badge/-GitHub_Actions-2088FF?logo=github-actions&logoColor=white) |

## 🚀 Quick Start

1. **Clone the repository**

```bash
git clone https://github.com/Sohith-reddy/Klype-AI.git
cd klype-ai
```

2. **Install dependencies**

```bash
# Frontend
cd client && npm install

# Backend
cd server && npm install
```

3. **Configure environment**

```bash
# Copy example env files
cp client/.env.example client/.env
cp server/.env.example server/.env
```

4. **Start development servers**

```bash
# Frontend (http://localhost:5173)
cd client && npm run dev

# Backend (http://localhost:3001)
cd server && npx nodemon index.js
```

## 📡 API Reference


| Endpoint | Method | Description | Auth Required |
|----------|--------|-------------|---------------|
| `/api/crawl` | POST | Scrape LinkedIn posts | Yes |
| `/api/generate` | POST | Generate AI content | Yes |
| `/api/posts` | GET | Retrieve scheduled posts | Yes |
| `/api/schedule` | POST | Schedule new posts | Yes |
| `/api/profile/analyze` | POST | Analyze profile | Yes |

## 🤝 Contributing

We welcome contributions! 

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 💐 Acknowledgements

- [OpenAI](https://openai.com) - AI technology partner
- [Puppeteer](https://pptr.dev/) - Web scraping engine
- [FullCalendar](https://fullcalendar.io/) - Calendar interface
- [MongoDB](https://www.mongodb.com/) - Database solution
- [Tailwind CSS](https://tailwindcss.com/) - UI framework

---

<p align="center">Made with ❤️ by the Klype Team</p>
