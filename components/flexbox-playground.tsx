"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { RotateCcw } from "lucide-react"

export function FlexboxPlayground() {
  const [flexDirection, setFlexDirection] = useState("row")
  const [justifyContent, setJustifyContent] = useState("flex-start")
  const [alignItems, setAlignItems] = useState("stretch")
  const [flexWrap, setFlexWrap] = useState("nowrap")
  const [gap, setGap] = useState([0])
  const [itemCount, setItemCount] = useState([3])

  const resetSettings = () => {
    setFlexDirection("row")
    setJustifyContent("flex-start")
    setAlignItems("stretch")
    setFlexWrap("nowrap")
    setGap([0])
    setItemCount([3])
  }

  const containerStyle = {
    display: "flex",
    flexDirection: flexDirection as any,
    justifyContent: justifyContent as any,
    alignItems: alignItems as any,
    flexWrap: flexWrap as any,
    gap: `${gap[0]}px`,
    minHeight: "200px",
    padding: "16px",
    border: "2px dashed #e2e8f0",
    borderRadius: "8px",
    backgroundColor: "#f8fafc",
  }

  const generateCSS = () => {
    return `.flex-container {
  display: flex;
  flex-direction: ${flexDirection};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  flex-wrap: ${flexWrap};${gap[0] > 0 ? `\n  gap: ${gap[0]}px;` : ""}
  min-height: 200px;
  padding: 16px;
}`
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Playground Interativo</CardTitle>
              <CardDescription>
                Experimente com as propriedades do Flexbox e veja os resultados em tempo real
              </CardDescription>
            </div>
            <Button variant="outline" size="sm" onClick={resetSettings}>
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Controls */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Flex Direction</Label>
                  <Select value={flexDirection} onValueChange={setFlexDirection}>
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
                  <Label>Flex Wrap</Label>
                  <Select value={flexWrap} onValueChange={setFlexWrap}>
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
              </div>

              <div className="space-y-2">
                <Label>Justify Content</Label>
                <Select value={justifyContent} onValueChange={setJustifyContent}>
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
                <Select value={alignItems} onValueChange={setAlignItems}>
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
                <Label>Gap: {gap[0]}px</Label>
                <Slider value={gap} onValueChange={setGap} max={40} step={4} className="w-full" />
              </div>

              <div className="space-y-2">
                <Label>Número de Itens: {itemCount[0]}</Label>
                <Slider value={itemCount} onValueChange={setItemCount} min={1} max={8} step={1} className="w-full" />
              </div>
            </div>

            {/* Preview */}
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium">Preview:</Label>
                <div style={containerStyle} className="mt-2">
                  {Array.from({ length: itemCount[0] }, (_, i) => (
                    <div
                      key={i}
                      className="bg-blue-500 text-white p-3 rounded text-center font-medium min-w-[60px]"
                      style={{
                        backgroundColor: `hsl(${(i * 60) % 360}, 70%, 50%)`,
                        minHeight: alignItems === "stretch" ? "auto" : "40px",
                      }}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium">CSS Gerado:</Label>
                <pre className="mt-2 p-3 bg-gray-900 text-green-400 rounded text-xs overflow-x-auto">
                  {generateCSS()}
                </pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
