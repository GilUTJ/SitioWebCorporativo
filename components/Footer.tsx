export function Footer() {
  return (
    <footer 
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
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/images/Logotipos/sixthMind.png" 
                alt="Sixth Mind Logo" 
                className="h-16 w-auto transition-all duration-300 hover:scale-105 drop-shadow-lg"
              />
            </div>
            <p 
              className="mb-4"
              style={{ color: 'var(--sixth-mind-white)' }}
            >
              Líderes en transformación digital empresarial, desarrollamos soluciones 
              tecnológicas innovadoras que impulsan el crecimiento y la competitividad 
              de nuestros clientes.
            </p>
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
                <span 
                  className="opacity-80"
                  style={{ color: 'var(--sixth-mind-white)' }}
                >
                  Desarrollo de Software Personalizado
                </span>
              </li>
              <li>
                <span 
                  className="opacity-80"
                  style={{ color: 'var(--sixth-mind-white)' }}
                >
                  Automatización de Procesos
                </span>
              </li>
              <li>
                <span 
                  className="opacity-80"
                  style={{ color: 'var(--sixth-mind-white)' }}
                >
                  Sistemas IoT e Integración
                </span>
              </li>
              <li>
                <span 
                  className="opacity-80"
                  style={{ color: 'var(--sixth-mind-white)' }}
                >
                  Consultoría Tecnológica
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 
              className="text-lg mb-6"
              style={{ color: 'var(--sixth-mind-white)' }}
            >
              Soluciones
            </h4>
            <ul className="space-y-3">
              <li>
                <span 
                  className="opacity-80"
                  style={{ color: 'var(--sixth-mind-white)' }}
                >
                  Plataformas Web Modernas
                </span>
              </li>
              <li>
                <span 
                  className="opacity-80"
                  style={{ color: 'var(--sixth-mind-white)' }}
                >
                  Sistemas de Comunicación
                </span>
              </li>
              <li>
                <span 
                  className="opacity-80"
                  style={{ color: 'var(--sixth-mind-white)' }}
                >
                  Sistemas de Gestión Empresarial
                </span>
              </li>
              <li>
                <span 
                  className="opacity-80"
                  style={{ color: 'var(--sixth-mind-white)' }}
                >
                  Gestión de Datos Inteligente
                </span>
              </li>
              <li>
                <span 
                  className="opacity-80"
                  style={{ color: 'var(--sixth-mind-white)' }}
                >
                  Dispositivos Conectados
                </span>
              </li>
            </ul>
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