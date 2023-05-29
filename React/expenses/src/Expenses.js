import'./Expenses.css';
import ExpenseItem from "./ExpenseItem";
function Expenses(props)
{
    return(
        <div className="Expenses">
        
       
        {props.items.map((item) => (
            <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}


     
      </div>
    );
}
export default Expenses;