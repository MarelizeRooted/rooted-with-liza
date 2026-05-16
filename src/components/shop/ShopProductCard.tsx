'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BookOpen, ShoppingCart } from 'lucide-react'
import { GuestPaymentButton } from './PaymentButton'

interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  memberPrice: number
  category: string
  isFeatured: boolean
  image: string
}

interface ShopProductCardProps {
  product: Product
  showMemberPrice?: boolean
}

export function ShopProductCard({ product, showMemberPrice = false }: ShopProductCardProps) {
  const [showPayment, setShowPayment] = useState(false)

  return (
    <Card className="bg-white">
      <CardContent className="p-0">
        {/* Product Image Placeholder */}
        <div className="bg-sand rounded-t-card h-40 flex items-center justify-center">
          <BookOpen className="h-16 w-16 text-warm-gray/30" />
        </div>
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-2">
            <Badge variant="secondary" className="text-xs">
              {product.category}
            </Badge>
            {product.isFeatured && (
              <Badge className="bg-olive/10 text-olive text-xs">
                Featured
              </Badge>
            )}
          </div>
          
          <h3 className="font-serif font-semibold text-charcoal mb-2">
            {product.name}
          </h3>
          <p className="text-warm-gray text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-lg font-semibold text-olive">
                R{showMemberPrice ? product.memberPrice : product.price}
              </span>
              {showMemberPrice && (
                <span className="text-sm text-warm-gray line-through ml-2">
                  R{product.price}
                </span>
              )}
              <p className="text-xs text-warm-gray">
                {showMemberPrice ? 'Member price' : 'Price'}
              </p>
            </div>
          </div>

          {!showPayment ? (
            <Button 
              onClick={() => setShowPayment(true)} 
              className="w-full"
              size="sm"
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Buy Now
            </Button>
          ) : (
            <div className="space-y-2">
              <GuestPaymentButton
                amount={showMemberPrice ? product.memberPrice : product.price}
                productId={product.id}
                productType="product"
                description={product.name}
              />
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={() => setShowPayment(false)}
              >
                Cancel
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
