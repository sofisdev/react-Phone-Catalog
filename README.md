# π± REACT - Phone Catalog π±

The challenge in this projects is to create a phone catalogue app from scratch

## π» Live Web

[**LIVE LINK**](https://ssurbano-phone-catalog-client.herokuapp.com/)

---

## π οΈMain Structure client and Server

```
|β client
|   |β public
|   |β src
|     |β components
|     |β pages
|β server
|   |β config
|   |β db
|   |β error-handling
|   |β models
|   |β routes
|   |β utils
```

### β³οΈ Routes
#### Client
- "/" Homepage with all phones
- "/phones/:phoneId" Get selected phone detailed Info
- "/addPhone" Add Phone to the Database
- "/edit/:phoneId" Edit selected Phone Data
- "" 404 error (Page not found)

#### Server (including CRUD capabilities)
- GET "/phones" Get all Phones from the Database
- GET "/phones/:phoneId" Get Phone Details
- POST "/add-phone" Create new phone in the database checking for all data to be filled in
- PATCH "/edit/:phoneId" Update data from phone
- DELETE "/delete/:phoneId" Delete Phone from the database

### π Technologies
- React Hooks
- NodeJs
- Express
- Axios
- Persistence layer: MongoDB

### β³οΈ External Libraries/Packages
- [Cloudinary](https://cloudinary.com/documentation/developer_overview)
- [Bootstrap for React](https://react-bootstrap.github.io/getting-started/introduction/)
- [React Helmet](https://www.npmjs.com/package/react-helmet)

## π How to run the Apps.

### Pre-requirements

You need [```Node```](https://nodejs.org/es/) previously installed in your computer.
To start using this project, clone this repo to a new directory.

### β‘οΈ Node
You have to go to server and run npm install in order to install the necesary dependencies.
#### - Server
General Environment variables (server side):
> ```console
> PORT=5005
> ORIGIN=http://localhost:3000
> ```
Console:
> ```console
> $ cd server
> $ npm install
> ```

Now you need to do the same thing on the client side.
Environment variables:
> ```console
> REACT_APP_SERVER_URL=http://localhost:5005
> ```

Console:
> ```console
> $ cd client
> $ npm install
> ```

Once you have installed the dependencies, you are ready to run the app with ```npm start```. Like above, we need to do it both in server and client sides.

Server Side:
> ```console
> $ cd server
> $ npm run dev
> ```

Client side:
>  ```console
> $ cd client
> $ npm start
> ```

> π Open http://localhost:3000 to view in the browser

### π· Cloudinary Server Setup

1 - Go to this link https://cloudinary.com/ and create your cloudinary account, verify your email and go through or skip the initial questions

2 - After you are done you should be able to see the following in your dashboard:

- Cloud Name
- API key
- API Secret

3 - These 3 elements are unique to you and will need them to use cloudinary. You will need to add them to your .env file:
````
CLOUD_NAME=your-cloudinary-name
CLOUD_API_KEY=your-cloudinary-key
CLOUD_API_SECRET=your-cloudinary-secret
````
## π― Improvements 
- Good practice: using one repository for the client side and one separate repository for the server side.
- Apply Testing
- Protect the Database from non logged-in users with authentication feature

## π©βπ» Author

This App has been developed by [**Sofia SΓ‘nchez Urbano**](https://github.com/conchaasensiomr).