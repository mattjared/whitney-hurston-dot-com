import QuoteTiles from '../QuoteTiles'

export default function About() {
  return (
    <main className='bg-gray-100'>
      <section className="py-10 md:pt-24 md:pb-12 container max-w-screen-xl mx-auto px-4 text-center">
        <h1 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">{`my name`}</h1>
        <h2 className='text-6xl font-bold'>Account Executive @ Vercel</h2>
      </section>
      <section className="py-10 md:py-16 container max-w-screen-xl mx-auto px-4">
        <h3>Here are a list of my favorite quotes:</h3>
        <QuoteTiles />
      </section>
    </main>
  )
}
