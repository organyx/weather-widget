import { describe, it, expect } from 'vitest';
import { degreesToDirection } from './degreesToDirection';

describe('degreesToDirection', () => {
  it('converts 0 degrees to direction North', () => {
    expect(degreesToDirection(0)).toEqual('N');
  });

  it('converts 360 degrees to direction North', () => {
    expect(degreesToDirection(360)).toEqual('N');
  });

  it('converts 45 degrees to direction North East', () => {
    expect(degreesToDirection(45)).toEqual('NE');
  });

  it('converts 90 degrees to direction East', () => {
    expect(degreesToDirection(90)).toEqual('E');
  });
});
