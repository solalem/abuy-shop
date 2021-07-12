import React, { Component } from "react";
import { connect } from "react-redux";
import { updateImage } from "../states/actions";

class EditImage extends Component {
  constructor(props) {
    super(props);

    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeCaption = this.onChangeCaption.bind(this);
    this.onChangeUri = this.onChangeUri.bind(this);
    this.onChangeIsLocal = this.onChangeIsLocal.bind(this);
    this.onChangeListingId = this.onChangeListingId.bind(this);

    let image = this.props.image ?? {
      id: 1,
      name: "Test",
      value: "0",
    };
    this.state = {
      currentImage: image,
      message: "",
    };
  }

  onChangeId(e) {
    const id = e.target.value;

    this.setState(function (prevState) {
      return {
        currentImage: {
          ...prevState.currentImage,
          id: id,
        },
      };
    });
  }
  onChangeCaption(e) {
    const caption = e.target.value;

    this.setState(function (prevState) {
      return {
        currentImage: {
          ...prevState.currentImage,
          caption: caption,
        },
      };
    });
  }
  onChangeUri(e) {
    const uri = e.target.value;

    this.setState(function (prevState) {
      return {
        currentImage: {
          ...prevState.currentImage,
          uri: uri,
        },
      };
    });
  }
  onChangeIsLocal(e) {
    const isLocal = e.target.value;

    this.setState(function (prevState) {
      return {
        currentImage: {
          ...prevState.currentImage,
          isLocal: isLocal,
        },
      };
    });
  }
  onChangeListingId(e) {
    const listingId = e.target.value;

    this.setState(function (prevState) {
      return {
        currentImage: {
          ...prevState.currentImage,
          listingId: listingId,
        },
      };
    });
  }

  render() {
    const { currentImage } = this.state;

    return (
        <div>
        {currentImage ? (
          <div className="edit-form">
            <h4>Image</h4>
            <form>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Caption</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="caption"
                    value={currentImage.caption}
                    onChange={this.onChangeCaption}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">Uri</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="uri"
                    value={currentImage.uri}
                    onChange={this.onChangeUri}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">IsLocal</label>
                <div className="col-sm-10">
                  <input
                    type="boolean"
                    className="form-control"
                    id="isLocal"
                    value={currentImage.isLocal}
                    onChange={this.onChangeIsLocal}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="name">ListingId</label>
                <div className="col-sm-10">
                  <input
                    type="string"
                    className="form-control"
                    id="listingId"
                    value={currentImage.listingId}
                    onChange={this.onChangeListingId}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-success"
                onClick={this.updateContent}
              >
                Update
              </button>
            </form>

            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Image is Null</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { updateImage })(EditImage);
