import React, { Component } from "react";
import Posts from "./Posts/Posts";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import "./Blog.css";
import asyncComponent from "../../hoc/AsyncComponent";
//import NewPost from "./NewPost/NewPost";
//import FullPost from "./FullPost/FullPost";

const AsyncNewPost = asyncComponent(() => {
  return import("./NewPost/NewPost");
});

class Blog extends Component {
  state = {
    auth: true
  };

  render() {
    return (
      <div className="Blog">
        <header>
          <ul>
            <li>
              <NavLink
                to="/posts/"
                exact
                activeClassName="my-active"
                activeStyle={{
                  color: "#fa923f",
                  textDecoration: "underline"
                }}
              >
                Posts
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: "/new-post",
                  hash: "#submit",
                  search: "?quick-submit=true"
                }}
              >
                New Post
              </NavLink>
            </li>
          </ul>
        </header>
        {/* <Route path='/' exact render={() => <} /> */}
        <Switch>
          {this.state.auth ? (
            <Route path="/new-post" component={AsyncNewPost} />
          ) : null}
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1>Not found</h1>} />
          {/* <Redirect from="/" to="/posts" /> */}
          {/* <Route path="/:id" exact component={FullPost} /> */}
        </Switch>
      </div>
    );
  }
}
// this.props.match.url + relative path
export default Blog;
