
import { Button } from "@/components/ui/button";
import { PhoneCall, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-solides-blue to-solides-teal rounded-2xl overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Transforme sua gestão de talentos
              </h2>
              <p className="text-white/90 text-lg mb-6 max-w-xl">
                Agende uma demonstração personalizada e descubra como a Solides TalentHub pode se adaptar às necessidades específicas da sua empresa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-solides-blue hover:bg-gray-100">
                  <PhoneCall className="mr-2 h-5 w-5" />
                  Solicitar contato
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  <Mail className="mr-2 h-5 w-5" />
                  Enviar e-mail
                </Button>
              </div>
            </div>
            <div className="md:w-1/3 bg-white/10 backdrop-blur-sm p-8 md:p-12 flex items-center justify-center">
              <div className="text-white">
                <p className="text-xl mb-4 font-medium">Contato direto</p>
                <div className="space-y-3">
                  <p className="flex items-center text-white/90">
                    <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    +55 (11) 4000-1000
                  </p>
                  <p className="flex items-center text-white/90">
                    <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    contato@solides.com.br
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
