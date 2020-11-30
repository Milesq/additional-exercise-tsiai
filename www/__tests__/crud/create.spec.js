import { render, fireEvent } from '@testing-library/svelte'
import Create from '../../src/components/crud/Create.svelte';

describe('Create entry component', () => {
  it('call to onCreate function after click button', async () => {
    const onCreate = jest.fn();

    const { component, container } = render(Create);
    component.$on('create', onCreate)

    expect(onCreate).not.toBeCalled()

    const createBtn = container.querySelector('button');
    await fireEvent.click(createBtn);

    expect(onCreate).toBeCalledTimes(1)
  })
})
