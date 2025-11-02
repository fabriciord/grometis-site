import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Code, Database, Zap, Users, BarChart3, Settings, Mail, Phone, MapPin, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: Code,
      title: "Desenvolvimento de Software",
      description: "Soluções personalizadas em diversas tecnologias, desde aplicações web até sistemas complexos de gestão empresarial."
    },
    {
      icon: Database,
      title: "Integração de Sistemas",
      description: "Conectamos seus sistemas existentes para otimizar fluxos de trabalho e melhorar a eficiência operacional."
    },
    {
      icon: BarChart3,
      title: "Métricas e Analytics",
      description: "Implementamos dashboards e sistemas de monitoramento para acompanhar performance e tomar decisões baseadas em dados."
    },
    {
      icon: Settings,
      title: "Consultoria Técnica",
      description: "Orientação especializada em arquitetura de software, melhores práticas e otimização de processos tecnológicos."
    }
  ]

  const technologies = [
    "React", "Node.js", "Python", "Java", "C#", ".NET", 
    "PostgreSQL", "MongoDB", "AWS", "Docker", "Kubernetes", "API REST"
  ]

  const benefits = [
    "Redução de custos operacionais",
    "Acesso a expertise especializada",
    "Foco no core business",
    "Escalabilidade flexível",
    "Tecnologias atualizadas",
    "Suporte técnico dedicado"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src="/grometis_logo_horizontal.png" alt="GrOMEtiS Software & Integration" className="h-12" />
            </motion.div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors">Serviços</a>
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">Sobre</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contato</a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Mail className="w-4 h-4 mr-2" />
              Fale Conosco
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
          >
            <img src="/grometis_logo_principal.png" alt="GrOMEtiS" className="mx-auto mb-8 h-24" />
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
              Transformamos Ideias em
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600"> Soluções Digitais</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Somos especialistas em desenvolvimento de software terceirizado, integração de sistemas e análise de métricas. 
              Potencializamos seu negócio com tecnologia de ponta e expertise comprovada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                Conheça Nossos Serviços
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                Solicitar Orçamento
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Nossos Serviços</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Oferecemos soluções completas para impulsionar a transformação digital da sua empresa
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-800 mb-6">Sobre a GrOMEtiS</h2>
              <div className="space-y-4 text-slate-600">
                <p className="text-lg">
                  A <strong>GrOMEtiS Software & Integration</strong> nasceu da visão de conectar empresas às melhores soluções tecnológicas. 
                  Nosso nome representa nossa essência:
                </p>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <ul className="space-y-2">
                    <li><strong className="text-blue-600">GrO</strong> = Group (Grupo colaborativo)</li>
                    <li><strong className="text-green-600">MEt</strong> = Metrics (Métricas e análises)</li>
                    <li><strong className="text-blue-600">iS</strong> = integration System (Sistema de Integração)</li>
                  </ul>
                  <p className="mt-4 text-sm text-slate-500">
                    As letras <strong>GOMES</strong> estão destacadas dentro do nome, representando a identidade pessoal do fundador.
                  </p>
                </div>
                <p className="text-lg">
                  Combinamos expertise técnica com uma abordagem personalizada, garantindo que cada projeto 
                  seja desenvolvido com excelência e alinhado aos objetivos do seu negócio.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-blue-600" />
                    Por que Terceirizar?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-green-600" />
                    Tecnologias
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Vamos Conversar?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Estamos prontos para transformar suas ideias em realidade. Entre em contato e descubra como podemos ajudar seu negócio.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-blue-100">grometis@proton.me</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Telefone</h3>
                <p className="text-blue-100">+55 (11) 98753-2441</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Localização</h3>
                <p className="text-blue-100">São Paulo, Brasil</p>
              </div>
            </div>

            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
              Solicitar Orçamento Gratuito
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src="/grometis_logo_variation2.png" alt="GrOMEtiS" className="h-8 mb-4 brightness-0 invert" />
              <p className="text-slate-400">
                Transformando ideias em soluções digitais inovadoras através de software terceirizado de qualidade.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Desenvolvimento de Software</li>
                <li>Integração de Sistemas</li>
                <li>Métricas e Analytics</li>
                <li>Consultoria Técnica</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-slate-400">
                <li>grometis@proton.me</li>
                <li>+55 (11) 98753-2441</li>
                <li>São Paulo, Brasil</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 GrOMEtiS Software & Integration. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
