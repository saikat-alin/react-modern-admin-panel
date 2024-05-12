// material-ui
import logo from 'assets/images/techEureka.jpg';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {

  return (
    <img src={logo} alt="logo" width="50" />
  );
};

export default Logo;
