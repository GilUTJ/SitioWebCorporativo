import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

export function TeamSection() {
  const [currentMember, setCurrentMember] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const teamMembers = [
    {
      name: "Roberto Murillo Sánchez",
      position: "Líder de Proyectos",
      image: "/images/team/Roberto_Murillo.jpg",
      bio: "Estudiante especializado en gestión de proyectos con enfoque en metodologías ágiles y coordinación de equipos de desarrollo.",
      skills: ["Gestión de Proyectos", "Metodologías Ágiles", "Liderazgo de Equipos", "Análisis de Requerimientos"],
      color: "var(--sixth-mind-primary)"
    },
    {
      name: "Cassandra Pulido Rosas",
      position: "Especialista en IoT",
      image: "/images/team/Cassandra_Pulido.jpeg",
      bio: "Estudiante especializada en Internet de las Cosas, enfocada en el desarrollo de sistemas conectados e integración de hardware.",
      skills: ["IoT Development", "Hardware Integration", "Sensores y Actuadores", "Protocolos de Comunicación"],
      color: "var(--sixth-mind-secondary)"
    },
    {
      name: "Josué Avalos Orozco",
      position: "Desarrollador Frontend",
      image: "/images/team/Josue_Orozco.jpeg",
      bio: "Estudiante especializado en desarrollo frontend, enfocado en crear interfaces web modernas y experiencias de usuario intuitivas.",
      skills: ["React/Angular", "UI/UX Design", "Responsive Design", "JavaScript/TypeScript"],
      color: "var(--sixth-mind-accent)"
    },
    {
      name: "Omar López Vázquez",
      position: "Desarrollador Backend",
      image: "/images/team/Omar_Lopez.jpg",
      bio: "Estudiante especializado en desarrollo backend, enfocado en la creación de APIs robustas y arquitecturas de software escalables.",
      skills: ["Node.js", "API REST", "Microservicios", "Arquitectura de Software"],
      color: "var(--sixth-mind-primary)"
    },
    {
      name: "Gilberto Rodríguez Almaraz",
      position: "Especialista en Bases de Datos",
      image: "/images/team/Gilberto_Rodriguez.jpg",
      bio: "Estudiante especializado en gestión de bases de datos, enfocado en optimización de consultas y modelado de datos NoSQL.",
      skills: ["MongoDB", "MySQL", "Optimización de Consultas", "Modelado de Datos"],
      color: "var(--sixth-mind-secondary)"
    }
  ];

  // Función para cambiar miembro con animación
  const changeMember = (newMember: number) => {
    if (newMember >= 0 && newMember < teamMembers.length && newMember !== currentMember) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentMember(newMember);
        setIsTransitioning(false);
      }, 150);
    }
  };

  return (
    <section 
      id="equipo" 
      className="py-20 relative overflow-hidden"
      style={{ 
        background: `linear-gradient(135deg, var(--sixth-mind-bg) 0%, var(--sixth-mind-cream-dark) 50%, var(--sixth-mind-bg) 100%)` 
      }}
    >
      {/* Warm background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute top-20 left-10 w-40 h-40 rounded-full animate-warm-pulse"
          style={{ backgroundColor: 'var(--sixth-mind-secondary)' }}
        ></div>
        <div 
          className="absolute bottom-20 right-20 w-32 h-32 rounded-full animate-warm-pulse"
          style={{ backgroundColor: 'var(--sixth-mind-accent)', animationDelay: '1s' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl mb-4"
            style={{ color: 'var(--sixth-mind-text)' }}
          >
            Nuestro Equipo de Desarrollo
          </h2>
          <div 
            className="w-24 h-1 mx-auto mb-6"
            style={{ backgroundColor: 'var(--sixth-mind-secondary)' }}
          ></div>
          <p 
            className="text-xl max-w-3xl mx-auto mb-8"
            style={{ color: 'var(--sixth-mind-text-light)' }}
          >
            Conozca a los estudiantes especializados en desarrollo de software que transforman ideas innovadoras 
            en soluciones tecnológicas. Un equipo joven comprometido con el aprendizaje continuo y la excelencia técnica.
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
                  width: `${((currentMember + 1) / teamMembers.length) * 100}%`
                }}
              ></div>
            </div>
            <p 
              className="text-xs font-semibold whitespace-nowrap"
              style={{ color: 'var(--sixth-mind-text)', opacity: 0.6 }}
            >
              {currentMember + 1}/{teamMembers.length}
            </p>
          </div>
        </div>

        {/* Contenedor con flechas integradas - Estilo Found-It adaptado a Sixth Mind */}
        <div className="relative max-w-7xl mx-auto">
          <div className="relative min-h-[500px] bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-100">
            {/* Flecha izquierda */}
            <button
              onClick={() => changeMember(currentMember - 1)}
              disabled={currentMember === 0}
              className={`
                absolute left-4 top-1/2 -translate-y-1/2 z-20
                w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl
                transition-all duration-300
                ${currentMember === 0 
                  ? 'opacity-30 cursor-not-allowed' 
                  : 'hover:opacity-100 opacity-80'
                }
              `}
              style={{
                backgroundColor: currentMember === 0 ? '#E5E5E5' : 'var(--sixth-mind-primary)',
                color: currentMember === 0 ? '#999' : 'white',
                boxShadow: currentMember === 0 ? 'none' : '0 4px 15px rgba(0,0,0,0.1)'
              }}
            >
              ⬅️
            </button>

            {/* Flecha derecha */}
            <button
              onClick={() => changeMember(currentMember + 1)}
              disabled={currentMember === teamMembers.length - 1}
              className={`
                absolute right-4 top-1/2 -translate-y-1/2 z-20
                w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl
                transition-all duration-300
                ${currentMember === teamMembers.length - 1 
                  ? 'opacity-30 cursor-not-allowed' 
                  : 'hover:opacity-100 opacity-80'
                }
              `}
              style={{
                backgroundColor: currentMember === teamMembers.length - 1 ? '#E5E5E5' : 'var(--sixth-mind-primary)',
                color: currentMember === teamMembers.length - 1 ? '#999' : 'white',
                boxShadow: currentMember === teamMembers.length - 1 ? 'none' : '0 4px 15px rgba(0,0,0,0.1)'
              }}
            >
              ➡️
            </button>

            {/* Contenido principal - Foto izquierda, Info derecha */}
            <div className="px-20 py-12">
              <div 
                className={`
                  grid lg:grid-cols-2 gap-12 items-center transition-all duration-300 transform
                  ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
                `}
              >
                {/* Columna izquierda - Foto */}
                <div className="order-1 lg:order-1 text-center">
                  <div className="relative max-w-sm mx-auto">
                    <Card 
                      className="border-0 shadow-xl overflow-hidden bg-white/95 backdrop-blur-sm"
                      style={{ 
                        borderTop: `6px solid ${teamMembers[currentMember].color}`
                      }}
                    >
                      <CardContent className="p-8">
                        <div className="relative mb-6">
                          <ImageWithFallback
                            src={teamMembers[currentMember].image}
                            alt={teamMembers[currentMember].name}
                            className="w-48 h-48 rounded-full mx-auto object-cover border-4 transition-all duration-300"
                            style={{ 
                              borderColor: teamMembers[currentMember].color
                            }}
                          />
                          <div 
                            className="absolute inset-0 w-48 h-48 rounded-full mx-auto opacity-0 hover:opacity-20 transition-opacity duration-300"
                            style={{
                              background: `radial-gradient(circle at center, ${teamMembers[currentMember].color}, transparent 70%)`
                            }}
                          ></div>
                        </div>
                        
                        {/* Posición con color temático */}
                        <div 
                          className="inline-block px-4 py-2 rounded-full text-sm font-semibold text-white mb-4"
                          style={{ backgroundColor: teamMembers[currentMember].color }}
                        >
                          {teamMembers[currentMember].position}
                        </div>

                        {/* Redes sociales */}
                        <div className="flex justify-center space-x-4">
                          <button 
                            className="w-10 h-10 text-white rounded-full transition-all hover:scale-110 shadow-md"
                            style={{ backgroundColor: teamMembers[currentMember].color }}
                          >
                            <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                            </svg>
                          </button>
                          <button 
                            className="w-10 h-10 text-white rounded-full transition-all hover:scale-110 shadow-md"
                            style={{ backgroundColor: 'var(--sixth-mind-accent)' }}
                          >
                            <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                            </svg>
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Columna derecha - Información */}
                <div className="order-2 lg:order-2">
                  <Card 
                    className="border-0 shadow-lg bg-white/95 backdrop-blur-sm h-full"
                    style={{ 
                      borderLeft: `6px solid ${teamMembers[currentMember].color}`
                    }}
                  >
                    <CardContent className="p-8">
                      {/* Nombre */}
                      <h3 
                        className="text-3xl mb-2 font-bold transition-colors duration-300"
                        style={{ color: teamMembers[currentMember].color }}
                      >
                        {teamMembers[currentMember].name}
                      </h3>
                      
                      {/* Biografía */}
                      <p 
                        className="text-lg leading-relaxed mb-6"
                        style={{ color: 'var(--sixth-mind-text-light)' }}
                      >
                        {teamMembers[currentMember].bio}
                      </p>

                      {/* Separador */}
                      <div 
                        className="w-16 h-1 mb-6"
                        style={{ backgroundColor: teamMembers[currentMember].color }}
                      ></div>

                      {/* Habilidades */}
                      <div className="mb-6">
                        <h4 
                          className="text-xl mb-4 font-semibold"
                          style={{ color: 'var(--sixth-mind-text)' }}
                        >
                          Especialidades
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {teamMembers[currentMember].skills.map((skill, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-2"
                            >
                              <div 
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: teamMembers[currentMember].color }}
                              ></div>
                              <span 
                                className="text-sm"
                                style={{ color: 'var(--sixth-mind-text)' }}
                              >
                                {skill}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Badge de experiencia */}
                      <div 
                        className="inline-block px-4 py-2 rounded-lg text-sm font-medium"
                        style={{ 
                          backgroundColor: `${teamMembers[currentMember].color}15`,
                          color: teamMembers[currentMember].color,
                          border: `1px solid ${teamMembers[currentMember].color}30`
                        }}
                      >
                        🎓 Estudiante de Desarrollo de Software
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Indicadores de página en la parte inferior */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <div className="flex space-x-2">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => changeMember(index)}
                    className={`
                      w-3 h-3 rounded-full transition-all duration-300
                      ${currentMember === index 
                        ? 'opacity-100' 
                        : 'opacity-40 hover:opacity-70'
                      }
                    `}
                    style={{
                      backgroundColor: currentMember === index 
                        ? 'var(--sixth-mind-primary)' 
                        : 'var(--sixth-mind-secondary)'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Información de miembro */}
          <div className="text-center mt-6">
            <p 
              className="text-sm font-medium"
              style={{ color: 'var(--sixth-mind-text)', opacity: 0.6 }}
            >
              Miembro {currentMember + 1} de {teamMembers.length} del equipo
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <div 
            className="rounded-lg p-8 max-w-2xl mx-auto backdrop-blur-sm border shadow-lg"
            style={{ 
              backgroundColor: 'rgba(255,255,255,0.9)',
              borderColor: 'var(--sixth-mind-accent)'
            }}
          >
            <h3 
              className="text-2xl mb-4"
              style={{ color: 'var(--sixth-mind-text)' }}
            >
              ¿Por qué Sixth Mind?
            </h3>
            <p style={{ color: 'var(--sixth-mind-text-light)' }}>
              Nuestro equipo de estudiantes nos permite ser ágiles e innovadores en cada proyecto. 
              Cada miembro aporta conocimientos especializados en desarrollo de software, 
              garantizando soluciones técnicas modernas y creatividad en la implementación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}