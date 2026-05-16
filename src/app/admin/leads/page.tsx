'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Search, Download, Mail, Filter, CheckCircle, Clock } from 'lucide-react'

const sampleLeads = [
  { id: '1', email: 'parent1@example.com', whatsappOptIn: true, downloadedAt: '2024-01-20 10:30', status: 'downloaded' },
  { id: '2', email: 'parent2@example.com', whatsappOptIn: false, downloadedAt: '2024-01-20 09:15', status: 'downloaded' },
  { id: '3', email: 'parent3@example.com', whatsappOptIn: true, downloadedAt: '2024-01-19 16:45', status: 'downloaded' },
  { id: '4', email: 'parent4@example.com', whatsappOptIn: false, downloadedAt: '2024-01-19 14:20', status: 'pending' },
  { id: '5', email: 'parent5@example.com', whatsappOptIn: true, downloadedAt: '2024-01-18 11:00', status: 'downloaded' },
  { id: '6', email: 'parent6@example.com', whatsappOptIn: true, downloadedAt: '2024-01-18 08:30', status: 'downloaded' },
]

export default function AdminLeadsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const filteredLeads = sampleLeads.filter(lead => {
    const matchesSearch = lead.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const whatsappOptIns = sampleLeads.filter(l => l.whatsappOptIn).length
  const totalDownloads = sampleLeads.filter(l => l.status === 'downloaded').length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-serif font-semibold text-cream">Lead Magnet Leads</h1>
          <p className="text-warm-gray">Manage email captures from the free starter kit</p>
        </div>
        <Button variant="outline" className="border-white/10 text-cream">
          <Download className="h-4 w-4 mr-2" />
          Export CSV
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-olive/20 rounded-card flex items-center justify-center">
                <Mail className="h-6 w-6 text-olive" />
              </div>
              <div>
                <p className="text-3xl font-bold text-cream">{sampleLeads.length}</p>
                <p className="text-sm text-warm-gray">Total Signups</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-card flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <p className="text-3xl font-bold text-cream">{totalDownloads}</p>
                <p className="text-sm text-warm-gray">Downloads</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-terracotta/20 rounded-card flex items-center justify-center">
                <Mail className="h-6 w-6 text-terracotta" />
              </div>
              <div>
                <p className="text-3xl font-bold text-cream">{whatsappOptIns}</p>
                <p className="text-sm text-warm-gray">WhatsApp Opt-ins</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="bg-white/5 border-white/10">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-warm-gray" />
              <Input
                placeholder="Search by email..."
                className="pl-10 bg-white/10 border-white/10 text-cream placeholder:text-warm-gray"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <select 
                className="px-4 py-2 bg-white/10 border border-white/10 rounded-card text-cream"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="downloaded">Downloaded</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Leads Table */}
      <Card className="bg-white/5 border-white/10">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-sm font-medium text-warm-gray">Email</th>
                  <th className="text-left p-4 text-sm font-medium text-warm-gray">WhatsApp</th>
                  <th className="text-left p-4 text-sm font-medium text-warm-gray">Status</th>
                  <th className="text-left p-4 text-sm font-medium text-warm-gray">Downloaded</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="border-b border-white/5 hover:bg-white/5">
                    <td className="p-4">
                      <p className="text-cream font-medium">{lead.email}</p>
                    </td>
                    <td className="p-4">
                      {lead.whatsappOptIn ? (
                        <Badge className="bg-green-500/20 text-green-400">Opted In</Badge>
                      ) : (
                        <Badge variant="secondary">No</Badge>
                      )}
                    </td>
                    <td className="p-4">
                      <Badge 
                        className={lead.status === 'downloaded' ? 'bg-olive/20 text-olive' : 'bg-yellow-500/20 text-yellow-400'}
                      >
                        {lead.status === 'downloaded' ? (
                          <CheckCircle className="h-3 w-3 mr-1" />
                        ) : (
                          <Clock className="h-3 w-3 mr-1" />
                        )}
                        {lead.status}
                      </Badge>
                    </td>
                    <td className="p-4 text-warm-gray text-sm">
                      {new Date(lead.downloadedAt).toLocaleString('en-ZA')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="flex items-center justify-between p-4 border-t border-white/10">
            <p className="text-sm text-warm-gray">
              Showing {filteredLeads.length} of {sampleLeads.length} leads
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border-white/10 text-cream" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" className="border-white/10 text-cream">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
