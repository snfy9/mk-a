
export const projectOrder = [
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
 * 現在のプロジェクトの前後のプロジェクトを取得（EN版）
 * @param {string} currentProjectName - 現在のプロジェクト名（例: 'house-mk'）
 * @returns {Object} { prev: string|null, next: string|null }
 */
export function getAdjacentProjects(currentProjectName) {
  const currentIndex = projectOrder.indexOf(currentProjectName);

  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: currentIndex > 0 ? projectOrder[currentIndex - 1] : null,
    next: currentIndex < projectOrder.length - 1 ? projectOrder[currentIndex + 1] : null,
  };
}
