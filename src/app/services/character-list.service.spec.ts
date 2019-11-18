import { TestBed } from '@angular/core/testing';

import { CharacterListService } from './character-list.service';

describe('CharacterListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharacterListService = TestBed.get(CharacterListService);
    expect(service).toBeTruthy();
  });
});
