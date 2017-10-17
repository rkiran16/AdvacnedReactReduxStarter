import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

// Use 'describe' to group together similar tests
describe('App' , () => {
  let component;

  beforeEach(() => {

    component = renderComponent(App);
  });

  // use 'it' to test a single attribute of target
  it('renders something', () => {
    //use 'expect' to make an assertion about a target
    expect(component).to.contain('React simple starter');
  });
});
