import { useState, useEffect, useContext} from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom'
import { AppContext } from '../App'
import styled from 'styled-components';
import useUserCheck from '../hooks/useUserCheck'

import { Box, Button, List, ListItem, ListItemText, IconButton, Accordion, AccordionSummary, AccordionDetails, Grid, Divider  } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';
import PeopleIcon from '@mui/icons-material/People';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function TrainingDisplay() {
  const {training} = useParams();
  const [trainingData, setTrainingData] = useState({})
  const navigate = useNavigate();

  const fetchTraining = async () => {
    const response = await fetch(`http://localhost:4000/training/${training}`)
    const data = await response.json();
    setTrainingData(data);
  }

  useEffect(()=>
  {
    fetchTraining();
  }, training)

  return (
    <>
      <ButtonTraining onClick={()=>navigate(-1)}>Go Back</ButtonTraining>
      {trainingData ?
      <FlexDiv>
      <LeftDiv>
        <ListTitle>
          <StarIcon sx={{fontSize: 'xxx-large'}} />
          <ListHeader>{trainingData.name}</ListHeader>
        </ListTitle>
        <SubDiv>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: 'fit-content',
              border: (theme) => `1px solid ${theme.palette.divider}`,
              borderRadius: 1,
              bgcolor: 'background.paper',
              color: 'text.secondary',
              '& svg': {
                m: 1.5,
              },
              '& hr': {
                mx: 2,
              },
            }}
          >
                <Grid>
                  {trainingData.type_name}
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid>
                  {`Time Requirement: ${trainingData.interval} days`}
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid>
                  {`Source: ${trainingData.source}`}
                </Grid>
              </Box>
          </SubDiv>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '95%',
            height: '80%',
            border: (theme) => `3px solid ${theme.palette.divider}`,
            borderRadius: 1,
            bgcolor: 'background.paper',
            color: 'text.secondary',
            marginTop: '1vh',
            marginLeft: '1vw',
            '& svg': {
              m: 1.5,
            },
            '& hr': {
              mx: 0.5,
            },
          }}>

        </Box>
      </LeftDiv>
      <Divider sx={{height: '75vh'}}orientation="vertical" flexItem />
      <RightDiv>
        <ButtonTraining onClick={()=>navigate(-1)}>Go To Training</ButtonTraining>
        <ButtonTraining onClick={()=>navigate(-1)}>Submit Certificate</ButtonTraining>
      </RightDiv>
      </FlexDiv>
      : null}

    </>
  )
}

const FlexDiv = styled.div`
overflow: hidden;
display: flex;`

const LeftDiv = styled.div`
width: 75vw;
overflow: hidden;
align-items: center;
`

const RightDiv = styled.div`
width: 25vw;
overflow: hidden;
display: flex;
flex-direction: column;

`

const SubDiv = styled.div`
overflow: hidden;
margin-left: 3vw;`

const ButtonTraining = styled.button`
    background-color: MidnightBlue;
    color: white;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #007BFF;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
        background-color: white;
        color: #007BFF;
    }

    &:focus {
        outline: none;
        border: 2px solid #0056b3; // Darker blue border
    }
`;

const ListTitle = styled.div`
display: flex;
flex-direction: row;
width: 100%;
`;
const ListHeader = styled.span`
font-size: xxx-large;
font-weight: 700;
`;
const ListSubHeader = styled.span`
font-size: x-large;
`;