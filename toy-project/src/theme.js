// 576 미만(xs), 576이상(sm), 768이상(md), 992이상(lg), 1200이상(xl), 1400이상(xxl)

const size = {
  mobile : '650px',
  tablet : '992px',
  desktop : '1500px',
  full: '2000px',
}

const theme = {
  mobile : `(max-width:${size.mobile})`,
  tablet : `(max-width:${size.tablet})`,
  desktop : `(max-width:${size.desktop})`,
  full: `(min-width:${size.full})`,
  bigpt : '40px',
  //bgColor: 'radial-gradient(73% 147%, #EADFDF 59%, #ECE2DF 100%), radial-gradient(91% 146%, rgba(255,255,255,0.50) 47%, rgba(0,0,0,0.50) 100%)',
  //bgColor: 'linear-gradient(to bottom, #dfe9f3 0%, white 100%)',
  // bgColor: 'linear-gradient(to top, #a8edea 0%, #fed6e3 100%)',
  // background-image: ;
}
//background-image: radial-gradient(73% 147%, #EADFDF 59%, #ECE2DF 100%), radial-gradient(91% 146%, rgba(255,255,255,0.50) 47%, rgba(0,0,0,0.50) 100%);
//background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
export default theme;