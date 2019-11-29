import React, { Component } from "react";
import { Col, Row } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import Navigation from "../Navigation";

import Categories from "../Categories";
import Tags from "../Tags";
class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Router>
          <Row>
            <Col span={4}></Col>
            <Col span={8}>
              <Link to="/categories">Categories</Link>
            </Col>
            <Col span={8}>
              <Link to="/tags">Tags</Link>
            </Col>
            <Col span={4}></Col>
          </Row>
          <Switch>
            <Route path="/categories">
              <Categories />
            </Route>
            <Route path="/tags">
              <Tags />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
