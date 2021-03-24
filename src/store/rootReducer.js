const initialState = {
  meetings: [
    {
      meetingTitle: 'Cool meeting',
      meetingHours: '1',
      meetingMinutes: '10',
      meetingNotes: 'BlahBlah BlahBlahBlah BlahBlahv  Blah Blah BlahBlah',
      meetingDate: {
        day: 24,
        month: 2,
        year: 2021
      },
      meetingTimezone: {
        value: 'America/Juneau',
        label: '(GMT-8:00) Alaska'
      },
      meetingTime: '00:00',
      meetingAttendees: [
        {
          team: 'circal-dev',
          name: 'Natasha Rao'
        },
        {
          team: 'circal-dev',
          name: 'Aarushi Upadhayaya'
        },
        {
          team: 'circal-dev',
          name: 'Ibrahim Saeed'
        }
      ],
      id: '037c133f-ec14-470c-afc8-ed84379d6db3'
    }
  ]
};

const rootReducer = (state = initialState, action) => {
  if (action.type === 'ADD_MEETING') {
    const newMeetings = [...state.meetings, action.newMeetingData];
    return { ...state, meetings: newMeetings };
  } else {
    return state;
  }
};

export default rootReducer;
