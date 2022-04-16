# MERN E-COMMERCE


1. create-react-app

2. create-product-page

    1. create products array
    2. add product images
    3. render products
    4. style products

3. Add routing
    1. npm i react-router-dom
    2. create route for home screen
    3. create router for product screen

4. Create Node.JS Server
    1. npm install express
    2. create server.js
    3. add start command as node backend/server.js
    4. require express
    5. create route for "/" return backend is ready.
    6. move products.js from frontend (data.js) to backend (data.js)
    7. create route for "/api/products"
    8. return products

5. FETCH PRODUCT FROM BACKEND
    1. set proxy in package.json
    2. install axios ( npm or yarn)
    3. useState & useEffect hooks

6. MANAGE STATE BY REDUCER HOOK
   1. define reducer
   2. update fetchData function
   3. get state from useReducer

7. ADD BOOTSTRAP FRAMEWORK
   1. NPM I REACT-BOOTSTRAP 
   2. UPDATE ALL CODE WITH BOOTSTRAP

8. Create Product and Rating Component
    1. create Rating component
    2. Create Product component
    3. Use Rating component in Product component

9. Create Product Details Screen
   1.  fetch product from backend
   2.  fetch product from backend
   3.  create 3 columns for image, info and action

10. LOADING AND MESSAGE COMPONENTS   
    1. create spinner component
    2. create message component
    3. create utils..js to define Error Function ( getError)

11. Create React Context For Add Item To Cart
    1. Create React Context
    2. define reducer
    3. create store provider
    4. implement add to cart button click handler