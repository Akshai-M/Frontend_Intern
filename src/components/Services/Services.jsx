import { Code, Palette, Rocket, Shield } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Building scalable and performant web applications using modern technologies.'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating beautiful and intuitive user interfaces that delight users.'
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Implementing robust security measures to protect your applications.'
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Optimizing applications for maximum speed and efficiency.'
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-12">
        Our Services
    </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;