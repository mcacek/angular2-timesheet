import { inject } from '@angular/core/testing';

import { LocalStorage } from './localStorage';

describe('LocalStorage Service', () => {
  let service;

  beforeEach(() => {
    service = new LocalStorage();
  });

  it('should initialize a storage backend', () => {
    expect(service.storageBackend).toBeUndefined();

    service.initStorage(window.localStorage);

    expect(service.storageBackend).not.toBeUndefined();
  });

  it('should allow interaction', () => {
    const thingKey = 'thing';
    service.initStorage(window.localStorage);

    expect(service.getItem(thingKey)).toBeNull();

    service.setItem(thingKey, 'value');

    expect(service.getItem(thingKey)).toBe('value');

    service.removeItem(thingKey);

    expect(service.getItem(thingKey)).toBeNull();
  });
});
