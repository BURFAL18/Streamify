import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import Modal from "../Modal";
import history from "../../history";
import { Link } from "react-router-dom";

class StreamDelete extends Component {
  componentDidMount = () => {
    this.props.fetchStream(this.props.match.params.id);
  };
  handleDelete = () => {
    this.props.deleteStream(this.props.match.params.id);
  };
  
  renderActions = () => {
    return (
      <Fragment>
        <button onClick={this.handleDelete} className="ui button negative">
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </Fragment>
    );
  };
  renderContent = () => {
    if (this.props.stream.title === undefined) {
      return "Are you sure you want to Delete this Stream?";
    }
    return `Are you sure you want to Delete the stream with Title: ${this.props.stream.title}`;
  };
  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: { ...state.streams[ownProps.match.params.id] } };
};

export default connect(mapStateToProps, {
  fetchStream,
  deleteStream,
})(StreamDelete);