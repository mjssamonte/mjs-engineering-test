# Engineering-Test

# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 16.2.0

# Getting started
- [Clone](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository) the repository
```
git clone <url> <project_name>

```

- Install dependencies
```
cd <project_name>
npm install
```
- Build and run the project
```
npm start

```
  Navigate to `http://localhost:3000`
 
Alternatively, you can use API to send input integer.

- API Document endpoints

  Input Integer Endpoint (POST Method) : http://localhost:3000/api/input_number

  Sample JSON body
```
{
  "inputNumber": 15
}
```

## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **controller**           | Defines what function to serve to express routes                                              |
| **models**               | Defines data logic                                                                            |
| **node_modules**         | Contains all npm dependencies                                                                 |
| **public**               | Contains all css files                                                                        |
| **routes**               | Contain all express routes                                                                    |
| **views**                | Contain all user interface(ui)                                                                |
| **app.js**               | Entry point to express app                                                                    |
| **package.json**         | Contains npm dependencies and metadata relevant to project                                    |

