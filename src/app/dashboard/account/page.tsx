'use client'

import { useState } from 'react'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { User, Mail, Lock, Bell, Trash2 } from 'lucide-react'

export default function AccountPage() {
  const [formData, setFormData] = useState({
    name: 'Jane Smith',
    email: 'jane@example.com',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle account update
  }

  return (
    <>
      <Navigation />
      
      <main className="section-padding bg-cream min-h-screen">
        <div className="container-main max-w-2xl">
          <h1 className="text-3xl font-serif font-semibold text-charcoal mb-8">
            Account Settings
          </h1>

          {/* Profile Section */}
          <Card className="bg-white mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-olive/10 rounded-full flex items-center justify-center">
                  <User className="h-8 w-8 text-olive" />
                </div>
                <div>
                  <h2 className="font-semibold text-charcoal">Profile</h2>
                  <p className="text-sm text-warm-gray">Manage your personal information</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Full Name
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <Button type="submit" className="bg-olive hover:bg-olive/90">
                  Save Changes
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Password Section */}
          <Card className="bg-white mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-olive/10 rounded-full flex items-center justify-center">
                  <Lock className="h-6 w-6 text-olive" />
                </div>
                <div>
                  <h2 className="font-semibold text-charcoal">Change Password</h2>
                  <p className="text-sm text-warm-gray">Update your password</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Current Password
                  </label>
                  <Input
                    type="password"
                    value={formData.currentPassword}
                    onChange={(e) => setFormData({ ...formData, currentPassword: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    New Password
                  </label>
                  <Input
                    type="password"
                    value={formData.newPassword}
                    onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Confirm New Password
                  </label>
                  <Input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  />
                </div>

                <Button type="submit" variant="outline" className="border-olive text-olive">
                  Update Password
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Notifications Section */}
          <Card className="bg-white mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-olive/10 rounded-full flex items-center justify-center">
                  <Bell className="h-6 w-6 text-olive" />
                </div>
                <div>
                  <h2 className="font-semibold text-charcoal">Notifications</h2>
                  <p className="text-sm text-warm-gray">Manage your email preferences</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-sand rounded-card">
                  <div>
                    <p className="font-medium text-charcoal">Weekly Updates</p>
                    <p className="text-sm text-warm-gray">Get weekly tips and resources</p>
                  </div>
                  <Badge className="bg-olive">Enabled</Badge>
                </div>

                <div className="flex items-center justify-between p-4 bg-sand rounded-card">
                  <div>
                    <p className="font-medium text-charcoal">Session Reminders</p>
                    <p className="text-sm text-warm-gray">Get notified about upcoming sessions</p>
                  </div>
                  <Badge className="bg-olive">Enabled</Badge>
                </div>

                <div className="flex items-center justify-between p-4 bg-sand rounded-card">
                  <div>
                    <p className="font-medium text-charcoal">Marketing Emails</p>
                    <p className="text-sm text-warm-gray">News about new products and offers</p>
                  </div>
                  <Badge variant="secondary" className="bg-warm-gray/20 text-charcoal">Disabled</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Danger Zone */}
          <Card className="bg-white border-red-200">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Trash2 className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h2 className="font-semibold text-red-600">Danger Zone</h2>
                  <p className="text-sm text-warm-gray">Irreversible actions</p>
                </div>
              </div>

              <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                Delete Account
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </>
  )
}
