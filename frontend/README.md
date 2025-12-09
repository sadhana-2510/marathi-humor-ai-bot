🌐 Marathi–English Humor AI Bot

A Context-Aware Conversational AI for Humor Detection & Generation

📘 Overview

This project presents a bilingual AI system capable of detecting humor, sarcasm, and playful expressions in Marathi, English, and code-mixed text or speech.
It also aims to generate culturally appropriate Marathi humor and provide a clean, modern user interface for interaction.

The work combines Speech Recognition, NLP, Deep Learning, and Full-Stack Development, forming a complete humor-aware conversational AI pipeline.

🎯 Key Features

Humor & Sarcasm Classification (Marathi + Code-Mixed Inputs)

Speech-to-Text Integration (Marathi STT)

Conversational Chat Interface

Visual Humor Analytics (Upcoming)

Generative Humor (Phase-3)

Modern React UI with Tailwind CSS

FastAPI Backend for ML Inference

🛠 Tech Stack
Frontend

React

Vite

Tailwind CSS

Backend

FastAPI

Python

Model Training

IndicBERT / mBERT

PyTorch

Whisper / Google STT

HuggingFace Transformers

📁 Project Structure
marathi-humor-bot/
│
├── frontend/           # React UI      
├── backend/            # FastAPI server + ML inference
├── dataset/            # Jokes, non-jokes, speech samples
├── model-training/     # Jupyter notebooks and training scripts
└── README.md

▶️ How to Run the Project
Frontend
cd frontend
npm install
npm run dev

Backend
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

👥 Team
Sadhana M

Frontend Developer & System Integrator

Developed complete UI using React + Tailwind

Designed landing, login, demo modals, and full app navigation

Will build analytics dashboards and chat interface

Integrates backend APIs with frontend

Jermi Altrina J

Machine Learning Engineer

Dataset creation and preprocessing

Humor/sarcasm classifier model training

Speech-to-text pipeline integration

FastAPI backend model serving

🎓 Institution

Chennai Institute of Technology
Department of Computer Science Engineering (CSE)
Guide: Ms. Bhavani Ramesh