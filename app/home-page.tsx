'use client'

import { useState } from 'react'
import { Shield, Key, Plus, Settings, LogOut, Sun, Moon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Dashboard from './dashboard'
import AddPassword from './add-password'
import PasswordGenerator from './password-generator'
import SecuritySettings from './security-settings'
import { useTheme } from 'next-themes'

export function HomePage() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex h-screen bg-background text-foreground">
      <nav className="w-64 bg-secondary p-4 flex flex-col">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Shield className="w-8 h-8 text-primary mr-2" />
            <h1 className="text-2xl font-bold">CyberVault</h1>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
        </div>
        <Button
          variant={activeTab === 'dashboard' ? 'default' : 'ghost'}
          className="justify-start mb-2"
          onClick={() => setActiveTab('dashboard')}
        >
          <Key className="mr-2 h-4 w-4" /> Dashboard
        </Button>
        <Button
          variant={activeTab === 'add' ? 'default' : 'ghost'}
          className="justify-start mb-2"
          onClick={() => setActiveTab('add')}
        >
          <Plus className="mr-2 h-4 w-4" /> Add Password
        </Button>
        <Button
          variant={activeTab === 'generate' ? 'default' : 'ghost'}
          className="justify-start mb-2"
          onClick={() => setActiveTab('generate')}
        >
          <Key className="mr-2 h-4 w-4" /> Generate Password
        </Button>
        <Button
          variant={activeTab === 'settings' ? 'default' : 'ghost'}
          className="justify-start mb-2"
          onClick={() => setActiveTab('settings')}
        >
          <Settings className="mr-2 h-4 w-4" /> Security Settings
        </Button>
        <div className="flex-grow" />
        <Button variant="ghost" className="justify-start">
          <LogOut className="mr-2 h-4 w-4" /> Logout
        </Button>
      </nav>
      <main className="flex-grow p-8">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'add' && <AddPassword />}
        {activeTab === 'generate' && <PasswordGenerator />}
        {activeTab === 'settings' && <SecuritySettings />}
      </main>
    </div>
  )
}

