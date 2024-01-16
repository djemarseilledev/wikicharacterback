import {Router} from "express";

const router = Router();

router.get("/",(req,res) => {
    res.json({msg:"LIST-PERSONNAGES"});
})

export default router;