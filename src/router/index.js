import Vue from 'vue'
import VueRouter from 'vue-router'

import TodoPage from '../components/todo/TodoPage'
import MoviePage from '../components/movies/MoviePage'
import MovieDetails from '../components/movies/MovieDetails'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: TodoPage},
  {path: '/movies', component: MoviePage},
  {path: '/movies/backlog', component: MoviePage},
  {path: '/movies/:id', component: MovieDetails}
]

export default new VueRouter({
  mode: 'history',
  routes
})
