import nc from "next-connect";
import { allProducts } from "../../../controllers/product";
import db from "../../../utils/db";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const products = await allProducts();
  await db.disconnect();
  res.send(products);
});

export default handler;
