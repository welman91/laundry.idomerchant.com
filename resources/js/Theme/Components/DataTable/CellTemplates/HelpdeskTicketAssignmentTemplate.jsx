export default function HelpdeskTicketAssignmentTemplate({ assignments }) {
  if (assignments) {
    return (
      <ul className="px-4">
        {assignments.map((assignment, i) => {
          return (
            <li key={i} className="list-disc">
              {assignment.department?.detail?.name}
            </li>
          )
        })}
      </ul>
    )
  } else {
    return <p></p>
  }
}
