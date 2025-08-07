import { Card, CardContent } from "./ui/card";
import { useState } from "react";

export function FoundItIntegratedSection() {
  const [hoveredProblem, setHoveredProblem] = useState<number | null>(null);
  const [hoveredRequirement, setHoveredRequirement] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hoveredClient, setHoveredClient] = useState<number | null>(null);

  // Problemas que resolvemos - DINÁMICO/MODO LISTA
  const problemsToSolve = [
    {
      id: 1,
      title: "Pérdidas de tiempo en la búsqueda de materiales",
      description: "Los empleados invierten horas localizando materiales en almacenes desorganizados",
      impact: "Reducción significativa en tiempo de búsqueda",
      icon: "⏱️"
    },
    {
      id: 2,
      title: "Errores humanos en conteo y localización",
      description: "Inexactitudes en inventarios por procesos manuales propensos a errores",
      impact: "Alta precisión en operaciones",
      icon: "❌"
    }
  ];

  // ¿Quién es nuestro cliente? - CON IMÁGENES
  const targetClients = [
    {
      id: 1,
      title: "PyMEs industriales o logísticas",
      description: "Pequeñas y medianas empresas del sector industrial y logístico que buscan optimizar sus procesos",
      icon: "🏭",
      color: "var(--found-it-ound-blue)"
    },
    {
      id: 2,
      title: "Centros de distribución",
      description: "Almacenes y centros de distribución que manejan grandes volúmenes de mercancía",
      icon: "📦",
      color: "var(--found-it-it-red)"
    },
    {
      id: 3,
      title: "Escuelas o laboratorios con zonas restringidas",
      description: "Instituciones educativas y laboratorios que requieren control de acceso a materiales específicos",
      icon: "🔬",
      color: "var(--found-it-f-dark)"
    },
    {
      id: 4,
      title: "Empresas que buscan modernizar su almacén sin inversiones elevadas",
      description: "Organizaciones que desean digitalizar sus operaciones con presupuestos controlados",
      icon: "💡",
      color: "var(--found-it-ound-blue)"
    }
  ];

  // Requerimientos clave del cliente - DINÁMICO/MODO LISTA con PAGINACIÓN
  const keyRequirements = [
    {
      id: 1,
      category: "Funcionalidad",
      requirement: "Sistema de localización de materiales",
      status: "✅ Implementado",
      priority: "Crítico",
      description: "Capacidad de encontrar materiales específicos en tiempo real utilizando tecnología IoT."
    },
    {
      id: 2,
      category: "Usabilidad",
      requirement: "Interfaz intuitiva que no requiera capacitación extensiva",
      status: "✅ Implementado",
      priority: "Medio",
      description: "Diseño user-friendly que permite a cualquier empleado usar el sistema con poco entrenamiento previo."
    },
    {
      id: 3,
      category: "Escalabilidad",
      requirement: "Capacidad de expandirse a múltiples almacenes",
      status: "✅ Implementado",
      priority: "Medio",
      description: "Arquitectura modular que permite crecer desde un almacén hasta operaciones multinacionales."
    },
    {
      id: 4,
      category: "Seguridad",
      requirement: "Control de acceso por roles y usuarios",
      status: "✅ Implementado",
      priority: "Crítico",
      description: "Sistema robusto de autenticación y autorización con diferentes niveles de acceso según el rol del usuario."
    },
    {
      id: 5,
      category: "Movilidad",
      requirement: "Acceso desde dispositivos móviles",
      status: "✅ Implementado",
      priority: "Alto",
      description: "Aplicación móvil nativa para iOS y Android con sincronización en tiempo real."
    },
    {
      id: 6,
      category: "Notificaciones",
      requirement: "Alertas automáticas de stock bajo",
      status: "✅ Implementado",
      priority: "Alto",
      description: "Sistema inteligente de notificaciones vía email, SMS y push notifications."
    }
  ];

  // Configuración del paginador
  const requirementsPerPage = 3;
  const problemsPerPage = 2;
  const totalPages = Math.ceil(keyRequirements.length / requirementsPerPage);
  const currentRequirements = keyRequirements.slice(
    currentPage * requirementsPerPage,
    (currentPage + 1) * requirementsPerPage
  );
  const currentProblems = problemsToSolve.slice(
    currentPage * problemsPerPage,
    (currentPage + 1) * problemsPerPage
  );

  // Función para cambiar página con animación
  const changePage = (newPage: number) => {
    if (newPage >= 0 && newPage < totalPages && newPage !== currentPage) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(newPage);
        setIsTransitioning(false);
      }, 150);
    }
  };

  return (
    <section 
      id="foundit" 
      className="py-20 relative overflow-hidden"
      style={{ 
        background: `linear-gradient(135deg, var(--found-it-white) 0%, var(--found-it-bg-light) 50%, var(--found-it-white) 100%)` 
      }}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="mb-8">
            <img 
              src="/images/Logotipos/found-it.png" 
              alt="Found-It Logo" 
              className="mx-auto h-20 w-auto transition-all duration-300 hover:scale-105 drop-shadow-lg"
            />
          </div>
          
          <h1 
            className="text-6xl md:text-7xl mb-6 bg-gradient-to-r from-blue-600 via-red-500 to-purple-600 bg-clip-text text-transparent"
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
          
          <h2 
            className="text-3xl md:text-4xl mb-8"
            style={{ color: 'var(--found-it-software-black)' }}
          >
            Sistema Integral de Gestión de Inventarios
          </h2>
          
          <p 
            className="text-xl max-w-4xl mx-auto leading-relaxed"
            style={{ color: 'var(--found-it-software-black)', opacity: 0.8 }}
          >
            Nuestra solución insignia que revoluciona la gestión de inventarios empresariales 
            mediante la integración de tecnología web avanzada con dispositivos inteligentes IoT.
          </p>
        </div>

        {/* ¿Quién es nuestro cliente? - CON IMÁGENES */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 
              className="text-4xl mb-6"
              style={{ color: 'var(--found-it-software-black)' }}
            >
              ¿Quién es nuestro cliente?
            </h3>
            <div 
              className="w-32 h-1 mx-auto mb-6"
              style={{ 
                background: `linear-gradient(90deg, 
                  var(--found-it-f-dark) 0%, 
                  var(--found-it-ound-blue) 50%, 
                  var(--found-it-it-red) 100%)`
              }}
            ></div>
            <p 
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--found-it-software-black)', opacity: 0.7 }}
            >
              Nuestros clientes ideales son organizaciones que buscan modernizar sus operaciones
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetClients.map((client, index) => (
              <div
                key={client.id}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredClient(index)}
                onMouseLeave={() => setHoveredClient(null)}
              >
                <Card 
                  className={`
                    h-full border-0 shadow-lg transition-all duration-300
                    ${hoveredClient === index ? 'shadow-xl' : 'hover:shadow-lg'}
                    bg-white/95 backdrop-blur-sm
                  `}
                  style={{ 
                    borderTop: `4px solid ${client.color}`,
                    boxShadow: hoveredClient === index 
                      ? `0 8px 20px ${client.color}15` 
                      : '0 4px 15px rgba(0,0,0,0.1)'
                  }}
                >
                  <CardContent className="p-6 text-center relative">
                    {/* Background animado cuando hover - MÁS TRANSPARENTE */}
                    <div 
                      className={`
                        absolute inset-0 rounded-lg transition-opacity duration-300
                        ${hoveredClient === index ? 'opacity-5' : 'opacity-0'}
                      `}
                      style={{ backgroundColor: client.color }}
                    />
                    
                    <div className="relative z-10">
                      <div 
                        className={`
                          text-5xl mb-4 transition-all duration-300
                          ${hoveredClient === index ? 'scale-105' : ''}
                        `}
                      >
                        {client.icon}
                      </div>
                      
                      <h4 
                        className="text-lg mb-3 font-semibold leading-tight transition-colors duration-500"
                        style={{ 
                          color: hoveredClient === index 
                            ? client.color
                            : 'var(--found-it-software-black)'
                        }}
                      >
                        {client.title}
                      </h4>
                      
                      <p 
                        className="text-sm leading-relaxed"
                        style={{ color: 'var(--found-it-software-black)', opacity: 0.7 }}
                      >
                        {client.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Divisor visual entre secciones */}
        <div className="relative mb-20">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-white px-6 py-3 rounded-full shadow-lg border-2" style={{ borderColor: 'var(--found-it-primary)' }}>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--found-it-ound-blue)' }}></div>
                <span className="text-sm font-medium" style={{ color: 'var(--found-it-software-black)' }}>Análisis de Problemática</span>
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--found-it-it-red)' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Cliente - Problemática */}
        <div className="mb-32">
          <div className="max-w-6xl mx-auto">
            <Card className="border-0 shadow-2xl overflow-hidden bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12 relative">
                {/* Background decorativo */}
                <div 
                  className="absolute top-0 left-0 w-full h-2"
                  style={{ 
                    background: `linear-gradient(90deg, 
                      var(--found-it-f-dark) 0%, 
                      var(--found-it-ound-blue) 50%, 
                      var(--found-it-it-red) 100%)`
                  }}
                ></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <h3 
                      className="text-4xl mb-6"
                      style={{ color: 'var(--found-it-software-black)' }}
                    >
                      Cliente - Problemática
                    </h3>
                    <div 
                      className="w-32 h-1 mx-auto mb-6"
                      style={{ 
                        background: `linear-gradient(90deg, 
                          var(--found-it-ound-blue) 0%, 
                          var(--found-it-it-red) 50%, 
                          var(--found-it-f-dark) 100%)`
                      }}
                    ></div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                      <div 
                        className="text-6xl mb-6 text-center md:text-left"
                        style={{ color: 'var(--found-it-ound-blue)' }}
                      >
                        🏭
                      </div>
                      <h4 
                        className="text-2xl mb-4 text-center md:text-left"
                        style={{ color: 'var(--found-it-software-black)' }}
                      >
                        Industria 4.0
                      </h4>
                      <div 
                        className="w-16 h-1 mx-auto md:mx-0 mb-4"
                        style={{ backgroundColor: 'var(--found-it-it-red)' }}
                      ></div>
                    </div>

                    <div className="order-1 md:order-2">
                      <p 
                        className="text-lg leading-relaxed text-center md:text-left"
                        style={{ color: 'var(--found-it-software-black)', lineHeight: '1.8' }}
                      >
                        En la era de la <strong>Industria 4.0</strong>, la eficiencia logística y la digitalización de procesos son 
                        fundamentales para que las empresas se mantengan competitivas. <strong>Found-IT!</strong> es una solución 
                        integral que fusiona tecnologías <strong>IoT</strong> con software responsivo, permitiendo transformar 
                        almacenes tradicionales en espacios inteligentes, organizados y trazables en tiempo real.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Divisor visual entre secciones */}
        <div className="relative mb-20">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-white px-6 py-3 rounded-full shadow-lg border-2" style={{ borderColor: 'var(--found-it-primary)' }}>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--found-it-primary)' }}></div>
                <span className="text-sm font-medium" style={{ color: 'var(--found-it-software-black)' }}>Solución Propuesta</span>
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--found-it-it-red)' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Solución - ¿Qué hacemos? */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h3 
              className="text-4xl mb-6"
              style={{ color: 'var(--found-it-software-black)' }}
            >
              Solución
            </h3>
            <div 
              className="w-32 h-1 mx-auto mb-6"
              style={{ 
                background: `linear-gradient(90deg, 
                  var(--found-it-it-red) 0%, 
                  var(--found-it-f-dark) 50%, 
                  var(--found-it-ound-blue) 100%)`
              }}
            ></div>
            <h4 
              className="text-2xl mb-8"
              style={{ color: 'var(--found-it-software-black)', opacity: 0.8 }}
            >
              ¿Qué hacemos?
            </h4>
            <p 
              className="text-lg max-w-3xl mx-auto mb-8"
              style={{ color: 'var(--found-it-software-black)', opacity: 0.7 }}
            >
              Found-IT! ofrece una solución modular y escalable compuesta por:
            </p>
          </div>

          {/* 1. Dispositivo IoT (Hardware) */}
          <div className="mb-16">
            <Card className="border-0 shadow-2xl overflow-hidden bg-white/95 backdrop-blur-sm max-w-5xl mx-auto">
              <CardContent className="p-8 relative">
                <div 
                  className="absolute top-0 left-0 w-full h-2"
                  style={{ backgroundColor: 'var(--found-it-ound-blue)' }}
                ></div>
                
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="flex items-center mb-6">
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-4"
                        style={{ backgroundColor: 'var(--found-it-ound-blue)' }}
                      >
                        1
                      </div>
                      <h4 
                        className="text-2xl font-semibold"
                        style={{ color: 'var(--found-it-software-black)' }}
                      >
                        Dispositivo IoT (Hardware)
                      </h4>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: 'var(--found-it-ound-blue)' }}
                        ></div>
                        <span 
                          className="text-base"
                          style={{ color: 'var(--found-it-software-black)' }}
                        >
                          <strong>ESP32</strong> con conectividad WiFi
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: 'var(--found-it-it-red)' }}
                        ></div>
                        <span 
                          className="text-base"
                          style={{ color: 'var(--found-it-software-black)' }}
                        >
                          <strong>12 LEDs rojos</strong> (Pick to Light)
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: 'var(--found-it-f-dark)' }}
                        ></div>
                        <span 
                          className="text-base"
                          style={{ color: 'var(--found-it-software-black)' }}
                        >
                          <strong>Sensor DHT11</strong> para temperatura/humedad
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: 'var(--found-it-ound-blue)' }}
                        ></div>
                        <span 
                          className="text-base"
                          style={{ color: 'var(--found-it-software-black)' }}
                        >
                          <strong>Servomotor SG90</strong> para control de acceso
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="order-1 lg:order-2">
                    <Card className="border-0 shadow-lg overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                      <CardContent className="p-8 text-center">
                        <div 
                          className="text-8xl mb-4"
                          style={{ color: 'var(--found-it-ound-blue)' }}
                        >
                          🔧
                        </div>
                        <h5 
                          className="text-xl mb-2"
                          style={{ color: 'var(--found-it-software-black)' }}
                        >
                          Hardware IoT
                        </h5>
                        <p 
                          className="text-sm"
                          style={{ color: 'var(--found-it-software-black)', opacity: 0.7 }}
                        >
                          IMAGEN DEL DISPOSITIVO<br/>
                          ESP32 + LEDs + Sensores
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 2. Software Integrado */}
          <div className="mb-16">
            <Card className="border-0 shadow-2xl overflow-hidden bg-white/95 backdrop-blur-sm max-w-6xl mx-auto">
              <CardContent className="p-8 relative">
                <div 
                  className="absolute top-0 left-0 w-full h-2"
                  style={{ backgroundColor: 'var(--found-it-it-red)' }}
                ></div>
                
                <div className="mb-8">
                  <div className="flex items-center mb-6">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-4"
                      style={{ backgroundColor: 'var(--found-it-it-red)' }}
                    >
                      2
                    </div>
                    <h4 
                      className="text-2xl font-semibold"
                      style={{ color: 'var(--found-it-software-black)' }}
                    >
                      Software Integrado
                    </h4>
                  </div>
                </div>

                {/* Mockups Web y Móvil */}
                <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
                  <div>
                    <Card className="border-0 shadow-lg overflow-hidden bg-white">
                      <CardContent className="p-0">
                        <div 
                          className="h-64 bg-gradient-to-br flex items-center justify-center"
                          style={{ 
                            background: `linear-gradient(135deg, 
                              var(--found-it-bg-light) 0%, 
                              var(--found-it-accent-light) 100%)`
                          }}
                        >
                          <div className="text-center">
                            <div 
                              className="text-6xl mb-4"
                              style={{ color: 'var(--found-it-ound-blue)' }}
                            >
                              💻
                            </div>
                            <h5 
                              className="text-xl mb-2"
                              style={{ color: 'var(--found-it-software-black)' }}
                            >
                              MOCKUP WEB
                            </h5>
                            <p 
                              className="text-sm"
                              style={{ color: 'var(--found-it-software-black)', opacity: 0.7 }}
                            >
                              Laravel + Tailwind CSS
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <Card className="border-0 shadow-lg overflow-hidden bg-white max-w-sm mx-auto">
                      <CardContent className="p-0">
                        <div 
                          className="h-64 bg-gradient-to-br flex items-center justify-center"
                          style={{ 
                            background: `linear-gradient(135deg, 
                              var(--found-it-accent-light) 0%, 
                              var(--found-it-bg-light) 100%)`
                          }}
                        >
                          <div className="text-center px-4">
                            <div 
                              className="text-5xl mb-4"
                              style={{ color: 'var(--found-it-it-red)' }}
                            >
                              📱
                            </div>
                            <h5 
                              className="text-lg mb-2"
                              style={{ color: 'var(--found-it-software-black)' }}
                            >
                              MOCKUP MÓVIL
                            </h5>
                            <p 
                              className="text-sm"
                              style={{ color: 'var(--found-it-software-black)', opacity: 0.7 }}
                            >
                              Angular + Tailwind CSS
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Descripción técnica */}
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="border-0 shadow-md bg-gradient-to-br from-blue-50 to-blue-100">
                    <CardContent className="p-6">
                      <h5 
                        className="text-lg mb-3 font-semibold"
                        style={{ color: 'var(--found-it-ound-blue)' }}
                      >
                        App Web (Laravel)
                      </h5>
                      <p 
                        className="text-sm leading-relaxed"
                        style={{ color: 'var(--found-it-software-black)', opacity: 0.8 }}
                      >
                        Gestión de usuarios, almacenes, estantes y materiales. Exportación de reportes, 
                        configuración de sensores, umbrales de stock.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md bg-gradient-to-br from-red-50 to-red-100">
                    <CardContent className="p-6">
                      <h5 
                        className="text-lg mb-3 font-semibold"
                        style={{ color: 'var(--found-it-it-red)' }}
                      >
                        API REST (Node.js)
                      </h5>
                      <p 
                        className="text-sm leading-relaxed"
                        style={{ color: 'var(--found-it-software-black)', opacity: 0.8 }}
                      >
                        Comunicación entre frontend, dispositivos IoT y base de datos con Express.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md bg-gradient-to-br from-gray-50 to-gray-100">
                    <CardContent className="p-6">
                      <h5 
                        className="text-lg mb-3 font-semibold"
                        style={{ color: 'var(--found-it-f-dark)' }}
                      >
                        Base de Datos
                      </h5>
                      <p 
                        className="text-sm leading-relaxed"
                        style={{ color: 'var(--found-it-software-black)', opacity: 0.8 }}
                      >
                        MongoDB Atlas: Registro de movimientos, accesos, datos ambientales y logs.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* App Móvil features */}
                <div className="mt-8 p-6 rounded-lg" style={{ backgroundColor: 'var(--found-it-bg-light)' }}>
                  <h5 
                    className="text-lg mb-4 font-semibold text-center"
                    style={{ color: 'var(--found-it-software-black)' }}
                  >
                    Características de la App Móvil (Angular + Tailwind CSS)
                  </h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--found-it-it-red)' }}></div>
                      <span className="text-sm" style={{ color: 'var(--found-it-software-black)' }}>
                        Registro de entradas y salidas de materiales
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--found-it-ound-blue)' }}></div>
                      <span className="text-sm" style={{ color: 'var(--found-it-software-black)' }}>
                        Activación remota del sistema Pick to Light
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--found-it-f-dark)' }}></div>
                      <span className="text-sm" style={{ color: 'var(--found-it-software-black)' }}>
                        Consulta del historial de operaciones
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--found-it-it-red)' }}></div>
                      <span className="text-sm" style={{ color: 'var(--found-it-software-black)' }}>
                        Control de acceso físico (administradores)
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--found-it-ound-blue)' }}></div>
                      <span className="text-sm" style={{ color: 'var(--found-it-software-black)' }}>
                        Visualización de temperatura y humedad en tiempo real
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Video/Animación del funcionamiento */}
          <div className="mb-16">
            <Card className="border-0 shadow-2xl overflow-hidden bg-white max-w-4xl mx-auto">
              <CardContent className="p-0">
                <div 
                  className="h-80 bg-gradient-to-br flex items-center justify-center relative"
                  style={{ 
                    background: `linear-gradient(135deg, 
                      var(--found-it-f-dark) 0%, 
                      var(--found-it-ound-blue) 50%, 
                      var(--found-it-it-red) 100%)`
                  }}
                >
                  <div className="text-center text-white">
                    <div className="text-8xl mb-6 animate-pulse">▶️</div>
                    <h4 className="text-3xl mb-4">VIDEO CORTO O ANIMACIÓN</h4>
                    <p className="text-lg opacity-90 max-w-2xl">
                      Funcionamiento completo del sistema Found-IT!<br/>
                      (En caso de que no funcione se muestra aquí)
                    </p>
                    <button 
                      className="mt-6 px-8 py-3 bg-white text-black rounded-lg font-semibold hover:scale-105 transition-transform"
                    >
                      ▶️ Ver Demostración
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Divisor visual entre secciones */}
          <div className="relative mb-20">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-white px-6 py-3 rounded-full shadow-lg border-2" style={{ borderColor: 'var(--found-it-primary)' }}>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--found-it-ound-blue)' }}></div>
                  <span className="text-sm font-medium" style={{ color: 'var(--found-it-software-black)' }}>Flujo de Procesos</span>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--found-it-it-red)' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Proceso de flujo */}
          <div>
            <Card className="border-0 shadow-2xl overflow-hidden bg-white/95 backdrop-blur-sm max-w-6xl mx-auto">
              <CardContent className="p-8 relative">
                <div 
                  className="absolute top-0 left-0 w-full h-2"
                  style={{ 
                    background: `linear-gradient(90deg, 
                      var(--found-it-ound-blue) 0%, 
                      var(--found-it-it-red) 50%, 
                      var(--found-it-f-dark) 100%)`
                  }}
                ></div>

                <div className="text-center mb-8">
                  <h4 
                    className="text-3xl mb-4"
                    style={{ color: 'var(--found-it-software-black)' }}
                  >
                    Proceso de Flujo
                  </h4>
                  <p 
                    className="text-lg"
                    style={{ color: 'var(--found-it-it-red)', fontWeight: 'bold' }}
                  >
                  </p>
                </div>

                {/* Flujo paso a paso */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {[
                    { step: 1, title: "Configuración", desc: "El administrador configura usuarios y almacenes desde la app web", icon: "⚙️" },
                    { step: 2, title: "Operación Móvil", desc: "El operador realiza entradas y salidas de materiales desde su móvil", icon: "📱" },
                    { step: 3, title: "Pick to Light", desc: "Al buscar un material, el LED correspondiente se ilumina", icon: "💡" },
                    { step: 4, title: "Monitoreo", desc: "Los sensores capturan temperatura y humedad del entorno", icon: "🌡️" },
                    { step: 5, title: "Control de Acceso", desc: "Zonas restringidas controladas vía servomotor y autenticación", icon: "🔐" },
                    { step: 6, title: "Registro", desc: "Todo queda registrado en tiempo real en MongoDB", icon: "💾" }
                  ].map((item, index) => (
                    <Card key={item.step} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 text-center">
                        <div 
                          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4"
                          style={{ 
                            backgroundColor: index % 3 === 0 ? 'var(--found-it-ound-blue)' : 
                                            index % 3 === 1 ? 'var(--found-it-it-red)' : 'var(--found-it-f-dark)'
                          }}
                        >
                          {item.step}
                        </div>
                        <div className="text-3xl mb-3">{item.icon}</div>
                        <h5 
                          className="text-lg mb-3 font-semibold"
                          style={{ color: 'var(--found-it-software-black)' }}
                        >
                          {item.title}
                        </h5>
                        <p 
                          className="text-sm leading-relaxed"
                          style={{ color: 'var(--found-it-software-black)', opacity: 0.7 }}
                        >
                          {item.desc}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Divisor visual entre secciones */}
        <div className="relative mb-20">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-white px-6 py-3 rounded-full shadow-lg border-2" style={{ borderColor: 'var(--found-it-primary)' }}>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--found-it-f-dark)' }}></div>
                <span className="text-sm font-medium" style={{ color: 'var(--found-it-software-black)' }}>Resolución de Problemas</span>
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--found-it-primary)' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Problemas que Resolvemos - DINÁMICO/MODO LISTA */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h3 
              className="text-4xl mb-6"
              style={{ color: 'var(--found-it-software-black)' }}
            >
              Problemas que Resolvemos
            </h3>
            <div 
              className="w-32 h-1 mx-auto mb-6"
              style={{ 
                background: `linear-gradient(90deg, 
                  var(--found-it-f-dark) 0%, 
                  var(--found-it-ound-blue) 50%, 
                  var(--found-it-it-red) 100%)`
              }}
            ></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {currentProblems.map((problem, index) => (
              <div
                key={problem.id}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredProblem(index)}
                onMouseLeave={() => setHoveredProblem(null)}
              >
                <Card 
                  className={`
                    h-full border-0 shadow-lg transition-all duration-300
                    ${hoveredProblem === index ? 'shadow-xl' : 'hover:shadow-lg'}
                    bg-white/90 backdrop-blur-sm
                  `}
                  style={{ 
                    borderLeft: `4px solid ${index % 2 === 0 ? 'var(--found-it-ound-blue)' : 'var(--found-it-it-red)'}`,
                    boxShadow: hoveredProblem === index 
                      ? `0 8px 20px ${index % 2 === 0 ? 'var(--found-it-ound-blue)' : 'var(--found-it-it-red)'}15` 
                      : '0 4px 15px rgba(0,0,0,0.1)'
                  }}
                >
                  <CardContent className="p-6 relative">
                    <div 
                      className={`
                        absolute inset-0 rounded-lg transition-opacity duration-300
                        ${hoveredProblem === index ? 'opacity-5' : 'opacity-0'}
                      `}
                      style={{ 
                        backgroundColor: index % 2 === 0 ? 'var(--found-it-ound-blue)' : 'var(--found-it-it-red)'
                      }}
                    />
                    
                    <div className="relative z-10">
                      <div 
                        className={`
                          text-4xl mb-4 transition-all duration-300
                          ${hoveredProblem === index ? 'scale-105' : ''}
                        `}
                      >
                        {problem.icon}
                      </div>
                      
                      <h4 
                        className="text-xl mb-3 transition-colors duration-500"
                        style={{ 
                          color: hoveredProblem === index 
                            ? (index % 2 === 0 ? 'var(--found-it-ound-blue)' : 'var(--found-it-it-red)')
                            : 'var(--found-it-software-black)'
                        }}
                      >
                        {problem.title}
                      </h4>
                      
                      <p 
                        className="text-base mb-4 leading-relaxed"
                        style={{ color: 'var(--found-it-software-black)', opacity: 0.7 }}
                      >
                        {problem.description}
                      </p>
                      
                      <div 
                        className="inline-block px-3 py-1 rounded-full text-sm font-semibold"
                        style={{ 
                          backgroundColor: index % 2 === 0 ? 'var(--found-it-ound-blue)' : 'var(--found-it-it-red)',
                          color: 'white'
                        }}
                      >
                        💡 {problem.impact}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Divisor visual entre secciones */}
        <div className="relative mb-20">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-white px-6 py-3 rounded-full shadow-lg border-2" style={{ borderColor: 'var(--found-it-primary)' }}>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--found-it-it-red)' }}></div>
                <span className="text-sm font-medium" style={{ color: 'var(--found-it-software-black)' }}>Especificaciones Técnicas</span>
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--found-it-ound-blue)' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Requerimientos Clave del Cliente - DINÁMICO/MODO LISTA CON PAGINADOR */}
        <div className="mb-32">
          <div className="text-center mb-8">
            <h3 
              className="text-4xl mb-6"
              style={{ color: 'var(--found-it-software-black)' }}
            >
              Requerimientos Clave del Cliente
            </h3>
            <div 
              className="w-32 h-1 mx-auto mb-6"
              style={{ 
                background: `linear-gradient(90deg, 
                  var(--found-it-it-red) 0%, 
                  var(--found-it-f-dark) 50%, 
                  var(--found-it-ound-blue) 100%)`
              }}
            ></div>
            <p 
              className="text-lg max-w-2xl mx-auto mb-6"
              style={{ color: 'var(--found-it-software-black)', opacity: 0.7 }}
            >
              Navegue a través de los requerimientos implementados en Found-It
            </p>

            {/* Progress bar */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-64 bg-gray-200 rounded-full h-2">
                <div 
                  className="h-2 rounded-full transition-all duration-500"
                  style={{
                    background: `linear-gradient(90deg, 
                      var(--found-it-f-dark) 0%, 
                      var(--found-it-ound-blue) 50%, 
                      var(--found-it-it-red) 100%)`,
                    width: `${((currentPage + 1) / totalPages) * 100}%`
                  }}
                ></div>
              </div>
              <p 
                className="text-xs font-semibold whitespace-nowrap"
                style={{ color: 'var(--found-it-software-black)', opacity: 0.6 }}
              >
                {currentPage + 1}/{totalPages}
              </p>
            </div>
          </div>

          {/* Contenedor con flechas integradas */}
          <div className="relative max-w-7xl mx-auto">
            <div className="relative min-h-[450px] bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-100">
              {/* Flecha izquierda */}
              <button
                onClick={() => changePage(currentPage - 1)}
                disabled={currentPage === 0}
                className={`
                  absolute left-4 top-1/2 -translate-y-1/2 z-20
                  w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl
                  transition-all duration-300
                  ${currentPage === 0 
                    ? 'opacity-30 cursor-not-allowed' 
                    : 'hover:opacity-100 opacity-80'
                  }
                `}
                style={{
                  backgroundColor: currentPage === 0 ? '#E5E5E5' : 'var(--found-it-ound-blue)',
                  color: currentPage === 0 ? '#999' : 'white',
                  boxShadow: currentPage === 0 ? 'none' : '0 4px 15px rgba(0,0,0,0.1)'
                }}
              >
                ⬅️
              </button>

              {/* Flecha derecha */}
              <button
                onClick={() => changePage(currentPage + 1)}
                disabled={currentPage === totalPages - 1}
                className={`
                  absolute right-4 top-1/2 -translate-y-1/2 z-20
                  w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl
                  transition-all duration-300
                  ${currentPage === totalPages - 1 
                    ? 'opacity-30 cursor-not-allowed' 
                    : 'hover:opacity-100 opacity-80'
                  }
                `}
                style={{
                  backgroundColor: currentPage === totalPages - 1 ? '#E5E5E5' : 'var(--found-it-ound-blue)',
                  color: currentPage === totalPages - 1 ? '#999' : 'white',
                  boxShadow: currentPage === totalPages - 1 ? 'none' : '0 4px 15px rgba(0,0,0,0.1)'
                }}
              >
                ➡️
              </button>

              {/* Contenido principal */}
              <div className="px-20 py-12">
                <div 
                  className={`
                    grid md:grid-cols-3 gap-6 transition-all duration-300 transform
                    ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
                  `}
                >
              {currentRequirements.map((req, index) => (
                <div
                  key={`${currentPage}-${req.id}`}
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredRequirement(index)}
                  onMouseLeave={() => setHoveredRequirement(null)}
                >
                  <Card 
                    className={`
                      h-full border-0 shadow-lg transition-all duration-300
                      ${hoveredRequirement === index ? 'shadow-xl' : 'hover:shadow-lg'}
                      bg-white/95 backdrop-blur-sm
                    `}
                    style={{
                      borderTop: `4px solid ${
                        req.priority === 'Crítico' ? 'var(--found-it-it-red)' :
                        req.priority === 'Alto' ? 'var(--found-it-ound-blue)' : 
                        'var(--found-it-f-dark)'
                      }`
                    }}
                  >
                    <CardContent className="p-6 relative">
                      <div 
                        className={`
                          absolute inset-0 rounded-lg transition-opacity duration-300
                          ${hoveredRequirement === index ? 'opacity-5' : 'opacity-0'}
                        `}
                        style={{ 
                          backgroundColor: 
                            req.priority === 'Crítico' ? 'var(--found-it-it-red)' :
                            req.priority === 'Alto' ? 'var(--found-it-ound-blue)' : 
                            'var(--found-it-f-dark)'
                        }}
                      />
                      
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <span 
                            className="text-xs font-bold px-3 py-1 rounded-full"
                            style={{ 
                              backgroundColor: 
                                req.priority === 'Crítico' ? '#FFE6E6' :
                                req.priority === 'Alto' ? '#E6F0FF' : '#F0F0F0',
                              color: 
                                req.priority === 'Crítico' ? 'var(--found-it-it-red)' :
                                req.priority === 'Alto' ? 'var(--found-it-ound-blue)' : 
                                'var(--found-it-f-dark)'
                            }}
                          >
                            {req.category}
                          </span>
                          <span className="text-xs text-green-600 font-bold bg-green-50 px-2 py-1 rounded">
                            {req.status}
                          </span>
                        </div>
                        
                        <h4 
                          className="text-lg mb-3 font-semibold leading-tight transition-colors duration-300"
                          style={{ 
                            color: hoveredRequirement === index 
                              ? (
                                req.priority === 'Crítico' ? 'var(--found-it-it-red)' :
                                req.priority === 'Alto' ? 'var(--found-it-ound-blue)' : 
                                'var(--found-it-f-dark)'
                              )
                              : 'var(--found-it-software-black)'
                          }}
                        >
                          {req.requirement}
                        </h4>
                        
                        <p 
                          className="text-sm mb-4 leading-relaxed"
                          style={{ 
                            color: 'var(--found-it-software-black)', 
                            opacity: 0.7 
                          }}
                        >
                          {req.description}
                        </p>
                        
                        <div 
                          className="inline-block text-xs font-bold px-3 py-1 rounded-full"
                          style={{ 
                            backgroundColor: 
                              req.priority === 'Crítico' ? 'var(--found-it-it-red)' :
                              req.priority === 'Alto' ? 'var(--found-it-ound-blue)' : 
                              'var(--found-it-f-dark)',
                            color: 'white'
                          }}
                        >
                          🔥 Prioridad: {req.priority}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
                </div>
              </div>

              {/* Indicadores de página en la parte inferior */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <div className="flex space-x-2">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => changePage(index)}
                      className={`
                        w-3 h-3 rounded-full transition-all duration-300
                        ${currentPage === index 
                          ? 'opacity-100' 
                          : 'opacity-40 hover:opacity-70'
                        }
                      `}
                      style={{
                        backgroundColor: currentPage === index 
                          ? 'var(--found-it-it-red)' 
                          : 'var(--found-it-f-dark)'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Información de página */}
            <div className="text-center mt-6">
              <p 
                className="text-sm font-medium"
                style={{ color: 'var(--found-it-software-black)', opacity: 0.6 }}
              >
                Mostrando {currentRequirements.length} de {keyRequirements.length} requerimientos implementados
              </p>
            </div>
          </div>
        </div>

        {/* Nosotros vs. Competencia - TABLA COMPARATIVA */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 
              className="text-4xl mb-6"
              style={{ color: 'var(--found-it-software-black)' }}
            >
              Nosotros vs. Competencia
            </h3>
            <div 
              className="w-32 h-1 mx-auto mb-6"
              style={{ 
                background: `linear-gradient(90deg, 
                  var(--found-it-ound-blue) 0%, 
                  var(--found-it-it-red) 50%, 
                  var(--found-it-f-dark) 100%)`
              }}
            ></div>
            <p 
              className="text-xl max-w-3xl mx-auto mb-8"
              style={{ color: 'var(--found-it-software-black)', opacity: 0.8, fontWeight: 'bold' }}
            >
              "Escalable, sin licencias, listo para crecer contigo."
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="border-0 shadow-2xl overflow-hidden bg-white/95 backdrop-blur-sm">
              <CardContent className="p-0">
                {/* Header de la tabla */}
                <div className="grid grid-cols-3 bg-gradient-to-r from-gray-50 to-gray-100">
                  <div className="p-6 text-center">
                    <h4 
                      className="text-xl font-bold"
                      style={{ color: 'var(--found-it-software-black)' }}
                    >
                      Característica
                    </h4>
                  </div>
                  <div 
                    className="p-6 text-center border-l border-r"
                    style={{ 
                      background: `linear-gradient(135deg, 
                        var(--found-it-ound-blue)20 0%, 
                        var(--found-it-it-red)20 100%)`,
                      borderColor: 'rgba(0,0,0,0.1)'
                    }}
                  >
                    <h4 
                      className="text-xl font-bold"
                      style={{ color: 'var(--found-it-software-black)' }}
                    >
                      Found-IT!
                    </h4>
                  </div>
                  <div className="p-6 text-center">
                    <h4 
                      className="text-xl font-bold"
                      style={{ color: 'var(--found-it-software-black)' }}
                    >
                      Soluciones Comerciales
                    </h4>
                  </div>
                </div>

                {/* Filas de comparación */}
                {[
                  { 
                    feature: "Modularidad", 
                    foundIt: "Alta", 
                    competitors: "Limitada",
                    foundItIcon: "🔧",
                    competitorIcon: "⚠️"
                  },
                  { 
                    feature: "Control de acceso físico", 
                    foundIt: "Sí", 
                    competitors: "No siempre",
                    foundItIcon: "✅",
                    competitorIcon: "❓"
                  },
                  { 
                    feature: "Pick to Light", 
                    foundIt: "Incluido", 
                    competitors: "Costo adicional",
                    foundItIcon: "💡",
                    competitorIcon: "💲"
                  },
                  { 
                    feature: "Datos en tiempo real", 
                    foundIt: "Sí", 
                    competitors: "Variable",
                    foundItIcon: "📊",
                    competitorIcon: "📈"
                  },
                  { 
                    feature: "Escalabilidad", 
                    foundIt: "Sí", 
                    competitors: "Limitada",
                    foundItIcon: "🚀",
                    competitorIcon: "⛔"
                  }
                ].map((row, index) => (
                  <div 
                    key={index} 
                    className={`grid grid-cols-3 border-t ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                    style={{ borderColor: 'rgba(0,0,0,0.1)' }}
                  >
                    <div className="p-6">
                      <span 
                        className="text-lg font-medium"
                        style={{ color: 'var(--found-it-software-black)' }}
                      >
                        {row.feature}
                      </span>
                    </div>
                    <div 
                      className="p-6 border-l border-r text-center"
                      style={{ 
                        borderColor: 'rgba(0,0,0,0.1)',
                        background: `linear-gradient(135deg, 
                          var(--found-it-ound-blue)10 0%, 
                          var(--found-it-it-red)10 100%)`
                      }}
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-2xl">{row.foundItIcon}</span>
                        <span 
                          className="text-lg font-semibold"
                          style={{ color: 'var(--found-it-ound-blue)' }}
                        >
                          {row.foundIt}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-2xl">{row.competitorIcon}</span>
                        <span 
                          className="text-lg"
                          style={{ color: 'var(--found-it-software-black)', opacity: 0.7 }}
                        >
                          {row.competitors}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Beneficios para el cliente - ICONOS O MINI BLOQUES */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 
              className="text-4xl mb-6"
              style={{ color: 'var(--found-it-software-black)' }}
            >
              Beneficios para el Cliente
            </h3>
            <div 
              className="w-32 h-1 mx-auto mb-6"
              style={{ 
                background: `linear-gradient(90deg, 
                  var(--found-it-f-dark) 0%, 
                  var(--found-it-ound-blue) 50%, 
                  var(--found-it-it-red) 100%)`
              }}
            ></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                id: 1,
                title: "Reducción de tiempos",
                subtitle: "en logística interna",
                icon: "🚀",
                color: "var(--found-it-ound-blue)",
                bgGradient: "from-blue-50 to-blue-100"
              },
              {
                id: 2,
                title: "Menor margen de error",
                subtitle: "humano",
                icon: "🎯",
                color: "var(--found-it-it-red)",
                bgGradient: "from-red-50 to-red-100"
              },
              {
                id: 3,
                title: "Mejora en trazabilidad",
                subtitle: "y auditorías",
                icon: "📋",
                color: "var(--found-it-f-dark)",
                bgGradient: "from-gray-50 to-gray-100"
              },
              {
                id: 4,
                title: "Control de condiciones",
                subtitle: "ambientales",
                icon: "🌡️",
                color: "var(--found-it-ound-blue)",
                bgGradient: "from-blue-50 to-blue-100"
              },
              {
                id: 5,
                title: "Incremento en productividad",
                subtitle: "sin aumentar plantilla",
                icon: "📊",
                color: "var(--found-it-it-red)",
                bgGradient: "from-red-50 to-red-100"
              },
              {
                id: 6,
                title: "Mayor control sobre",
                subtitle: "materiales sensibles",
                icon: "🔒",
                color: "var(--found-it-f-dark)",
                bgGradient: "from-gray-50 to-gray-100"
              }
            ].map((benefit, index) => (
              <Card 
                key={benefit.id}
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br ${benefit.bgGradient}`}
              >
                <CardContent className="p-6 text-center relative overflow-hidden">
                  {/* Background decorativo */}
                  <div 
                    className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-10 transform translate-x-8 -translate-y-8"
                    style={{ backgroundColor: benefit.color }}
                  ></div>
                  
                  <div className="relative z-10">
                    <div 
                      className="text-5xl mb-4 transform transition-all duration-300 hover:scale-110"
                    >
                      {benefit.icon}
                    </div>
                    
                    <h4 
                      className="text-lg font-semibold mb-1"
                      style={{ color: benefit.color }}
                    >
                      {benefit.title}
                    </h4>
                    
                    <p 
                      className="text-sm font-medium"
                      style={{ color: 'var(--found-it-software-black)', opacity: 0.7 }}
                    >
                      {benefit.subtitle}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Summary destacado */}
          <div className="mt-12 max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl overflow-hidden bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8 text-center relative">
                <div 
                  className="absolute top-0 left-0 w-full h-2"
                  style={{ 
                    background: `linear-gradient(90deg, 
                      var(--found-it-ound-blue) 0%, 
                      var(--found-it-it-red) 50%, 
                      var(--found-it-f-dark) 100%)`
                  }}
                ></div>
                
                <h4 
                  className="text-2xl mb-4"
                  style={{ color: 'var(--found-it-software-black)' }}
                >
                  Resultados Garantizados
                </h4>
                
                <p 
                  className="text-lg leading-relaxed max-w-3xl mx-auto"
                  style={{ color: 'var(--found-it-software-black)', opacity: 0.8 }}
                >
                  Found-IT! transforma tu almacén en un espacio inteligente, reduciendo costos operativos, 
                  eliminando errores y maximizando la eficiencia sin inversiones elevadas en licencias.
                </p>
                
                <div className="mt-6 flex justify-center space-x-8">
                  <div className="text-center">
                    <div 
                      className="text-3xl mb-2"
                      style={{ color: 'var(--found-it-ound-blue)' }}
                    >
                      💰
                    </div>
                    <span 
                      className="text-sm font-medium"
                      style={{ color: 'var(--found-it-software-black)', opacity: 0.7 }}
                    >
                      Costo Reducido
                    </span>
                  </div>
                  <div className="text-center">
                    <div 
                      className="text-3xl mb-2"
                      style={{ color: 'var(--found-it-it-red)' }}
                    >
                      ⚡
                    </div>
                    <span 
                      className="text-sm font-medium"
                      style={{ color: 'var(--found-it-software-black)', opacity: 0.7 }}
                    >
                      Mayor Eficiencia
                    </span>
                  </div>
                  <div className="text-center">
                    <div 
                      className="text-3xl mb-2"
                      style={{ color: 'var(--found-it-f-dark)' }}
                    >
                      🎯
                    </div>
                    <span 
                      className="text-sm font-medium"
                      style={{ color: 'var(--found-it-software-black)', opacity: 0.7 }}
                    >
                      Precisión Total
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
