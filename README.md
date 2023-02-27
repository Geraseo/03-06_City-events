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
