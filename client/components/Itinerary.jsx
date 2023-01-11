import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function Itinerary(props) {
  const itinerary = [];
    for(let i = 0; i < props.data.length; i++) {
      if(i === props.data.length - 1) {
        itinerary.push(
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>{props.data[i]}</TimelineContent>
          </TimelineItem>);
      } else {
        itinerary.push(
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{props.data[i]}</TimelineContent>
        </TimelineItem>);
      }
    }

  return (
    <Timeline position="alternate">
      {itinerary}
    </Timeline>
  );
}