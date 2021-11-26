const Logo = (props) => (
  <img
    alt="Logo"
    src="/static/images/logo.png"
    {...props}
    style={{
      width: '52px',
      height: '52px'
      // backgroundColor: 'white',
      // borderRadius: '10px'
    }}
  />
);

export default Logo;
