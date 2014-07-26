/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  templateNameConverter: 'upperCamelCase',
  routeControllerNameConverter: 'upperCamelCase'
});

Router.map(function () {
  /*
    Example:
      this.route('home', {path: '/'});
  */
  this.route('login', {path: '/'});
  this.route('about', {path: '/about'});
  this.route('contact', {path: '/contact'});

  this.route('register', {path: '/register'});
  this.route('circles.index', {path: '/circle'});
  this.route('create.circle', {path: '/circles/create'});
  this.route('circles.map', {path: '/map'});
  this.route('post.details', {path: '/post/:id'});
  this.route('profile', {path: '/profile'});
});
