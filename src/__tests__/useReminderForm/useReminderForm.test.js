import { renderHook, act } from '@testing-library/react-hooks'
import { useReminderForm } from '../../reminders/components/hooks/reminderForm'


test('shouldnt admit more than 30 characters in title', () => {

    const string = 'string with exactly 31 characte';

    const reminderMock = {
        id: 1,
        title: string,
        date: '2019-may-2',
        hour: 3,
        minutes: 50,
        city: 'medellín'
    }

    const { result } = renderHook(() => useReminderForm(reminderMock))

    //   act(() => {
    //     result.current.increment()
    //   })

    expect(result.current.stateForm.title.length).toBeLessThanOrEqual(30);
})