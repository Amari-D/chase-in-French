export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <!-- Core -->
  <url><loc>https://www.chaseinfrench.com/</loc></url>
  <url><loc>https://www.chaseinfrench.com/about</loc></url>
  <url><loc>https://www.chaseinfrench.com/contact</loc></url>

  <!-- Services -->
  <url><loc>https://www.chaseinfrench.com/french-classes</loc></url>
  <url><loc>https://www.chaseinfrench.com/online-french-lessons</loc></url>
  <url><loc>https://www.chaseinfrench.com/private-french-tutor</loc></url>

  <!-- Courses -->
  <url><loc>https://www.chaseinfrench.com/french-course-for-beginners</loc></url>
  <url><loc>https://www.chaseinfrench.com/intermediate-french-course</loc></url>

  <!-- Niche SEO Pages -->
  <url><loc>https://www.chaseinfrench.com/french-for-actors</loc></url>
  <url><loc>https://www.chaseinfrench.com/french-pronunciation-coach</loc></url>
  <url><loc>https://www.chaseinfrench.com/learn-french-fast</loc></url>

  <!-- Content / Blog -->
  <url><loc>https://www.chaseinfrench.com/blog</loc></url>
  <url><loc>https://www.chaseinfrench.com/blog/how-to-learn-french-fast</loc></url>
  <url><loc>https://www.chaseinfrench.com/blog/french-pronunciation-tips</loc></url>
  <url><loc>https://www.chaseinfrench.com/blog/common-french-mistakes</loc></url>

  <!-- Podcast -->
  <url><loc>https://www.chaseinfrench.com/podcast</loc></url>
  <url><loc>https://www.chaseinfrench.com/podcast/episode-1</loc></url>

</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
