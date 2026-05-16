'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Search, Plus, Edit, Trash2, Eye, Copy } from 'lucide-react'

const sampleProducts = [
  { id: '1', name: 'Exam Prep Kit - Senior Phase', category: 'kits', price: 199, memberPrice: 159, active: true, featured: true, sales: 45 },
  { id: '2', name: 'Study Planner Printable Pack', category: 'planners', price: 99, memberPrice: 89, active: true, featured: true, sales: 78 },
  { id: '3', name: 'Resilience Journal for Teens', category: 'journals', price: 149, memberPrice: 127, active: true, featured: false, sales: 23 },
  { id: '4', name: 'Focus & Productivity Tracker', category: 'tracks', price: 79, memberPrice: 71, active: true, featured: false, sales: 34 },
  { id: '5', name: 'Burnout Recovery Kit', category: 'kits', price: 249, memberPrice: 187, active: true, featured: true, sales: 19 },
  { id: '6', name: 'Complete Study Systems Bundle', category: 'bundles', price: 499, memberPrice: 349, active: true, featured: true, sales: 12 },
]

export default function AdminProductsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')

  const filteredProducts = sampleProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-serif font-semibold text-cream">Products</h1>
          <p className="text-warm-gray">Manage digital products and shop items</p>
        </div>
        <Button className="bg-olive">
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </div>

      {/* Filters */}
      <Card className="bg-white/5 border-white/10">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-warm-gray" />
              <Input
                placeholder="Search products..."
                className="pl-10 bg-white/10 border-white/10 text-cream placeholder:text-warm-gray"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <select 
                className="px-4 py-2 bg-white/10 border border-white/10 rounded-card text-cream"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="planners">Planners</option>
                <option value="kits">Kits</option>
                <option value="journals">Journals</option>
                <option value="tracks">Trackers</option>
                <option value="bundles">Bundles</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-sand rounded-card flex items-center justify-center">
                    <span className="text-2xl">📦</span>
                  </div>
                  <div>
                    <h3 className="text-cream font-medium">{product.name}</h3>
                    <Badge variant="secondary" className="mt-1 text-xs">
                      {product.category}
                    </Badge>
                  </div>
                </div>
                {product.featured && (
                  <Badge className="bg-olive/20 text-olive">Featured</Badge>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs text-warm-gray">Regular Price</p>
                  <p className="text-lg font-bold text-cream">R{product.price}</p>
                </div>
                <div>
                  <p className="text-xs text-warm-gray">Member Price</p>
                  <p className="text-lg font-bold text-olive">R{product.memberPrice}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${product.active ? 'bg-green-400' : 'bg-red-400'}`} />
                  <span className="text-sm text-warm-gray">
                    {product.active ? 'Active' : 'Inactive'}
                  </span>
                  <span className="text-warm-gray mx-2">•</span>
                  <span className="text-sm text-warm-gray">{product.sales} sales</span>
                </div>
                <div className="flex gap-1">
                  <button className="p-2 hover:bg-white/10 rounded-card text-warm-gray hover:text-cream transition-colors">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="p-2 hover:bg-white/10 rounded-card text-warm-gray hover:text-cream transition-colors">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="p-2 hover:bg-white/10 rounded-card text-warm-gray hover:text-red-400 transition-colors">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
