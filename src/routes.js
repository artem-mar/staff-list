const apiPath = 'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users';

const routes = {
  usersApiPath: () => apiPath,
  usersByDepartmentApiPath: (department = 'all') => `${apiPath}?__example=${department}`,
  mainPath: () => '/',
  userInfoPath: () => '/user-info',
};

export default routes;
