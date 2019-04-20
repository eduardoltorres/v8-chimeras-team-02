import React, { Component } from 'react';
import { green, purple } from '../resources/colors';
import { user } from '../resources/images';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart)

export default class ListItem extends Component {
  render() {
    return (
      <ListContainer>
        <Title>{this.props.title}</Title>

        <Item>
          <Avatar src={user} alt={user} />

          <div style={{ marginLeft: 15, float: 'left', width:'85%' }}>
            <Username>{this.props.user}</Username>
            <Date>{'published on ' + this.props.date}</Date>
          </div>

          <div style={{ marginLeft: '15px', float: 'right', width:'15%' }}>
            <HeartFill>
              <FontAwesomeIcon icon='heart' style={{fontSize:'25px', stroke:`${purple}`, strokeWidth:10}}/>
            </HeartFill>
            <Likes>{this.props.likes + ' likes '}</Likes>
          </div>
          <span
            style={{ color: 'red', fontWeight: 'bold', cursor: 'pointer' }}
            onClick={this.props.onDelete}
          >
            {this.props.onDelete ? 'X' : null}
          </span>
        </Item>
      </ListContainer>
    );
  }
}

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0px 0px 8px 4px gainsboro;
  padding: 0 15px 15px 20px;
  margin-bottom: 20px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  height: 80px;
  max-width: 100%;
  margin-top: -15px;
  align-items: center;
`;

/*const Like = styled.img`
  height: 20px;
  width: 20px;
  resize-mode: contain;
  margin-top: 12px;
  margin-right: 8px;
  float: right;
`*/

const Likes = styled.p`
  font-size: 14px;
  color: ${purple};
`;

const Title = styled.p`
  display: flex;
  font-size: 20px;
  color: #7f7f7f;
  justify-content: flex-start;
`;

const Date = styled.p`
  font-size: 12px;
  color: #7f7f7f;
  margin-top: 0px;
  padding-right: 5px;
  text-align: left;
`;

const Username = styled.p`
  font-size: 14px;
  color: #7f7f7f;
  text-align: left;
`;

const Avatar = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 40px;
  border: 30px solid;
  border-color: ${green};
  border-width: 6px;
  resize-mode: cover;
  background-color: ${green};
`;

const HeartFill = styled.div`
  color: white;

  &:hover {
    color: ${purple}
  }
`
