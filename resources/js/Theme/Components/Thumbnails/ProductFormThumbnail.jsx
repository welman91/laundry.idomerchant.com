import defaultImg from '../../../../assets/images/not-found.webp'

export default function ProductFormThumbnail({ product, team }) {
  return (
    <div className="relative">
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
        <div
          className="w-full h-60"
          style={{
            backgroundImage: `url(${product.product_filename})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="w-full h-full flex-center bg-black/75">
            <div className="w-fit h-60 bg-transparent">
              <img
                src={product.product_filename}
                alt={product.name}
                className="h-60 p-2 object-contain bg-transparent rounded-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      ) : (
        <img
          src={team.logo}
          alt={product.name}
          className="w-full h-60 object-contain p-4"
          loading="lazy"
          onError={(event) => (event.target.src = defaultImg)}
        />
      )}
    </div>
  )
}
