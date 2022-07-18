import nextConnect from 'next-connect' //versão 0.12.1
import { post } from '../../../src/controllers/auth/signin'

const route = nextConnect()

route.post(post)

export default route