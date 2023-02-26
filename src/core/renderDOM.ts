import { Block } from 'core';

export const renderDOM = (rootQuery: string, block: Block) => {
  const root = document.querySelector(rootQuery);

  if (!root) {
    throw new Error('Root not found');
  }

  root.innerHTML = '';
  root.appendChild(block.getContent());
};
