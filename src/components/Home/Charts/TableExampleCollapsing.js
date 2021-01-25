import React from 'react'
import { Header, Image, Table } from 'semantic-ui-react'
// images
import fb from './images/fb.png'
import star from "./images/star.png";

const TableExampleCollapsing = () => (
  <Table basic='very' celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Source</Table.HeaderCell>
        <Table.HeaderCell>Comment</Table.HeaderCell>
        <Table.HeaderCell>Rating</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>


      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
          <a href="https://goo.gl/maps/RfdZnGs43qxpQk3c6">
            <Image src={fb} rounded size='mini' />
            </a>
            <Header.Content>
              Facebook
              <Header.Subheader>a day ago</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>Every dish was delicious - we wanted to lick the plates clean lol. Ribs are cooked perfectly with slight hint of smokiness and falls straight off the bones. Nice casual and relaxed vibes, felt like we were back in the states at a bbq joint. Highly recommended.</Table.Cell>
        <Table.Cell>
        4 <Image src={star} style={{width: "15px"}}/>
        </Table.Cell>
      </Table.Row>


      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
          <a href="https://goo.gl/maps/RfdZnGs43qxpQk3c6">
            <Image src={fb} rounded size='mini' />
            </a>
            <Header.Content>
              Facebook
              <Header.Subheader>a day ago</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>Every dish was delicious - we wanted to lick the plates clean lol. Ribs are cooked perfectly with slight hint of smokiness and falls straight off the bones. Nice casual and relaxed vibes, felt like we were back in the states at a bbq joint. Highly recommended.</Table.Cell>
        <Table.Cell>
        4 <Image src={star} style={{width: "15px"}}/>
        </Table.Cell>
      </Table.Row>


      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
          <a href="https://goo.gl/maps/RfdZnGs43qxpQk3c6">
            <Image src={fb} rounded size='mini' />
            </a>
            <Header.Content>
              Facebook
              <Header.Subheader>a day ago</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>Every dish was delicious - we wanted to lick the plates clean lol. Ribs are cooked perfectly with slight hint of smokiness and falls straight off the bones. Nice casual and relaxed vibes, felt like we were back in the states at a bbq joint. Highly recommended.</Table.Cell>
        <Table.Cell>
        4 <Image src={star} style={{width: "15px"}}/>
        </Table.Cell>
      </Table.Row>



      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
          <a href="https://goo.gl/maps/RfdZnGs43qxpQk3c6">
            <Image src={fb} rounded size='mini' />
            </a>
            <Header.Content>
              Facebook
              <Header.Subheader>a day ago</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>Every dish was delicious - we wanted to lick the plates clean lol. Ribs are cooked perfectly with slight hint of smokiness and falls straight off the bones. Nice casual and relaxed vibes, felt like we were back in the states at a bbq joint. Highly recommended.</Table.Cell>
        <Table.Cell>
        4 <Image src={star} style={{width: "15px"}}/>
        </Table.Cell>
      </Table.Row>


    </Table.Body>
  </Table>
)

export default TableExampleCollapsing