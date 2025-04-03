
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-solides-light to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <div className="animate-fade-in [animation-delay:200ms] opacity-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="gradient-text">Sistema modular</span> de gestão de talentos
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl mx-auto md:mx-0">
                Plataforma completa e adaptável que simplifica todos os processos de gestão de pessoas da sua empresa.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in [animation-delay:400ms] opacity-0">
              <Button className="bg-solides-blue hover:bg-solides-dark text-white px-6 py-6 text-lg">
                Solicitar Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-solides-teal text-solides-teal hover:bg-solides-light px-6 py-6 text-lg">
                Conheça os módulos
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10 animate-fade-in [animation-delay:600ms] opacity-0">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-solides-blue to-solides-teal opacity-30 blur"></div>
              <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Solides TalentHub Dashboard" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
