type UserUpdate = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<UserUpdate>) {
  console.log("Updated user with values:", initialValues);
}


createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});
