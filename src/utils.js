export const filter = (users, searchString) => users.filter((user) => {
  const { firstName, lastName, userTag } = user;
  const search = searchString.toLowerCase();
  return firstName.toLowerCase().startsWith(search)
    || lastName.toLowerCase().startsWith(search)
    || userTag.toLowerCase().startsWith(search)
    || `${firstName} ${lastName} ${userTag}`.toLowerCase().startsWith(search);
});

export const sort = {
  byFirstName: (users) => users.sort((a, b) => {
    if (a.firstName < b.firstName) return -1;
    if (a.firstName > b.firstName) return 1;
    return 0;
  }),
  byBirthday: (users) => users.sort((a, b) => Date.parse(a.birthday) - Date.parse(b.birthday)),
};
