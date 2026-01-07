import './copper.css'
import Hero from '../components/Hero'
import Philosophy from '../components/Philosophy'
import Gallery from '../components/Gallery'
import ContactForm from '../components/ContactForm'
import NavBar from '../components/NavBar'

export default function CopperPage() {
  return (
    <main className="copper-theme">
      <NavBar />
      <Hero />
      <Philosophy />
      <Gallery />
      <ContactForm />
    </main>
  )
}

