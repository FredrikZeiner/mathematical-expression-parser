export const ast1 = {
  value: '+',
  right: {
    value: '3',
  },
  left: {
    value: '+',
    right: {
      value: '2',
    },
    left: {
      value: '1',
    },
  },
};

export const ast2 = {
  value: '+',
  right: {
    value: '3',
  },
  left: {
    value: '*',
    right: {
      value: '2',
    },
    left: {
      value: '1',
    },
  },
};

export const ast3 = {
  value: '+',
  right: {
    value: '4',
  },
  left: {
    value: '+',
    right: {
      value: '3',
    },
    left: {
      value: '*',
      right: { value: '2' },
      left: { value: '2' },
    },
  },
};

export const ast4 = {
  value: '+',
  right: {
    value: '*',
    right: { value: '4' },
    left: { value: '3' },
  },
  left: {
    value: '*',
    right: { value: '2' },
    left: { value: '1' },
  },
};

export const ast5 = {
  value: '/',
  right: {
    value: '10',
  },
  left: {
    value: '2',
  },
};

export const ast6 = {
  value: '*',
  left: {
    value: '/',
    left: { value: '2' },
    right: { value: '10' },
  },
  right: {
    value: '3',
  },
};
