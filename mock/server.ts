import jsonServer from 'json-server'
import jwt from 'jsonwebtoken'
import db from './db.json'

const server = jsonServer.create()
const router = jsonServer.router(db)
const middlewares = jsonServer.defaults()

const errors = {
  BAD_REQUEST: { errorMessage: 'Bad Request' },
  UNAUTHORIZED: { errorMessage: 'Unauthorized' },
}
const jwtSecret = 's3CreTK3Y'
let port = 3001

const params = process.argv.slice(2)
if (params.length) {
  params.forEach((p, index) => {
    if (
      p.replace('--', '').toLowerCase() === 'port' &&
      index <= params.length
    ) {
      port = Number(params[index + 1])
    }
  })
}

server.use(middlewares)
server.use(jsonServer.bodyParser)

// endpoint for get token
server.post('/auth/token', (request, response) => {
  if (!request.body.username || !request.body.password) {
    return response.status(400).json(errors.BAD_REQUEST)
  }
  const { username } = request.body

  // passwords are not checked to use mocks with only username
  const user = db.users.find(u => u.username === username)
  if (!user) {
    return response.status(401).json(errors.UNAUTHORIZED)
  }

  const token = jwt.sign({ username }, jwtSecret, { expiresIn: '7d' })
  return response.status(200).json({ token, user })
})

// middleware to check token
server.use((request, response, next) => {
  try {
    const authHeader = request.headers.authorization
    if (!authHeader) {
      return response.status(401).json(errors.UNAUTHORIZED)
    }
    const splittedAuthHeader = authHeader.split(' ')
    if (!splittedAuthHeader || splittedAuthHeader.length <= 0) {
      return response.status(401).json(errors.UNAUTHORIZED)
    }
    const token = splittedAuthHeader[1]
    jwt.verify(token, jwtSecret, error => {
      return next(error)
    })
  } catch (error) {
    next(error)
  }
})

server.use(router)

// error handler
server.use((err: Error, req: any, response: any, next: any) => {
  return response.status(500).send({ errorMessage: err.message })
})

server.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`JSON Server is running. Port:${port}`)
})
