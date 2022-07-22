import { Profile } from "./Profile/Profile";
import { StatisticsBoard } from "./Statistics/StatisticsBoard";
import { FriendList } from "./Friends/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json'
import transactions from 'transactions.json'
import style from './App.module.css'

export const App = () => {
  return (
    <div className={style.AppContainer}>      
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  followers={user.stats.followers}
  views={user.stats.views}
  likes={user.stats.likes}
      />
      <StatisticsBoard title="Upload stats" statistics={data}/>
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions}/>
      

  </div>
)
}
