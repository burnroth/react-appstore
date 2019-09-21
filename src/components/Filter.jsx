import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "marketing"
    };
  }

  toggle(e) {
    this.setState({
      activeTab: e.target.name
    })
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              active={this.state.activeTab === "marketing" ? true : false}
              onClick={this.toggle}
              name="marketing"
            >
              Marketing
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={this.state.activeTab === "finance" ? true : false}
              onClick={this.toggle}
              name="finance"
            >
              Finance
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default Example;
