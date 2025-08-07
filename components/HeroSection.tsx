export function HeroSection() {
  return (
    <section 
      id="inicio" 
      className="py-20 relative overflow-hidden"
      style={{ 
        background: `linear-gradient(135deg, var(--sixth-mind-bg) 0%, var(--sixth-mind-cream-dark) 30%, var(--sixth-mind-accent) 60%, var(--sixth-mind-bg) 100%)` 
      }}
    >
      {/* Animated background elements with warm colors */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute top-20 left-10 w-32 h-32 rounded-full animate-float animate-warm-pulse"
          style={{ backgroundColor: 'var(--sixth-mind-secondary)' }}
        ></div>
        <div 
          className="absolute top-40 right-20 w-24 h-24 rounded-full animate-float"
          style={{ 
            backgroundColor: 'var(--sixth-mind-accent)', 
            animationDelay: '1s' 
          }}
        ></div>
        <div 
          className="absolute bottom-20 left-1/3 w-40 h-40 rounded-full animate-float animate-warm-pulse"
          style={{ 
            backgroundColor: 'var(--sixth-mind-secondary)', 
            animationDelay: '2s' 
          }}
        ></div>
        <div 
          className="absolute top-1/3 right-1/3 w-16 h-16 rounded-full animate-float"
          style={{ 
            backgroundColor: 'var(--sixth-mind-accent)', 
            animationDelay: '3s' 
          }}
        ></div>
      </div>

      {/* Soft overlay for depth */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(circle at 30% 20%, var(--sixth-mind-accent) 0%, transparent 50%),
                       radial-gradient(circle at 70% 80%, var(--sixth-mind-secondary) 0%, transparent 50%)`
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Logotipo de Sixth Mind */}
          <div className="mb-8">
            <img 
              src="/images/Logotipos/sixthMind.png" 
              alt="Sixth Mind" 
              className="mx-auto h-24 w-auto transition-all duration-300 hover:scale-105 drop-shadow-lg"
            />
          </div>
          
          <h1 className="text-6xl md:text-7xl mb-6">
            <span style={{ color: 'var(--sixth-mind-text)' }}>Sixth</span>
            <span style={{ color: 'var(--sixth-mind-secondary)' }}> Mind</span>
          </h1>
          <h2 
            className="text-2xl md:text-3xl mb-8"
            style={{ color: 'var(--sixth-mind-text-light)' }}
          >
            Transformación Digital para su Empresa
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
            style={{ color: 'var(--sixth-mind-text-light)' }}
          >
            Desarrollamos soluciones tecnológicas innovadoras que impulsan el crecimiento 
            de su negocio. Desde sistemas de gestión automatizados hasta plataformas web 
            personalizadas, transformamos sus procesos empresariales con herramientas 
            modernas y eficientes.
          </p>
          
          <div className="flex justify-center">
            <a 
              href="#foundit"
              className="px-8 py-4 text-lg text-white transition-all hover:scale-105 animate-glow shadow-lg hover:bg-red-500 rounded-lg inline-block"
              style={{ backgroundColor: 'var(--found-it-primary)', textDecoration: 'none' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FF0000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--found-it-primary)';
              }}
            >
              Ver Nuestro Proyecto Found-It
            </a>
          </div>
        </div>
      </div>

      {/* Bottom wave effect for smooth transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg 
          className="relative block w-full h-20" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            style={{ fill: 'var(--sixth-mind-white)' }}
          ></path>
        </svg>
      </div>
    </section>
  );
}