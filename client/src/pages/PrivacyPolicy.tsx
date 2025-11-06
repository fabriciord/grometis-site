import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Shield, Lock, Users, FileText, Mail, Phone, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'wouter'

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: Users,
      title: "1. Quais informações coletamos?",
      content: [
        "Coletamos informações que você nos fornece diretamente durante sua interação com o bot. Isso pode incluir:",
        "• Nome: Para personalizar a comunicação.",
        "• Número de telefone: Essencial para a comunicação via WhatsApp.",
        "• Conteúdo das mensagens: As perguntas, comandos e informações que você envia ao interagir com o bot.",
        "• Dados de contato adicionais: Quando fornecidos voluntariamente para melhor atendimento."
      ]
    },
    {
      icon: FileText,
      title: "2. Como usamos suas informações?",
      content: [
        "As informações coletadas são usadas para as seguintes finalidades:",
        "• Operar o bot: Para processar suas solicitações e fornecer as respostas e serviços solicitados.",
        "• Melhorar nossos serviços: Analisamos as interações de forma anonimizada para entender como nosso bot está sendo usado e como podemos melhorá-lo.",
        "• Suporte ao cliente: Para ajudar a resolver problemas ou responder a perguntas que você possa ter.",
        "• Comunicação: Para enviar informações importantes sobre nossos serviços, caso você tenha consentido."
      ]
    },
    {
      icon: Shield,
      title: "3. Compartilhamento de informações",
      content: [
        "Nós não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing. Suas informações podem ser compartilhadas apenas nas seguintes circunstâncias:",
        "• Com provedores de serviço: Podemos compartilhar informações com empresas que nos auxiliam a operar nosso serviço (como serviços de hospedagem), sob estritas obrigações de confidencialidade.",
        "• Por obrigação legal: Se formos obrigados por lei, processo judicial ou solicitação governamental a divulgar suas informações."
      ]
    },
    {
      icon: Lock,
      title: "4. Armazenamento e Segurança dos Dados",
      content: [
        "Empregamos medidas de segurança técnicas e administrativas para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.",
        "• As conversas são protegidas pela criptografia de ponta a ponta do WhatsApp.",
        "• Seus dados são armazenados em servidores seguros pelo tempo necessário para cumprir as finalidades para as quais foram coletados.",
        "• Implementamos controles de acesso rigorosos e monitoramento contínuo de segurança."
      ]
    }
  ]

  const rights = [
    "Acessar seus dados",
    "Corrigir dados incompletos, inexatos ou desatualizados",
    "Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários",
    "Solicitar a portabilidade dos seus dados a outro fornecedor de serviço",
    "Revogar o seu consentimento a qualquer momento"
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
            <Link href="/">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Voltar ao Início
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <Shield className="w-12 h-12 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Política de Privacidade
            </h1>
            <p className="text-xl text-slate-600 mb-2">
              Bot Grometis
            </p>
            <div className="flex items-center justify-center gap-2 text-slate-500">
              <Calendar className="w-4 h-4" />
              <span>Última atualização: 05 de novembro de 2025</span>
            </div>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="mb-8">
              <CardContent className="pt-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  A sua privacidade é importante para nós. Esta política de privacidade explica como o nosso bot para WhatsApp, 
                  <strong className="text-blue-600"> Grometis</strong> ("nós", "nosso"), coleta, usa, armazena e protege suas 
                  informações pessoais quando você interage conosco.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-slate-800">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <section.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <p key={itemIndex} className="text-slate-700 leading-relaxed">
                          {item}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Rights Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-slate-800">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Users className="w-5 h-5 text-green-600" />
                    </div>
                    5. Seus Direitos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de:
                  </p>
                  <ul className="space-y-2">
                    {rights.map((right, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="bg-green-100 p-1 rounded-full mt-0.5">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        </div>
                        <span className="text-slate-700">{right}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-slate-700 mt-4">
                    Para exercer seus direitos, entre em contato conosco através do 
                    <strong className="text-blue-600"> grometis@grometis.com</strong>.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Updates Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-slate-800">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <FileText className="w-5 h-5 text-orange-600" />
                    </div>
                    6. Alterações nesta Política de Privacidade
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Podemos atualizar esta política de privacidade periodicamente. Notificaremos sobre quaisquer alterações 
                    publicando a nova política e atualizando a data da "Última atualização". Recomendamos que você revise 
                    esta política regularmente.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-slate-800">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    7. Contato
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <span className="text-slate-700">E-mail: </span>
                      <a href="mailto:grometis@grometis.com" className="text-blue-600 font-medium hover:underline">
                        grometis@grometis.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Footer CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center mt-12"
          >
            <Link href="/">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao Site Principal
              </Button>
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  )
}