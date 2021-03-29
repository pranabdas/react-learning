# Auth0

[Go back to main branch](https://github.com/pranabdas/react-learning/tree/main)

```console
npx create-react-app react-auth0
```

Dependencies:
```console
npm i @auth0/auth0-react
```

Go to <https://manage.auth0.com/> and sign up for a account. Create a new app.
Set the **Allowed callback URLs**, **Allowed Logout URLs** and **Allowed Web
Origins** to `http://localhost:3000` for development. Copy the domain and
client id to a `.env` file in the root of this project.

```
REACT_APP_DOMAIN="dev-fajsdhf.us.auth0.com"
REACT_APP_CLIENT_ID="53jsdfsd021VdsfsdgssdNoA9XzZd"
```
