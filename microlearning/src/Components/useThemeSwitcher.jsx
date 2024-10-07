import { useEffect } from 'react';

const useThemeSwitcher = () => {
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');

    const getPreferredTheme = () => {
      if (storedTheme) {
        return storedTheme;
      }
      return window.matchMedia('(prefers-color-scheme: light)').matches
        ? 'light'
        : 'dark';
    };

    const setTheme = (theme) => {
      if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-bs-theme', theme);
      }
    };

    setTheme(getPreferredTheme());

    const showActiveTheme = (theme) => {
      const activeThemeIcon = document.querySelector('.theme-icon-active use');
      const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`);
      const svgOfActiveBtn = btnToActive?.querySelector('.mode-switch use')?.getAttribute('href');

      if (!svgOfActiveBtn) return;

      document.querySelectorAll('[data-bs-theme-value]').forEach((element) => {
        element.classList.remove('active');
      });

      btnToActive.classList.add('active');
      activeThemeIcon.setAttribute('href', svgOfActiveBtn);
    };

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (storedTheme !== 'light' || storedTheme !== 'dark') {
        setTheme(getPreferredTheme());
      }
    });

    showActiveTheme(getPreferredTheme());

    document.querySelectorAll('[data-bs-theme-value]').forEach((toggle) => {
      toggle.addEventListener('click', () => {
        const theme = toggle.getAttribute('data-bs-theme-value');
        localStorage.setItem('theme', theme);
        setTheme(theme);
        showActiveTheme(theme);
      });
    });
  }, []);
};

export default useThemeSwitcher;
