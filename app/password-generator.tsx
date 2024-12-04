import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"

export default function PasswordGenerator() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(12)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)

  const generatePassword = () => {
    // This is a simplified password generation logic
    // In a real app, you'd want to use a more secure method
    let charset = 'abcdefghijklmnopqrstuvwxyz'
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (includeNumbers) charset += '0123456789'
    if (includeSymbols) charset += '!@#$%^&*()_+{}[]|:;<>,.?~'

    let newPassword = ''
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    setPassword(newPassword)
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Password Generator</CardTitle>
        <CardDescription>Create a secure password.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="password">Generated Password</Label>
            <Input id="password" value={password} readOnly />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="length">Password Length: {length}</Label>
            <Slider
              id="length"
              min={8}
              max={32}
              step={1}
              value={[length]}
              onValueChange={(value) => setLength(value[0])}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="uppercase"
              checked={includeUppercase}
              onCheckedChange={setIncludeUppercase}
            />
            <Label htmlFor="uppercase">Include Uppercase Letters</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="numbers"
              checked={includeNumbers}
              onCheckedChange={setIncludeNumbers}
            />
            <Label htmlFor="numbers">Include Numbers</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="symbols"
              checked={includeSymbols}
              onCheckedChange={setIncludeSymbols}
            />
            <Label htmlFor="symbols">Include Symbols</Label>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={generatePassword}>Generate Password</Button>
      </CardFooter>
    </Card>
  )
}

