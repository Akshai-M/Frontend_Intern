import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="container mx-auto px-4 z-10 text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Building the Future<br />of Web Development
        </h1>
        <p className="text-xl mb-8 max-w-2xl">
          We create exceptional digital experiences that drive innovation and growth for businesses worldwide.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full flex items-center gap-2 text-lg">
          Get Started <Play size={20} />
        </button>
      </div>
    </div>
  );
};

export default Hero;