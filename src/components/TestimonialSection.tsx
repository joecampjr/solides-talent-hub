
import { Separator } from "@/components/ui/separator";

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "Implementamos a Solides em nossa empresa e o resultado foi extraordinário. Conseguimos reduzir em 30% o tempo de contratação e aumentar a retenção de talentos.",
      author: "Ana Oliveira",
      position: "Diretora de RH",
      company: "Tech Solutions"
    },
    {
      quote: "A plataforma modular nos permitiu começar com o que precisávamos e expandir conforme nosso crescimento. O mapeamento comportamental é um diferencial incrível.",
      author: "Carlos Santos",
      position: "CEO",
      company: "Inovação Digital"
    },
    {
      quote: "Os indicadores gerados pela Solides nos ajudaram a tomar decisões estratégicas na gestão de pessoas. Recomendo para empresas de todos os tamanhos.",
      author: "Mariana Costa",
      position: "Gerente de Pessoas",
      company: "Grupo Evolve"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-solides-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-gray-600">
            Conheça a experiência das empresas que transformaram sua gestão de talentos com a Solides.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md relative"
            >
              <div className="absolute -top-5 left-8 text-solides-blue">
                <svg className="h-10 w-10 opacity-30" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="italic text-gray-600 mb-6 pt-4">
                "{testimonial.quote}"
              </p>
              <Separator className="my-4" />
              <div>
                <p className="font-medium text-solides-dark">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.position}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
