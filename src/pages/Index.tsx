
import {
  Users,
  UserPlus,
  BarChart3,
  Briefcase,
  BookOpen,
  Heart
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ModuleCard from "@/components/ModuleCard";
import FeatureSection from "@/components/FeatureSection";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  const modules = [
    {
      title: "Recrutamento e Seleção",
      description: "Otimize o processo de contratação, desde a divulgação de vagas até a seleção final dos candidatos.",
      icon: <UserPlus className="h-6 w-6" />,
      features: [
        "Anúncios de vagas personalizáveis",
        "Banco de talentos organizado",
        "Filtros avançados de busca",
        "Análise comportamental de candidatos"
      ],
      highlighted: true
    },
    {
      title: "Gestão de Talentos",
      description: "Gerencie o ciclo completo de vida dos colaboradores na empresa de forma estratégica.",
      icon: <Users className="h-6 w-6" />,
      features: [
        "Perfil completo dos colaboradores",
        "Mapeamento de competências",
        "Gestão de carreira e sucessão",
        "Indicadores de performance"
      ]
    },
    {
      title: "Avaliação de Desempenho",
      description: "Implemente avaliações personalizadas e acompanhe o desenvolvimento dos colaboradores.",
      icon: <BarChart3 className="h-6 w-6" />,
      features: [
        "Avaliações por competências",
        "Feedback contínuo",
        "Metas individuais e de equipes",
        "Relatórios gerenciais"
      ]
    },
    {
      title: "Treinamento e Desenvolvimento",
      description: "Planeje e execute ações de capacitação alinhadas às necessidades da empresa.",
      icon: <BookOpen className="h-6 w-6" />,
      features: [
        "Plataforma de cursos online",
        "Planos de desenvolvimento (PDI)",
        "Gestão de certificações",
        "Métricas de aprendizagem"
      ]
    },
    {
      title: "Engajamento e Retenção",
      description: "Promova um ambiente de trabalho positivo e reduza a rotatividade na sua empresa.",
      icon: <Heart className="h-6 w-6" />,
      features: [
        "Pesquisas de clima organizacional",
        "Programas de reconhecimento",
        "Gestão de benefícios",
        "Análise preditiva de turnover"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      <section id="modules" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Sistema Modular Adaptável
            </h2>
            <p className="text-lg text-gray-600">
              Escolha os módulos que sua empresa precisa e crie uma plataforma personalizada para suas necessidades específicas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <ModuleCard
                key={index}
                title={module.title}
                description={module.description}
                icon={module.icon}
                features={module.features}
                highlighted={module.highlighted}
              />
            ))}
          </div>
        </div>
      </section>
      
      <FeatureSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
