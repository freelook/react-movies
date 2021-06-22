import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const AddToPlaylist = () => {
  return (
    <div>
      <Button icon labelPosition='left' color='green'>
        <Icon name='play' />
        Add to playlist
      </Button>
    </div>
  );
};

export default AddToPlaylist;
