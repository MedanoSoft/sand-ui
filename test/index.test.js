import * as Components from '../src';

describe('SAND-UI test', () => {
  it('components defined', () => {
    expect(Components).toBeDefined();
  });
  
  it('default exports scheme of components', () => {
    expect(typeof Components).toBe(typeof {});
  });
  
  it('default exports contains all components', () => {
    expect(Components.Button).toBeDefined();
    expect(Components.Box).toBeDefined();
  });
});
