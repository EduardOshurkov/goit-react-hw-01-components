import { Profile } from "./Profile/Profile";
import { StatisticsBoard } from "./StatisticBoard/StatisticsBoard";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import user from '../database/user.json';
import data from '../database/data.json';
import friends from '../database/friends.json'
import transactions from '../database/transactions.json'
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
      <StatisticsBoard title="Upload stats" statistics={data} />
      <StatisticsBoard statistics={data}/>
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions}/>
      

  </div>
)
}
