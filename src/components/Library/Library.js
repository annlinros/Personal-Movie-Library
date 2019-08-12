import React, { useContext } from "react";
import { MovieContext } from "../../Context";
import LibraryItem from "./LibraryItem";
import { Container, Row } from "react-bootstrap";

export default function Library() {
  const { movieLibrary } = useContext(MovieContext);

  return (
    <Container>
      <Row>
        {movieLibrary.map(movie => (
          <LibraryItem key={movie.id} movie={movie} />
        ))}
      </Row>
    </Container>
  );
}
