export function Header() {
  return (
    <header 
      className="py-4 px-6 sticky top-0 z-50 shadow-lg backdrop-blur-md border-b"
      style={{ 
        backgroundColor: 'var(--sixth-mind-white)',
        borderBottomColor: 'var(--sixth-mind-cream-dark)'
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img 
            src="/images/Logotipos/sixthMind.png" 
            alt="Sixth Mind Logo" 
            className="h-12 w-auto transition-all duration-300 hover:scale-105 drop-shadow-sm"
          />
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a 
            href="#inicio" 
            className="transition-colors"
            style={{ color: 'var(--sixth-mind-text)' }}
            onMouseOver={(e) => e.target.style.color = 'var(--sixth-mind-secondary)'}
            onMouseOut={(e) => e.target.style.color = 'var(--sixth-mind-text)'}
          >
            Inicio
          </a>
          <a 
            href="#nosotros" 
            className="transition-colors"
            style={{ color: 'var(--sixth-mind-text)' }}
            onMouseOver={(e) => e.target.style.color = 'var(--sixth-mind-secondary)'}
            onMouseOut={(e) => e.target.style.color = 'var(--sixth-mind-text)'}
          >
            Nosotros
          </a>
          <a 
            href="#servicios" 
            className="transition-colors"
            style={{ color: 'var(--sixth-mind-text)' }}
            onMouseOver={(e) => e.target.style.color = 'var(--sixth-mind-secondary)'}
            onMouseOut={(e) => e.target.style.color = 'var(--sixth-mind-text)'}
          >
            Servicios
          </a>
          <a 
            href="#equipo" 
            className="transition-colors"
            style={{ color: 'var(--sixth-mind-text)' }}
            onMouseOver={(e) => e.target.style.color = 'var(--sixth-mind-secondary)'}
            onMouseOut={(e) => e.target.style.color = 'var(--sixth-mind-text)'}
          >
            Equipo
          </a>
          <a 
            href="#foundit"
            className="transition-colors bg-transparent border-0 cursor-pointer"
            style={{ color: 'var(--sixth-mind-text)' }}
            onMouseOver={(e) => e.target.style.color = 'var(--sixth-mind-secondary)'}
            onMouseOut={(e) => e.target.style.color = 'var(--sixth-mind-text)'}
          >
            Found-It
          </a>
        </nav>
      </div>
    </header>
  );
}