import React from 'react'
import { shallow } from 'enzyme'
import Input from '.'

const wrap = (props = {}) => shallow(<Input {...props} />).dive()

describe('A suite', function() {
    it('should contain full-width as class name', () => {
        expect(shallow(<Input />).find('.full-width').length).toBe(1);
    })
    it('should render without throwing an error', function() {
      expect(shallow(<Input />).contains(<div className="foo">Bar</div>)).toBe(true);
    });
  
    it('should be selectable by class "foo"', function() {
      expect(shallow(<Input />).is('.foo')).toBe(true);
    });
  
    it('should mount in a full DOM', function() {
      expect(mount(<Input />).find('.foo').length).toBe(1);
    });
  
    it('should render to static HTML', function() {
      expect(render(<Input />).text()).toEqual('Bar');
    });
});