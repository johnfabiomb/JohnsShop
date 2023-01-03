import { Router } from '@angular/router';

/**
 * Personal structure created to handle the routes ease and avoiding big problems when changing them
 * @param router instance of Angular router provider
 * @returns
 */
const AppRoutes = (router?: Router) => ({
  get auth() {
    return {
      go() {
        router?.navigate(['/' + this.route]);
      },
      route: '',
      main: '',
      get login() {
        return {
          go() {
            router?.navigate(['/' + this.route]);
          },
          route: `${this.route}/login`,
          main: 'login',
        };
      },
    };
  },
  get platform() {
    return {
      go() {
        router?.navigate(['/' + this.route]);
      },
      route: 'platform',
      main: 'platform',
      get dashboard() {
        return {
          go() {
            router?.navigate(['/' + this.route]);
          },
          route: `${this.route}/dashboard`,
          main: 'dashboard',
        };
      },
      get orders() {
        return {
          go() {
            router?.navigate(['/' + this.route]);
          },
          route: `${this.route}/orders`,
          main: 'orders',
        };
      },
    };
  },
});
export default AppRoutes;
