import { SampleTestComponent } from 'src/app/sample-test/sample-test.component';

describe('SampleTestComponent', () => {
  let fixture: SampleTestComponent;

  beforeEach(() => {
    fixture = new SampleTestComponent();
  });

  describe('addNumbers', () => {
    it('should add two numbers', () => {
      const result = fixture.addNumbers(4, 10);
      expect(result).toEqual(14);
    });

    it('second number is not passed, default value use', () => {
      const result = fixture.addNumbers(1);
      expect(result).toEqual(4);
    });
  });

  describe('callInnerMethod', () => {
    it('should call addNumbers', () => {
      const addNumbersSpy = jest.spyOn(fixture, 'addNumbers');
      fixture.callInnerMethod();
      // expect(addNumbersSpy).toHaveBeenCalledWith(1, 2);
      expect(addNumbersSpy).toBeCalledWith(1, 2);
    });
  });
});
