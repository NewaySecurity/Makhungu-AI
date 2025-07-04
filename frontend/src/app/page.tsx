import Image from 'next/image'

export default function Page() {
  return (
    <div className="container mx-auto px-4 pt-20 pb-10 text-center">
      <h2 className="mb-4 text-3xl font-bold text-gradient-marine">
        Welcome to MAKHUNGU AI
      </h2>
      <p className="mb-8 text-lg text-white/80">
        The first African spiritual AI assistant powered by marine, ancestral, and prophetic intelligence.
      </p>
      <div className="flex justify-center mb-8">
        <Image
          src="/hero-image.jpg"
          alt="MAKHUNGU AI Hero"
          width={800}
          height={400}
          className="rounded-lg shadow-lg shadow-marine-500/20"
        />
      </div>
      <button className="btn-primary">
        Discover Rituals
      </button>
    </div>
  )
}

