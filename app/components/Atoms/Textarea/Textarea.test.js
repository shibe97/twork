import React from 'react';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';

import Textarea from './Textarea';

describe('components/atoms/textarea', function() {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Textarea value="test" inputUpdate={() => {}} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should have "textarea" class', function() {
    expect(shallow(<Textarea value="test" />).hasClass('textarea')).toEqual(true);
  });
  it('should have value', function() {
    expect(shallow(<Textarea value="test" />).prop('value')).toEqual('test');
  });
  it('simulates change events', function() {
    const onChange = sinon.spy();
    const textarea = shallow(<Textarea inputUpdate={onChange} />);
    textarea.simulate('change', {target : {value : 'test'}});
    expect(onChange.lastCall.args[0]).toEqual('test');
  });
});
