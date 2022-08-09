import nextConnect from 'next-connect' //versão 0.12.1
import { get, post } from '../../src/controllers/users'

const route = nextConnect()

route.get(get)
route.post(post)

export default route