export default function Gallery() {
  const galleryItems = [
    { id: 1, title: 'Wedding Collection' },
    { id: 2, title: 'Birthday Specials' },
    { id: 3, title: 'Seasonal Delights' },
  ]

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <h2 className="gallery-title">
          Gallery
        </h2>
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="gallery-item"
            >
              <div className="gallery-image">
                <div className="text-center p-6">
                  <div className="w-24 h-24 mx-auto mb-4 bg-primary/30 rounded-theme flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-text-muted text-sm">Image Placeholder</p>
                </div>
              </div>
              <div>
                <h3 className="gallery-item-title">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
