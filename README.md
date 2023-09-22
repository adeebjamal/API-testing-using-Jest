# API-testing-using-Jest
This is a brief demonstration of how an Express.js API can be tested using `Jest` and `Supertest`.

## Setting up the project
* Clone the repository using this command: ```git clone https://github.com/adeebjamal/API-testing-using-Jest.git```
* Open terminal in root of the project's directory.
* Install dependencies using this command: ```npm install```
* Make sure the following scripts are added in `package.json`
```
"scripts": {
    "test-create": "jest tests/create.test.js",
    "test-read": "jest tests/read.test.js",
    "test-update": "jest tests/update.test.js",
    "test-delete": "jest tests/delete.test.js"
}
```

### Run commands in the following order
* `npm run test-create`
* `npm run test-read`
* `npm run test-delete`
* `npm run test-create`
* `npm run test-update`

After running these commands, use mongosh to drop `testing` database. It can be done by using following commands:
* `mongosh`
* `use testing`
* `db.dropDatabase()`