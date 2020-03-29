import addon from './index';

test('Console class exists', (): void => {
  expect(typeof addon.Console).toBe('function');
});

test('Console class has static method called info', (): void => {
  expect(addon.Console.hasOwnProperty('info')).toBe(true);
});
test('Console class has static method called warn', (): void => {
  expect(addon.Console.hasOwnProperty('warn')).toBe(true);
});
test('Console class has static method called success', (): void => {
  expect(addon.Console.hasOwnProperty('success')).toBe(true);
});
test('Console class has static method called error', (): void => {
  expect(addon.Console.hasOwnProperty('error')).toBe(true);
});

test('File class exists', (): void => {
  expect(typeof addon.File).toBe('function');
});

test('File class is construtable', (): void => {
  const fileLogger = new addon.File('./log.log');
  expect(fileLogger.hasOwnProperty('path')).toBe(true);
});

test('Object instantiated of File class has method called info', (): void => {
  const fileLogger = new addon.File('./log.log');
  expect(typeof fileLogger.info).toBe("function");
});

test('Object instantiated of File class has method called error', (): void => {
  const fileLogger = new addon.File('./log.log');
  expect(typeof fileLogger.error).toBe("function");
});

test('Object instantiated of File class has method called warn', (): void => {
  const fileLogger = new addon.File('./log.log');
  expect(typeof fileLogger.warn).toBe("function");
});

test('Object instantiated of File class has method called success', (): void => {
  const fileLogger = new addon.File('./log.log');
  expect(typeof fileLogger.success).toBe("function");
});