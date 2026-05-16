import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Users, CreditCard, ShoppingBag, Mail, 
  TrendingUp, TrendingDown, ArrowRight, Calendar,
  FileBox
} from 'lucide-react'

export default function AdminDashboard() {
  // Sample data - in production, this would come from the database
  const stats = [
    { 
      label: 'Total Users', 
      value: '234', 
      change: '+12',
      trend: 'up',
      icon: Users 
    },
    { 
      label: 'Active Memberships', 
      value: '187', 
      change: '+8',
      trend: 'up',
      icon: CreditCard 
    },
    { 
      label: 'Products Sold', 
      value: '89', 
      change: '+23',
      trend: 'up',
      icon: ShoppingBag 
    },
    { 
      label: 'New Leads', 
      value: '45', 
      change: '-3',
      trend: 'down',
      icon: Mail 
    },
  ]

  const recentUsers = [
    { id: '1', name: 'Sarah Johnson', email: 'sarah@example.com', tier: 'Plus', date: '2024-01-15' },
    { id: '2', name: 'Michael Chen', email: 'michael@example.com', tier: 'Core', date: '2024-01-14' },
    { id: '3', name: 'Emma Williams', email: 'emma@example.com', tier: 'Family', date: '2024-01-13' },
    { id: '4', name: 'James Brown', email: 'james@example.com', tier: 'Plus', date: '2024-01-12' },
  ]

  const membershipBreakdown = [
    { tier: 'Rooted Core', count: 67, revenue: 20033 },
    { tier: 'Rooted Plus', count: 98, revenue: 58702 },
    { tier: 'Rooted Family', count: 22, revenue: 21978 },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-serif font-semibold text-cream">Dashboard</h1>
          <p className="text-warm-gray">Welcome back. Here's what's happening.</p>
        </div>
        <div className="flex gap-3">
          <Link 
            href="/admin/leads"
            className="px-4 py-2 bg-white/10 text-cream rounded-card text-sm hover:bg-white/20 transition-colors"
          >
            Export Leads
          </Link>
          <button className="px-4 py-2 bg-olive text-cream rounded-card text-sm hover:bg-olive-dark transition-colors">
            Add New User
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-olive/20 rounded-card flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-olive" />
                </div>
                <div className={`flex items-center gap-1 text-sm ${
                  stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {stat.trend === 'up' ? (
                    <TrendingUp className="h-4 w-4" />
                  ) : (
                    <TrendingDown className="h-4 w-4" />
                  )}
                  {stat.change}
                </div>
              </div>
              <p className="text-3xl font-bold text-cream mb-1">{stat.value}</p>
              <p className="text-sm text-warm-gray">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Users */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-cream">Recent Users</CardTitle>
            <Link href="/admin/users" className="text-sm text-olive hover:underline flex items-center gap-1">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentUsers.map((user) => (
                <div key={user.id} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-sand rounded-full flex items-center justify-center">
                      <span className="text-charcoal font-medium">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="text-cream font-medium">{user.name}</p>
                      <p className="text-sm text-warm-gray">{user.email}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="default" className="bg-olive/20 text-olive">
                      {user.tier}
                    </Badge>
                    <p className="text-xs text-warm-gray mt-1">
                      {new Date(user.date).toLocaleDateString('en-ZA', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Membership Breakdown */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-cream">Membership Breakdown</CardTitle>
            <Link href="/admin/memberships" className="text-sm text-olive hover:underline flex items-center gap-1">
              Manage <ArrowRight className="h-4 w-4" />
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {membershipBreakdown.map((item, i) => (
                <div key={i} className="py-3 border-b border-white/5 last:border-0">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-cream font-medium">{item.tier}</span>
                    <div className="text-right">
                      <span className="text-cream font-bold">{item.count}</span>
                      <span className="text-warm-gray text-sm ml-2">
                        R{item.revenue.toLocaleString()}/mo
                      </span>
                    </div>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-olive rounded-full"
                      style={{ width: `${(item.count / 187) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-warm-gray">Total Monthly Revenue</span>
                <span className="text-2xl font-bold text-olive">R100,713</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="bg-white/5 border-white/10">
        <CardHeader>
          <CardTitle className="text-cream">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { label: 'Add Product', href: '/admin/products/new', icon: ShoppingBag },
              { label: 'Write Post', href: '/admin/blog/new', icon: ShoppingBag },
              { label: 'Schedule Workshop', href: '/admin/workshops/new', icon: Calendar },
              { label: 'View Leads', href: '/admin/leads', icon: Mail },
              { label: 'Add Bootcamp', href: '/admin/bootcamps/new', icon: Calendar },
              { label: 'View Analytics', href: '/admin/analytics', icon: TrendingUp },
            ].map((action, i) => (
              <Link
                key={i}
                href={action.href}
                className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-card hover:bg-white/10 transition-colors text-center"
              >
                <action.icon className="h-6 w-6 text-olive" />
                <span className="text-sm text-cream">{action.label}</span>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
