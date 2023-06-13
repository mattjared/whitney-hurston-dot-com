import { route } from "./utils/routing";

export default async function QuoteTiles() {
  async function getData() {
    const res = await fetch(`${route}/quotes`)
    if (!res.ok) { throw new Error('Failed to fetch data') }
    return res.json()
  }

  const data = await getData()
  return (
    <section className="py-10 md:py-16 container max-w-screen-xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((d, i) => {
          return (
            <div key={d.quote-i} className="bg-gray-50 px-8 py-10 rounded-md">
                <p className="font-normal text-gray-500 text-md">{d.quote}</p>
                <h4 className="font-medium text-gray-700 text-lg mb-4">{d.person}</h4>
            </div>
          )
        })}
      </div>  
    </section>
  )
}
