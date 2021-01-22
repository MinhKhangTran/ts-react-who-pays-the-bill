import { Tr, Td, IconButton } from "@chakra-ui/react";
import React from "react";
import { Liste } from "../context/context";
import { useGlobalContext } from "../context/context";
import { DeleteIcon } from "@chakra-ui/icons";

const TableComp = ({ person }: { person: Liste }) => {
  const { deletePerson } = useGlobalContext();

  return (
    <Tr>
      <Td>{person.name}</Td>
      <Td>
        <IconButton
          onClick={() => {
            console.log("worked?", person.id, person.name);
            deletePerson(person.id);
          }}
          aria-label="Delete"
          icon={<DeleteIcon />}
        />
      </Td>
    </Tr>
  );
};

export default TableComp;
