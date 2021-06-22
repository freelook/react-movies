import React, { useState } from 'react';
import { Form, Input } from 'semantic-ui-react';

const SearchBox = (props) => {
  const [input, setInput] = useState('');
  return (
    <div>
      <Form onSubmit={(event) => props.setSearchValue(input)}>
        <Input
          icon='search'
          placeholder='Search...'
          value={props.value}
          onChange={(event) => setInput(event.target.value)}
        />
      </Form>
    </div>
  );
};

export default SearchBox;
