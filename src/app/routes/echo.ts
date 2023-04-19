import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
  console.log("Echo")

  res.sendStatus(200)
})

export default router;
