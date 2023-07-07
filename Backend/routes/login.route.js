import { Router } from "express";
import { jsonResponse } from "../lib/jsonResponse.js";

const router = Router();

router.post("/", (req, res) => {
  const { userName, password } = req.body;

  if (!userName || !password) {
    return res
      .status(400)
      .json(jsonResponse(400, { message: "Missing required fields" }));
  }

  //autenticar usuario en la data base
  const accessToken = "access-token";
  const refreshToken = "refresh-token";
  const user = {
    id: 1,
    username: "admin",
  };

  res.status(200).json(jsonResponse(200, { accessToken, refreshToken, user }));
});

export default router;
