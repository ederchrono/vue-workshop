import { mount } from '@vue/test-utils'
import TodoList from '../components/todo/TodoList.vue'

const propsData = {
  tasks: [
    {description: 'hi', isDone: false}
  ]
}

describe('TodoList', () => {
  let wrapper
  beforeAll(() => {
    wrapper = mount(TodoList, {
      propsData
    })
  })
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('has correct text', () => {
    expect(wrapper.find('span').text()).toBe('hi - pending')
  })
})
