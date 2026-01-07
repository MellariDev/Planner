import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">Cake Vibe Prototype</h1>
        <div className="flex flex-col md:flex-row gap-6 justify-center flex-wrap">
          <Link
            href="/heirloom"
            className="px-8 py-4 bg-pink-100 text-pink-800 rounded-lg hover:bg-pink-200 transition-colors text-lg font-semibold"
          >
            The Heirloom Pantry
          </Link>
          <Link
            href="/meadow"
            className="px-8 py-4 bg-green-100 text-green-800 rounded-lg hover:bg-green-200 transition-colors text-lg font-semibold"
          >
            The Meadow & Mill
          </Link>
          <Link
            href="/copper"
            className="px-8 py-4 bg-amber-100 text-amber-800 rounded-lg hover:bg-amber-200 transition-colors text-lg font-semibold"
          >
            The Copper Whisk
          </Link>
          <Link
            href="/vintage-forge"
            className="px-8 py-4 bg-amber-50 text-amber-900 rounded-lg hover:bg-amber-100 transition-colors text-lg font-semibold border-2 border-amber-300"
          >
            The Vintage Forge
          </Link>
          <Link
            href="/rustic-edge"
            className="px-8 py-4 bg-gray-800 text-gray-100 rounded-lg hover:bg-gray-700 transition-colors text-lg font-semibold border-2 border-amber-600"
          >
            The Rustic Edge
          </Link>
        </div>
      </div>
    </main>
  )
}
