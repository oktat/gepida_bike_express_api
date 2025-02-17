# User documentation

## Install dependencies

```cmd
npm install
```

## Copy config file

Copy **config/default.json.example** to **config/default.json** file, if it doesn't exist.

## App key generation

```cmd
node tools/genkey.js
```

## Database setup

Edit the config/default.json file.

## Endpoints

All endpoint have a /api prefix.

| Endpoint | Method | Auth | Description |
|-|-|-|-|
| /register | POST  | no |  create user |
| /login    | POST  | no |  login  |
| /users    | GET   | yes |  read users |
| /bikes    | GET   | no |  read bikes |
| /bikes    | POST  | no |  create bike |
| /bikes    | GET   | no |  read bike |
| /bikes    | PUT   | no |  update bike |
| /bikes    | DELETE | no |  delete bike |

## The register endpoint

```json
{
    "name": "joe",
    "email": "joe@green.lan",
    "password": "secret",
    "password_confirmation": "secret"
}
```

## The login endpoint

```json
{
    "name": "joe",
    "password": "secret"
}
```

You receive the bearear token with accessToken key.

## The users endpoint

Send the bearer token.

## The bikes endpoint

### Read bikes

Endpoint:

* /api/bikes

### Create bike

Endpoint:

* /api/bikes

```json
{
    "name": "joe",
    "wheel": 26,
    "usage": "mountain",
    "price": 1000
}
```

### Read bike

Endpoint:

* /api/bikes/:id

Example endpoint:

* /api/bikes/1

### Update bike

Endpoint:

* /api/bikes/:id

Example endpoint:

* /api/bikes/1

```json
{
    "name": "joe",
    "wheel": 26,
    "usage": "mountain",
    "price": 1000
}
```

### Delete bike

Endpoint:

* /api/bikes/:id

Example endpoint:

* /api/bikes/1
