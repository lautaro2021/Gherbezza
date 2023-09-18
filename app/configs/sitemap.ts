// import { NextApiHandler } from "next";
// import fs from "fs";
// import path from "path";

// const handler: NextApiHandler = async (req, res) => {
//   // Lee el archivo sitemap.xml desde la raíz del proyecto
//   const sitemap = fs.readFileSync(
//     path.join(process.cwd(), "public/sitemap.xml"),
//     "utf-8"
//   );

//   // Configura la respuesta HTTP con el contenido del archivo sitemap.xml
//   res.setHeader("Content-Type", "application/xml");
//   res.write(sitemap);
//   res.end();
// };

// export default handler;
