import CashWithdrawal from './CashWithdrawal'
import ReactDOM from 'react-dom'
import '../CashWithdraw.css'

const denominationsList = [
  {
    id: 1,
    value: 50,
  },
  {
    id: 2,
    value: 100,
  },
  {
    id: 3,
    value: 200,
  },
  {
    id: 4,
    value: 500,
  },
]

const CashWithdraw = () => <CashWithdrawal denominationsList={denominationsList} />

export default CashWithdraw