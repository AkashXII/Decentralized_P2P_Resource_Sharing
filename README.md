Decentralized P2P GPU Resource Sharing for AI Inference:

This project implements a decentralized peer-to-peer system that allows devices to share GPU compute resources for running AI inference tasks. Instead of relying on expensive centralized cloud GPU services, peers in the network perform inference jobs collaboratively. A central tracker handles scheduling, peer coordination, and job management, while worker nodes execute machine learning models locally.
The system consists of three components:
FastAPI Tracker Backend
Worker Node (PyTorch-based inference engine)
React Frontend Dashboard
This serves as a functional prototype of a distributed compute marketplace for AI inference.

How It Works:

Worker starts and registers with the tracker.
Worker sends heartbeat signals containing GPU load and availability.
User (requester) registers and submits an inference job via the UI.
Scheduler assigns the job to the best available worker.
Worker fetches the job, downloads the image, performs inference, and submits the result.
The dashboard updates with the job status and prediction result.

Getting Started:

1. Clone Repository
"git clone <repository-url>
cd project-folder"

2. Start Backend
cd backend
uvicorn app.main:app --reload

3. Start Worker
Inside the worker environment (with torch installed):
python worker_sim.py

4. Start Frontend
cd frontend
npm install
npm run dev
