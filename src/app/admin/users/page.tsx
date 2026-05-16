'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Search, Filter, MoreVertical, Mail, Edit, Trash2, UserPlus } from 'lucide-react'

const sampleUsers = [
  { id: '1', name: 'Sarah Johnson', email: 'sarah@example.com', phone: '+27 82 123 4567', tier: 'Plus', status: 'active', joined: '2024-01-15', lastActive: '2024-01-20' },
  { id: '2', name: 'Michael Chen', email: 'michael@example.com', phone: '+27 83 234 5678', tier: 'Core', status: 'active', joined: '2024-01-14', lastActive: '2024-01-19' },
  { id: '3', name: 'Emma Williams', email: 'emma@example.com', phone: '+27 84 345 6789', tier: 'Family', status: 'active', joined: '2024-01-13', lastActive: '2024-01-20' },
  { id: '4', name: 'James Brown', email: 'james@example.com', phone: '+27 85 456 7890', tier: 'Plus', status: 'active', joined: '2024-01-12', lastActive: '2024-01-18' },
  { id: '5', name: 'Lisa van der Berg', email: 'lisa@example.com', phone: '+27 86 567 8901', tier: 'Core', status: 'paused', joined: '2024-01-10', lastActive: '2024-01-15' },
  { id: '6', name: 'David Mbeki', email: 'david@example.com', phone: '+27 87 678 9012', tier: 'Plus', status: 'active', joined: '2024-01-08', lastActive: '2024-01-20' },
]

export default function AdminUsersPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [tierFilter, setTierFilter] = useState('all')

  const filteredUsers = sampleUsers.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTier = tierFilter === 'all' || user.tier.toLowerCase() === tierFilter
    return matchesSearch && matchesTier
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-serif font-semibold text-cream">Users</h1>
          <p className="text-warm-gray">Manage platform users and memberships</p>
        </div>
        <Button className="bg-olive">
          <UserPlus className="h-4 w-4 mr-2" />
          Add User
        </Button>
      </div>

      {/* Filters */}
      <Card className="bg-white/5 border-white/10">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-warm-gray" />
              <Input
                placeholder="Search by name or email..."
                className="pl-10 bg-white/10 border-white/10 text-cream placeholder:text-warm-gray"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <select 
                className="px-4 py-2 bg-white/10 border border-white/10 rounded-card text-cream"
                value={tierFilter}
                onChange={(e) => setTierFilter(e.target.value)}
              >
                <option value="all">All Tiers</option>
                <option value="core">Core</option>
                <option value="plus">Plus</option>
                <option value="family">Family</option>
              </select>
              <Button variant="outline" className="border-white/10 text-cream">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card className="bg-white/5 border-white/10">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-sm font-medium text-warm-gray">User</th>
                  <th className="text-left p-4 text-sm font-medium text-warm-gray">Membership</th>
                  <th className="text-left p-4 text-sm font-medium text-warm-gray">Status</th>
                  <th className="text-left p-4 text-sm font-medium text-warm-gray">Joined</th>
                  <th className="text-left p-4 text-sm font-medium text-warm-gray">Last Active</th>
                  <th className="text-right p-4 text-sm font-medium text-warm-gray">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="border-b border-white/5 hover:bg-white/5">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-sand rounded-full flex items-center justify-center">
                          <span className="text-charcoal font-medium text-sm">
                            {user.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="text-cream font-medium">{user.name}</p>
                          <p className="text-sm text-warm-gray">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge 
                        variant="default"
                        className={`${
                          user.tier === 'Family' ? 'bg-terracotta/20 text-terracotta' :
                          user.tier === 'Plus' ? 'bg-olive/20 text-olive' :
                          'bg-sand text-charcoal'
                        }`}
                      >
                        {user.tier}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <Badge 
                        variant="default"
                        className={user.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}
                      >
                        {user.status}
                      </Badge>
                    </td>
                    <td className="p-4 text-warm-gray text-sm">
                      {new Date(user.joined).toLocaleDateString('en-ZA')}
                    </td>
                    <td className="p-4 text-warm-gray text-sm">
                      {new Date(user.lastActive).toLocaleDateString('en-ZA')}
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 hover:bg-white/10 rounded-card text-warm-gray hover:text-cream transition-colors">
                          <Mail className="h-4 w-4" />
                        </button>
                        <button className="p-2 hover:bg-white/10 rounded-card text-warm-gray hover:text-cream transition-colors">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="p-2 hover:bg-white/10 rounded-card text-warm-gray hover:text-red-400 transition-colors">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="flex items-center justify-between p-4 border-t border-white/10">
            <p className="text-sm text-warm-gray">
              Showing {filteredUsers.length} of {sampleUsers.length} users
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
