"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { FlexboxPlayground } from "@/components/flexbox-playground"
import { FlexboxChallenges } from "@/components/flexbox-challenges"
import { FlexboxReference } from "@/components/flexbox-reference"
import { BookOpen, Code, Trophy, Zap } from "lucide-react"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("learn")

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">FlexBox Master</h1>
                <p className="text-sm text-gray-600">Aprenda CSS Flexbox de forma interativa</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Gratuito
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Domine o CSS Flexbox</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Aprenda Flexbox através de exemplos interativos, exercícios práticos e desafios que vão fixar seu
            conhecimento de forma definitiva.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
              <BookOpen className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium">Teoria Interativa</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
              <Zap className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-medium">Playground Ao Vivo</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
              <Trophy className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium">Desafios Práticos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="learn" className="flex items-center space-x-2">
              <BookOpen className="w-4 h-4" />
              <span>Aprender</span>
            </TabsTrigger>
            <TabsTrigger value="playground" className="flex items-center space-x-2">
              <Zap className="w-4 h-4" />
              <span>Playground</span>
            </TabsTrigger>
            <TabsTrigger value="challenges" className="flex items-center space-x-2">
              <Trophy className="w-4 h-4" />
              <span>Desafios</span>
            </TabsTrigger>
            <TabsTrigger value="reference" className="flex items-center space-x-2">
              <Code className="w-4 h-4" />
              <span>Referência</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="learn">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>O que é CSS Flexbox?</CardTitle>
                  <CardDescription>Entenda os conceitos fundamentais do Flexbox</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    O CSS Flexbox (Flexible Box Layout) é um método de layout que permite organizar elementos de forma
                    flexível e responsiva. É perfeito para criar layouts que se adaptam a diferentes tamanhos de tela.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Conceitos Principais:</h4>
                    <ul className="list-disc list-inside space-y-1 text-blue-800">
                      <li>
                        <strong>Container Flex:</strong> O elemento pai que recebe display: flex
                      </li>
                      <li>
                        <strong>Flex Items:</strong> Os elementos filhos do container flex
                      </li>
                      <li>
                        <strong>Main Axis:</strong> O eixo principal (horizontal por padrão)
                      </li>
                      <li>
                        <strong>Cross Axis:</strong> O eixo transversal (vertical por padrão)
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Propriedades do Container</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-gray-50 rounded">
                        <code className="text-sm font-mono">display: flex</code>
                        <p className="text-xs text-gray-600 mt-1">Define o container como flex</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded">
                        <code className="text-sm font-mono">flex-direction</code>
                        <p className="text-xs text-gray-600 mt-1">Define a direção dos itens</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded">
                        <code className="text-sm font-mono">justify-content</code>
                        <p className="text-xs text-gray-600 mt-1">Alinha no eixo principal</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded">
                        <code className="text-sm font-mono">align-items</code>
                        <p className="text-xs text-gray-600 mt-1">Alinha no eixo transversal</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Propriedades dos Itens</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-gray-50 rounded">
                        <code className="text-sm font-mono">flex-grow</code>
                        <p className="text-xs text-gray-600 mt-1">Define o crescimento do item</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded">
                        <code className="text-sm font-mono">flex-shrink</code>
                        <p className="text-xs text-gray-600 mt-1">Define o encolhimento do item</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded">
                        <code className="text-sm font-mono">flex-basis</code>
                        <p className="text-xs text-gray-600 mt-1">Define o tamanho base do item</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded">
                        <code className="text-sm font-mono">align-self</code>
                        <p className="text-xs text-gray-600 mt-1">Alinhamento individual do item</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="playground">
            <FlexboxPlayground />
          </TabsContent>

          <TabsContent value="challenges">
            <FlexboxChallenges />
          </TabsContent>

          <TabsContent value="reference">
            <FlexboxReference />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
