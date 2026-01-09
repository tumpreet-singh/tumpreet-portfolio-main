import { services } from "../data/services"
import ServiceCard from "../components/ServiceCard"

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Services</h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
