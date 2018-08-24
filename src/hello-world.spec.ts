import { sayHello } from './hello-world';

describe('sayHello', () => {
  it('should say hello', () => {
    console.info = jest.fn();

    sayHello('User');

    expect(console.info).toHaveBeenCalledWith('Hello User');
  });
});
