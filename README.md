# express-custom-bootstrap-example
Example development setup for a bootstrap, express, ejs web application
## Setup
- Clone Repository
```
git clone https://github.com/nichandy/express-custom-bootstrap-example.git
```
- Navigate into cloned repo and
```
npm install
```
This should install all of the necessary dependencies

## Usage
- Start nodejs application.
```
npm run dev
```
When you go to port `localhost:8080` you'll see common bootstrap elements with customized theming. Both a server watcher `nodemon` and sass watcher `watch` will start when this command is run.

## Custimization
- To customize bootstrap, edit the `scss/main.scss` file. If the node app is running then the says will be automatically re-compiled upon a change.
