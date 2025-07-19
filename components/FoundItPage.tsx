import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { useState, useEffect } from "react";

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
            src="/images/Logotipos/found-it.png" 
            alt="Found It" 
            className="h-12 w-auto transition-all duration-300 hover:scale-105 drop-shadow-lg"
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

      {/* Problemática y Solución Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute top-20 left-20 w-40 h-40 rounded-full animate-pulse"
            style={{ backgroundColor: 'var(--found-it-it-red)' }}
          ></div>
          <div 
            className="absolute bottom-20 right-20 w-32 h-32 rounded-full animate-pulse"
            style={{ backgroundColor: 'var(--found-it-ound-blue)', animationDelay: '1s' }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 
              className="text-5xl mb-6 animate-fade-in-up"
              style={{ color: 'var(--found-it-software-black)' }}
            >
              Problemática y Solución
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
            <p 
              className="text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: 'var(--found-it-software-black)', opacity: 0.8 }}
            >
              Identificamos el problema real y desarrollamos la solución perfecta
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Problemática */}
            <div className="space-y-8">
              <Card 
                className="border-0 shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-lg"
                style={{ 
                  background: `linear-gradient(135deg, 
                    rgba(255,96,0,0.1) 0%, 
                    rgba(255,255,255,0.95) 50%, 
                    rgba(255,96,0,0.05) 100%)`,
                  borderColor: 'var(--found-it-it-red)'
                }}
              >
                <CardContent className="p-10">
                  <div className="text-center mb-8">
                    <div 
                      className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-4xl shadow-lg"
                      style={{ 
                        background: `linear-gradient(135deg, var(--found-it-it-red), var(--found-it-f-dark))`,
                        filter: 'drop-shadow(0 0 20px var(--found-it-it-red))'
                      }}
                    >
                      ⚠️
                    </div>
                    <h3 
                      className="text-4xl font-bold mb-4"
                      style={{ color: 'var(--found-it-it-red)' }}
                    >
                      La Problemática
                    </h3>
                    <p 
                      className="text-lg leading-relaxed"
                      style={{ color: 'var(--found-it-software-black)', opacity: 0.7 }}
                    >
                      Los desafíos que enfrentan las personas al buscar objetos perdidos
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 p-4 rounded-lg transition-all hover:scale-105" style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}>
                      <div className="w-3 h-3 rounded-full mt-2 animate-pulse" style={{ backgroundColor: 'var(--found-it-it-red)' }}></div>
                      <div>
                        <h4 className="font-semibold mb-2" style={{ color: 'var(--found-it-software-black)' }}>
                          Desconexión Total
                        </h4>
                        <p style={{ color: 'var(--found-it-software-black)', opacity: 0.7 }}>
                          Las personas que encuentran objetos no tienen forma de contactar a los dueños
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 p-4 rounded-lg transition-all hover:scale-105" style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}>
                      <div className="w-3 h-3 rounded-full mt-2 animate-pulse" style={{ backgroundColor: 'var(--found-it-it-red)' }}></div>
                      <div>
                        <h4 className="font-semibold mb-2" style={{ color: 'var(--found-it-software-black)' }}>
                          Pérdida Permanente
                        </h4>
                        <p style={{ color: 'var(--found-it-software-black)', opacity: 0.7 }}>
                          Millones de objetos valiosos se pierden para siempre cada año
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 p-4 rounded-lg transition-all hover:scale-105" style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}>
                      <div className="w-3 h-3 rounded-full mt-2 animate-pulse" style={{ backgroundColor: 'var(--found-it-it-red)' }}></div>
                      <div>
                        <h4 className="font-semibold mb-2" style={{ color: 'var(--found-it-software-black)' }}>
                          Falta de Centralización
                        </h4>
                        <p style={{ color: 'var(--found-it-software-black)', opacity: 0.7 }}>
                          No existe una plataforma unificada para reportar objetos perdidos
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 rounded-lg transition-all hover:scale-105" style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}>
                      <div className="w-3 h-3 rounded-full mt-2 animate-pulse" style={{ backgroundColor: 'var(--found-it-it-red)' }}></div>
                      <div>
                        <h4 className="font-semibold mb-2" style={{ color: 'var(--found-it-software-black)' }}>
                          Impacto Emocional
                        </h4>
                        <p style={{ color: 'var(--found-it-software-black)', opacity: 0.7 }}>
                          La pérdida de objetos con valor sentimental causa estrés y angustia
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Solución */}
            <div className="space-y-8">
              <Card 
                className="border-0 shadow-2xl transition-all duration-500 hover:scale-105 backdrop-blur-lg"
                style={{ 
                  background: `linear-gradient(135deg, 
                    rgba(0,0,255,0.1) 0%, 
                    rgba(255,255,255,0.95) 50%, 
                    rgba(0,0,255,0.05) 100%)`,
                  borderColor: 'var(--found-it-ound-blue)'
                }}
              >
                <CardContent className="p-10">
                  <div className="text-center mb-8">
                    <div 
                      className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-4xl shadow-lg"
                      style={{ 
                        background: `linear-gradient(135deg, var(--found-it-ound-blue), var(--found-it-it-red))`,
                        filter: 'drop-shadow(0 0 20px var(--found-it-ound-blue))'
                      }}
                    >
                      ✨
                    </div>
                    <h3 
                      className="text-4xl font-bold mb-4"
                      style={{ color: 'var(--found-it-ound-blue)' }}
                    >
                      Nuestra Solución
                    </h3>
                    <p 
                      className="text-lg leading-relaxed"
                      style={{ color: 'var(--found-it-software-black)', opacity: 0.7 }}
                    >
                      Tecnología avanzada que transforma la búsqueda de objetos perdidos
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 p-4 rounded-lg transition-all hover:scale-105" style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}>
                      <div className="w-3 h-3 rounded-full mt-2 animate-pulse" style={{ backgroundColor: 'var(--found-it-ound-blue)' }}></div>
                      <div>
                        <h4 className="font-semibold mb-2" style={{ color: 'var(--found-it-software-black)' }}>
                          Plataforma Inteligente
                        </h4>
                        <p style={{ color: 'var(--found-it-software-black)', opacity: 0.7 }}>
                          Sistema que conecta automáticamente objetos perdidos con encontrados
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 p-4 rounded-lg transition-all hover:scale-105" style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}>
                      <div className="w-3 h-3 rounded-full mt-2 animate-pulse" style={{ backgroundColor: 'var(--found-it-ound-blue)' }}></div>
                      <div>
                        <h4 className="font-semibold mb-2" style={{ color: 'var(--found-it-software-black)' }}>
                          Algoritmos Avanzados
                        </h4>
                        <p style={{ color: 'var(--found-it-software-black)', opacity: 0.7 }}>
                          Matching inteligente basado en características, ubicación y tiempo
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 p-4 rounded-lg transition-all hover:scale-105" style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}>
                      <div className="w-3 h-3 rounded-full mt-2 animate-pulse" style={{ backgroundColor: 'var(--found-it-ound-blue)' }}></div>
                      <div>
                        <h4 className="font-semibold mb-2" style={{ color: 'var(--found-it-software-black)' }}>
                          Comunicación Segura
                        </h4>
                        <p style={{ color: 'var(--found-it-software-black)', opacity: 0.7 }}>
                          Chat integrado que protege la privacidad de los usuarios
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 rounded-lg transition-all hover:scale-105" style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}>
                      <div className="w-3 h-3 rounded-full mt-2 animate-pulse" style={{ backgroundColor: 'var(--found-it-ound-blue)' }}></div>
                      <div>
                        <h4 className="font-semibold mb-2" style={{ color: 'var(--found-it-software-black)' }}>
                          Comunidad Solidaria
                        </h4>
                        <p style={{ color: 'var(--found-it-software-black)', opacity: 0.7 }}>
                          Red de personas comprometidas con ayudar a reunir objetos con sus dueños
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Objective Section - Mission and vision */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-5xl mb-6 animate-fade-in-up"
              style={{ color: 'var(--found-it-software-black)' }}
            >
              Nuestro Objetivo
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
            <p 
              className="text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: 'var(--found-it-software-black)', opacity: 0.8 }}
            >
              Transformar la manera en que las personas buscan y encuentran información, 
              haciendo que cada búsqueda sea una experiencia mágica y efectiva.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Vision Card */}
            <div className="relative group">
              <Card 
                className="h-full border-0 shadow-2xl transition-all duration-500 group-hover:scale-105 backdrop-blur-lg"
                style={{ 
                  background: `linear-gradient(135deg, 
                    rgba(0,0,255,0.1) 0%, 
                    rgba(255,255,255,0.95) 50%, 
                    rgba(255,96,0,0.1) 100%)`,
                  borderColor: 'var(--found-it-ound-blue)'
                }}
              >
                <CardContent className="p-8 text-center">
                  <div 
                    className="text-6xl mb-6 transition-all duration-300 group-hover:scale-125"
                    style={{ filter: 'drop-shadow(0 0 15px var(--found-it-ound-blue))' }}
                  >
                    🎯
                  </div>
                  <h3 
                    className="text-3xl mb-6"
                    style={{ color: 'var(--found-it-ound-blue)' }}
                  >
                    Nuestra Visión
                  </h3>
                  <p 
                    className="text-lg leading-relaxed"
                    style={{ color: 'var(--found-it-software-black)', opacity: 0.8 }}
                  >
                    Ser la plataforma de búsqueda más intuitiva y poderosa del mundo, 
                    donde encontrar información sea tan natural como respirar. 
                    Queremos crear un futuro donde cada pregunta tenga una respuesta instantánea y precisa.
                  </p>
                </CardContent>
              </Card>
              
              {/* Glow effect */}
              <div 
                className="absolute inset-0 -z-10 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                style={{ 
                  background: `radial-gradient(circle, var(--found-it-ound-blue), transparent 70%)`
                }}
              ></div>
            </div>

            {/* Mission Card */}
            <div className="relative group">
              <Card 
                className="h-full border-0 shadow-2xl transition-all duration-500 group-hover:scale-105 backdrop-blur-lg"
                style={{ 
                  background: `linear-gradient(135deg, 
                    rgba(255,96,0,0.1) 0%, 
                    rgba(255,255,255,0.95) 50%, 
                    rgba(0,0,255,0.1) 100%)`,
                  borderColor: 'var(--found-it-it-red)'
                }}
              >
                <CardContent className="p-8 text-center">
                  <div 
                    className="text-6xl mb-6 transition-all duration-300 group-hover:scale-125"
                    style={{ filter: 'drop-shadow(0 0 15px var(--found-it-it-red))' }}
                  >
                    🚀
                  </div>
                  <h3 
                    className="text-3xl mb-6"
                    style={{ color: 'var(--found-it-it-red)' }}
                  >
                    Nuestra Misión
                  </h3>
                  <p 
                    className="text-lg leading-relaxed"
                    style={{ color: 'var(--found-it-software-black)', opacity: 0.8 }}
                  >
                    Democratizar el acceso a la información mediante tecnología de inteligencia artificial avanzada. 
                    Eliminamos las barreras entre las personas y el conocimiento que necesitan, 
                    creando herramientas que entienden el contexto humano.
                  </p>
                </CardContent>
              </Card>
              
              {/* Glow effect */}
              <div 
                className="absolute inset-0 -z-10 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                style={{ 
                  background: `radial-gradient(circle, var(--found-it-it-red), transparent 70%)`
                }}
              ></div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-16">
            <h3 
              className="text-3xl text-center mb-12"
              style={{ color: 'var(--found-it-software-black)' }}
            >
              Nuestros Valores Fundamentales
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-2xl transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}>
                <div className="text-4xl mb-4">💡</div>
                <h4 className="text-xl mb-3" style={{ color: 'var(--found-it-ound-blue)' }}>
                  Innovación
                </h4>
                <p style={{ color: 'var(--found-it-software-black)', opacity: 0.7 }}>
                  Constantemente exploramos nuevas fronteras tecnológicas
                </p>
              </div>
              
              <div className="text-center p-6 rounded-2xl transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}>
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="text-xl mb-3" style={{ color: 'var(--found-it-it-red)' }}>
                  Precisión
                </h4>
                <p style={{ color: 'var(--found-it-software-black)', opacity: 0.7 }}>
                  Cada resultado debe ser exactamente lo que necesitas
                </p>
              </div>
              
              <div className="text-center p-6 rounded-2xl transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}>
                <div className="text-4xl mb-4">🌟</div>
                <h4 className="text-xl mb-3" style={{ color: 'var(--found-it-f-dark)' }}>
                  Excelencia
                </h4>
                <p style={{ color: 'var(--found-it-software-black)', opacity: 0.7 }}>
                  La calidad no es negociable en todo lo que hacemos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
