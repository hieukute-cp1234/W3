import { STATUS } from "../constants";

interface IParamsResponse {
  res: any;
  status: number;
  result: Object | Object[] | null;
  message: string;
}

export const response = ({ res, status, result, message }: IParamsResponse) =>
  res.status(status).json({ data: result, message });
