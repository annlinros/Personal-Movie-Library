import React,{useContext} from "react";
import { MovieContext } from "../../Context";
import { Form } from "react-bootstrap";

export default function MovieSearch() {
  const { getUrl, handleSearch } = useContext(MovieContext);

  // Handles the search by user.
  return (
    <Form className="my-5 mx-auto w-50" onSubmit={getUrl}>
      <Form.Group>
        <Form.Control
          type="text"
          size="lg"
          placeholder="Type in a movie name"
          onChange={handleSearch}
        >
        </Form.Control>
      </Form.Group>
    </Form>
  );
}
