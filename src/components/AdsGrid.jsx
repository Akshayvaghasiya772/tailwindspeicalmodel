import { StarIcon } from '@heroicons/react/20/solid'

const products = [
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

export default function Ads() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {products.map((ad) => (
            <div key={ad.id} className="group relative border-b border-r border-gray-200 p-4 sm:p-6">
              <img
                alt={ad.imageAlt}
                src={ad.imageSrc}
                className="aspect-square rounded-lg bg-gray-200 object-cover group-hover:opacity-75"
              />
              <div className="pb-4 pt-10 text-center">
                <h3 className="text-sm font-medium text-gray-900">
                  <a href={ad.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {ad.name}
                  </a>
                </h3>
                <div className="mt-3 flex flex-col items-center">
                  <p className="sr-only">{ad.rating} out of 5 stars</p>
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        aria-hidden="true"
                        className={classNames(
                          ad.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                          'size-5 shrink-0',
                        )}
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{ad.reviewCount} reviews</p>
                </div>
                <p className="mt-4 text-base font-medium text-gray-900">{ad?.coins}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
