import {
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage
} from "@chakra-ui/react";
import React from "react";
import { useGlobalContext } from "../context/context";

const Form: React.FC = () => {
  const { value, handleChange, handelSubmit, error } = useGlobalContext();

  return (
    <form onSubmit={handelSubmit}>
      <FormControl isInvalid={error && error[0]} mt={6}>
        <FormLabel>Enter a Name</FormLabel>
        <Input
          value={value}
          onChange={handleChange}
          placeholder="Enter a name"
        />
        <FormErrorMessage>{error && error[1]}</FormErrorMessage>
      </FormControl>
      <Button
        // isDisabled={error && !error[0]}
        type="submit"
        colorScheme="blue"
        variant="ghost"
        mt={4}
      >
        Submit
      </Button>
    </form>
  );
};

export default Form;
