# JSON Server

[Go back to main branch](https://github.com/pranabdas/react-learning/tree/main)

There are few ways we can install JSON Server.

1. Install globally on the system:

```console
npm install -g json-server
```

Then we can run `json-server`:

```console
json-server --port 3001 --watch db.json
```

We can visit <http://localhost:3001/data> from our browser. If you are on a
GitHub Codespaces, you may need to add `--host 0.0.0.0` flag.

2. We can run `json-server` using `npx` without any installation:

```console
npx -y json-server --port 3001 --watch db.json
```

3. Finally, we can install as a development dependency to our project:

```console
npm install json-server --save-dev
```

We can add a custom script to our `package.json`. We will also need `axios` for
this project:

```console
npm i axios
```
