import DashboardDesign from './Designs/DashboardDesign'
import TableDesign from './Designs/TableDesign'

export default function Index({ page }) {
  if (page.module === 'dashboard') {
    return <DashboardDesign />
  }

  return <TableDesign />
}
