import './RecentSales.css'
import trans from "../../../assets/DashboardImg/trans.png";
import Table from "react-bootstrap/Table";

function RecentSales({user,sales}) {
  console.log(sales,user)
  return (
    <>
    <div  className="RecentSales">
      <p className="p1">Recent Sales</p>
      <Table responsive>
        <thead>
          <tr className="heading">
            <th scope="col">Transaction</th>
            <th scope="col">NFT name</th>
            <th scope="col">From</th>
            <th scope="col">To</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale,index)=>{
            return(
 <tr key={index}>
 <td className="dd">
   <img src={trans} alt="tran" />
   {sale.From.username!==user?'Bought':'Sold'}
 </td>
 <td>{sale.nft.name}</td>
 <td>{sale.From.username}</td>
 <td>{sale.to.username}</td>
 <td>{sale.amount}ETH</td>
 <td className={sale.status}>{sale.status}</td>
</tr>
)
          })}
        </tbody>
      </Table>
    </div>
  </>
  )
}

export default RecentSales