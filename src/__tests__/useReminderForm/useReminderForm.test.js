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

const { result } = renderHook(() => useReminderForm(stateMock, eventsMock));

act(() => {
    result.current.eventsForm.setErrorsForm({})
})



describe('testing the title of the reminder', () => {



    test('It shouldnt admit more than 30 characters in title', () => {
        expect(result.current.stateForm.titleReminder.length).toBeLessThanOrEqual(30);
    });

});

describe('year month day', () => {
    test('testing the types in date', () => {
        expect(typeof result.current.stateForm.year === 'number').toBeTruthy();
        expect(typeof result.current.stateForm.month === 'string').toBeTruthy();
        expect(typeof result.current.stateForm.day === 'number').toBeTruthy();

    });

});

describe('testing city', () => {
    expect(result.current.stateForm.city.length).toBe(8);
})

describe('onSubmit without errors', () => {
    const e = {
        preventDefault: () => { },
    };
    act(() => {
        result.current.eventsForm.setErrorsForm({});
    })

    test('sending form without errors', () => {
        act(() => {
            result.current.eventsForm.onSubmit(e);
        });

        expect(eventsMock.onSubmitReminder).toHaveBeenCalled();
    })

})


describe('onSubmit with errors', () => {
    const e = {
        preventDefault: () => { },
    };
    act(() => {
        result.current.eventsForm.setErrorsForm({ titleReminder: 'the title should have at least one character'})
    })

    test('sending form without errors', () => {
        act(() => {
            result.current.eventsForm.onSubmit(e);
        });

        expect(eventsMock.onSubmitReminder).toHaveBeenCalled();
    })

})