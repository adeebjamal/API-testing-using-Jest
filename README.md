# API-testing-using-Jest

### Run commands in the following order
* `npm run test-create`
* `npm run test-read`
* `npm run test-delete`
* `npm run test-create`
* `npm run test-update`

After running these commands, use mongosh to drop `testing` database. It can be done by using following commands.
* `mongosh`
* `use testing`
* `db.dropDatabase()`