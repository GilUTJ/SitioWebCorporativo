import { Card, CardContent } from "./ui/card";
import { useState } from "react";

export function AboutSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const values = [
    {
      title: "Misión",
      icon: "🎯",
      color: "var(--sixth-mind-secondary)",
      content: "Desarrollar soluciones de software personalizadas que resuelvan problemas reales de nuestros clientes, utilizando las mejores prácticas de desarrollo y tecnologías modernas para crear productos escalables y de alta calidad.",
      gradient: "from-teal-100/30 to-teal-200/40"
    },
    {
      title: "Visión",
      icon: "🔮",
      color: "var(--sixth-mind-primary)",
      content: "Ser reconocidos como el equipo de desarrollo preferido por empresas que buscan transformación digital, destacando por nuestra capacidad de innovación, calidad técnica y compromiso con la excelencia.",
      gradient: "from-blue-100/30 to-blue-200/40"
    },
    {
      title: "Valores",
      icon: "💎",
      color: "var(--sixth-mind-accent)",
      content: "Calidad en cada línea de código • Innovación constante • Colaboración efectiva • Compromiso total • Transparencia absoluta • Crecimiento continuo",
      gradient: "from-cyan-100/30 to-cyan-200/40"
    }
  ];

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
            Nuestra Esencia
          </h2>
          <div 
            className="w-32 h-1 mx-auto mb-8 animate-glow"
            style={{ backgroundColor: 'var(--sixth-mind-secondary)' }}
          ></div>
          <p 
            className="text-xl max-w-2xl mx-auto animate-fade-in-up"
            style={{ color: 'var(--sixth-mind-text-light)' }}
          >
            Descubre los pilares fundamentales que guían cada proyecto y decisión en Sixth Mind
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((item, index) => (
            <div
              key={index}
              className="group perspective-1000"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card 
                className={`
                  relative h-80 cursor-pointer transition-all duration-700 transform-gpu
                  border-0 shadow-lg backdrop-blur-sm overflow-hidden warm-card-bg
                  ${hoveredCard === index ? 'scale-105 rotate-y-12' : 'hover:scale-102'}
                  bg-gradient-to-br ${item.gradient}
                `}
                style={{ 
                  backgroundColor: hoveredCard === index ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.7)',
                  borderLeft: `4px solid ${item.color}`,
                  boxShadow: hoveredCard === index 
                    ? `0 20px 40px rgba(72, 163, 166, 0.3)` 
                    : '0 10px 25px rgba(72, 163, 166, 0.1)'
                }}
              >
                {/* Warm glow effect */}
                <div 
                  className={`
                    absolute inset-0 rounded-lg transition-opacity duration-500
                    ${hoveredCard === index ? 'opacity-20' : 'opacity-0'}
                  `}
                  style={{ 
                    boxShadow: `0 0 40px ${item.color}`,
                    background: `radial-gradient(circle at center, ${item.color}20, transparent 70%)`
                  }}
                />
                
                <CardContent className="p-8 h-full flex flex-col justify-center text-center relative z-10">
                  {/* Floating icon */}
                  <div 
                    className={`
                      text-6xl mb-6 transition-all duration-500 transform
                      ${hoveredCard === index ? 'scale-125 animate-float' : ''}
                    `}
                  >
                    {item.icon}
                  </div>
                  
                  {/* Title with gradient text */}
                  <h3 
                    className="text-2xl mb-6 transition-all duration-500"
                    style={{ 
                      color: hoveredCard === index ? item.color : 'var(--sixth-mind-text)',
                      textShadow: hoveredCard === index ? `0 0 20px ${item.color}30` : 'none'
                    }}
                  >
                    {item.title}
                  </h3>
                  
                  {/* Content with reveal animation */}
                  <div 
                    className={`
                      transition-all duration-500 transform
                      ${hoveredCard === index ? 'opacity-100 translate-y-0' : 'opacity-80 translate-y-2'}
                    `}
                  >
                    <p 
                      className="leading-relaxed"
                      style={{ color: 'var(--sixth-mind-text-light)' }}
                    >
                      {item.content}
                    </p>
                  </div>
                  
                  {/* Interactive warm particles */}
                  {hoveredCard === index && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-3 h-3 rounded-full animate-ping"
                          style={{
                            backgroundColor: i % 2 === 0 ? 'var(--sixth-mind-secondary)' : 'var(--sixth-mind-accent)',
                            left: `${15 + i * 10}%`,
                            top: `${25 + (i % 3) * 15}%`,
                            animationDelay: `${i * 0.15}s`,
                            opacity: 0.6
                          }}
                        />
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Magic bottom section with warm colors */}
        <div className="text-center mt-20">
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
              ✨ La Magia del Desarrollo
            </h3>
            <p 
              className="text-lg max-w-2xl"
              style={{ color: 'var(--sixth-mind-text-light)' }}
            >
              Cada proyecto es una nueva aventura donde la creatividad se encuentra con la tecnología, 
              creando soluciones que superan las expectativas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}