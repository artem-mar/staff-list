const apiPath = 'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users';

const routes = {
  usersApiPath: () => [apiPath, 'users'].join('/'),
  usersByDepartmentApiPath: (department) => [apiPath, `?__example=${department}`].join('/'),
  mainPath: () => '/',
  userInfoPath: () => '/user-info',
};

export default routes;
