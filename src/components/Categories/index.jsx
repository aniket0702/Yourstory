import React, { Component } from "react";
import request from "request";
class Categories extends Component {
  state = {
    data_recieved: {}
  };
  componentDidMount() {
    let headers = {
      "access-control-allow-origin": "*",
      accept: "*/*"
    };
    request.get(
      {
        url:
          "https://yourstory.com/api/v2/category/stories?brand=yourstory&slug=ys-startup&limit=12&offset=0",
        headers: headers
      },
      function(error, response, body) {
        if (error) console.log(error);
        else {
          console.log(response);
        }
      }
    );
  }
  render() {
    return <h1>Categories</h1>;
  }
}

export default Categories;
