import nc from "next-connect";
import { singleProduct } from "../../../controllers/product";
import db from "../../../utils/db";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const product = await singleProduct(req.query.title);
  await db.disconnect();
  res.send(product);
});

export default handler;
