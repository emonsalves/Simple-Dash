import { Router } from "express";
import { jsonResponse } from "../lib/jsonResponse.js";
import { User } from "../models/index.js";

const router = Router();

router.get("/", async (req, res) => {
  const users = await User.findAll();
  res.json(jsonResponse(200, { users}));
});

router.get("/:username", async (req, res) => {
  const { username } = req.params;
  const user = await User.findOne({ where: { user_name: username } });
  user
    ? res.json(jsonResponse(200, { user, ok: true }))
    : res.json(jsonResponse(404, { message: "User not found"}));
});

router.put("/:username", async (req, res) => {
  const { username } = req.params;
  const { name, last_name, phone, address } = req.body;
  const updatedUser = await User.update(
    {
      name,
      last_name,
      phone,
      address,
    },
    { where: { user_name: username } }
  );
  updatedUser
    ? res.json(jsonResponse(200, { username}))
    : res.json(jsonResponse(404, { message: "User not found"}));
});

router.delete("/:username", async (req, res) => {
  const { username } = req.params;
  const deletedUser = await User.destroy({ where: { user_name: username } });
  deletedUser
    ? res.json(jsonResponse(200, { username}))
    : res.json(jsonResponse(404, { message: "User not found"}));
});

export default router;
