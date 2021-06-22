import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const AddToPlaylistModal = (props) => {
  return (
      <Modal open={!!props.movie}>
        <Modal.Header>Add to Playlist?</Modal.Header>
        <Modal.Content image>
          <Image size='medium' src={props.movie.Poster} wrapped />
          <Modal.Description>
            <Header>{props.movie.Title}</Header>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={props.no}>
            Nope
          </Button>
          <Button
              content="Yep"
              labelPosition='right'
              icon='checkmark'
              onClick={() => props.yes(props.movie)}
              positive
          />
        </Modal.Actions>
        <div style={{background: 'green'}}>My favorite color is green</div>
      </Modal>
  );
};

export default AddToPlaylistModal;