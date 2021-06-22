import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const AddToPlaylist = () => {
  return (
      <div>
        <Button icon labelPosition='left' color='red'>
          <Icon name='delete' />
          Remove from playlist
        </Button>
      </div>
  );
};

export default AddToPlaylist;
