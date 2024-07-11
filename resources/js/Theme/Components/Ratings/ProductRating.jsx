import { FaStar, FaRegStar } from 'react-icons/fa'

export default function ProductRating() {
  // const rating = '5.0'
  // const ratings = '14722'

  const rating = 1.1 // Replace this with your actual rating
  const maxRating = 5
  const numberOfStars = 5
  const ratings = '14722'

  // Calculate the percentage of filled stars
  const filledStars = (rating / maxRating) * numberOfStars

  // Create an array of stars based on the calculated percentage
  const starsArray = Array.from({ length: numberOfStars }, (_, index) =>
    index + 1 <= filledStars ? <FaStar key={index} /> : <FaRegStar key={index} />,
  )

  return (
    <div className="flex-start gap-3">
      <p className="font-bold text-3xl">{rating}</p>
      <div className="flex-start flex-col">
        <div className="flex-start gap-1 text-xl text-amber-500">{starsArray}</div>
        <p className="text-sm">{ratings} / ratings</p>
      </div>
    </div>
  )
}
