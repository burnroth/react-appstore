import React, { Component } from "react";
import AppNavbar from "./components/AppNavbar";
import AddonModal from "./components/AddonModal";
import Cards from "./components/Cards";
import api from "./api.json";
import { Jumbotron } from "reactstrap";

// const api = fetch("https://api.lime-bootstrap.com/addons/?page=1").then(response => response.json()).then(res => console.log)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      activeModalContent: {},
      addons: {}
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.showModal = this.showModal.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  // Populating the state with the names of the addons
  componentDidMount() {
    for (let key of api.addons) {
      this.setState(prevState => ({
        addons: {
          ...prevState.addons,
          [key.name]: true
        }
      }));
    }
  }

  // SImple search function which loops over the state and checks if each value includes the search query
  handleSearch(e) {
    e.persist();
    for (let key in this.state.addons) {
      if (!key.includes(e.target.value.toLowerCase())) {
        this.setState(prevState => ({
          addons: {
            ...prevState.addons,
            [key]: false
          }
        }));
      } else {
        this.setState(prevState => ({
          addons: {
            ...prevState.addons,
            [key]: true
          }
        }));
      }
    }
  }

  showModal(addon) {
    this.setState({
      modal: true,
      activeModalContent: addon
    });
  }

  toggleModal() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <AppNavbar handleSearch={this.handleSearch} />
        {this.state.modal ? (
          <AddonModal
            modal={this.state.modal}
            className="maggan"
            toggleModal={this.toggleModal}
            activeModalContent={this.state.activeModalContent}
          />
        ) : null}
        <Jumbotron>
          <h1 className="display-3 text-center">Lime Store</h1>
        </Jumbotron>
            <Cards showModal={this.showModal} state={this.state} api={api} />
      </div>
    );
  }
}

export default App;
