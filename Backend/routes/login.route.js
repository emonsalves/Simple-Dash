import { Router } from "express";
import { jsonResponse } from "../lib/jsonResponse.js";
import { User } from "../models/Proyect.js";
import bcrypt from "bcrypt";

const router = Router();

router.post("/", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json(jsonResponse(400, { message: "Missing required fields" }));
  }

  const user = await User.findOne({ where: { user_name: username } });

  const comparePassword = async (password, hash) => {
    const same = await bcrypt.compare(password, hash);
    return same;
  };

  if (user) {
    const validPassword = await comparePassword(password, user.password);

    if (!validPassword) {
      return res
        .status(400)
        .json(jsonResponse(400, { message: "Invalid password" }));
    }

    if (!user) {
      return res
        .status(404)
        .json(jsonResponse(404, { message: "User not found" }));
    }

    //autenticar usuario en la data base
    const accessToken = "access-token";
    const refreshToken = "refresh-token";
    // const user = {
    //   id: 1,
    //   username: "admin",
    // };

    res
      .status(200)
      .json(jsonResponse(200, { accessToken, refreshToken, user }));
  }
});

export default router;
