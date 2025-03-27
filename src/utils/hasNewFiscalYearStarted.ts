export const hasNewFiscalYearStarted = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  return currentYear >= 2025 && currentMonth >= 4;
};
