'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Navigation } from '@/components/layout/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, CheckCircle, Clock, XCircle, MessageCircle, ExternalLink } from 'lucide-react'

interface Application {
  id: string
  parent_name: string
  email: string
  phone: string
  teen_name: string
  teen_age: string
  teen_grade: string
  what_struggling: string
  heard_about: string
  commitment: boolean
  status: 'pending' | 'contacted' | 'accepted' | 'declined'
  created_at: string
}

export default function ApplicationsAdminPage() {
  const [applications, setApplications] = useState<Application[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedApp, setSelectedApp] = useState<Application | null>(null)
  const [filter, setFilter] = useState<'all' | 'pending' | 'contacted' | 'accepted' | 'declined'>('all')

  useEffect(() => {
    fetchApplications()
  }, [])

  const fetchApplications = async () => {
    try {
      const response = await fetch('/api/applications')
      if (response.ok) {
        const data = await response.json()
        setApplications(data.data || [])
      }
    } catch (error) {
      console.error('Failed to fetch applications:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (id: string, status: Application['status']) => {
    try {
      const response = await fetch(`/api/applications/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      })
      
      if (response.ok) {
        setApplications(prev => 
          prev.map(app => app.id === id ? { ...app, status } : app)
        )
        if (selectedApp?.id === id) {
          setSelectedApp({ ...selectedApp, status })
        }
      }
    } catch (error) {
      console.error('Failed to update status:', error)
    }
  }

  const filteredApps = applications.filter(app => 
    filter === 'all' ? true : app.status === filter
  )

  const getStatusBadge = (status: Application['status']) => {
    switch (status) {
      case 'pending':
        return <Badge variant="secondary" className="bg-amber-100 text-amber-700"><Clock className="h-3 w-3 mr-1" /> Pending</Badge>
      case 'contacted':
        return <Badge className="bg-blue-100 text-blue-700"><MessageCircle className="h-3 w-3 mr-1" /> Contacted</Badge>
      case 'accepted':
        return <Badge className="bg-green-100 text-green-700"><CheckCircle className="h-3 w-3 mr-1" /> Accepted</Badge>
      case 'declined':
        return <Badge variant="secondary" className="bg-red-100 text-red-700"><XCircle className="h-3 w-3 mr-1" /> Declined</Badge>
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-ZA', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-cream">
        <div className="container-main py-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link href="/admin">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-serif font-semibold text-charcoal">Applications</h1>
              <p className="text-warm-gray">Manage ROOTED Circle applications</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-white">
              <CardContent className="p-4 text-center">
                <p className="text-3xl font-bold text-olive">{applications.length}</p>
                <p className="text-sm text-warm-gray">Total</p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-4 text-center">
                <p className="text-3xl font-bold text-amber-600">{applications.filter(a => a.status === 'pending').length}</p>
                <p className="text-sm text-warm-gray">Pending</p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-4 text-center">
                <p className="text-3xl font-bold text-green-600">{applications.filter(a => a.status === 'accepted').length}</p>
                <p className="text-sm text-warm-gray">Accepted</p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-4 text-center">
                <p className="text-3xl font-bold text-red-600">{applications.filter(a => a.status === 'declined').length}</p>
                <p className="text-sm text-warm-gray">Declined</p>
              </CardContent>
            </Card>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {(['all', 'pending', 'contacted', 'accepted', 'declined'] as const).map(status => (
              <Button
                key={status}
                variant={filter === status ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setFilter(status)}
                className={filter === status ? 'bg-olive text-cream' : ''}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </Button>
            ))}
          </div>

          {/* Applications List */}
          {loading ? (
            <Card className="bg-white">
              <CardContent className="p-8 text-center text-warm-gray">
                Loading applications...
              </CardContent>
            </Card>
          ) : filteredApps.length === 0 ? (
            <Card className="bg-white">
              <CardContent className="p-8 text-center text-warm-gray">
                No applications found.
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {filteredApps.map(app => (
                <Card key={app.id} className="bg-white hover:shadow-soft transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-serif font-semibold text-charcoal">
                            {app.parent_name}
                          </h3>
                          {getStatusBadge(app.status)}
                        </div>
                        <p className="text-warm-gray text-sm mb-1">
                          Teen: {app.teen_name} ({app.teen_age} years, {app.teen_grade})
                        </p>
                        <p className="text-warm-gray text-sm">
                          {app.email} • {app.phone}
                        </p>
                        <p className="text-warm-gray text-xs mt-2">
                          Applied: {formatDate(app.created_at)}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setSelectedApp(app)}
                        >
                          View Details
                        </Button>
                        <a 
                          href={`mailto:${app.email}?subject=ROOTED Circle Application`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Application Detail Modal */}
        {selectedApp && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <Card className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <CardHeader className="sticky top-0 bg-white border-b">
                <div className="flex items-center justify-between">
                  <CardTitle className="font-serif">Application Details</CardTitle>
                  <Button variant="ghost" size="sm" onClick={() => setSelectedApp(null)}>
                    ✕
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {/* Status */}
                <div className="flex items-center justify-between pb-4 border-b">
                  <span className="text-warm-gray">Status</span>
                  {getStatusBadge(selectedApp.status)}
                </div>

                {/* Parent Info */}
                <div>
                  <h4 className="font-medium text-charcoal mb-3">Parent Details</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-warm-gray">Name:</span>
                      <p className="text-charcoal">{selectedApp.parent_name}</p>
                    </div>
                    <div>
                      <span className="text-warm-gray">Email:</span>
                      <p className="text-charcoal">{selectedApp.email}</p>
                    </div>
                    <div>
                      <span className="text-warm-gray">Phone:</span>
                      <p className="text-charcoal">{selectedApp.phone}</p>
                    </div>
                  </div>
                </div>

                {/* Teen Info */}
                <div>
                  <h4 className="font-medium text-charcoal mb-3">Teen Details</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-warm-gray">Name:</span>
                      <p className="text-charcoal">{selectedApp.teen_name}</p>
                    </div>
                    <div>
                      <span className="text-warm-gray">Age:</span>
                      <p className="text-charcoal">{selectedApp.teen_age} years</p>
                    </div>
                    <div>
                      <span className="text-warm-gray">Grade:</span>
                      <p className="text-charcoal">{selectedApp.teen_grade}</p>
                    </div>
                  </div>
                </div>

                {/* What they're struggling with */}
                <div>
                  <h4 className="font-medium text-charcoal mb-3">What Brought Them Here</h4>
                  <p className="text-warm-gray text-sm whitespace-pre-wrap">{selectedApp.what_struggling}</p>
                </div>

                {/* How they heard */}
                <div>
                  <h4 className="font-medium text-charcoal mb-3">How They Found Rooted</h4>
                  <p className="text-warm-gray text-sm">{selectedApp.heard_about || 'Not specified'}</p>
                </div>

                {/* Commitment */}
                <div className="flex items-center gap-2">
                  {selectedApp.commitment ? (
                    <>
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm text-green-700">Family has committed to the programme</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="h-5 w-5 text-red-600" />
                      <span className="text-sm text-red-700">Commitment not confirmed</span>
                    </>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t">
                  <a 
                    href={`mailto:${selectedApp.email}?subject=ROOTED Circle Application - ${selectedApp.parent_name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full bg-olive text-cream hover:bg-olive-dark">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Send Email
                    </Button>
                  </a>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <Button 
                    variant="outline" 
                    className="border-green-600 text-green-700 hover:bg-green-50"
                    onClick={() => updateStatus(selectedApp.id, 'accepted')}
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Accept
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-red-600 text-red-700 hover:bg-red-50"
                    onClick={() => updateStatus(selectedApp.id, 'declined')}
                  >
                    <XCircle className="h-4 w-4 mr-2" />
                    Decline
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button 
                    variant="outline"
                    onClick={() => updateStatus(selectedApp.id, 'contacted')}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Mark Contacted
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => updateStatus(selectedApp.id, 'pending')}
                  >
                    <Clock className="h-4 w-4 mr-2" />
                    Mark Pending
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </>
  )
}
