# Blood Bank Website and Application

## Overview

A platform for NGOs and organizations to manage blood donations, inventory, and distribution, built using the MERN stack.

## Features

- Authentication for users (login, register)
- Dashboard for donors, hospitals, and organizations
- Donation tracking and analytics
- Admin panel for managing users and data

## Installation

1. **Clone the repository:**
   git clone https://github.com/pnkalbhavi15/Blood-Bank-Website
   
2. **Install dependencies for both server and client:**

cd server  
npm install

cd ../client  
npm install
   
4. **Set up environment variables:**

Create a `.env` file in the `server` directory and add the following variables:

PORT=8080  
DEV_MODE=development  
MONGO_URI=<your_mongodb_uri>

## Usage

1. **Start the server:**

cd server  
npm start

2. **Start the client:**

cd client  
npm start

## API Endpoints

- `/api/v1/test`: Test route
- `/api/v1/auth`: Authentication routes
- `/api/v1/inventory`: Inventory management routes
- `/api/v1/analytics`: Analytics routes
- `/api/v1/admin`: Admin routes


