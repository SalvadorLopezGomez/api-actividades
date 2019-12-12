'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
/**Usuarios*/
Route.get('api/users/getAllUsers','UserController.index');
Route.get('api/users/getUser/:id','UserController.show');
Route.post('api/users/register','UserController.create');
Route.post('api/users/login','UserController.login');
Route.put('api/users/update/:id','UserController.update');
Route.delete('api/users/delete/:id','UserController.destroy');

/**Actividades*/
Route.get('api/activities/getAllActivities','ActividadeController.index');
Route.get('api/activities/getActivity/:id','ActividadeController.show');
Route.post('api/activities/add','ActividadeController.create');
Route.put('api/activities/update/:id','ActividadeController.update');
Route.delete('api/activities/delete/:id','ActividadeController.destroy');

/**Equipos*/
Route.get('api/equipos/getAllEquipos','EquipoController.index');
Route.get('api/equipos/getEquipo/:id','EquipoController.show');
Route.post('api/equipos/add','EquipoController.create');
Route.put('api/equipos/update/:id','EquipoController.update');
Route.delete('api/equipos/delete/:id','EquipoController.destroy');