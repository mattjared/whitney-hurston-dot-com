export const revalidate = 0

export async function GET() {
  const quotes = [
    {
      "quote": "When you're curious, you find lots of interesting things to do.",
      "person": "Walt Disney"
    },
    {
      "quote": "I always bought on the future; that`s how I made my money.",
      "person": "Jay Gould",
    },
    {
      "quote": "I refused to take no for an answer.",
      "person": "Bessie Coleman"
    }
  ];
  return new Response(JSON.stringify(quotes));
}
