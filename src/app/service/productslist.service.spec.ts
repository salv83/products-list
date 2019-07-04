import { TestBed } from '@angular/core/testing';

import { ProductslistService } from './productslist.service';

describe('ProductslistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductslistService = TestBed.get(ProductslistService);
    expect(service).toBeTruthy();
  });
});
