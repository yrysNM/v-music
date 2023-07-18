import { describe, cv } from 'vitest';
// https://on.cypress.io/api

describe('My First Test', () => {
  it('visits the app root url', () => {
    cv.visit("/");
    cv.contains("#header a:first-child", "Music");
  })
})
