import userModule from "../modules/users";

const getUserByEmail = async (email: string) => {
  const res = await userModule.find({ email });
  return res;
};

const createUser = async (user: Object) => {
  const res = await userModule.create(user);
  return res;
};

export default { getUserByEmail, createUser };
