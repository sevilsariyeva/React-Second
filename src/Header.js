import React, { Component } from "react";

export default class Header extends Component {
  render() {
    const { cinema, name, address, rating } = this.props.headerInfo;
    return (
      <div style={styles.container}>
        <h1 style={styles.h1}>{cinema}</h1>
        <h1 style={styles.h1}>{name}</h1>
        <p style={styles.p}>{address}</p>
        <p style={styles.p}>Rating: {rating}</p>
      </div>
    );
  }
}

const styles = {
  container: {
    height: "50px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    color: "white",
    backgroundColor: "rgb(10, 10, 58)",
  },
  h1: {
    marginLeft: "280px",
  },
  p: {
    marginLeft: "30%",
  },
};
