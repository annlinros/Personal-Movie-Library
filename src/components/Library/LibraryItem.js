import React from "react";
import {Col, Card, Button } from "react-bootstrap";

export default function LibraryItem({ movie }) {
  // renders out each movie item in library.
  const { poster, year, title, imdbRating } = movie;

  return (
    <Col xs={12} md={6} lg={4}>
    <Card
      className="mx-auto p-2 mb-1"
      border="secondary"
      style={{ height: "100vh", color: "black" }}
    >
      <Card.Img style={{ height: "12rem" }} src={poster} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2">
          Rating : {imdbRating}
        </Card.Subtitle>{" "}
        <Card.Subtitle>Year: {year}</Card.Subtitle>
        <Button variant="success">Mark Seen</Button>
      </Card.Body>
    </Card>
    </Col>
  );
}
