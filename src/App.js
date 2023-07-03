import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';

const Login = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [userType, setUserType] = React.useState('');

  const handleLogin = (user) => {
    setUserType(user);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setUserType('');
    setLoggedIn(false);
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">Logo</Typography>
              <Button color="inherit">New Transaction</Button>
              <Button color="inherit">View Submitted Transactions</Button>
              <Button color="inherit" onClick={handleLogout}>Logout</Button>
            </Toolbar>
          </AppBar>
          <div>
            {/* {userType === 'admin' && (
              <div>
                <Typography variant="h3">Admin Dashboard</Typography>
                <TransactionForm />
              </div>
            )}
            {userType === 'normal' && (
              <div>
                <Typography variant="h3">Normal User Dashboard</Typography>
                <TransactionForm />
              </div>
            )} */}
            {userType === 'admin' && (
              <div>
                <Typography variant="h3">Admin Dashboard</Typography>
                <TransactionForm />
                <TransactionList />
              </div>
            )}
            {userType === 'normal' && (
              <div>
                <Typography variant="h3">Normal User Dashboard</Typography>
                <TransactionForm />
                <TransactionList />
              </div>
            )}

          </div>
        </div>
      ) : (
        <div>
          {/* Login form */}
          <Typography variant="h3">Login</Typography>
          <Button color="inherit" onClick={() => handleLogin('admin')}>Admin Login</Button>
          <Button color="inherit" onClick={() => handleLogin('normal')}>Normal User Login</Button>
        </div>
      )}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
