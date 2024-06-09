/*import ShowPopover from '../engine/showPopover';
import app from '../app';

jest.mock('../engine/showPopover');

beforeEach(() => {
  ShowPopover.mockClear();
});

test('new ShowPopover wont be created automatically', () => {
  expect(ShowPopover).not.toHaveBeenCalled();
});

test('app() should create new ShowPopover', () => {
  app();
  expect(ShowPopover).toHaveBeenCalledTimes(1);
});

test('app() should call method init', () => {
  expect(ShowPopover).not.toHaveBeenCalled();
  app();
  expect(ShowPopover).toHaveBeenCalledTimes(1);

  const showPopoverInstance = ShowPopover.mock.instances[0];
  const mockInit = showPopoverInstance.init;

  expect(mockInit).toHaveBeenCalledTimes(1);
});*/

import { JSDOM } from 'jsdom';
import ShowPopover from '../engine/showPopover';
import app from '../app';

jest.mock('../engine/showPopover');

describe('ShowPopover DOM tests with JSDOM', () => {
  let dom;
  let container;

  beforeEach(() => {
    // Создаем новое экземпляр JSDOM
    dom = new JSDOM('<!DOCTYPE html><html><body><div id="app"></div></body></html>', {
      runScripts: 'dangerously',
      resources: 'usable'
    });

    // Получаем контейнер для нашего теста
    container = dom.window.document.getElementById('app');

    ShowPopover.mockClear();
  });

  test('new ShowPopover wont be created automatically', () => {
    expect(ShowPopover).not.toHaveBeenCalled();
  });

  test('app() should create new ShowPopover', () => {
    dom.window.app = app;
    dom.window.app();
    expect(ShowPopover).toHaveBeenCalledTimes(1);
  });

  test('app() should call method init', () => {
    dom.window.app = app;
    expect(ShowPopover).not.toHaveBeenCalled();
    dom.window.app();
    expect(ShowPopover).toHaveBeenCalledTimes(1);

    const showPopoverInstance = ShowPopover.mock.instances[0];
    const mockInit = showPopoverInstance.init;

    expect(mockInit).toHaveBeenCalledTimes(1);
  });
});