# Amuser - The Online Music Store
# This is a study proejct created as part of Simplilearn Node JS Course

## Table of contents

- [Introduction](#introduction)
- [Points to Note](#Points)
- [Technology](#technology)
- [Features](#features)
- [Database Models](#database)


## Introduction

Amuser is an online music store developed using Node JS, Express JS, and Mongoose.

## Points

1. For security reasons, some variables have been hidden from view and used as environmental variables with the help of dotenv package. Below are the variables that you need to specify in order to run the application in your machine:

- MONGO_URI
- SESSION_SECRET
- STRIPE_PRIVATE_KEY
- GMAIL_EMAIL
- GMAIL_PASSWORD
- ADMIN_EMAIL
- ADMIN_PASSWORD
- ADMIN_COOKIE_NAME
- ADMIN_COOKIE_PASSWORD

2. Populate DB

Navigate to the "seedDB" folder and run "node category-seed.js" and "node product-seed.js" to fill your empty MongoDB database. Now you can run "npm start" in the terminal and the application should work.

## Technology

The application is built with:

- Node JS 
- MongoDB 
- Express 
- Nodemailer
- Passport
- Express Validator
- Bootstrap
- Stripe API 
- Mapbox API
- AdminBro


## Features

The application displays a virtual music store that contains virtual music products and information.

Users can do the following:

- Create an account, login or logout
- Browse available music items added by the admin
- Add music items to the shopping cart
- Delete music items from the shopping cart
- Display the shopping cart
- To checkout, a user must be logged in
- Checkout information is processed using stripe and the payment is send to the admin
- The profile contains all the orders a user has made

Admins can do the following:

- Login or logout to the admin panel
- View all the information stored in the database. They can view/add/edit/delete orders, users, music producst and categories. The cart model cannot be modified by an admin because a cart is either modified by the logged in user before the purchase or deleted after the purchase.

## Database

All the models can be found in the models directory created using mongoose.