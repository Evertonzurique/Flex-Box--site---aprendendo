"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, Eye } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

interface Challenge {
  id: number
  title: string
  description: string
  difficulty: "Fácil" | "Médio" | "Difícil"
  targetLayout: string
  solution: {
    flexDirection?: string
    justifyContent?: string
    alignItems?: string
    flexWrap?: string
    gap?: string
  }
  items: number
}

const challenges: Challenge[] = [
  {
    id: 1,
    title: "Centralizar um Item",
    description: "Centre o item tanto horizontal quanto verticalmente no container.",
    difficulty: "Fácil",
    targetLayout: "center-single",
    solution: {
      justifyContent: "center",
      alignItems: "center",
    },
    items: 1,
  },
  {
    id: 2,
    title: "Distribuição Igual",
    description: "Distribua os itens com espaçamento igual entre eles.",
    difficulty: "Fácil",
    targetLayout: "space-between",
    solution: {
      justifyContent: "space-between",
      alignItems: "center",
    },
    items: 3,
  },
  {
    id: 3,
    title: "Layout em Coluna",
    description: "Organize os itens em uma coluna centralizada.",
    difficulty: "Médio",
    targetLayout: "column-center",
    solution: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    items: 3,
  },
  {
    id: 4,
    title: "Navbar Responsiva",
    description: "Crie um layout de navbar com logo à esquerda e menu à direita.",
    difficulty: "Médio",
    targetLayout: "navbar",
    solution: {
      justifyContent: "space-between",
      alignItems: "center",
    },
    items: 2,
  },
  {
    id: 5,
    title: "Grid Flexível",
    description: "Crie um layout que quebra linha quando necessário com espaçamento uniforme.",
    difficulty: "Difícil",
    targetLayout: "flex-grid",
    solution: {
      flexWrap: "wrap",
      justifyContent: "space-around",
      alignItems: "center",
      gap: "16px",
    },
    items: 6,
  },
]

export function FlexboxChallenges() {
  const [currentChallenge, setCurrentChallenge] = useState(0)
  const [userSolution, setUserSolution] = useState({
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "stretch",
    flexWrap: "nowrap",
    gap: "0",
  })
  const [showSolution, setShowSolution] = useState(false)
  const [completedChallenges, setCompletedChallenges] = useState<number[]>([])

  const challenge = challenges[currentChallenge]

  const checkSolution = () => {
    const solution = challenge.solution
    const isCorrect = Object.entries(solution).every(([key, value]) => {
      if (key === "gap" && value === "16px") {
        return userSolution.gap !== "0"
      }
      return userSolution[key as keyof typeof userSolution] === value
    })

    if (isCorrect && !completedChallenges.includes(challenge.id)) {
      setCompletedChallenges([...completedChallenges, challenge.id])
    }

    return isCorrect
  }

  const resetChallenge = () => {
    setUserSolution({
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "stretch",
      flexWrap: "nowrap",
      gap: "0",
    })
    setShowSolution(false)
  }

  const nextChallenge = () => {
    if (currentChallenge < challenges.length - 1) {
      setCurrentChallenge(currentChallenge + 1)
      resetChallenge()
    }
  }

  const prevChallenge = () => {
    if (currentChallenge > 0) {
      setCurrentChallenge(currentChallenge - 1)
      resetChallenge()
    }
  }

  const userStyle = {
    display: "flex",
    flexDirection: userSolution.flexDirection as any,
    justifyContent: userSolution.justifyContent as any,
    alignItems: userSolution.alignItems as any,
    flexWrap: userSolution.flexWrap as any,
    gap: userSolution.gap === "0" ? "0" : "16px",
    minHeight: "200px",
    padding: "16px",
    border: "2px solid #e2e8f0",
    borderRadius: "8px",
    backgroundColor: "#f8fafc",
  }

  const solutionStyle = {
    display: "flex",
    flexDirection: (challenge.solution.flexDirection || "row") as any,
    justifyContent: (challenge.solution.justifyContent || "flex-start") as any,
    alignItems: (challenge.solution.alignItems || "stretch") as any,
    flexWrap: (challenge.solution.flexWrap || "nowrap") as any,
    gap: challenge.solution.gap || "0",
    minHeight: "200px",
    padding: "16px",
    border: "2px solid #10b981",
    borderRadius: "8px",
    backgroundColor: "#ecfdf5",
  }

  const isCorrect = checkSolution()

  return (
    <div className="space-y-6">
      {/* Challenge Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                Desafio {challenge.id}: {challenge.title}
                {completedChallenges.includes(challenge.id) && <CheckCircle className="w-5 h-5 text-green-500" />}
              </CardTitle>
              <CardDescription>{challenge.description}</CardDescription>
            </div>
            <Badge
              variant={
                challenge.difficulty === "Fácil"
                  ? "secondary"
                  : challenge.difficulty === "Médio"
                    ? "default"
                    : "destructive"
              }
            >
              {challenge.difficulty}
            </Badge>
          </div>
        </CardHeader>
      </Card>

      {/* Challenge Content */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Controls */}
        <Card>
          <CardHeader>
            <CardTitle>Suas Configurações</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Flex Direction</Label>
              <Select
                value={userSolution.flexDirection}
                onValueChange={(value) => setUserSolution({ ...userSolution, flexDirection: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="row">row</SelectItem>
                  <SelectItem value="row-reverse">row-reverse</SelectItem>
                  <SelectItem value="column">column</SelectItem>
                  <SelectItem value="column-reverse">column-reverse</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Justify Content</Label>
              <Select
                value={userSolution.justifyContent}
                onValueChange={(value) => setUserSolution({ ...userSolution, justifyContent: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="flex-start">flex-start</SelectItem>
                  <SelectItem value="flex-end">flex-end</SelectItem>
                  <SelectItem value="center">center</SelectItem>
                  <SelectItem value="space-between">space-between</SelectItem>
                  <SelectItem value="space-around">space-around</SelectItem>
                  <SelectItem value="space-evenly">space-evenly</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Align Items</Label>
              <Select
                value={userSolution.alignItems}
                onValueChange={(value) => setUserSolution({ ...userSolution, alignItems: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="stretch">stretch</SelectItem>
                  <SelectItem value="flex-start">flex-start</SelectItem>
                  <SelectItem value="flex-end">flex-end</SelectItem>
                  <SelectItem value="center">center</SelectItem>
                  <SelectItem value="baseline">baseline</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Flex Wrap</Label>
              <Select
                value={userSolution.flexWrap}
                onValueChange={(value) => setUserSolution({ ...userSolution, flexWrap: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nowrap">nowrap</SelectItem>
                  <SelectItem value="wrap">wrap</SelectItem>
                  <SelectItem value="wrap-reverse">wrap-reverse</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Gap</Label>
              <Select
                value={userSolution.gap}
                onValueChange={(value) => setUserSolution({ ...userSolution, gap: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">Sem gap</SelectItem>
                  <SelectItem value="16">16px</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-2 pt-4">
              <Button onClick={() => setShowSolution(!showSolution)} variant="outline" size="sm">
                <Eye className="w-4 h-4 mr-2" />
                {showSolution ? "Ocultar" : "Ver"} Solução
              </Button>
              <Button onClick={resetChallenge} variant="outline" size="sm">
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Preview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Seu Resultado
              {isCorrect ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500" />
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div style={userStyle}>
              {Array.from({ length: challenge.items }, (_, i) => (
                <div
                  key={i}
                  className="bg-blue-500 text-white p-3 rounded text-center font-medium"
                  style={{
                    backgroundColor: `hsl(${(i * 60) % 360}, 70%, 50%)`,
                    minWidth: challenge.targetLayout === "navbar" && i === 0 ? "80px" : "60px",
                    width: challenge.targetLayout === "navbar" && i === 1 ? "120px" : "auto",
                  }}
                >
                  {challenge.targetLayout === "navbar" ? (i === 0 ? "Logo" : "Menu") : i + 1}
                </div>
              ))}
            </div>

            {showSolution && (
              <div className="mt-4">
                <Label className="text-sm font-medium text-green-700">Solução Correta:</Label>
                <div style={solutionStyle} className="mt-2">
                  {Array.from({ length: challenge.items }, (_, i) => (
                    <div
                      key={i}
                      className="bg-green-500 text-white p-3 rounded text-center font-medium"
                      style={{
                        minWidth: challenge.targetLayout === "navbar" && i === 0 ? "80px" : "60px",
                        width: challenge.targetLayout === "navbar" && i === 1 ? "120px" : "auto",
                      }}
                    >
                      {challenge.targetLayout === "navbar" ? (i === 0 ? "Logo" : "Menu") : i + 1}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button onClick={prevChallenge} disabled={currentChallenge === 0} variant="outline">
          Anterior
        </Button>

        <div className="text-sm text-gray-600">
          {currentChallenge + 1} de {challenges.length} desafios
        </div>

        <Button onClick={nextChallenge} disabled={currentChallenge === challenges.length - 1}>
          Próximo
        </Button>
      </div>

      {/* Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Seu Progresso</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 flex-wrap">
            {challenges.map((ch) => (
              <Badge
                key={ch.id}
                variant={completedChallenges.includes(ch.id) ? "default" : "secondary"}
                className={completedChallenges.includes(ch.id) ? "bg-green-500" : ""}
              >
                {ch.id}
              </Badge>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-2">
            {completedChallenges.length} de {challenges.length} desafios concluídos
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
