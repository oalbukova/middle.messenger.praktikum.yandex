type Indexed<T = unknown> = {
  [key in string]: T;
};

export const merge = (lhs: Indexed, rhs: Indexed, rewrite = false): Indexed => {
  for (let p in rhs) {
    if (!rhs.hasOwnProperty(p)) {
      continue;
    }

    try {
      if (typeof rhs[p] === 'object' && !rewrite) {
        rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
      } else {
        lhs[p] = rhs[p];
      }
    } catch (e) {
      lhs[p] = rhs[p];
    }
  }

  return lhs;
};
