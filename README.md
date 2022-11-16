# rest-api NEST app
## Nest.js Basics explanation
- `@Controllers` - are responsible for handling incoming requests and returning responses to the client.
- `@Services` - Controllers should handle HTTP requests and delegate more complex tasks to providers.
- `@Module` - decorator provides metadata that Nest makes use of to organize the application structure
## Nest js description
### Installation
```bash
$ npm install
```
### Running the app
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
### Test
```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Docker Helper commands
### To Start database
`-d` for background
```
docker compose up dev-db -d
```
### To get list of container running
```
docker ps
```

### To see the logs of specific container
```
docker logs [containerName]
```

## Tools / Dependencies using
1. Nest.js
2. Docker
3. Prisma
