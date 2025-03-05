# MarkSync

MarkSync is a lightweight, user-friendly bookmark manager built to help you save, organize, and access your favorite links effortlessly. With a sleek interface and seamless syncing via local storage, MarkSync ensures your bookmarks are always at your fingertips—whether you're on mobile or desktop.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contact](#contact)

## Overview
MarkSync is designed for users who want a simple yet powerful tool to manage their bookmarks. Built with Next.js and TypeScript, it leverages local storage for persistence, Tailwind CSS for responsive styling, and `react-toastify` for real-time feedback. The app features a responsive navbar with a hamburger menu for mobile, smooth animations, and a custom logo—making it both functional and visually appealing.

## Features
- **Add Bookmarks**: Save URLs with custom titles and categories (e.g., Work, Social, Entertainment).
- **Delete Bookmarks**: Remove bookmarks with a confirmation dialog for safety.
- **Search & Filter**: Quickly find bookmarks by title, URL, or category.
- **Responsive Design**: Hamburger menu on mobile (< 640px), full navbar on desktop (≥ 640px)—auto-closes on resize.
- **Local Storage**: Persists bookmarks and user data in the browser—no backend required.
- **Toast Notifications**: Feedback for actions (e.g., "Bookmark added", "Name is required")—responsive positioning.
- **Animated UI**: Typing animations on homepage with `react-typed`, smooth transitions with Tailwind.
- **Custom Logo**: Bookmark icon with "MarkSync" text—styled with Tailwind CSS.
- **User Management**: Simple login/logout via name input and local storage.

## Demo
Try MarkSync live: [MarkSync](https://mark-sync.vercel.app/)   
Here’s a preview:  
![MarkSync Demo](https://i.imgur.com/uVJFlv8.png)

## Usage

Here’s how to use MarkSync step-by-step:

### Start the App
- Visit the deployed app on Vercel: [MarkSync](https://mark-sync.vercel.app/).
- Land on the homepage—see animated "Welcome to MarkSync" text.

### Log In
- Enter a name (minimum 6 characters) in the input field—disabled if already logged in.
- Click "Get Started"—if invalid, see a toast (e.g., "Name is required").
- Redirects to `/bookmarks`—name saved in `localStorage`.

### Add a Bookmark
- On `/bookmarks`, enter a title, valid URL (e.g., `https://example.com`), and select a category (e.g., "Work").
- Click "Add Bookmark"—toast: "Bookmark added".
- Bookmark appears in the list with an incremental ID (e.g., "1", "2").

### Delete a Bookmark
- Hover over a bookmark card—click the trash icon (`FaTrash`).
- Confirm in the dialog—toast: "Bookmark deleted" (or "Delete cancelled" if cancelled).

### Search & Filter Bookmarks
- Type in the search bar—filters bookmarks by title or URL (case-insensitive).
- Select a category from the dropdown (e.g., "Social")—list updates to show matching bookmarks.

### Navigate with Navbar
- **Mobile (< 640px)**: Click the hamburger icon (`FaBars`)—menu slides in from right with transition.
- **Desktop (≥ 640px)**: Menu always visible—hamburger hidden, auto-closes if open during resize.
- Links: "Home" (`/`), "BookMarks" (`/bookmarks`), "Delete User" (if logged in).

### Log Out
- Click "Delete User" in the navbar—clears `localStorage` and redirects to `/`.
- Toast feedback confirms action.

### Toasts
- Toasts are positioned at the bottom of the screen.

## Technologies Used
- **Next.js**: Framework for SSR, routing, and optimized font loading (`next/font`).
- **TypeScript**: Static typing for type safety and better development experience.
- **Tailwind CSS**: Utility-first CSS for styling, responsiveness, and custom logo.
- **react-toastify**: Toast notifications with responsive positioning.
- **React Icons**: Icons for UI elements (e.g., `FaTrash`, `FaBars`).
- **LocalStorage**: Browser storage for user and bookmark data.
- **react-typed**: Typing animation for homepage text—visibility-based triggering.
- **React Context**: Global state management for user data.

## Contact
- **Author**: [Haider Ghauri]
- **GitHub**: [Haider Ghauri](https://github.com/haiderghauri)


