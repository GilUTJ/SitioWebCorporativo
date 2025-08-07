import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';

const InteractiveShowcaseSection = () => {
  const [activeCompany, setActiveCompany] = useState('sixthMind');
  const [activeTab, setActiveTab] = useState('services');
  const [activeItem, setActiveItem] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Datos organizados por empresa
  const companyData = {
    sixthMind: {
      services: {
        title: "Servicios Especializados",
        subtitle: "Soluciones personalizadas para cada necesidad empresarial",
        items: [
          {
            id: 1,
            name: "Desarrollo Web Personalizado",
            category: "Desarrollo Frontend/Backend",
            description: "Creamos experiencias web únicas adaptadas a tu marca y objetivos comerciales. Desde sitios corporativos hasta plataformas complejas de comercio electrónico.",
            features: [
              "Diseño responsive optimizado",
              "SEO técnico avanzado",
              "Integración de APIs",
              "Panel de administración",
              "Optimización de rendimiento"
            ],
            technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"]
          },
          {
            id: 2,
            name: "Consultoría en Transformación Digital",
            category: "Estrategia Empresarial",
            description: "Te acompañamos en el proceso de digitalización completa de tu empresa, optimizando procesos y maximizando la eficiencia operacional.",
            features: [
              "Análisis de procesos actuales",
              "Estrategia de implementación",
              "Capacitación de equipos",
              "Soporte post-implementación",
              "ROI medible"
            ],
            technologies: ["Power BI", "Salesforce", "Microsoft 365", "Automation Tools"]
          },
          {
            id: 3,
            name: "Sistemas de Gestión Empresarial",
            category: "Software ERP/CRM",
            description: "Desarrollamos sistemas integrales que centralizan la gestión de tu empresa, desde inventarios hasta relaciones con clientes.",
            features: [
              "Gestión de inventarios",
              "CRM integrado",
              "Reportes en tiempo real",
              "Facturación automática",
              "Módulos personalizables"
            ],
            technologies: ["Laravel", "Vue.js", "MySQL", "Redis", "Docker"]
          },
          {
            id: 4,
            name: "Soluciones de E-commerce",
            category: "Comercio Electrónico",
            description: "Plataformas de venta online robustas y escalables que impulsan tu negocio hacia el éxito en el mundo digital.",
            features: [
              "Catálogo de productos avanzado",
              "Pasarelas de pago múltiples",
              "Gestión de órdenes",
              "Sistema de cupones",
              "Analytics integrado"
            ],
            technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal", "Google Analytics"]
          }
        ]
      },
      technologies: {
        title: "Tecnologías de Vanguardia",
        subtitle: "Herramientas modernas para soluciones innovadoras",
        items: [
          {
            id: 1,
            name: "Inteligencia Artificial",
            category: "Machine Learning & AI",
            description: "Implementamos soluciones de IA para automatizar procesos, analizar datos y mejorar la toma de decisiones empresariales.",
            features: [
              "Procesamiento de lenguaje natural",
              "Análisis predictivo",
              "Chatbots inteligentes",
              "Reconocimiento de imágenes",
              "Automatización de procesos"
            ],
            technologies: ["Python", "TensorFlow", "OpenAI API", "scikit-learn", "Pandas"]
          },
          {
            id: 2,
            name: "Cloud Computing",
            category: "Infraestructura en la Nube",
            description: "Migramos y optimizamos tu infraestructura tecnológica hacia soluciones cloud escalables y seguras.",
            features: [
              "Migración a la nube",
              "Auto-escalado dinámico",
              "Backup automático",
              "Monitoreo 24/7",
              "Optimización de costos"
            ],
            technologies: ["AWS", "Google Cloud", "Azure", "Kubernetes", "Terraform"]
          }
        ]
      }
    },
    foundIt: {
      products: {
        title: "Productos Innovadores",
        subtitle: "Soluciones tecnológicas que transforman industrias",
        items: [
          {
            id: 1,
            name: "Sistema IoT Industriales",
            category: "Internet de las Cosas",
            description: "Plataforma completa para monitoreo y control de dispositivos IoT en entornos industriales, optimizando la eficiencia operacional.",
            features: [
              "Monitoreo en tiempo real",
              "Alertas automáticas",
              "Dashboard personalizable",
              "Integración con sensores",
              "Análisis de tendencias"
            ],
            technologies: ["Arduino", "Raspberry Pi", "MQTT", "InfluxDB", "Grafana"]
          },
          {
            id: 2,
            name: "Plataforma de Tracking",
            category: "Geolocalización",
            description: "Sistema avanzado de rastreo y localización para optimizar rutas logísticas y mejorar la seguridad de activos móviles.",
            features: [
              "GPS en tiempo real",
              "Geofencing inteligente",
              "Reportes de rutas",
              "Alertas de seguridad",
              "Optimización logística"
            ],
            technologies: ["React Native", "Google Maps API", "Socket.io", "MongoDB"]
          },
          {
            id: 3,
            name: "App de Gestión de Inventarios",
            category: "Gestión Empresarial",
            description: "Aplicación móvil para el control eficiente de inventarios con escaneo de códigos y sincronización en la nube.",
            features: [
              "Escaneo de códigos QR/Barras",
              "Sincronización offline",
              "Alertas de stock bajo",
              "Reportes automáticos",
              "Multi-almacén"
            ],
            technologies: ["Flutter", "Firebase", "SQLite", "Barcode Scanner"]
          }
        ]
      }
    }
  };

  // Obtener sección y item actuales
  const currentSection = companyData[activeCompany as keyof typeof companyData][activeTab as keyof typeof companyData[keyof typeof companyData]];
  const currentItem = currentSection.items[activeItem];

  // Función para cambiar item con animación
  const changeItem = (newItem: number) => {
    if (newItem >= 0 && newItem < currentSection.items.length && newItem !== activeItem) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveItem(newItem);
        setIsTransitioning(false);
      }, 150);
    }
  };

  // Función para cambiar tab
  const changeTab = (newTab: string) => {
    if (newTab !== activeTab) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveTab(newTab);
        setActiveItem(0);
        setIsTransitioning(false);
      }, 150);
    }
  };

  // Función para cambiar empresa
  const changeCompany = (newCompany: string) => {
    if (newCompany !== activeCompany) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveCompany(newCompany);
        setActiveTab(Object.keys(companyData[newCompany as keyof typeof companyData])[0]);
        setActiveItem(0);
        setIsTransitioning(false);
      }, 200);
    }
  };

  return (
    <section className="min-h-screen bg-[var(--sixth-mind-background)] text-white flex flex-col">
      {/* Header con selector de empresa */}
      <div className="bg-gradient-to-r from-[var(--sixth-mind-primary)] to-[var(--sixth-mind-secondary)] p-6 text-center border-b-4 border-[var(--sixth-mind-accent)]">
        <h1 className="text-4xl font-bold mb-4">Exploración Interactiva</h1>
        <p className="text-xl opacity-90 mb-6">Descubre nuestros servicios y tecnologías con navegación intuitiva</p>
        
        {/* Divisor de empresas */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => changeCompany('sixthMind')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 border-2 ${
              activeCompany === 'sixthMind'
                ? 'bg-white text-[var(--sixth-mind-primary)] border-white'
                : 'bg-transparent text-white border-white/50 hover:border-white'
            }`}
          >
            <img src="/images/Logotipos/sixthMind.png" alt="Sixth Mind" className="h-6 inline mr-2" />
            Sixth Mind
          </button>
          <button
            onClick={() => changeCompany('foundIt')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 border-2 ${
              activeCompany === 'foundIt'
                ? 'bg-[var(--found-it-primary)] text-white border-[var(--found-it-primary)]'
                : 'bg-transparent text-white border-white/50 hover:border-white'
            }`}
          >
            <img src="/images/Logotipos/found-it.png" alt="Found-It" className="h-6 inline mr-2" />
            Found-It
          </button>
        </div>
      </div>

      {/* Marcador de página actual */}
      <div className="bg-black/20 py-3 px-6 border-b border-white/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${
              activeCompany === 'sixthMind' 
                ? 'bg-[var(--sixth-mind-accent)]' 
                : 'bg-[var(--found-it-accent)]'
            }`}></div>
            <span className="text-lg font-medium">
              {activeCompany === 'sixthMind' ? 'Sixth Mind' : 'Found-It'} / 
              {currentSection.title} / 
              Item {activeItem + 1} de {currentSection.items.length}
            </span>
          </div>
          <div className="flex gap-2">
            {currentSection.items.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeItem 
                    ? activeCompany === 'sixthMind' 
                      ? 'bg-[var(--sixth-mind-accent)]' 
                      : 'bg-[var(--found-it-accent)]'
                    : 'bg-white/30'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="flex-1 flex">
        {/* Sidebar de navegación */}
        <div className="w-80 bg-black/30 border-r border-white/20 p-6">
          {/* Tabs de sección */}
          <div className="mb-6">
            {Object.entries(companyData[activeCompany as keyof typeof companyData]).map(([key, section]) => (
              <button
                key={key}
                onClick={() => changeTab(key)}
                className={`w-full text-left p-4 rounded-lg mb-2 transition-all duration-300 border-l-4 ${
                  activeTab === key
                    ? activeCompany === 'sixthMind'
                      ? 'bg-[var(--sixth-mind-primary)]/20 border-[var(--sixth-mind-accent)] text-[var(--sixth-mind-accent)]'
                      : 'bg-[var(--found-it-primary)]/20 border-[var(--found-it-accent)] text-[var(--found-it-accent)]'
                    : 'bg-transparent border-transparent text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                <div className="font-semibold text-lg">{section.title}</div>
                <div className="text-sm opacity-75">{section.items.length} elementos</div>
              </button>
            ))}
          </div>

          {/* Lista de items */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold mb-3 text-white/80">Elementos disponibles:</h3>
            {currentSection.items.map((item, index) => (
              <button
                key={index}
                onClick={() => changeItem(index)}
                className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                  activeItem === index
                    ? activeCompany === 'sixthMind'
                      ? 'bg-[var(--sixth-mind-accent)] text-black'
                      : 'bg-[var(--found-it-accent)] text-black'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <div className="font-medium">{item.name}</div>
                <div className="text-sm opacity-75">{item.category}</div>
              </button>
            ))}
          </div>

          {/* Navegación por flechas */}
          <div className="mt-6 flex justify-between">
            <button
              onClick={() => changeItem(activeItem - 1)}
              disabled={activeItem === 0}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <span>←</span>
              <span>Anterior</span>
            </button>
            <button
              onClick={() => changeItem(activeItem + 1)}
              disabled={activeItem === currentSection.items.length - 1}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <span>Siguiente</span>
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Área de contenido principal */}
        <div className="flex-1 p-8">
          <Card className={`h-full bg-gradient-to-br ${
            activeCompany === 'sixthMind'
              ? 'from-[var(--sixth-mind-primary)]/10 to-[var(--sixth-mind-secondary)]/10 border-[var(--sixth-mind-accent)]/30'
              : 'from-[var(--found-it-primary)]/10 to-[var(--found-it-secondary)]/10 border-[var(--found-it-accent)]/30'
          } border-2 transition-all duration-500 ${
            isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}>
            <CardContent className="p-8 h-full flex flex-col">
              {/* Header del item */}
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${
                    activeCompany === 'sixthMind'
                      ? 'bg-[var(--sixth-mind-accent)] text-black'
                      : 'bg-[var(--found-it-accent)] text-black'
                  }`}>
                    {currentItem.name.charAt(0)}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">{currentItem.name}</h2>
                    <p className={`text-lg ${
                      activeCompany === 'sixthMind'
                        ? 'text-[var(--sixth-mind-accent)]'
                        : 'text-[var(--found-it-accent)]'
                    }`}>
                      {currentItem.category}
                    </p>
                  </div>
                </div>
              </div>

              {/* Descripción */}
              <div className="mb-6">
                <p className="text-lg text-white/90 leading-relaxed">
                  {currentItem.description}
                </p>
              </div>

              {/* Características técnicas */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-4">Características Técnicas:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentItem.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10"
                    >
                      <div className={`w-2 h-2 rounded-full ${
                        activeCompany === 'sixthMind'
                          ? 'bg-[var(--sixth-mind-accent)]'
                          : 'bg-[var(--found-it-accent)]'
                      }`}></div>
                      <span className="text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tecnologías utilizadas */}
              <div className="mt-auto">
                <h3 className="text-xl font-semibold text-white mb-4">Tecnologías Utilizadas:</h3>
                <div className="flex flex-wrap gap-2">
                  {currentItem.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        activeCompany === 'sixthMind'
                          ? 'bg-[var(--sixth-mind-accent)]/20 text-[var(--sixth-mind-accent)] border border-[var(--sixth-mind-accent)]/30'
                          : 'bg-[var(--found-it-accent)]/20 text-[var(--found-it-accent)] border border-[var(--found-it-accent)]/30'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer con información de navegación */}
      <div className="bg-black/30 p-4 border-t border-white/20 text-center">
        <p className="text-white/70">
          Navega con las flechas laterales o selecciona directamente desde el menú • 
          <span className={activeCompany === 'sixthMind' ? 'text-[var(--sixth-mind-accent)]' : 'text-[var(--found-it-accent)]'}>
            {activeCompany === 'sixthMind' ? 'Sixth Mind' : 'Found-It'}
          </span>
        </p>
      </div>
    </section>
  );
};

export default InteractiveShowcaseSection;
