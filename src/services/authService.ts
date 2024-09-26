interface IUserParam {
  email: string;
  userName: string;
  role: number;
}

const createNewUser = ({ email, userName, role }: IUserParam) => {
  const handlePass = "";

  const newUser = {
    email,
    password: handlePass,
    userName: userName || email.split("@")[0],
    reole: role || 1,
  };

  return newUser;
};

export default { createNewUser };
