# Aniter - Twitter for animals

> Creating a Simple Twitter for animals without any authentication

## Agendas

- [x] Create an javascript applicatiom
- [x] Create a Clien folder
- [x] Add index.html
- [x] Add Skeleton CSS

- [x] Create Header
- [x] Create Form
  - [x] Form
  - [x] Input as Content
  - [x] Add u-full-width to both inputs
  - [x] Listen inputs with Form submit button
  - [x] Hide Form
  - [x] Add loading spinner
  * [x] Get user input on the Client
  * [x] Hide/Show elements on the Client

### Back-end

- [x] Create Server folder
- [x] npm init -y
- [x] install - express
- [x] Add Index.js
- [x] Add GET / route
- [x] Add POST /aniters route
  - [x] log req.body

## Fornt-end

- [x] fetch POST /aniters with from data
- [x] See the CORS error and revel in this moment
- [x] Send user input from the client to the server with fetch

## Back-end

- [x] npm install core
- [x] Make sure that server is recieving the data
- [x] Add JSON body parser middleware
- [x] Validate name and content
  - [x] Accept only String
  - [x] Can't be empty
- [x] If not valid
  - [x] Error code 422
  - [x] Invalid content, must have name and content
- [x] Setup DB Connection
  - [x] npm install monk
  - [x] Connect to Database
  - [x] Create a Collection
  * [x] Insert user input to database
