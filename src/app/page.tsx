import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Star, Clock, Users, Shield, AlertTriangle, Sparkles, Zap, Trophy } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-pink-600">
      {/* Navbar com Logo */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/926089dc-49df-43e0-a79c-9331001d44c8.png" 
              alt="FitAI Pro Logo" 
              className="h-16 w-auto"
            />
            <span className="text-2xl font-bold text-white">FitAI Pro</span>
          </div>
          <a href="https://checkout.keoto.com/44f5ec3e-bed3-4cc0-b6e3-b7a4cada1da4" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white font-semibold px-6 shadow-lg shadow-green-500/50">
              Começar Agora
            </Button>
          </a>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section com Gradiente Vibrante */}
        <header className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-3xl -z-10"></div>
          
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
            <Sparkles className="text-yellow-300" size={20} />
            <span className="text-white font-medium">Tecnologia de IA Avançada</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Transforme Seu Corpo e Sua Vida com{' '}
            <span className="bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">
              Apenas Um Clique
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Chega de dietas malucas e academias lotadas! Com o FitAI Pro, você terá um personal trainer e nutricionista na palma da sua mão!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://checkout.keoto.com/44f5ec3e-bed3-4cc0-b6e3-b7a4cada1da4" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white font-bold text-lg px-8 py-6 shadow-2xl shadow-green-500/50 transform hover:scale-105 transition-all">
                <Zap className="mr-2" />
                QUERO ME CADASTRAR AGORA!
              </Button>
            </a>
          </div>

          <div className="flex items-center justify-center gap-8 mt-8 text-white">
            <div className="flex items-center gap-2">
              <Users className="text-green-300" />
              <span className="font-semibold">+10.000 usuários</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="text-yellow-300" fill="currentColor" />
              <span className="font-semibold">4.9/5 estrelas</span>
            </div>
          </div>
        </header>

        {/* Texto de Abertura - Card Flutuante */}
        <section className="mb-16">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
            <CardContent className="pt-8">
              <p className="text-lg text-white leading-relaxed text-center">
                Você já sonhou em emagrecer com facilidade, ter mais energia e um corpo em forma, tudo isso sem sair de casa? O FitAI Pro foi desenvolvido para te ajudar a atingir seus objetivos de forma rápida e eficaz, mesmo que você tenha apenas 10 minutos por dia. Nele, você encontra treinos personalizados, planos alimentares e acompanhamento contínuo. Este é o seu momento!
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Conexão com o Leitor */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Você Merece Resultados Reais
          </h2>
          <p className="text-lg text-purple-100 leading-relaxed max-w-3xl mx-auto">
            Você está cansado de seguir promessas que não funcionam? De se sentir inseguro e insatisfeito com seu corpo? O FitAI Pro é a solução para suas dores. Ele entende suas dificuldades e oferece uma experiência personalizada, ajudando você a conquistar o corpo dos seus sonhos de forma simples e prática.
          </p>
        </section>

        {/* Apresentação da Solução */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-md border-white/20 shadow-2xl">
            <CardContent className="pt-8">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-r from-green-400 to-emerald-500 p-4 rounded-full">
                  <Sparkles className="text-white" size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white text-center mb-4">
                Tecnologia de IA que Entende Você
              </h3>
              <p className="text-lg text-white leading-relaxed text-center">
                Com a tecnologia avançada de inteligência artificial, o FitAI Pro personaliza treinos e dietas baseados nas suas preferências e resultados. Imagine ter um treinador e um nutricionista dedicados a você, prontos para ajudá-lo a cada passo do caminho. Isso é mais que um app; é sua nova filosofia de vida!
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Benefícios - Cards Modernos */}
        <section className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            Por Que Escolher o{' '}
            <span className="bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">
              FitAI Pro?
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all hover:scale-105 shadow-xl">
              <CardContent className="pt-6">
                <div className="bg-gradient-to-r from-green-400 to-emerald-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-xl text-white mb-2">Treinos Personalizados</h3>
                <p className="text-purple-100">Programe seu treino conforme sua rotina e objetivos.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all hover:scale-105 shadow-xl">
              <CardContent className="pt-6">
                <div className="bg-gradient-to-r from-pink-400 to-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-xl text-white mb-2">Planos Alimentares Inteligentes</h3>
                <p className="text-purple-100">Receba sugestões de refeições ajustadas ao seu gosto e necessidades calóricas.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all hover:scale-105 shadow-xl">
              <CardContent className="pt-6">
                <div className="bg-gradient-to-r from-blue-400 to-cyan-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-xl text-white mb-2">Acompanhamento 24/7</h3>
                <p className="text-purple-100">Dicas e motivação sempre ao seu alcance, para que você não desista.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all hover:scale-105 shadow-xl">
              <CardContent className="pt-6">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-xl text-white mb-2">Resultados Rápidos</h3>
                <p className="text-purple-100">Com apenas 10 minutos diários, você verá a diferença em poucas semanas!</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all hover:scale-105 shadow-xl">
              <CardContent className="pt-6">
                <div className="bg-gradient-to-r from-purple-400 to-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-xl text-white mb-2">Comunidade de Apoio</h3>
                <p className="text-purple-100">Faça parte de um grupo de pessoas que buscam os mesmos objetivos que você.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all hover:scale-105 shadow-xl">
              <CardContent className="pt-6">
                <div className="bg-gradient-to-r from-green-400 to-teal-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-xl text-white mb-2">Desafios e Recompensas</h3>
                <p className="text-purple-100">Mantenha sua motivação em alta com nosso sistema de conquistas.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Planos - Destaque Visual */}
        <section className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Escolha Seu Plano
          </h2>
          <p className="text-center text-purple-100 text-lg mb-12">
            Comece sua transformação hoje mesmo!
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:scale-105 transition-all shadow-2xl">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Plano Mensal</CardTitle>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">R$19,90</span>
                  <span className="text-purple-200">/mês</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                    <span>Acesso a treinos e dietas personalizadas</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                    <span>Suporte contínuo de especialistas</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                    <span>Desafios e recompensas</span>
                  </li>
                </ul>
                <a href="https://checkout.keoto.com/f0316516-a7e1-41fc-ae0b-0b32625b6f6b" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-white text-purple-700 hover:bg-purple-50 font-bold py-6">
                    Escolher Plano Mensal
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-400/20 to-emerald-500/20 backdrop-blur-md border-2 border-green-400 hover:scale-105 transition-all shadow-2xl shadow-green-500/50 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                MAIS POPULAR
              </div>
              <CardHeader>
                <CardTitle className="text-white text-2xl">Plano Anual</CardTitle>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">R$79,80</span>
                  <span className="text-purple-200">/ano</span>
                </div>
                <p className="text-green-300 font-semibold">Economize 3 meses!</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                    <span>Acesso a treinos e dietas personalizadas</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                    <span>Suporte contínuo de especialistas</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                    <span>Desafios e recompensas</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                    <span className="font-semibold">E-book de receitas GRÁTIS</span>
                  </li>
                </ul>
                <a href="https://checkout.keoto.com/44f5ec3e-bed3-4cc0-b6e3-b7a4cada1da4" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white font-bold py-6 shadow-lg">
                    Escolher Plano Anual
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Depoimentos - Cards Elegantes */}
        <section className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            O Que Nossos Usuários Dizem
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-xl">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400" size={20} fill="currentColor" />
                  ))}
                </div>
                <p className="italic text-white mb-4">
                  "Com o FitAI Pro, perdi 10kg em apenas 2 meses! Nunca pensei que seria tão fácil."
                </p>
                <p className="text-right font-semibold text-purple-200">– Maria S.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-xl">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400" size={20} fill="currentColor" />
                  ))}
                </div>
                <p className="italic text-white mb-4">
                  "A personalização realmente faz a diferença! É como ter um treinador particular."
                </p>
                <p className="text-right font-semibold text-purple-200">– João P.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-xl">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400" size={20} fill="currentColor" />
                  ))}
                </div>
                <p className="italic text-white mb-4">
                  "A comunidade me deu a motivação que eu precisava. O FitAI Pro mudou minha vida!"
                </p>
                <p className="text-right font-semibold text-purple-200">– Ana L.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Garantia */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-md border-white/20 shadow-2xl">
            <CardContent className="pt-8 text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-r from-blue-400 to-cyan-500 p-4 rounded-full">
                  <Shield className="text-white" size={48} />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Garantia de 30 Dias – Risco Zero
              </h2>
              <p className="text-lg text-white max-w-2xl mx-auto">
                Experimente sem medo! Se em 30 dias você não estiver satisfeito, devolvemos seu dinheiro. Sem perguntas, sem complicações.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Bônus e Escassez */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-md border-2 border-orange-400 shadow-2xl">
            <CardContent className="pt-8 text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-r from-orange-400 to-red-500 p-4 rounded-full animate-pulse">
                  <AlertTriangle className="text-white" size={48} />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Oferta Especial por Tempo Limitado!
              </h2>
              <p className="text-lg text-white mb-4">
                <span className="font-bold text-yellow-300">BÔNUS:</span> Os 50 primeiros que se inscreverem ganharão um e-book exclusivo com receitas saudáveis.
              </p>
              <p className="text-xl text-orange-200 font-bold">
                ⚠️ Atenção: Vagas limitadas — não perca essa chance de mudar sua vida!
              </p>
            </CardContent>
          </Card>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            Perguntas Frequentes
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white/10 backdrop-blur-md border-white/20 rounded-lg px-6">
                <AccordionTrigger className="text-white font-semibold hover:text-purple-200">
                  Preciso ter experiência para usar?
                </AccordionTrigger>
                <AccordionContent className="text-purple-100">
                  Não! O FitAI Pro é feito para iniciantes e avançados. Nossa IA se adapta ao seu nível de condicionamento físico.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-white/10 backdrop-blur-md border-white/20 rounded-lg px-6">
                <AccordionTrigger className="text-white font-semibold hover:text-purple-200">
                  O que acontece se eu não tiver tempo?
                </AccordionTrigger>
                <AccordionContent className="text-purple-100">
                  Com apenas 10 minutos por dia, você pode alcançar seus objetivos. Nossos treinos são otimizados para pessoas ocupadas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white/10 backdrop-blur-md border-white/20 rounded-lg px-6">
                <AccordionTrigger className="text-white font-semibold hover:text-purple-200">
                  Posso cancelar a qualquer momento?
                </AccordionTrigger>
                <AccordionContent className="text-purple-100">
                  Sim! Você pode cancelar sua assinatura a qualquer momento, sem taxas ou multas.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Final - Destaque Máximo */}
        <section className="text-center mb-16">
          <Card className="bg-gradient-to-br from-green-400/30 to-emerald-500/30 backdrop-blur-md border-2 border-green-400 shadow-2xl shadow-green-500/50">
            <CardContent className="pt-12 pb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Não Espere Mais Para Transformar Sua Vida!
              </h2>
              <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
                Clique no botão abaixo e escolha seu plano. Sua jornada rumo ao corpo dos sonhos começa agora!
              </p>
              <a href="https://checkout.keoto.com/44f5ec3e-bed3-4cc0-b6e3-b7a4cada1da4" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white font-bold text-2xl px-12 py-8 shadow-2xl shadow-green-500/50 transform hover:scale-110 transition-all">
                  <Zap className="mr-2" size={28} />
                  QUERO ME CADASTRAR AGORA!
                </Button>
              </a>
              <p className="text-purple-200 mt-6 text-sm">
                ✓ Sem compromisso • ✓ Cancele quando quiser • ✓ Garantia de 30 dias
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-white/20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/926089dc-49df-43e0-a79c-9331001d44c8.png" 
              alt="FitAI Pro Logo" 
              className="h-14 w-auto"
            />
            <span className="text-2xl font-bold text-white">FitAI Pro</span>
          </div>
          <p className="text-xl font-semibold text-white mb-2">
            Sua saúde em primeiro lugar!
          </p>
          <p className="text-purple-200">
            Mude seu corpo e sua vida com facilidade, rapidez e confiança. A hora é agora!
          </p>
          <p className="text-purple-300 text-sm mt-4">
            © 2024 FitAI Pro. Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </div>
  );
}
