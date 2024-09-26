import { Request, Response } from "express";
import { authService } from "../services";
import { usersRespository } from "../repositories";
import { response } from "../helpers";
import { STATUS } from "../constants";

const handleLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return response({
        res,
        status: STATUS.BAD_REQUEST,
        result: null,
        message: "email la bat buoc",
      });
    }

    const newUser = authService.createNewUser({
      email: "",
      userName: "",
      role: 1,
    });

    usersRespository.createUser(newUser);

    return response({
      res,
      status: STATUS.SUCCESS,
      result: {
        token: "",
      },
      message: "Login successfully!",
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default { handleLogin };
