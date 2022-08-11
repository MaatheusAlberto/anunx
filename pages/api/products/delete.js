import nextConnect from 'next-connect' //versão 0.12.1
import { remove } from '../../../src/controllers/products'

const route = nextConnect()

route.delete(remove)

export default route
