import defaultImg from '../../../../assets/images/not-found.webp'

export default function ProductCatalogThumbnail({ product, team }) {
  return (
    <div className="relative w-40 h-[120px]">
      {product.popular ? (
        <p className="absolute top-0 bg-red-500 text-white px-2 rounded-br-lg">POPULAR</p>
      ) : (
        <p></p>
      )}
      {product.status === 'unavailable' && (
        <div className="absolute top-0 bg-white/40 w-full h-full flex-center">
          <p className="whitespace-nowrap text-gray-600 font-bold text-lg border-2 border-gray-600 p-1">
            SOLD OUT
          </p>
        </div>
      )}
      {product.product_filename ? (
        <img
          src={product.product_filename}
          alt={product.name}
          className="w-40 h-full flex-none object-cover"
          loading="lazy"
        />
      ) : (
        <img
          src={team.logo}
          alt={product.name}
          className="w-40 h-full flex-none bject-cover p-4"
          loading="lazy"
          onError={(event) => (event.target.src = defaultImg)}
        />
      )}
    </div>
  )
}
