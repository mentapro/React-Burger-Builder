import React, { Component } from "react";
import styles from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Sidebar from "../../components/Navigation/Sidebar/Sidebar";

class Layout extends Component {
  state = {
    sideBarOpen: false,
  };

  sideDrawerCloseHandler = () => {
    this.setState({ sideBarOpen: false });
  };

  sideDrawerOpenHandler = () => {
    this.setState({ sideBarOpen: true });
  };

  render() {
    return (
      <>
        <Sidebar
          closedHandler={this.sideDrawerCloseHandler}
          open={this.state.sideBarOpen}
        />
        <Toolbar openHandler={this.sideDrawerOpenHandler} />
        <div> Sidedrawer, Backdrop</div>
        <main className={styles.content}>{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
