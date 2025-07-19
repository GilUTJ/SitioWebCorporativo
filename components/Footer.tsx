export function Footer() {
  return (
    <footer 
      id="contacto" 
      className="py-16 relative overflow-hidden"
      style={{ 
        background: `linear-gradient(135deg, var(--sixth-mind-text) 0%, var(--sixth-mind-primary) 100%)` 
      }}
    >
      {/* Warm accent overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(circle at 20% 20%, var(--sixth-mind-secondary) 0%, transparent 50%),
                       radial-gradient(circle at 80% 80%, var(--sixth-mind-accent) 0%, transparent 50%)`
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/images/Logotipos/sixthMind.png" 
                alt="Sixth Mind Logo" 
                className="h-12 w-auto transition-all duration-300 hover:scale-105 filter brightness-0 invert drop-shadow-sm"
              />
            </div>
            <p 
              className="mb-4"
              style={{ color: 'var(--sixth-mind-white)' }}
            >
              Desarrolladores de software especialistas en crear soluciones innovadoras 
              que transforman ideas en aplicaciones funcionales y escalables.
            </p>
            <div className="flex space-x-4">
              <button 
                className="w-10 h-10 text-white rounded-full transition-all hover:scale-110 shadow-md"
                style={{ backgroundColor: 'var(--sixth-mind-secondary)' }}
              >
                <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd"/>
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
              <button 
                className="w-10 h-10 text-white rounded-full transition-all hover:scale-110 shadow-md"
                style={{ backgroundColor: 'var(--sixth-mind-secondary)' }}
              >
                <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                </svg>
              </button>
            </div>
          </div>

          <div>
            <h4 
              className="text-lg mb-6"
              style={{ color: 'var(--sixth-mind-white)' }}
            >
              Servicios
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="transition-colors opacity-80 hover:opacity-100"
                  style={{ color: 'var(--sixth-mind-white)' }}
                  onMouseOver={(e) => e.target.style.color = 'var(--sixth-mind-accent)'}
                  onMouseOut={(e) => e.target.style.color = 'var(--sixth-mind-white)'}
                >
                  Desarrollo Web
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="transition-colors opacity-80 hover:opacity-100"
                  style={{ color: 'var(--sixth-mind-white)' }}
                  onMouseOver={(e) => e.target.style.color = 'var(--sixth-mind-accent)'}
                  onMouseOut={(e) => e.target.style.color = 'var(--sixth-mind-white)'}
                >
                  Aplicaciones Móviles
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="transition-colors opacity-80 hover:opacity-100"
                  style={{ color: 'var(--sixth-mind-white)' }}
                  onMouseOver={(e) => e.target.style.color = 'var(--sixth-mind-accent)'}
                  onMouseOut={(e) => e.target.style.color = 'var(--sixth-mind-white)'}
                >
                  APIs y Backend
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="transition-colors opacity-80 hover:opacity-100"
                  style={{ color: 'var(--sixth-mind-white)' }}
                  onMouseOver={(e) => e.target.style.color = 'var(--sixth-mind-accent)'}
                  onMouseOut={(e) => e.target.style.color = 'var(--sixth-mind-white)'}
                >
                  Consultoría Técnica
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 
              className="text-lg mb-6"
              style={{ color: 'var(--sixth-mind-white)' }}
            >
              Tecnologías
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="transition-colors opacity-80 hover:opacity-100"
                  style={{ color: 'var(--sixth-mind-white)' }}
                  onMouseOver={(e) => e.target.style.color = 'var(--sixth-mind-accent)'}
                  onMouseOut={(e) => e.target.style.color = 'var(--sixth-mind-white)'}
                >
                  React & Next.js
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="transition-colors opacity-80 hover:opacity-100"
                  style={{ color: 'var(--sixth-mind-white)' }}
                  onMouseOver={(e) => e.target.style.color = 'var(--sixth-mind-accent)'}
                  onMouseOut={(e) => e.target.style.color = 'var(--sixth-mind-white)'}
                >
                  Node.js & Python
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="transition-colors opacity-80 hover:opacity-100"
                  style={{ color: 'var(--sixth-mind-white)' }}
                  onMouseOver={(e) => e.target.style.color = 'var(--sixth-mind-accent)'}
                  onMouseOut={(e) => e.target.style.color = 'var(--sixth-mind-white)'}
                >
                  Cloud & DevOps
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="transition-colors opacity-80 hover:opacity-100"
                  style={{ color: 'var(--sixth-mind-white)' }}
                  onMouseOver={(e) => e.target.style.color = 'var(--sixth-mind-accent)'}
                  onMouseOut={(e) => e.target.style.color = 'var(--sixth-mind-white)'}
                >
                  Bases de Datos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 
              className="text-lg mb-6"
              style={{ color: 'var(--sixth-mind-white)' }}
            >
              Contacto
            </h4>
            <div className="space-y-3">
              <p 
                className="flex items-center gap-2 opacity-80"
                style={{ color: 'var(--sixth-mind-white)' }}
              >
                <svg 
                  className="w-4 h-4"
                  style={{ color: 'var(--sixth-mind-accent)' }}
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                Madrid, España
              </p>
              <p 
                className="flex items-center gap-2 opacity-80"
                style={{ color: 'var(--sixth-mind-white)' }}
              >
                <svg 
                  className="w-4 h-4"
                  style={{ color: 'var(--sixth-mind-accent)' }}
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                +34 900 654 321
              </p>
              <p 
                className="flex items-center gap-2 opacity-80"
                style={{ color: 'var(--sixth-mind-white)' }}
              >
                <svg 
                  className="w-4 h-4"
                  style={{ color: 'var(--sixth-mind-accent)' }}
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                hello@sixthmind.dev
              </p>
            </div>
          </div>
        </div>

        <div 
          className="border-t pt-8 text-center opacity-80"
          style={{ 
            borderColor: 'var(--sixth-mind-secondary)',
            color: 'var(--sixth-mind-white)'
          }}
        >
          <p>&copy; 2025 Sixth Mind. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}