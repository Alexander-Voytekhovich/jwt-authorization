module.exports = class UserDto {
  id;
  email;
  isAdmin;

  constructor(model) {
    this.id = model._id;
    this.email = model.email;
    this.isAdmin = model.isAdmin;
  }
};
