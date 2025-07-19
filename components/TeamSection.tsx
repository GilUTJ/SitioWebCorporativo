import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function TeamSection() {
  const teamMembers = [
    {
      name: "Roberto Murillo Sánchez",
      position: "Lider del equipo",
      image: "/images/team/Roberto_Murillo.jpg",
      bio: "Arquitecto de software con más de 8 años de experiencia liderando proyectos de desarrollo web y móvil."
    },
    {
      name: "Cassandra Pulido Rosas",
      position: "Aplicaciones IoT",
      image: "/images/team/Cassandra_Pulido.jpg",
      bio: "Especialista en React y diseño de interfaces de usuario, creando experiencias digitales excepcionales."
    },
    {
      name: "Josue Avalos Orozco ",
      position: "Desarrollo Frontend",
      image: "/images/team/Josue_Orozco.jpg",
      bio: "Experto en arquitecturas de servidor robustas y APIs escalables con tecnologías modernas."
    },
    {
      name: "Omar Lopez Vazquez",
      position: "Desarollo Backend",
      image: "/images/team/Omar_Lopez.jpg",
      bio: "Desarrolladora versátil con dominio tanto en frontend como backend, especializada en aplicaciones web completas."
    },
    {
      name: "Gilberto Rodriguez Almaraz",
      position: "Bases de datos",
      image: "/images/team/Gilberto_Rodriguez.jpg",
      bio: "Especialista en infraestructura cloud, CI/CD y automatización de despliegues para máxima eficiencia."
    }
  ];

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
            Nuestro Equipo
          </h2>
          <div 
            className="w-24 h-1 mx-auto mb-6"
            style={{ backgroundColor: 'var(--sixth-mind-secondary)' }}
          ></div>
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ color: 'var(--sixth-mind-text-light)' }}
          >
            Conoce a los desarrolladores que dan vida a las ideas. 
            Un equipo compacto pero poderoso, especializado en tecnologías modernas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg backdrop-blur-sm transform hover:-translate-y-2"
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.9)',
                border: '1px solid var(--sixth-mind-cream-dark)'
              }}
            >
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 transition-all duration-300"
                    style={{ 
                      borderColor: 'var(--sixth-mind-cream-dark)' 
                    }}
                    onMouseOver={(e) => e.target.style.borderColor = 'var(--sixth-mind-secondary)'}
                    onMouseOut={(e) => e.target.style.borderColor = 'var(--sixth-mind-cream-dark)'}
                  />
                  <div 
                    className="absolute inset-0 w-32 h-32 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `linear-gradient(to top, rgba(72, 163, 166, 0.2), transparent)`
                    }}
                  ></div>
                </div>
                
                <h3 
                  className="text-xl mb-2"
                  style={{ color: 'var(--sixth-mind-text)' }}
                >
                  {member.name}
                </h3>
                <p 
                  className="mb-4"
                  style={{ color: 'var(--sixth-mind-secondary)' }}
                >
                  {member.position}
                </p>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--sixth-mind-text-light)' }}
                >
                  {member.bio}
                </p>
                
                <div className="flex justify-center space-x-4 mt-6">
                  <button 
                    className="w-8 h-8 text-white rounded-full transition-all hover:scale-110 shadow-md"
                    style={{ backgroundColor: 'var(--sixth-mind-secondary)' }}
                  >
                    <svg className="w-4 h-4 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                    </svg>
                  </button>
                  <button 
                    className="w-8 h-8 text-white rounded-full transition-all hover:scale-110 shadow-md"
                    style={{ backgroundColor: 'var(--sixth-mind-accent)' }}
                  >
                    <svg className="w-4 h-4 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                    </svg>
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
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
              Nuestro equipo compacto nos permite ser ágiles y mantener una comunicación 
              directa en cada proyecto. Cada miembro aporta expertise especializado, 
              garantizando soluciones técnicas de alta calidad y entrega eficiente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}