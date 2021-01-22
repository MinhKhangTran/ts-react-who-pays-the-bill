import {
  Box,
  Grid,
  Heading,
  Text,
  Button,
  ButtonGroup
} from "@chakra-ui/react";
import * as React from "react";
import { useGlobalContext } from "../context/context";
import { Link } from "react-router-dom";

const Result = () => {
  const { liste, generateLooser, looser, reset } = useGlobalContext();
  React.useEffect(() => {
    generateLooser(liste);
  }, []);
  return (
    <Grid placeItems="center" h="100vh">
      <Box>
        <Heading>The Loser is?</Heading>
        <Text mt={4} fontSize="3xl" textAlign="center">
          {looser}
        </Text>
      </Box>
      <ButtonGroup>
        <Button onClick={reset}>
          <Link to="/">Go Back</Link>
        </Button>
        <Button
          onClick={() => {
            generateLooser(liste);
          }}
        >
          Generate new Looser
        </Button>
      </ButtonGroup>
    </Grid>
  );
};

export default Result;
