export default function Hero() {
  return (
    <section className="hero-section relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="hero-image-container">
            <div className="text-center p-8">
              <div className="w-32 h-32 mx-auto mb-4 bg-primary/30 rounded-theme flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <p className="text-text-muted text-sm">Cake Image Placeholder</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 py-16">
        <h1 className="hero-title">
          Artisan Cakes
        </h1>
        <p className="hero-subtitle">
          Handcrafted with love in rural Kentucky
        </p>
      </div>
    </section>
  )
}
