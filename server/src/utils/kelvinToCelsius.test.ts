import { kelvinToCelsius } from './kelvinToCelsius';
import { describe, it, expect } from 'vitest';

describe('kelvinToCelsius', () => {
  it('converts kelvin to celsius', () => {
    expect(kelvinToCelsius(300)).toEqual(27);
  });

  it('converts kelvin to celsius', () => {
    expect(kelvinToCelsius(0)).toEqual(-273);
  });
});
