export function GET() {
  const svg = [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">',
    '<rect width="64" height="64" rx="16" fill="#147d72"/>',
    '<text x="32" y="42" text-anchor="middle" font-family="Arial,sans-serif" font-size="30" font-weight="700" fill="white">MJ</text>',
    "</svg>",
  ].join("");

  return new Response(svg, {
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
      "Content-Type": "image/svg+xml",
    },
  });
}
