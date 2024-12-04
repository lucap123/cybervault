import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SecuritySettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Two-Factor Authentication</CardTitle>
          <CardDescription>Add an extra layer of security to your account.</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center space-x-2">
          <Switch id="2fa" />
          <Label htmlFor="2fa">Enable Two-Factor Authentication</Label>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Password Rotation</CardTitle>
          <CardDescription>Regularly update your passwords for enhanced security.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center space-x-2">
            <Switch id="rotation" />
            <Label htmlFor="rotation">Enable Password Rotation</Label>
          </div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Rotation Frequency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="30">Every 30 days</SelectItem>
              <SelectItem value="60">Every 60 days</SelectItem>
              <SelectItem value="90">Every 90 days</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Data Encryption</CardTitle>
          <CardDescription>Choose the encryption method for your stored passwords.</CardDescription>
        </CardHeader>
        <CardContent>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Encryption Method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="aes256">AES-256</SelectItem>
              <SelectItem value="chacha20">ChaCha20</SelectItem>
              <SelectItem value="twofish">Twofish</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>
    </div>
  )
}

