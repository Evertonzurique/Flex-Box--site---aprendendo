"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function FlexboxReference() {
  const containerProperties = [
    {
      property: "display",
      values: ["flex", "inline-flex"],
      description: "Define o elemento como um container flex",
      example: "display: flex;",
    },
    {
      property: "flex-direction",
      values: ["row", "row-reverse", "column", "column-reverse"],
      description: "Define a direção principal dos flex items",
      example: "flex-direction: row;",
    },
    {
      property: "flex-wrap",
      values: ["nowrap", "wrap", "wrap-reverse"],
      description: "Define se os items devem quebrar linha",
      example: "flex-wrap: wrap;",
    },
    {
      property: "justify-content",
      values: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"],
      description: "Alinha os items ao longo do eixo principal",
      example: "justify-content: center;",
    },
    {
      property: "align-items",
      values: ["stretch", "flex-start", "flex-end", "center", "baseline"],
      description: "Alinha os items ao longo do eixo transversal",
      example: "align-items: center;",
    },
    {
      property: "align-content",
      values: ["stretch", "flex-start", "flex-end", "center", "space-between", "space-around"],
      description: "Alinha as linhas quando há quebra de linha",
      example: "align-content: space-between;",
    },
    {
      property: "gap",
      values: ["<length>", "<percentage>"],
      description: "Define o espaçamento entre os items",
      example: "gap: 16px;",
    },
  ]

  const itemProperties = [
    {
      property: "flex-grow",
      values: ["<number>"],
      description: "Define o fator de crescimento do item",
      example: "flex-grow: 1;",
    },
    {
      property: "flex-shrink",
      values: ["<number>"],
      description: "Define o fator de encolhimento do item",
      example: "flex-shrink: 0;",
    },
    {
      property: "flex-basis",
      values: ["auto", "<length>", "<percentage>"],
      description: "Define o tamanho base do item antes da distribuição do espaço",
      example: "flex-basis: 200px;",
    },
    {
      property: "flex",
      values: ["none", "<flex-grow> <flex-shrink> <flex-basis>"],
      description: "Shorthand para flex-grow, flex-shrink e flex-basis",
      example: "flex: 1 0 auto;",
    },
    {
      property: "align-self",
      values: ["auto", "stretch", "flex-start", "flex-end", "center", "baseline"],
      description: "Sobrescreve o align-items para um item específico",
      example: "align-self: flex-end;",
    },
    {
      property: "order",
      values: ["<integer>"],
      description: "Define a ordem de exibição do item",
      example: "order: 2;",
    },
  ]

  const commonPatterns = [
    {
      name: "Centralização Perfeita",
      description: "Centraliza um elemento horizontal e verticalmente",
      css: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}`,
    },
    {
      name: "Layout de Três Colunas",
      description: "Cria um layout com sidebar, conteúdo e sidebar",
      css: `.container {
  display: flex;
}
.sidebar {
  flex: 0 0 200px;
}
.content {
  flex: 1;
}
.aside {
  flex: 0 0 150px;
}`,
    },
    {
      name: "Navbar Responsiva",
      description: "Navbar com logo à esquerda e menu à direita",
      css: `.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
.logo {
  flex-shrink: 0;
}
.menu {
  display: flex;
  gap: 1rem;
}`,
    },
    {
      name: "Cards Responsivos",
      description: "Grid de cards que se adapta ao tamanho da tela",
      css: `.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.card {
  flex: 1 1 300px;
  min-width: 0;
}`,
    },
    {
      name: "Footer Sticky",
      description: "Footer que fica sempre no final da página",
      css: `.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content {
  flex: 1;
}
.footer {
  flex-shrink: 0;
}`,
    },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Referência Completa do CSS Flexbox</CardTitle>
          <CardDescription>Guia completo com todas as propriedades e valores do Flexbox</CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="container" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="container">Propriedades do Container</TabsTrigger>
          <TabsTrigger value="items">Propriedades dos Items</TabsTrigger>
          <TabsTrigger value="patterns">Padrões Comuns</TabsTrigger>
        </TabsList>

        <TabsContent value="container" className="space-y-4">
          {containerProperties.map((prop, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{prop.property}</CardTitle>
                <CardDescription>{prop.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium mb-2">Valores possíveis:</h4>
                    <div className="flex flex-wrap gap-2">
                      {prop.values.map((value, i) => (
                        <Badge key={i} variant="secondary">
                          {value}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Exemplo:</h4>
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">{prop.example}</code>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="items" className="space-y-4">
          {itemProperties.map((prop, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{prop.property}</CardTitle>
                <CardDescription>{prop.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium mb-2">Valores possíveis:</h4>
                    <div className="flex flex-wrap gap-2">
                      {prop.values.map((value, i) => (
                        <Badge key={i} variant="secondary">
                          {value}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Exemplo:</h4>
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">{prop.example}</code>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="patterns" className="space-y-4">
          {commonPatterns.map((pattern, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{pattern.name}</CardTitle>
                <CardDescription>{pattern.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">{pattern.css}</pre>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
