import Profile from '../Profile/Profile'
import userData from "../../userData.json";
import friends from "../../friends.json";
import FriendList from '../FriendList/FriendList';
import transactions from '../../transactions.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory'


const App = () => {
return (
    <div>
    <Profile {...userData} />
    <FriendList friends={friends}/>
    <TransactionHistory transactions={transactions} />
  </div>
);

};


export default App;