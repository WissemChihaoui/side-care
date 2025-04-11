import React from 'react';

import { Box, Card, Stack, CardHeader, Typography } from '@mui/material';
import { Timeline, TimelineDot, TimelineItem, TimelineContent, TimelineConnector, TimelineSeparator, timelineItemClasses } from '@mui/lab';

import { fDateTime } from 'src/utils/format-time';

export function HistoryTab() {
  const timeline = [
    { time: '2025-04-10T15:08:39+01:00', title: 'Timeline 1' },
    { time: '2025-04-08T15:08:39+01:00', title: 'Timeline 2' },
    { time: '2025-04-09T15:08:39+01:00', title: 'Timeline 3' },
  ];
  return (
    <Card>
      <CardHeader title="History" />
      <Stack
        spacing={3}
        alignItems={{ md: 'flex-start' }}
        direction={{ xs: 'column-reverse', md: 'row' }}
        sx={{ p: 3 }}
      >
        <Timeline
          sx={{ p: 0, m: 0, [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0 } }}
        >
          {timeline.map((item, index) => {
            const firstTimeline = index === 0;

            const lastTimeline = index === timeline.length - 1;

            return (
              <TimelineItem key={item.title}>
                <TimelineSeparator>
                  <TimelineDot color={(firstTimeline && 'primary') || 'grey'} />
                  {lastTimeline ? null : <TimelineConnector />}
                </TimelineSeparator>

                <TimelineContent>
                  <Typography variant="subtitle2">{item.title}</Typography>

                  <Box sx={{ color: 'text.disabled', typography: 'caption', mt: 0.5 }}>
                    {fDateTime(item.time)}
                  </Box>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </Stack>
    </Card>
  );
}
