JS AMAZONE CLONE

** 1. Create Folder Structure  **
  1. add frontend and backend folder 
  2. create src folder in frontend
  3. create index.html with heading js-amazon-clone
  4. run npm init -y in frontend folder
  5. npm install -D live-server
  6. add start command as live-server src  --verbose
  7. run npm start
** 2. Design Website **
  1. create style.css 
  2. link style.css to index.html
  3. create div.grid-container
  4. create header, main  and footer
  5. style html body
  6. style grid-container ,header , main & footer
  7. run npm start

** 3. Create Static Home Screen **
  1. create ul.products
  2. create li
  3. create div.product
  4. add .product-image, .product-name, .product-name, .product-price
  5. style ul.products and internal div
  6. duplicate 2 times to show 3 products
** 4.  Render Dynamic Home Screen
1. create data.js
2. export an array of 6 products
3. create screens/HomeScreen.js
4. export HomeScreen as an object with render() method
5. implement render()
6. import data.js
7. return products mapped to lis inside an ul
8. create app.js
9. link it to index.html as module
10. set main id to main-container
11. create router() function
12. set main_container innerHTML to HomeScreen.render()
13. set load event of window to router() function


** 5. Build Url Router
1. create routes as route:screen object for home screen
2. create utils.js
3. export parseRequestURL()
4. set url as hash address split by slash
5. return resource, id and verb of url
6. update router()
7. set request as parseRequestURL()
8. build parsedUrl and compare with routes
9. if route exists render it, else render Error404
10. create screens/Error404.js and render error message


** 6. Create Node.JS Server
1. run npm init in root jsamazona folder
2. npm install express
3. create server.js
4. add start command as node backend/server.js
5. require express
6. move data.js from frontend to backend
7. create route for /api/products
8. return products in data.js
9. run npm start

** 7.  Load Products From Backend
1. edit HomeScreen.js
2. make render async
3. fetch products from '/api/products' in render()
4. make router() async and call await HomeScreen.render()
5. use cors on backend
6. check the result
** 8. Add Webpack
1. cd frontend
2. npm install -D webpack webpack-cli webpack-dev-server
3. npm uninstall live-server
4. "start": "webpack-dev-server --mode development --watch-content-base --open"
5. move index.html, style.css and images to frontend folder
6. rename app.js to index.js
7. update index.html
8. add script main.js before body tag
9. npm start
10. npm install axios
11. change fetch to axios in HomeScreen
**9. Install Babel For ES6 Syntax
1. npm install -D babel core, cli, node, preset-env
2. Create .babelrc and set presets to @babel/preset-env
3. npm install -D nodemon
4. set start: nodemon --watch backend --exec babel-node backend/server.js
4. convert require to import in server.js
5. npm start
**10. Enable Code Linting
1. npm install -D eslint
2. install VSCode eslint extension
3. create .eslintrc and set module.exports for env to node
4. Set VSCode setting for editor.codeActionsOnSave source.fixAll.eslint to true
5. check result for linting error
6. npm install eslint-config-airbnb-base and eslint-plugin-import
7. set extends to airbnb-base
8. set parserOptions to ecmaVersion 11 and sourceType to module
10. set rules for no-console to 0 to ignore linting error
11. Install VSCode Extension
JavaScript (ES6) code snippets
ES7 React/Redux/GraphQL/React-Native snippets
Prettier - Code formatter
HTML&LESS grammar injections
Create Rating Component
create components/Rating.js
link to fontawesome.css in index.html
create div.rating
define Rating object with render()
if !props.value return empty div
else use fa fa-star, fa-star-half-o and fa-star-o
last span for props.text || ''
style div.rating, span and last span
Edit HomeScreen
Add div.product-rating and use Rating component
Product Screen
get product id from request
implement /api/product/:id api
send Ajax request to product api
Product Screen UI
create back to result link
create div.details with 3 columns
column 1 for product image
column 2 for product information
column 3 form product action
style .details and all columns
create add to cart button with add-button id
Product Screen Action
after_render() to add event to the button
add event handler for the button
redirect user to cart/:product_id
implement after_render in index.js
Add To Cart Action
create CartScreen.js
parseRequestUrl
getProduct(request.id)
addToCart
getCartItems
cartItems.find
if existItem update qty
else add item
setCartItems
Cart Screen UI
cartItems = getCartItems()
create 2 columns for cart items and cart action
cartItems.length === 0 ? cart is empty
show item image, name, qty and price
cart action
Subtotal
Proceed to Checkout button
Add CSS Style
Update and Delete Cart Items
add qty select next to each item
after_render()
add change event to qty select
getCartItems() and pass to addToCart()
set force to true to addToCart()
create rerender() as (component, areaName = 'content')
component.render and component.after_render
if force is true then rerender()
add delete button next to each item
add click event to qty button
call removeFromCart(deleteButton.id)
implement removeFromCart(id)
setCartItems( getCartItems().filter)
if id === parseRequestUrl().id? redirect to '/cart'
else rerender(CartScreen);
Connect To MongoDB and Create Admin User
npm install mongoose
connect to mongodb
create config.js
npm install dotenv
export MONGODB_URL
create models/userModel.js
create userSchema and userModel
create userRoute
create createadmin route
Sign-in Screen UI
create SigninScreen
render email and password fields
style signin form
Sign-in Screen Backend
create signin api in backend
create route for /api/users/signin
create check user name and password
if it is not ok the return 401 error
install express-async-handler
wrap it in expressAsyncHandler
add error middleware in server.js
install Postman
send post request
test with invalid user password
otherwise generate token
install jsonwebtoken
set config.JWT_SECRET to somethingsecret
add generateToken to utils.js
return token
test with correct user and password
Sign-in Screen Action
after_render handle form submit
create signin request in frontend
show alert if email or password is incorrect
Add getUserInfo and setUserInfo to localStorage
create Header component
if userInfo.email exist show user name otherwise show signin
Create Progress Indicator and Alert Component
create overlay loading div in index.html
Style overlay loading
create showLoading() function
set loading-overlay classList add active
create hideLoading() function
create overlay message div in index.html
add style overlay message
create showMessage(message, callback)
document message-overlay set inner HTML
div > div id message-overlay-content
show message
button id message-overlay-close-button OK
add class active to it
add event listener for button to call callback
Register Screen
create RegisterScreen.js
add form elements
after_render handle form submit
create register request in frontend
create register api in backend
User Profile Screen
create ProfileScreen.js
add form elements
after_render handle form submit
create profile update request in frontend
create profile update api in backend
create isAuth in utils.js and use in update profile
implement sign out
Checkout Wizard
create CheckoutSteps.js
create div elements for step 1 to 4
create redirectUser() in utils.js
copy profile screen and as shipping screen
use CheckoutStep
define getShipping and setShipping
copy shipping screen and as payment screen
define getPayment and setPayment
redirect user to PlaceOrder.js
PlaceOrder Screen UI
create PlaceOrder.js
style elements
PlaceOrder Screen Action
handle place order button click
createOrder api
create orderModel
create orderRouter
create post order route
Order Screen
create OrderScreen.js
style elements
PayPal Payment
get client id from paypal
set it in .env file
create route form /api/paypal/clientId
create getPaypalClientID in api.js
add paypal checkout script in OrderScreen.js
show paypal button
update order after payment
create payOrder in api.js
create route for /:id/pay in orderRouter.js
rerender after pay order
Display Orders History
create customer orders api
create api for getMyOrders
show orders in profile screen
style orders
Admin Dashboard UI
Header.js
if user is admin show Dashboard
create DashboardScreen
create DashboardMenu
Style dashboard
Admin Products UI
create ProductListScreen.js
show products with edit and delete button
show create product button
Create Product
create product model
implement create product route
create product function in api.js
call create product function in ProductListScreen
redirect to edit product
Edit Product UI
create ProductEditScreen.js
load product data from backend
handle form submit
save product in backend
Edit Product Backend
handle form submit
create updateProduct
save product in backend
Upload Product Image
npm install multer
create routes/uploadRoute.js
import express and multer
create disk storage with Date.now().jpg as filename
set upload as multer({ storage })
router.post('/', upload.single('image'))
return req.file.path
app.use('/api/uploads',uploadRoute) in server.js
create uploads folder and put empty file.txt there.
ProductEditScreen.js
create file input and set id to image-file
after_render() handle image-file change
create form data
call uploadProductImage()
create uploadProductImage in api.js
update server.js
Build Project
create build script for frontend
create build script for backend
update sever.js to serve frontend build folder and uploads folder
stop running frontend
npm run build
check localhost:5000 for running website and showing images
Delete Product
update ProductListScreen.js
handle delete button
rerender after deletion
Admin Orders
create Admin Order menu in header
create AdminOrder.js
load orders from backend
list them in the screen
show delete and edit button
redirect to order details on edit action
Deliver Order
if order is payed show deliver button for admin
handle click on deliver button
set state to delivered
Show Summary Report in Dashboard
create summary section
style summary
create summary backend
create getSummary in api.js
load data in dashboard screen
show 3 boxes for Users, Orders and Sales
Show Chart in Dashboard
import chartist
add chartist css to index.html
create linear chart for daily sales
create pie chart for product categories
Publish heroku
Create git repository
Create heroku account
install Heroku CLI
heroku login
heroku apps:create jsamazona
Edit package.json for heroku-prebuild
Edit package.json for heroku-postbuild
Edit package.json for node engines
Create Procfile
Edit server.js for PORT
Create mongodb atlas database
create MongoDB Account
open cloud.mongodb.com
add new user and save username and password
set Network Access to accept all requests
Create new database
create connection string based on db name and user and password
Set Cloud MongoDB connection in heroku env variables
Commit and push
Product Search Bar
create search bar in Header.js
add style
handle submit form
edit parse url to get query string
update product list api for search keyword
Show Categories In Sidebar Menu
create aside-open-button in Header.js
add event to open aside
create Aside.js component
Add style aside
after render close it on click on close button
Use it in index.html
Update index.js to render aside 9.
call getCategories
create getCategories in api.js
Review Products
create review model
create review form
create review api
style review form


