export default function SubscriptionProductsTemplate({ products, team_id }) {
  if (products) {
    return (
      <ul className="px-4">
        {products.map((product, i) => {
          if (team_id == product.team_id)
            return (
              <li key={i} className="list-disc">
                {product.name}
              </li>
            )
        })}
      </ul>
    )
  } else {
    return <p></p>
  }
}
