import React, { Component } from "react";
import Posts from "./Posts/Posts";
import { Route, NavLink, Switch } from "react-router-dom";

import "./Blog.css";
import NewPost from "./NewPost/NewPost";
//import FullPost from "./FullPost/FullPost";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <ul>
            <li>
              <NavLink
                to="/posts"
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
          <Route path="/new-post" component={NewPost} />
          <Route path="/posts" exact component={Posts} />
          {/* <Route path="/:id" exact component={FullPost} /> */}
        </Switch>
      </div>
    );
  }
}
// this.props.match.url + relative path
export default Blog;
