import {ElementRef, HighLightDirective } from './high-light.directive';

describe('HighLightDirective', () => {
  it('should create an instance', () => {
    const el = new ElementRef(document.createElement('div'));
    const directive = new HighLightDirective(el);
    expect(directive).toBeTruthy();
  });
});
