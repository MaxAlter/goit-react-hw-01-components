
import React, { Fragment } from 'react';
// components
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/friendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

// JSON Data
import user from './components/Profile/user.json';
import statisticalData from './components/Statistics/statistical-data';
import friends from './components/FriendList/friends.json';
import transactions from './components/TransactionHistory/transactions.json';

const App = () => (
  <Fragment>
    <Profile user={user} />
    <Statistics title="Upload stats" stats={statisticalData} />,
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />,
  </Fragment>
);

export default App;
