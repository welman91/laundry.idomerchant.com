export default function TransferAssetTeamTemplate({ team, team_id }) {
  if (team) {
    return <p>{team.name}</p>
  } else {
    return <p></p>
  }
}
