export default function Pill({ css, name, center = false }) {
  return (
    <div className={`${center && 'flex-center'}`}>
      <p
        className={`uppercase text-xs whitespace-nowrap w-fit px-2 font-bold rounded-full ${css}`}
      >
        {name}
      </p>
    </div>
  )
}
