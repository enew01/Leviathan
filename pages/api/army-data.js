import path from "path";
import fs from "fs";

//file name should be Name__Type__(Front||Back).filetype
//Name = "Primaris+Captain" etc
export default function handler(req, res) {
    const { query, method } = req;
    if (method !== "GET" || !query.name) {
        res.status(400).json({ status: "failed", message: "Please use correct method and query param." });
        return;
    }
    const armyCardDir = path.join(process.cwd(), `public/cards/${query.name}`);
    if (!fs.existsSync(armyCardDir)) {
        res.status(400).json({ status: "failed", message: "please indicate correct directory" });
        return;
    }
    const armyFileList = fs.readdirSync(armyCardDir);
    const structuredArmyList = {};
    armyFileList.foreach((army) => {});
    res.status(200).json({ status: "success", data: armyFileList });
}
