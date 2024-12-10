"use client"
import AdDetailsDialog from '@/components/dialogs/AdDetailsDialog'
import { Button } from '@/components/ui/button'
import { StarIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const Ads = [
  {
    id: 1,
    name: 'Organize Basic Set (Walnut)',
    coins: '$149',
    rating: 5,
    reviewCount: 38,
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-01.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 2,
    name: 'Organize Pen Holder',
    coins: '$15',
    rating: 5,
    reviewCount: 18,
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-02.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 3,
    name: 'Organize Sticky Note Holder',
    coins: '$15',
    rating: 5,
    reviewCount: 14,
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-03.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 4,
    name: 'Organize Phone Holder',
    coins: '$15',
    rating: 4,
    reviewCount: 21,
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-04.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  // More products...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const AdDetails=({ads})=>{
  return(
<div className="group relative border-b border-r border-gray-200 p-4 sm:p-6">
          <Image
            className="aspect-square rounded-lg bg-gray-200 object-cover group-hover:opacity-75"
            src={ads.imageSrc}
            width={382}
            height={216}
            alt={ads.imageAlt}
          />

  <div className="pb-4 pt-10 text-center">
    <h3 className="text-sm font-medium text-gray-900">
      <a href={ads.href}>
        <span aria-hidden="true" className="absolute inset-0" />
        {ads.name}
      </a>
    </h3>
    <div className="mt-3 flex flex-col items-center">
      <p className="sr-only">{ads.rating} out of 5 stars</p>
      <div className="flex items-center">
        {[0, 1, 2, 3, 4].map((rating) => (
          <StarIcon
            key={rating}
            aria-hidden="true"
            className={classNames(
              ads.rating > rating ? 'text-yellow-400' : 'text-gray-200',
              'size-5 shrink-0',
            )}
          />
        ))}
      </div>
      <p className="mt-1 text-sm text-gray-500">{ads.reviewCount} reviews</p>
    </div>
    <p className="mt-4 text-base font-medium text-gray-900">{ads.coins}</p>
  </div>
</div>
  )
}


export default function EarnPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
        <h2 className='sr-only'>Products</h2>

        <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {Ads.map((ads,index) => (<AdDetailsDialog key={index} children={<div className="group relative border-b border-r border-gray-200 p-4 sm:p-6">
          <Image
            className="aspect-square rounded-lg bg-gray-200 object-cover group-hover:opacity-75"
            src={ads.imageSrc}
            width={382}
            height={216}
            alt={ads.imageAlt}
          />

  <div className="pb-4 pt-10 text-center">
    <h3 className="text-sm font-medium text-gray-900">
      <a href={ads.href}>
        <span aria-hidden="true" className="absolute inset-0" />
        {ads.name}
      </a>
    </h3>
    <div className="mt-3 flex flex-col items-center">
      <p className="sr-only">{ads.rating} out of 5 stars</p>
      <div className="flex items-center">
        {[0, 1, 2, 3, 4].map((rating) => (
          <StarIcon
            key={rating}
            aria-hidden="true"
            className={classNames(
              ads.rating > rating ? 'text-yellow-400' : 'text-gray-200',
              'size-5 shrink-0',
            )}
          />
        ))}
      </div>
      <p className="mt-1 text-sm text-gray-500">{ads.reviewCount} reviews</p>
    </div>
    <p className="mt-4 text-base font-medium text-gray-900">{ads.coins}</p>
  </div>
</div>}/>))}
        </div>
      </div>
    </div>
  )
}
