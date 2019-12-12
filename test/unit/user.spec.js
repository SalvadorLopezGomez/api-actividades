'use strict'

const { test, trait } = use('Test/Suite')('User')
trait('Auth/Client')
trait('Test/ApiClient')

const User = use('App/Models/User')

const test_user = {
  name: 'test_user',
  email: 'test@yopmail.com',
  password: 'password',
  phone: '9612130003'
}

const test_register = {
  name: 'user1',
  email: 'user1@gmail.com', 
  password: 'password',
  phone: '9611967592'
}

test('[Fail Register] Error de Registro con datos duplicados', async ({ client }) => {

  await User.create(test_register)

  const response = await client.post('/api/users/register').send({
    name: 'user1',
    email: 'user1@gmail.com', 
    password: 'password',
    phone: '9611967592'
  }).end()
  response.assertStatus(500)
}).timeout(0)


test('[Login] Acceso con Login correcto', async ({ client }) => {

  const user = await User.create(test_user)

  const response = await client.post('/api/users/login').send({
    email: 'test@yopmail.com',
    password: 'password',
  }).end()
  response.assertStatus(200)
  await user.delete()
}).timeout(0)