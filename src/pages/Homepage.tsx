import {
  Box,
  Button,
  Grid,
  Heading,
  Table,
  Tbody,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import * as React from "react";
import { useGlobalContext } from "../context/context";
import Form from "../components/Form";
import TableComp from "../components/Table";

const Homepage = () => {
  // console.log(liste);
  const { liste } = useGlobalContext();

  return (
    <Grid placeItems="center" h="100vh">
      <Box my={8} bg="blue.50" p={10} borderRadius="lg">
        <Heading>Who pays the bill?</Heading>
        <Form />
        {liste && liste.length > 0 && (
          <Table mt={4}>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Delete?</Th>
              </Tr>
            </Thead>
            <Tbody>
              {liste?.map((person) => {
                return <TableComp key={person.id} person={person} />;
              })}
            </Tbody>
          </Table>
        )}
      </Box>
      {liste && liste.length >= 2 && (
        <Button>
          <Link to="/result">Next</Link>
        </Button>
      )}
    </Grid>
  );
};

export default Homepage;
