import React, { Component } from "react";

class UserItem extends Component {
  state = {
    id: "id",
    login: "mojombo",
    avatat_url: "https://avatars2.githubusercontent.com/u/136?v=4",
    html_url: "github.com/believemaster"
  };

  render() {
    const { login, avatat_url, html_url } = this.state;

    return (
      <div className='card text-center'>
        <img
          src={avatat_url}
          alt=''
          className='round-img'
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className='btn btn-dark btn-sm my-1'>
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
