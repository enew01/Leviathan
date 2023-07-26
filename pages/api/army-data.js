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
    const relativeDir = `public/cards/${query.name}`;
    if (!fs.existsSync(relativeDir)) {
        res.status(400).json({ status: "failed", message: "please indicate correct directory" });
        return;
    }
    const armyFileList = fs.readdirSync(relativeDir);
    const armyObj = {};
    for (const army of armyFileList) {
        const fileType = path.extname(army);
        const [armyName, armyType, imgDirection] = army.split("__");
        const fixedImgDir = imgDirection?.replace(fileType, "");
        if (!armyName || !armyType || (fixedImgDir !== "(Front)" && fixedImgDir !== "(Back)")) continue;
        let dataToEnter =
            fixedImgDir === "(Front)"
                ? {
                    frontImg: `/cards/${query.name}/${army}`,
                }
                : {
                    backImg: `/cards/${query.name}/${army}`,
                };
        if (armyObj[armyName]) {
            armyObj[armyName] = {
                ...armyObj[armyName],
                ...dataToEnter,
            };
        } else {
            armyObj[armyName] = {
                name: armyName.replace("+", " "),
                type: armyType,
                ...dataToEnter,
            };
        }
    }
    for (const key of Object.keys(armyObj)) {
        console.log(key);
    }
    res.status(200).json({ status: "success", data: Object.values(armyObj) });
}
