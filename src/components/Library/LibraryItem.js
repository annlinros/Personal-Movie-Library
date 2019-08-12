import React, { useContext } from "react";
import { MovieContext } from "../../Context";
import { Col, Card, Button } from "react-bootstrap";

export default function LibraryItem({ movie }) {
  const { movieLibrary, setMovieLibrary} = useContext(MovieContext);
  
  // Removes movie from library.
  const removeFromLibrary = id => {
    const tempLibrary = [...movieLibrary];
    const newLibrary = tempLibrary.filter(item => item.id !== id);
    setMovieLibrary(newLibrary);
  };

  // renders out each movie item in library.
  const { id, poster, title} = movie;

  return (
    <Col xs={10} sm={6} md={4} lg={3} className="py-2">
      <Card className="mx-auto p-2" border="secondary">
        <Card.Img style={{ height: "12rem" }} src={poster} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Button variant="warning" onClick={() => removeFromLibrary(id)}>
            Remove
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
