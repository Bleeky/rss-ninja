import React, { Component, PropTypes } from 'react';
import ReactModal from 'react-modal';

class ReederView extends Component {
  static propTypes = {
    logout: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.handleOpenModal = ::this.handleOpenModal;
    this.handleCloseModal = ::this.handleCloseModal;
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="container">
        <button className="logout" onClick={this.props.logout}>Logout</button>
        <div className="feeds">
          <div className="search">
            <input placeholder="Search" />
            <button onClick={this.handleOpenModal} className="add">Add</button>
            <ReactModal
              isOpen={this.state.showModal}
              contentLabel="Minimal Modal Example"
              className="modal"
              overlayClassName="overlay"
            >
              <button onClick={this.handleCloseModal}>Close Modal</button>
            </ReactModal>
          </div>
          <div className="list-contents">
            <div className="element">One feed</div>
            <div className="element">One feed</div>
            <div className="element">One feed</div>
            <div className="element active">One feed</div>
            <div className="element">One feed</div>
            <div className="element">One feed</div>
            <div className="element">One feed</div>
            <div className="element">One feed</div>
            <div className="element">One feed</div>
            <div className="element">One feed</div>
            <div className="element">One feed</div>
            <div className="element">One feed</div>
            <div className="element">One feed</div>
            <div className="element">One feed</div>
            <div className="element">One feed</div>
            <div className="element">One feed</div>
            <div className="element">One feed</div>
            <div className="element">One feed</div>
            <div className="element">One feed</div>
            <div className="element">One feed</div>
            <div className="element">One feed</div>
            <div className="element">One feed</div>
            <div className="element">One feed</div>
            <div className="element">One feed</div>
            <div className="element">One feed</div>
            <div className="element">One feed</div>
            <div className="element">One feed</div>
            <div className="element">One feed</div>
            <div className="element">One feed</div>
            <div className="element">One feed</div>
            <div className="element">One feed</div>
            <div className="element">One feed</div>
            <div className="element">One feed</div>
          </div>
        </div>
        <div className="feed">
          <div className="element">
            <div className="title">
              Bande de Gaza
            </div>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <div className="element">Bande de Gaza</div>
        </div>
        <div className="content">
          Here will be content
        </div>
      </div>
    );
  }
}

export default ReederView;
