
export const cnProjectOrder = [
  'aida-tokyo-dining',
  'jm-bakery',
  'sy-apartment-renovation',
  'jm-cafe',
  'booths',
  'beyond-coffee',
  'house-mk',
  'fanglang',
];

/**
 * 現在のプロジェクトの前後のプロジェクトを取得（CN版）
 * @param {string} currentProjectName - 現在のプロジェクト名（例: 'house-mk'）
 * @returns {Object} { prev: string|null, next: string|null }
 */
export function getAdjacentProjects(currentProjectName) {
  const currentIndex = cnProjectOrder.indexOf(currentProjectName);

  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: currentIndex > 0 ? cnProjectOrder[currentIndex - 1] : null,
    next: currentIndex < cnProjectOrder.length - 1 ? cnProjectOrder[currentIndex + 1] : null,
  };
}
