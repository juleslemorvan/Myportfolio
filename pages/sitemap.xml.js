const Sitemap = () => null;

export const getServerSideProps = async ({ res }) => {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://juleslemorvan.vercel.app";

  const pages = [
    { path: "", priority: "1.0" },
    { path: "/about", priority: "0.8" },
    { path: "/projects", priority: "0.8" },
    { path: "/contact", priority: "0.7" },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    ({ path, priority }) => `  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
};

export default Sitemap;
