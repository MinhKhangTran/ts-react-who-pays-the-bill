import React from "react";
import { v4 as uuidv4 } from "uuid";

interface Context {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  liste: Liste[];
  handelSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  deletePerson: (id: string) => void;
  generateLooser: (liste: Liste[]) => void;
  looser: string;
  reset: () => void;
  error: Error;
}

export interface Liste {
  id: string;
  name: string;
}

type Error = [boolean, string];

const MyContext = React.createContext<Partial<Context>>({});

export const MyProvider: React.FC = ({ children }) => {
  const [value, setValue] = React.useState<string>("");
  const [liste, setListe] = React.useState<Liste[]>([]);
  const [looser, setLooser] = React.useState<string>("");
  const [error, setError] = React.useState<Error>([false, ""]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) {
      setError([true, "No Name was given"]);
      return;
    }
    if (value.length < 3) {
      setError([true, "Name must have more than 3 letters"]);
      return;
    }
    const newPerson = {
      id: uuidv4(),
      name: value
    };
    setListe([...liste, newPerson]);
    setValue("");
    setError([false, ""]);
  };

  const deletePerson = (id: string) => {
    const newList = liste.filter((item) => item.id !== id);
    return setListe(newList);
  };

  const generateLooser = (liste: Liste[]) => {
    if (liste) {
      const newListe = [...liste];
      const randomNumber = Math.floor(Math.random() * liste.length);
      console.log(randomNumber);
      const verlierer = newListe[randomNumber].name;
      setLooser(verlierer);
    }
  };

  const reset = () => {
    return setListe([]);
  };

  return (
    <MyContext.Provider
      value={{
        value,
        handleChange,
        liste,
        handelSubmit,
        deletePerson,
        generateLooser,
        looser,
        reset,
        error
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(MyContext);
};
