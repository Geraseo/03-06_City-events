# City-events

This is the page of "City events", this webpage ["Kas vyksta Kaune"](https://renginiai.kasvyksta.lt/kaunas) serves as a template.

This page has public and private areas:

- public area is seen for everybody
- private area is seen only for authorized users

## Roles

There are two types of authorized users of this page:

- **admin** has permission to:

  - enter, update and delete category
  - block user
  - confirm or delete event

- **simple user** has a permission to:
  - enter, update and delete event that user owns
  - filter events owned by the logged-in user
  - filter logged-in user's favorites events
  - filter events according category and time
  - search for an event when a word or word fragment is entered in the input field

## Run application

In the "backend" directory open new terminal and run

```
npm i
npx nodemon
```

## Test application end-points

### Register user

- **Method**: POST
- **End-point**: http://localhost:5000/api/users/
- **Messsage in body e.g.**:

```
{
"name": "Jonas",
"email": "jonas@gmail.com",
"password": "jonas",
"role": "simple"
}
```

- **Response e.g.**:

```
{
"_id": "6403943e135ad0adaf4fb9cd",
"name": "Jonas",
"email": "jonas@gmail.com",
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDM5NDNlMTM1YWQwYWRhZjRmYjljZCIsImlhdCI6MTY3Nzk1NjE1OCwiZXhwIjoxNjgwNTQ4MTU4fQ.d-Kz6CLM34xoaovtnFj9ivDppce_FreUd5PxACyUgIw",
"role": "simple"
}
```

- **Token**: after response, take "token" for further testing purposes and use it in Headers

### Login user

- **Method**: POST
- **End-point**: http://localhost:5000/api/users/login
- **Headers**:

```
key: authorization
value: Bearer <token>
```

- **Messsage in body e.g.**:

```
{
"email": "jonas@gmail.com",
"password": "jonas"
}
```

- **Response e.g.**:

```
{
"_id": "6403943e135ad0adaf4fb9cd",
"name": "Jonas",
"email": "jonas@gmail.com",
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDM5NDNlMTM1YWQwYWRhZjRmYjljZCIsImlhdCI6MTY3Nzk1NjQ2MSwiZXhwIjoxNjgwNTQ4NDYxfQ.esEoMWpAEaR241jJBiJ4Yp0gEi4mD0mA-viS1cVw4SI",
"role": "simple"
}
```

### Post event

- **Method**: POST
- **End-point**: http://localhost:5000/api/users/
- **Headers**:
  key: authorization
  value: Bearer <token>
- **Messsage in body**:
  {
  "email": "jonas@gmail.com",
  "password": "jonas"
  }
- **Response**:
