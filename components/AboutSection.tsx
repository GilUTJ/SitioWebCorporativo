import { Card, CardContent } from "./ui/card";
import { useState } from "react";

export function AboutSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Nueva sección: ¿Quiénes somos?
  const aboutUs = {
    title: "¿Quiénes somos?",
    icon: "�",
    color: "var(--sixth-mind-primary)",
    content: "Somos una empresa de desarrollo de software enfocada en generar valor real para nuestros clientes. Nos especializamos en soluciones tecnológicas innovadoras que impulsan la productividad, construyendo relaciones basadas en confianza, resultados concretos y eficiencia.",
    gradient: "from-blue-100/30 to-blue-200/40"
  };

  const sections = [
    aboutUs,
    {
      title: "Misión",
      icon: "🎯",
      color: "var(--sixth-mind-secondary)",
      content: "Desarrollar software que transforme la productividad de nuestros clientes mediante soluciones tecnológicas innovadoras. Actuamos con integridad y compromiso, ofreciendo resultados medibles que fortalecen relaciones de confianza.",
      gradient: "from-teal-100/30 to-teal-200/40"
    },
    {
      title: "Visión",
      icon: "🔮",
      color: "var(--sixth-mind-primary)",
      content: "Ser reconocidos por la excelencia y calidad de nuestras soluciones. Aspiramos a consolidarnos como una empresa líder, respaldada por la trazabilidad de nuestros proyectos, resultados comprobables y una cultura de mejora continua.",
      gradient: "from-blue-100/30 to-blue-200/40"
    },
    {
      title: "Valores",
      icon: "💎",
      color: "var(--sixth-mind-accent)",
      content: "• Cabalidad - Actuar con rectitud y responsabilidad.\n• Calidad - Entregar soluciones que superen expectativas.\n• Compromiso - Cumplir con lo prometido, siempre.\n• Constancia - Mantener el esfuerzo y la mejora día a día.\n• Excelencia - Buscar lo mejor en cada proyecto.\n• Transparencia - Comunicar con claridad y honestidad.",
      gradient: "from-cyan-100/30 to-cyan-200/40"
    }
  ];

  // Función para cambiar sección con animación
  const changeSection = (newSection: number) => {
    if (newSection >= 0 && newSection < sections.length && newSection !== currentSection) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSection(newSection);
        setIsTransitioning(false);
      }, 150);
    }
  };

  return (
    <section 
      id="nosotros" 
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: 'var(--sixth-mind-white)' }}
    >
      {/* Warm animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full animate-pulse"
              style={{
                backgroundColor: i % 2 === 0 ? 'var(--sixth-mind-secondary)' : 'var(--sixth-mind-accent)',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 
            className="text-5xl mb-6 animate-fade-in-up"
            style={{ color: 'var(--sixth-mind-text)' }}
          >
            Sixth Mind
          </h2>
          <div 
            className="w-32 h-1 mx-auto mb-8 animate-glow"
            style={{ backgroundColor: 'var(--sixth-mind-secondary)' }}
          ></div>
          <p 
            className="text-xl max-w-2xl mx-auto animate-fade-in-up mb-8"
            style={{ color: 'var(--sixth-mind-text-light)' }}
          >
            Conozca los principios que guían nuestro trabajo y compromiso con la excelencia empresarial
          </p>

          {/* Progress bar */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-64 bg-gray-200 rounded-full h-2">
              <div 
                className="h-2 rounded-full transition-all duration-500"
                style={{
                  background: `linear-gradient(90deg, 
                    var(--sixth-mind-secondary) 0%, 
                    var(--sixth-mind-primary) 50%, 
                    var(--sixth-mind-accent) 100%)`,
                  width: `${((currentSection + 1) / sections.length) * 100}%`
                }}
              ></div>
            </div>
            <p 
              className="text-xs font-semibold whitespace-nowrap"
              style={{ color: 'var(--sixth-mind-text)', opacity: 0.6 }}
            >
              {currentSection + 1}/{sections.length}
            </p>
          </div>
        </div>
        
        {/* Contenedor con flechas integradas - Estilo Found-It */}
        <div className="relative max-w-7xl mx-auto">
          <div className="relative min-h-[500px] bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-100">
            {/* Flecha izquierda */}
            <button
              onClick={() => changeSection(currentSection - 1)}
              disabled={currentSection === 0}
              className={`
                absolute left-4 top-1/2 -translate-y-1/2 z-20
                w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl
                transition-all duration-300
                ${currentSection === 0 
                  ? 'opacity-30 cursor-not-allowed' 
                  : 'hover:opacity-100 opacity-80'
                }
              `}
              style={{
                backgroundColor: currentSection === 0 ? '#E5E5E5' : 'var(--sixth-mind-primary)',
                color: currentSection === 0 ? '#999' : 'white',
                boxShadow: currentSection === 0 ? 'none' : '0 4px 15px rgba(0,0,0,0.1)'
              }}
            >
              ⬅️
            </button>

            {/* Flecha derecha */}
            <button
              onClick={() => changeSection(currentSection + 1)}
              disabled={currentSection === sections.length - 1}
              className={`
                absolute right-4 top-1/2 -translate-y-1/2 z-20
                w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl
                transition-all duration-300
                ${currentSection === sections.length - 1 
                  ? 'opacity-30 cursor-not-allowed' 
                  : 'hover:opacity-100 opacity-80'
                }
              `}
              style={{
                backgroundColor: currentSection === sections.length - 1 ? '#E5E5E5' : 'var(--sixth-mind-primary)',
                color: currentSection === sections.length - 1 ? '#999' : 'white',
                boxShadow: currentSection === sections.length - 1 ? 'none' : '0 4px 15px rgba(0,0,0,0.1)'
              }}
            >
              ➡️
            </button>

            {/* Contenido principal */}
            <div className="px-20 py-12">
              <div 
                className={`
                  transition-all duration-300 transform
                  ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
                `}
              >
                <div
                  className="group perspective-1000"
                  onMouseEnter={() => setHoveredCard(0)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Card 
                    className={`
                      relative min-h-96 cursor-pointer transition-all duration-300 transform-gpu
                      border-0 shadow-lg backdrop-blur-sm overflow-hidden
                      ${hoveredCard === 0 ? 'shadow-xl' : 'hover:shadow-lg'}
                      bg-gradient-to-br ${sections[currentSection].gradient}
                    `}
                    style={{ 
                      backgroundColor: hoveredCard === 0 ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.85)',
                      borderLeft: `6px solid ${sections[currentSection].color}`,
                      boxShadow: hoveredCard === 0 
                        ? `0 8px 20px ${sections[currentSection].color}15` 
                        : '0 4px 15px rgba(0,0,0,0.1)'
                    }}
                  >
                    {/* Background animado cuando hover */}
                    <div 
                      className={`
                        absolute inset-0 rounded-lg transition-opacity duration-300
                        ${hoveredCard === 0 ? 'opacity-5' : 'opacity-0'}
                      `}
                      style={{ backgroundColor: sections[currentSection].color }}
                    />
                    
                    <CardContent className="p-12 h-full flex flex-col justify-center text-center relative z-10">
                      {/* Floating icon */}
                      <div 
                        className={`
                          text-8xl mb-8 transition-all duration-300 transform
                          ${hoveredCard === 0 ? 'scale-105' : ''}
                        `}
                      >
                        {sections[currentSection].icon}
                      </div>
                      
                      {/* Title with gradient text */}
                      <h3 
                        className="text-4xl mb-8 transition-all duration-300 font-bold"
                        style={{ 
                          color: hoveredCard === 0 ? sections[currentSection].color : 'var(--sixth-mind-text)'
                        }}
                      >
                        {sections[currentSection].title}
                      </h3>
                      
                      {/* Content */}
                      <div 
                        className={`
                          transition-all duration-300 transform
                          ${hoveredCard === 0 ? 'opacity-100 translate-y-0' : 'opacity-90 translate-y-2'}
                        `}
                      >
                        <div 
                          className="text-lg leading-relaxed max-w-3xl mx-auto"
                          style={{ color: 'var(--sixth-mind-text-light)' }}
                        >
                          {sections[currentSection].content.split('\n').map((line, index) => (
                            <p key={index} className={index > 0 ? 'mt-2' : ''}>
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Indicadores de página en la parte inferior */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <div className="flex space-x-2">
                {sections.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => changeSection(index)}
                    className={`
                      w-3 h-3 rounded-full transition-all duration-300
                      ${currentSection === index 
                        ? 'opacity-100' 
                        : 'opacity-40 hover:opacity-70'
                      }
                    `}
                    style={{
                      backgroundColor: currentSection === index 
                        ? 'var(--sixth-mind-primary)' 
                        : 'var(--sixth-mind-secondary)'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Información de página */}
          <div className="text-center mt-6">
            <p 
              className="text-sm font-medium"
              style={{ color: 'var(--sixth-mind-text)', opacity: 0.6 }}
            >
              Sección {currentSection + 1} de {sections.length}
            </p>
          </div>
        </div>

        {/* Magic bottom section with warm colors */}
        <div className="text-center mt-20">
          {/* Logo de Sixth Mind */}
          <div className="mb-8">
            <img 
              src="/images/Logotipos/sixthMind.png" 
              alt="Sixth Mind Logo" 
              className="mx-auto h-16 w-auto transition-all duration-300 hover:scale-110 drop-shadow-lg"
            />
          </div>
          
          <div 
            className="inline-block p-8 rounded-2xl backdrop-blur-sm border animate-fade-in-up shadow-lg"
            style={{ 
              backgroundColor: 'rgba(255,255,255,0.8)',
              borderColor: 'var(--sixth-mind-accent)',
              background: `linear-gradient(135deg, 
                rgba(255,255,255,0.9) 0%, 
                rgba(169, 208, 213, 0.1) 50%, 
                rgba(255,255,255,0.9) 100%)`
            }}
          >
            <h3 
              className="text-2xl mb-4"
              style={{ color: 'var(--sixth-mind-text)' }}
            >
              Nuestro Compromiso con la Excelencia
            </h3>
            <p 
              className="text-lg max-w-2xl"
              style={{ color: 'var(--sixth-mind-text-light)' }}
            >
              Cada proyecto representa una oportunidad de superar expectativas y crear 
              soluciones que impulsen el éxito de nuestros clientes hacia el futuro digital.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}