export default function ProductNameTemplate({ product }) {
  if (product) {
    return (
      <p>
        {`${product.name} ${product.product_size ? product.product_size : ''} ${
          product.unit && product.product_unit ? product.unit.name : ''
        }`}
      </p>
    )
  }
}
