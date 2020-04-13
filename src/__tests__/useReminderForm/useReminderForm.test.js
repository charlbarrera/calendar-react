import { renderHook, act } from '@testing-library/react-hooks'
import { useReminderForm } from '../../reminders/components/hooks/useReminderForm';

const string = 'string with exactly 31 characte';
const reminderMock = {
    title: string,
    date: '2020-may-1',
    id: 1,
    hour: 3,
    minutes: 50,
    city: 'medellín'
}

const stateMock = {
    currentReminder: reminderMock,
};
const eventsMock = {
    searchCityWeather: () => { },
    onSubmitReminder: jest.fn(),
    onClose: () => { }
}

const eventMock = {
    preventDefault: () => {}
}

test('testing ther form', () => {
    const { result } = renderHook(() => useReminderForm(stateMock, eventsMock));

    //values by props
    expect(result.current.stateForm.titleReminder.length).toBeLessThanOrEqual(30);
    expect(result.current.stateForm.year).toBe(2020);
    expect(typeof result.current.stateForm.month).toBe('string');
    expect(result.current.stateForm.day).toBe(1);
    expect(result.current.stateForm.city).toBe('medellín');

    //modifying values
    act(() => {
        result.current.eventsForm.onChangeTitleReminder('roberto');
        result.current.eventsForm.setYear(2200);
        result.current.eventsForm.setDay(6);
        result.current.eventsForm.onChangeCity('barcelona');
    })

    // assert new state
    expect(result.current.stateForm.titleReminder).toBe('roberto');
    expect(result.current.stateForm.year).toBe(2200);
    expect(result.current.stateForm.day).toBe(6);
    expect(result.current.stateForm.city).toBe('barcelona');

    // add an invalid title
    act(() => {
        result.current.eventsForm.onChangeTitleReminder('');
        result.current.eventsForm.setErrorsForm({ titleReminder: 'invalid title' });
    })

    // testing the right change in error state
    expect(result.current.stateForm.errorsForm.titleReminder).toBe('invalid title');

    // try to send the form with invalid title
    act(() => {
        result.current.eventsForm.onSubmit(eventMock);
    })

    // with invalid title, the submit won't be sent
    expect(result.current.stateForm.errorsForm.titleReminder).toBe("the reminder should have at least 1 character");
    expect(eventsMock.onSubmitReminder).not.toHaveBeenCalled();

})

