# 🍔 Swiggy Clone — React Frontend Mega Project

A modern, responsive, and feature-rich Swiggy Clone built using **React**, **React Router DOM v6**, and **Tailwind CSS**.

This project fetches **live restaurant and menu data** from Swiggy APIs, implements dynamic routing, shimmer loading screens, restaurant search, food category browsing, and recursive menu rendering similar to the original Swiggy application.

---

# 📸 Preview

- 🏠 Home Page <img width="1901" height="877" alt="image" src="https://github.com/user-attachments/assets/bbebcb3b-d29d-420e-9dd1-4735049418be" /> <img width="1871" height="857" alt="image" src="https://github.com/user-attachments/assets/df323523-0029-40d9-b2b4-2f2f4d9f6e49" />


- 📜 Restaurant Menu!  <img width="1893" height="963" alt="image" src="https://github.com/user-attachments/assets/24285d8d-348d-47c4-8979-ca9da5d81da4" />

- 🍽️ Restaurant Listing <img width="1878" height="957" alt="image" src="https://github.com/user-attachments/assets/708da6a0-e7e4-4743-b585-8a671a32da4b" />

- ✨ Shimmer Loading <img width="1895" height="957" alt="image" src="https://github.com/user-attachments/assets/da9feb05-6f39-4771-a4f7-b3e5615334df" />

  

---

# 🚀 Features

## 🏠 Home Page

- Live Restaurant Listing
- Live Food Categories
- Live Dineout Section
- Responsive UI
- Beautiful Card Design
- Search Restaurants
- Dynamic Restaurant Rendering

---

## 🍽️ Restaurant Menu

- Live Swiggy Menu
- Restaurant Information
- Veg & Non-Veg Indicators
- Price Detection
- Ratings
- Description
- Image Rendering

---

## 📂 Nested Menu Rendering

Swiggy returns nested categories like

```
Pizza
 ├── Veg Pizza
 │      ├── Margherita
 │      ├── Farmhouse
 │
 └── Non Veg Pizza
        ├── Chicken Pizza
```

This project recursively renders unlimited nested categories.

---

## 🔍 Smart Search

- Search by Restaurant Name
- Instant Filtering
- State-driven Rendering

---

## ⚡ Shimmer Loading

Custom shimmer UI while APIs are loading.

- Home Page Shimmer
- Restaurant Menu Shimmer

---

## 📱 Responsive Design

Works perfectly on

- Desktop
- Laptop
- Tablet
- Mobile

---

# ⚙️ Tech Stack

- React
- React Router DOM v6
- Tailwind CSS
- Parcel
- JavaScript (ES6+)
- Fetch API

---

# 📂 Folder Structure

```
src
│
├── Components
│   ├── Header.jsx
│   ├── Home.jsx
│   ├── Restaurant.jsx
│   ├── RestaurantMenu.jsx
│   ├── RestCard.jsx
│   ├── RestInfo.jsx
│   ├── FoodCard.jsx
│   ├── FoodOptions.jsx
│   ├── DineCard.jsx
│   ├── DineOption.jsx
│   ├── MenuCard.jsx
│   ├── Shimmer.jsx
│   └── ShimmerMenu.jsx
│
├── Utils
│   ├── FoodData.js
│   └── DineData.js
│
├── App.js
├── index.css
└── index.html
```

---

# 📦 Installation

Clone the repository

```bash
git clone https://github.com/mratyunjayaa/Swiggy.git
```

Move inside project

```bash
cd Swiggy-Clone
```

Install dependencies

```bash
npm install
```

Run the project

```bash
npm start
```

---

# 🔥 Major React Concepts Used

- Functional Components
- JSX
- Props
- State Management
- useState()
- useEffect()
- Conditional Rendering
- Optional Chaining
- List Rendering
- Keys
- Dynamic Routing
- URL Params
- Nested Components
- Recursive Components

---

# 🎯 Tailwind Concepts Used

- Flexbox
- Grid
- Responsive Design
- Utility Classes
- Hover Effects
- Gradients
- Shadows
- Animations
- Custom Shimmer

---

# 📡 API Features

This project uses live Swiggy APIs to fetch

- Restaurants
- Restaurant Details
- Menus
- Food Categories
- Dineout Data

> **Note:** Swiggy APIs are not officially public. A proxy or backend may be required because of CORS restrictions.

---

# 🚀 Future Improvements

- Login Authentication
- Cart Functionality
- Redux Toolkit
- Favorites
- Lazy Loading
- Infinite Scrolling
- Debounced Search
- Payment Integration
- Theme Switcher
- PWA Support

---

# 🤝 Contributing

Contributions are always welcome!

If you'd like to improve this project:

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature/YourFeature
```

3. Commit your changes

```bash
git commit -m "Add Your Feature"
```

4. Push to GitHub

```bash
git push origin feature/YourFeature
```

5. Open a Pull Request

Please make sure your code follows the existing project structure and is properly tested before submitting.

---

# 🐛 Found a Bug?

If you find a bug or have suggestions:

- Open an Issue
- Describe the problem
- Share screenshots if possible
- Mention the browser and OS

---

# ⭐ Support

If you found this project useful,

⭐ Star this repository

It motivates me to build more open-source React projects.

---

# 📄 License

This project is licensed under the MIT License.

Feel free to use it for learning and personal projects.

---

## 👨‍💻 Author

**Vishal Tomar**

GitHub: https://github.com/mratyunjayaa

---

### If this project helped you learn React, consider giving it a ⭐ on GitHub!
