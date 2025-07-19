import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { useState, useEffect } from "react";

// Placeholder para el logo - reemplazar con la imagen real
const foundItLogo = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMjAwIDUwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSIxMCIgeT0iMzIiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNmZjYwMDAiPkZvdW5kSXQ8L3RleHQ+Cjwvc3ZnPg==";

export function FoundItPage({ onBack }: { onBack: () => void }) {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [sparkles, setSparkles] = useState<Array<{id: number, x: number, y: number}>>([]);

  // Generate magical sparkles
  useEffect(() => {
    const generateSparkle = () => {
      const newSparkle = {
        id: Math.random(),
        x: Math.random() * 100,
        y: Math.random() * 100
      };
      setSparkles(prev => [...prev.slice(-15), newSparkle]);
    };

    const interval = setInterval(generateSparkle, 1000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: "Búsqueda Inteligente",
      description: "Algoritmos avanzados de IA que entienden el contexto y la intención de búsqueda",
      icon: "🔍",
      color: "var(--found-it-ound-blue)"
    },
    {
      title: "Resultados Instantáneos",
      description: "Encuentra lo que buscas en microsegundos con precisión absoluta",
      icon: "⚡",
      color: "var(--found-it-it-red)"
    },
    {
      title: "Interfaz Mágica",
      description: "Experiencia de usuario fluida e intuitiva que se adapta a ti",
      icon: "✨",
      color: "var(--found-it-f-dark)"
    }
  ];

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: 'var(--found-it-white)' }}
    >
      {/* Floating sparkles */}
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="absolute animate-ping"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            fontSize: '12px',
            zIndex: 1
          }}
        >
          ✨
        </div>
      ))}

      {/* Header with logo and back button */}
      <header className="relative z-10 px-6 py-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <img 
            src={foundItLogo} 
            alt="FoundIt" 
            className="h-12"
          />
          <Button 
            onClick={onBack}
            variant="outline"
            className="px-6 py-3 transition-all hover:scale-105"
            style={{ 
              borderColor: 'var(--found-it-software-black)',
              color: 'var(--found-it-software-black)'
            }}
          >
            ← Volver a Sixth Mind
          </Button>
        </div>
      </header>

      {/* Hero Section - Magical and captivating */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <div className="relative inline-block mb-8">
              <h1 
                className="text-7xl md:text-8xl mb-4 bg-gradient-to-r from-blue-600 via-red-500 to-purple-600 bg-clip-text text-transparent animate-gradient-shift"
                style={{ 
                  background: `linear-gradient(45deg, 
                    var(--found-it-ound-blue) 0%, 
                    var(--found-it-it-red) 50%, 
                    var(--found-it-f-dark) 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Found-It
              </h1>
              <div 
                className="absolute -inset-4 animate-pulse rounded-full blur-xl opacity-30"
                style={{ 
                  background: `radial-gradient(circle, 
                    var(--found-it-ound-blue) 0%, 
                    var(--found-it-it-red) 50%, 
                    transparent 100%)`
                }}
              ></div>
            </div>
            
            <h2 
              className="text-3xl md:text-4xl mb-8 animate-slide-in-left"
              style={{ color: 'var(--found-it-software-black)' }}
            >
              La Búsqueda Reinventada
            </h2>
            
            <p 
              className="text-xl max-w-2xl mx-auto mb-16 leading-relaxed animate-slide-in-right"
              style={{ color: 'var(--found-it-software-black)', opacity: 0.8 }}
            >
              La revolución en búsquedas inteligentes. 
              Encuentra exactamente lo que necesitas con la magia de la tecnología avanzada.
            </p>
            
            <div className="flex justify-center">
              <Button 
                className="px-12 py-6 text-lg text-white transition-all hover:scale-110 animate-found-it-glow shadow-2xl"
                style={{ backgroundColor: 'var(--found-it-ound-blue)' }}
              >
                🚀 Explorar Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Clean and magical */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 
              className="text-5xl mb-6 animate-fade-in-up"
              style={{ color: 'var(--found-it-software-black)' }}
            >
              Características Mágicas
            </h2>
            <div 
              className="w-32 h-1 mx-auto mb-8"
              style={{ 
                background: `linear-gradient(90deg, 
                  var(--found-it-f-dark) 0%, 
                  var(--found-it-ound-blue) 50%, 
                  var(--found-it-it-red) 100%)`
              }}
            ></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <Card 
                  className="h-full border-0 shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-3xl backdrop-blur-lg"
                  style={{ 
                    background: hoveredFeature === index 
                      ? `linear-gradient(135deg, ${feature.color}15, rgba(255,255,255,0.95))`
                      : 'rgba(255,255,255,0.9)',
                    borderColor: hoveredFeature === index ? feature.color : 'transparent'
                  }}
                >
                  <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                    <div 
                      className="text-6xl mb-6 transition-all duration-300 group-hover:scale-125"
                      style={{ 
                        filter: hoveredFeature === index ? 'drop-shadow(0 0 20px currentColor)' : 'none'
                      }}
                    >
                      {feature.icon}
                    </div>
                    <h3 
                      className="text-2xl mb-4 transition-colors duration-300"
                      style={{ 
                        color: hoveredFeature === index ? feature.color : 'var(--found-it-software-black)'
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p 
                      className="text-lg leading-relaxed"
                      style={{ color: 'var(--found-it-software-black)', opacity: 0.7 }}
                    >
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
                
                {/* Magic glow effect */}
                {hoveredFeature === index && (
                  <div 
                    className="absolute inset-0 -z-10 rounded-xl blur-xl animate-pulse"
                    style={{ 
                      background: `radial-gradient(circle, ${feature.color}30, transparent 70%)`
                    }}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Final magic touch */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className="relative p-12 rounded-3xl backdrop-blur-lg border shadow-2xl"
            style={{ 
              background: `linear-gradient(135deg, 
                rgba(255,255,255,0.9) 0%, 
                rgba(0,0,255,0.05) 50%, 
                rgba(255,255,255,0.9) 100%)`,
              borderColor: 'var(--found-it-ound-blue)'
            }}
          >
            <h2 
              className="text-4xl mb-6"
              style={{ color: 'var(--found-it-software-black)' }}
            >
              ¿Listo para la magia?
            </h2>
            <p 
              className="text-xl mb-8"
              style={{ color: 'var(--found-it-software-black)', opacity: 0.8 }}
            >
              Únete a miles de usuarios que ya han revolucionado su forma de buscar información.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                className="px-10 py-4 text-lg text-white transition-all hover:scale-110 shadow-lg"
                style={{ backgroundColor: 'var(--found-it-it-red)' }}
              >
                Comenzar Ahora
              </Button>
              <Button 
                variant="outline"
                className="px-10 py-4 text-lg border-2 transition-all hover:scale-110"
                style={{ 
                  borderColor: 'var(--found-it-ound-blue)',
                  color: 'var(--found-it-ound-blue)'
                }}
              >
                Ver Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
