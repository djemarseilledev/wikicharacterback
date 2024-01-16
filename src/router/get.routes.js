import { Router } from "express";
import { homeGet, listCharacterGet, listCharacterGetId , authGet,loginGet , suscribeGet, get404} from "../controler/get.ctrl.js";

const router = Router();

router.get("/", homeGet);
router.get("/characters", listCharacterGet);
router.get("/characters:id", listCharacterGetId);
router.get("/authentification", authGet);
router.get("/authentification/login", loginGet);
router.get("/authentification/suscribe", suscribeGet);
router.get("*", get404) ;

export default router;