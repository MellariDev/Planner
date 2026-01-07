'use client'

export default function BotanicalIcons() {
  return (
    <div className="botanical-icons fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {/* Wildflower 1 */}
      <svg
        className="absolute top-20 left-10 w-16 h-16 botanical-float"
        style={{ color: 'rgba(156, 175, 136, 0.25)' }}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="30" r="8" fill="currentColor" />
        <circle cx="40" cy="40" r="6" fill="currentColor" />
        <circle cx="60" cy="40" r="6" fill="currentColor" />
        <path d="M50 30 L50 70" stroke="currentColor" strokeWidth="2" />
        <path d="M50 50 L45 60" stroke="currentColor" strokeWidth="2" />
        <path d="M50 50 L55 60" stroke="currentColor" strokeWidth="2" />
      </svg>

      {/* Wildflower 2 */}
      <svg
        className="absolute top-40 right-20 w-20 h-20 botanical-float"
        style={{ color: 'rgba(139, 115, 85, 0.2)' }}
        style={{ animationDelay: '-2s' }}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="25" r="10" fill="currentColor" />
        <circle cx="35" cy="35" r="7" fill="currentColor" />
        <circle cx="65" cy="35" r="7" fill="currentColor" />
        <circle cx="50" cy="45" r="7" fill="currentColor" />
        <path d="M50 45 L50 75" stroke="currentColor" strokeWidth="2" />
      </svg>

      {/* Wheat Stalk 1 */}
      <svg
        className="absolute bottom-32 left-1/4 w-12 h-24 botanical-float"
        style={{ color: 'rgba(139, 115, 85, 0.25)' }}
        style={{ animationDelay: '-4s' }}
        viewBox="0 0 50 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M25 10 L25 90" stroke="currentColor" strokeWidth="2" />
        <path d="M25 20 L20 25 L25 30" stroke="currentColor" strokeWidth="1.5" fill="currentColor" />
        <path d="M25 35 L20 40 L25 45" stroke="currentColor" strokeWidth="1.5" fill="currentColor" />
        <path d="M25 50 L20 55 L25 60" stroke="currentColor" strokeWidth="1.5" fill="currentColor" />
        <path d="M25 20 L30 25 L25 30" stroke="currentColor" strokeWidth="1.5" fill="currentColor" />
        <path d="M25 35 L30 40 L25 45" stroke="currentColor" strokeWidth="1.5" fill="currentColor" />
        <path d="M25 50 L30 55 L25 60" stroke="currentColor" strokeWidth="1.5" fill="currentColor" />
        <circle cx="25" cy="15" r="3" fill="currentColor" />
      </svg>

      {/* Wheat Stalk 2 */}
      <svg
        className="absolute bottom-40 right-1/3 w-14 h-28 botanical-float"
        style={{ color: 'rgba(156, 175, 136, 0.2)' }}
        viewBox="0 0 50 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M25 10 L25 90" stroke="currentColor" strokeWidth="2" />
        <path d="M25 25 L20 30 L25 35" stroke="currentColor" strokeWidth="1.5" fill="currentColor" />
        <path d="M25 40 L20 45 L25 50" stroke="currentColor" strokeWidth="1.5" fill="currentColor" />
        <path d="M25 55 L20 60 L25 65" stroke="currentColor" strokeWidth="1.5" fill="currentColor" />
        <path d="M25 25 L30 30 L25 35" stroke="currentColor" strokeWidth="1.5" fill="currentColor" />
        <path d="M25 40 L30 45 L25 50" stroke="currentColor" strokeWidth="1.5" fill="currentColor" />
        <path d="M25 55 L30 60 L25 65" stroke="currentColor" strokeWidth="1.5" fill="currentColor" />
        <circle cx="25" cy="18" r="3" fill="currentColor" />
      </svg>

      {/* Wildflower 3 */}
      <svg
        className="absolute top-1/3 left-1/3 w-14 h-14 botanical-float"
        style={{ color: 'rgba(156, 175, 136, 0.2)' }}
        style={{ animationDelay: '-1s' }}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="35" r="7" fill="currentColor" />
        <circle cx="42" cy="45" r="5" fill="currentColor" />
        <circle cx="58" cy="45" r="5" fill="currentColor" />
        <path d="M50 45 L50 75" stroke="currentColor" strokeWidth="2" />
        <path d="M50 60 L47 68" stroke="currentColor" strokeWidth="1.5" />
        <path d="M50 60 L53 68" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      {/* Wheat Stalk 3 */}
      <svg
        className="absolute bottom-1/4 right-1/4 w-10 h-20 botanical-float"
        style={{ color: 'rgba(139, 115, 85, 0.2)' }}
        style={{ animationDelay: '-3s' }}
        viewBox="0 0 50 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M25 10 L25 85" stroke="currentColor" strokeWidth="2" />
        <path d="M25 22 L21 27 L25 32" stroke="currentColor" strokeWidth="1.5" fill="currentColor" />
        <path d="M25 38 L21 43 L25 48" stroke="currentColor" strokeWidth="1.5" fill="currentColor" />
        <path d="M25 22 L29 27 L25 32" stroke="currentColor" strokeWidth="1.5" fill="currentColor" />
        <path d="M25 38 L29 43 L25 48" stroke="currentColor" strokeWidth="1.5" fill="currentColor" />
        <circle cx="25" cy="16" r="2.5" fill="currentColor" />
      </svg>
    </div>
  )
}

