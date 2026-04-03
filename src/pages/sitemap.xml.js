export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <!-- Core Pages -->
  <url><loc>https://www.chaseinfrench.com/</loc></url>
  <url><loc>https://www.chaseinfrench.com/start</loc></url>
  <url><loc>https://www.chaseinfrench.com/about</loc></url>
  <url><loc>https://www.chaseinfrench.com/a-propos</loc></url>
  <url><loc>https://www.chaseinfrench.com/contact</loc></url>

  <!-- Learning Topics -->
  <url><loc>https://www.chaseinfrench.com/topics</loc></url>
  <url><loc>https://www.chaseinfrench.com/topics/songs</loc></url>
  <url><loc>https://www.chaseinfrench.com/pronunciation</loc></url>
  <url><loc>https://www.chaseinfrench.com/slang</loc></url>
  <url><loc>https://www.chaseinfrench.com/grammar</loc></url>
  <url><loc>https://www.chaseinfrench.com/culture</loc></url>

  <!-- Classes -->
  <url><loc>https://www.chaseinfrench.com/classes</loc></url>
  <url><loc>https://www.chaseinfrench.com/classes/group</loc></url>
  <url><loc>https://www.chaseinfrench.com/classes/private</loc></url>

  <!-- Lessons -->
  <url><loc>https://www.chaseinfrench.com/lecons</loc></url>

  <!-- Podcasts -->
  <url><loc>https://www.chaseinfrench.com/podcast</loc></url>

  <!-- Songs -->
  <url><loc>https://www.chaseinfrench.com/songs</loc></url>
  <url><loc>https://www.chaseinfrench.com/songs/french-songs-lab-11</loc></url>

  <!-- Resources -->
  <url><loc>https://www.chaseinfrench.com/links</loc></url>
  <url><loc>https://www.chaseinfrench.com/diagnostics</loc></url>

  <!-- Legal -->
  <url><loc>https://www.chaseinfrench.com/privacy-policy</loc></url>
  <url><loc>https://www.chaseinfrench.com/politique-confidentialite</loc></url>

  <!-- Sitemap -->
  <url><loc>https://www.chaseinfrench.com/sitemap</loc></url>

</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
