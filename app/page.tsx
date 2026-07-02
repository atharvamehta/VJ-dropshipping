/* import WhatsAppButton from '@/components/WhatsAppButton' */
import Loader from '@/components/Loader'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import ServiceDetails from '@/components/ServiceDetails'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Loader />
      <Navbar />
      <Hero />
      <Services />
      <ServiceDetails />
      <About />
      <Footer />
    </main>
  )
}