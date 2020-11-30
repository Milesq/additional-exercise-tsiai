import { render, fireEvent } from '@testing-library/svelte'
import Edit from '../../src/components/crud/Edit.svelte';

describe('Edit entry component', () => {
  it('call to save function after click button', async () => {
    const onCreate = jest.fn();

    const { component, container } = render(Edit);
    component.$on('create', onCreate)

    expect(onCreate).not.toBeCalled()

    const createBtn = container.querySelector('button');
    await fireEvent.click(createBtn);

    expect(onCreate).toBeCalledTimes(1)
  })
})
