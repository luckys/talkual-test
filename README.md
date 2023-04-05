# Talkual test

I used node version 16.19.0 for backend and frontend. The .env and sqlite database are
included in the repo just for a quick test.

## Build Backend Setup

```bash
# Go to talkaul-backend project
$ cd talkual-backend

# install dependencies
$ npm install

# serve at http://localhost:1337/admin/
$ npm run start
```

### User credentials:
#### username: admin@demo.com 
#### password: Admin1234

---
## Build Frontend Setup

```bash
# Go to talkaul-backend project
$ cd talkual-nuxt-v2

# install dependencies
$ npm install

# serve at http://localhost:3000
$ npm run dev

# run tests
$ npm run test
```

### User credentials:
#### identifier: user1@demo.com
#### password: strapiPassword

### Improvements that can be made:
- Use nuxt 3 instead nuxt 2
- Replace Pinia (Official Store Library) by Vuex for state management
- Replace Buefy by any other ui library because it does not have support for Vue 3
- Use TypeScript over Javascript 
