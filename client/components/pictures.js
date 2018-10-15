import React from 'react'
import { Container, Card, Image, Modal, Divider, Header } from 'semantic-ui-react'


const Pictures = () => {
  return (
    <div>
      <Container>
        <Card.Group stackable centered itemsPerRow={3}>
          <Modal className="modal" trigger={<Card className="picturecontainer">
            <Image src='./15.jpg' centered className="pictures" />
          </Card>}>
            <Modal.Content image>
              <Image src='./15.jpg' centered className="expandedpics" />
            </Modal.Content>
          </Modal>
          <Modal className="modal" trigger={<Card className="picturecontainer">
            <Image src='./14.jpg' centered className="pictures" />
          </Card>}>
            <Modal.Content image>
              <Image src='./14.jpg' centered className="expandedpics" />
            </Modal.Content>
          </Modal>
          <Modal className="modal" trigger={<Card className="picturecontainer">
            <Image src='./13.jpg' centered className="pictures" />
          </Card>}>
            <Modal.Content image>
              <Image src='./13.jpg' centered className="expandedpics" />
            </Modal.Content>
          </Modal>
          <Modal className="modal" trigger={<Card className="picturecontainer">
            <Image src='./12.jpg' centered className="pictures" />
          </Card>}>
            <Modal.Content image>
              <Image src='./12.jpg' centered className="expandedpics" />
            </Modal.Content>
          </Modal>
          <Modal className="modal" trigger={<Card className="picturecontainer">
            <Image src='./11.jpg' centered className="pictures" />
          </Card>}>
            <Modal.Content image>
              <Image src='./11.jpg' centered className="expandedpics" />
            </Modal.Content>
          </Modal>
          <Modal className="modal" trigger={<Card className="picturecontainer">
            <Image src='./10.jpg' centered className="pictures" />
          </Card>}>
            <Modal.Content image>
              <Image src='./10.jpg' centered className="expandedpics" />
            </Modal.Content>
          </Modal>
          <Modal className="modal" trigger={<Card className="picturecontainer">
            <Image src='./7.jpg' centered className="pictures" />
          </Card>}>
            <Modal.Content image>
              <Image src='./7.jpg' centered className="expandedpics" />
            </Modal.Content>
          </Modal>
          <Modal className="modal" trigger={<Card className="picturecontainer">
            <Image src='./6.jpg' centered className="pictures" />
          </Card>}>
            <Modal.Content image>
              <Image src='./6.jpg' centered className="expandedpics" />
            </Modal.Content>
          </Modal>
          <Modal className="modal" trigger={<Card className="picturecontainer">
            <Image src='./5.jpg' centered className="pictures" />
          </Card>}>
            <Modal.Content image>
              <Image src='./5.jpg' centered className="expandedpics" />
            </Modal.Content>
          </Modal>
          <Modal className="modal" trigger={<Card className="picturecontainer">
            <Image src='./4.jpg' centered className="pictures" />
          </Card>}>
            <Modal.Content image>
              <Image src='./4.jpg' centered className="expandedpics" />
            </Modal.Content>
          </Modal>
          <Modal className="modal" trigger={<Card className="picturecontainer">
            <Image src='./3.jpg' centered className="pictures" />
          </Card>}>
            <Modal.Content image>
              <Image src='./3.jpg' centered className="expandedpics" />
            </Modal.Content>
          </Modal>
          <Modal className="modal" trigger={<Card className="picturecontainer">
            <Image src='./2.jpg' centered className="pictures" />
          </Card>}>
            <Modal.Content image>
              <Image src='./2.jpg' centered className="expandedpics" />
            </Modal.Content>
          </Modal>
          <Modal className="modal" trigger={<Card className="picturecontainer">
            <Image src='./1.jpg' centered className="pictures" />
          </Card>}>
            <Modal.Content image>
              <Image src='./1.jpg' centered className="expandedpics" />
            </Modal.Content>
          </Modal>
        </Card.Group>
      </Container>
    </div>
  )
}

export default Pictures
