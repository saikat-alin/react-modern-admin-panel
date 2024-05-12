const config = {
  // basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs, also Don't put only '/' use blank('') instead,
  // like '/berry-material-react/react/default'
  basename: '/',
  defaultPath: '/dashboard',
  fontFamily: localStorage.getItem('themeFont') || `'Inter', sans-serif`,
  borderRadius: 12,
  mode: localStorage.getItem('themeMode') || 'light'
};

if (!localStorage.getItem('themeMode')) {
  localStorage.setItem('themeMode', 'light');
}

if (!localStorage.getItem('themeFont')) {
  localStorage.setItem('themeFont', `'Inter', sans-serif`);
}

export default config;
