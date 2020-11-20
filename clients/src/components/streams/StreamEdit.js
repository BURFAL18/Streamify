import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import _ from "lodash";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount = () => {
    this.props.fetchStream(this.props.match.params.id);
  };
  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading ... Please Wait... </div>;
    }

    return (
      <div>
        <h1> Stream Editor </h1>
        <hr />
        {this.props.stream.title}
        <StreamForm
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return { stream: { ...state.streams[ownProps.match.params.id] } };
};

export default connect(mapStateToProps, {
  fetchStream,
  editStream,
})(StreamEdit);