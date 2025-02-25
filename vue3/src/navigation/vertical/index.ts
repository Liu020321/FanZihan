import dashboard from './dashboard'
import fill from './declaration'
import occupation from './occupation'
import interaction from './interaction'
import others from './others'
import type { VerticalNavItems } from '@layouts/types'

export default [...dashboard, ...occupation, ...fill, ...interaction, ...others] as VerticalNavItems
// export default [...dashboard] as VerticalNavItems
