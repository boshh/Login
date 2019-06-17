import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";

import Welcome from './Welcome'
// import Example from './SignIn'

import {connect} from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import { Form, Field } from 'react-final-form'

import { loginRequest, loginCancel } from './actions/login.js'
// import { isImport } from '@babel/types';
// import rootSaga from './sagas/index.js'

// import { createStore, applyMiddleware } from 'redux'

// import createSagaMiddleware from 'redux-saga'
// import rootReducer from './reducers/index.js'

// const sagaMiddleware = createSagaMiddleware()

// const store = createStore(
//   rootReducer,
//   applyMiddleware(sagaMiddleware)
// )
// sagaMiddleware.run(rootSaga)



// const sagaMiddleware = createSagaMiddleware()


// const store = createStore(
//   rootReducer
//   ,applyMiddleware(sagaMiddleware))

// sagaMiddleware.run(rootSaga)

// const action = type => store.dispatch({type})

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Welcome}  />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/protected" component={Protected} />
      </div>
    </Router>
  );
}


function Header() {
  return (
    <div style={{margin:'10px 10px',  float: 'left'}}> 
      <AuthButton />
      <div>
        <ul>
          <li>
            <Link to="/">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Protected() {
  return <h3>Protected</h3>;
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate: (cb) => {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout: (cb) => {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
      }
    />
  );
}


const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
        <p>You are not logged in.</p>
      )
);



class Login extends React.Component {

  state = { show: false, redirectToReferrer: false, loginFail: false }

  handleClose = () => {
    this.setState({ show: false, redirectToReferrer: false, loginFail: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  validates = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    if (!values.confirm) {
      errors.confirm = "Required";
    } else if (values.confirm !== values.password) {
      errors.confirm = "Must match";
    }
    return errors;
  }

  render() {
    let { from } = { from: { pathname: "/protected" } };
    let { redirectToReferrer } = this.state;

    
    const required = value => (value ? undefined : 'Required')
    // const { login, dispatch } = this.props
    // const sendLoginRequest = ({ username, password }) => store.dispatch(loginRequest({ username, password }))


    const handleLogin = (values) => {
      // sendLoginRequest({ username: values.username, password: values.password })
      // const sendLoginRequest = ({ username, password }) => store.dispatch(loginRequest({ username, password }))
      // sendLoginRequest({ username: values.username, password: values.password })
      // const { login, dispatch } = this.props
      // const sendLoginRequest = ({ username, password }) => dispatch(loginRequest({ username, password }))
  
      // sendLoginRequest({ username: values.username, password: values.password })
      loginRequest({username: values.username, password: values.password})
      if (values.username === 'guest' && values.password === 'guest') {
        this.setState({ loginFail: false })
        fakeAuth.authenticate(() => {
          this.setState({ show: false, redirectToReferrer: true });
        });
      }
      else {
        this.setState({ loginFail: true })
      }
    }



    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <>
        <p>You must log in to view the page at {from.pathname}</p>
        <Button onClick={this.handleShow}> Login</Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Form
            onSubmit={handleLogin}

            render={({ dirtyFields, errors, handleSubmit, submitting, touched, valid, values }) => (
              <form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                  <Modal.Title>Sign In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Field name="username" validate={required}>
                    {({ input, meta }) => (
                      <div>
                        <div>Username</div>
                        <input  {...input} type="text" placeholder="Enter username" style={{ width: "100%" }} />
                        <span style={{ color: "red" }}>{meta.error && meta.touched && <span>This is a required field.</span>}</span>
                      </div>
                    )}
                  </Field>
                  <Field name="password" validate={required}>
                    {({ input, meta }) => (
                      <div>
                        <div>Password</div>
                        <input  {...input} type="password" placeholder="Enter password" style={{ width: "100%" }} />
                        <span style={{ color: "red" }}>{meta.error && meta.touched && <span>This is a required field.</span>}</span>
                      </div>
                    )}
                  </Field>
                  <span style={{ color: "red" }}>{this.state.loginFail && <span>Incorrect username or password</span>}</span>
                </Modal.Body>
                <Modal.Footer>

                  <Button variant="secondary" onClick={this.handleClose}> Close</Button>
                  <Button variant="primary" disabled={!valid} type="submit">Save Changes</Button>
                </Modal.Footer>
              </form>
            )}
          />
        </Modal>
      </>
    );
  }

}

// function mapStateToProps(state, ownProps) {
//   const {login} = state
//   return {login}
// }

// export default connect(mapStateToProps)(App)


export default App;
