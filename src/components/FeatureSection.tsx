
import {
  Users,
  Search,
  BarChart,
  Award,
  BookOpen,
  Heart,
  MessageSquare,
  Briefcase,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const FeatureSection = () => {
  const features = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Anúncios de vagas personalizáveis",
      description: "Crie anúncios de vagas personalizados e mantenha um banco de talentos organizado."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Mapeamento comportamental",
      description: "Utilize o Profiler para mapear o perfil comportamental de candidatos e funcionários."
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Avaliações de desempenho",
      description: "Configure avaliações com competências personalizáveis para sua empresa."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Planos de Desenvolvimento Individual",
      description: "Crie PDIs para impulsionar o crescimento profissional dos colaboradores."
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Gestão de treinamentos",
      description: "Gerencie treinamentos e crie conteúdos personalizados para sua equipe."
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Pesquisas com funcionários",
      description: "Realize pesquisas e obtenha análises detalhadas sobre o clima organizacional."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Recursos poderosos para sua gestão de talentos
          </h2>
          <p className="text-lg text-gray-600">
            A plataforma Solides TalentHub oferece recursos completos para otimizar todos os processos de RH da sua empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-solides-light rounded-lg flex items-center justify-center text-solides-blue mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-solides-dark">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-solides-teal hover:bg-solides-blue text-white group">
            Ver todos os recursos
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
