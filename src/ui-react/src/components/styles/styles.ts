import { makeStyles } from '@mui/styles';
import {
  grayColors,
  primaryColors,
  greenColors,
  redColors,
  blueColors,
  whiteColor,
} from '../constants/Constants';

const greenGradientBkg = {
  background: `linear-gradient(45deg, 
        ${greenColors[0]},${greenColors[9]})`,
};
const greenBkg = {
  backgroundColor: greenColors[5],
};
const redBkg = {
  background: redColors[5],
};
const redGradientBkg = {
  background: `linear-gradient(45deg, 
          ${redColors[0]},${redColors[9]})`,
};
const blueBkg = {
  background: `linear-gradient(45deg, 
            ${blueColors[0]},${blueColors[9]})`,
};

const greenBlueBkg = {
  background: `linear-gradient(45deg, 
              ${blueColors[0]},${greenColors[0]})`,
};
const greenBlueBkg2 = {
  background: `linear-gradient(45deg, 
    ${blueColors[1]},${greenColors[0]})`,
};
const defaultFont = {
  color: grayColors[4],
  fontSize: '16px',
  fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
  // fontFamily:
  //   'medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
};

const whiteFont = {
  color: whiteColor,
  fontSize: '14px',
};

const lightFont = {
  color: grayColors[12],
  fontSize: '14px',
};

export const labelStyles = makeStyles({
  root: {
    ...defaultFont,
    verticalAlign: 'bottom',
    paddingBottom: 8,
  },
});

export const inputLabelStyles = makeStyles({
  root: {
    color: grayColors[7],
    fontSize: '10px',
    lineHeight: '1.42857',
    top: '10px',
  },
});

export const textInputStyles = makeStyles({
  root: {
    ...defaultFont,
    width: '100%',
  },
});
const headerBase = {
  ...defaultFont,
  fontWeight: 600,
  display: 'flex',
  justifyContent: 'center',
  padding: 8,
};
const footerBase = {
  display: 'flex',
  ...defaultFont,
  padding: 8,
  justifyContent: 'flex-end',
  height: 64,
};
export const cardStyles = makeStyles({
  container: {
    margin: '8px auto',
    padding: 0,
    position: 'relative',
  },
  root: {
    margin: 4,
    borderRadius: 10,
    ...greenBlueBkg,
    overflow: 'hidden',
    padding:4
  },
  header: {
    ...greenGradientBkg,
    ...headerBase,
    position: 'relative',
  },
  pageheader: {
    position: 'fixed',
    top: 0,
    height: 64,
    ...greenGradientBkg,
    padding: '8px 16px',
    zIndex: 100,
    margin: '0 auto',
  },
  body: {
    ...defaultFont,
    width: '100%',
    margin: 8,
    padding: 8,
  },
  profileBody: {
    ...defaultFont,
    width: '100%',
    margin: 8,
    padding: 8,
    height: 300,
    boxSizing: 'border-box',
    overflowY: 'auto',
  },
  viewProfileBody: {
    ...defaultFont,
    width: '100%',
    margin: 8,
    padding: 8,
    height: 'calc(100vh - 240px)',
    boxSizing: 'border-box',
    overflowY: 'auto',
  },
  footer: {
    ...greenGradientBkg,
    ...footerBase,
    boxSizing: 'border-box',
  },
  headerNoBkg: {
    ...headerBase,
  },
  footerNoBkg: {
    ...footerBase,
    boxSizing: 'border-box',
  },
  headerBlue: {
    ...headerBase,
    ...blueBkg,
    position: 'relative',
  },
  profile: {
    margin: 16,
    borderRadius: 10,
    ...greenBlueBkg,
  },
  qn: {
    margin: 16,
  },
  viewProfile: {
    margin: '72px 16px 16px 16px',
    borderRadius: 10,
    ...greenBlueBkg,
  },
  profilelist: {
    fontWeight: 500,
    padding: 8,
    wordBreak: 'break-word',
  },
  profilequote: {
    fontStyle: 'italic',
    padding: 8,
  },
  profileitem: {
    padding: 8,
  },
  modal: {
    position: 'relative',
    top: 0,
    left: 0,
    outline: 'none',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  form: {
    margin: '72px 16px 16px 16px',
    borderRadius: 10,
    ...greenBlueBkg,
    overflowY: 'auto',
    overflow: 'hidden',
    height: 'calc(100vh - 120px)',
  },
  leftIcon: {
    position: 'absolute',
    left: 16,
    top: 4,
  },
  link: {
    ...lightFont,
    padding: 4,
    outline: 'none',
    textDecoration: 'none',
    textAlign: 'center',
  },
  navlink: {
    ...defaultFont,
    padding: 4,
    outline: 'none',
    textDecoration: 'none',
  },
  qbrief: {
    padding: 8,
    height: 52,
    boxSizing: 'border-box',
  },
  qactive: {
    ...greenBlueBkg,
    borderLeft: `2px solid ${greenColors[5]}`,
  },
  options: {
    padding: '16px 32px',
  },
  option: {
    padding: 8,
  },
  postBody: {
    ...defaultFont,
    width: '100%',
    margin: 8,
    padding: 8,
  },
  postItem: {
    padding: 8,
  },
  postText: {
    paddingRight: 32,
    paddingLeft: 16,
    textAlign: 'justify',
    // lineHeight: '28px',
    // letterSpacing: '0.05em',
    fontFamily: 'Metropolis-Regular',
    fontSize: 20,
    lineHeight: 1.7,
    color: grayColors[2],
  },
  post: { margin: 16, borderRadius: 10, ...greenBlueBkg, padding: 16 },
  more: {
    cursor: 'pointer',
    color: grayColors[6],
  },
});

export const formStyles = makeStyles({
  formLine: {
    margin: 8,
    padding: 8,
  },
});

export const selectInputStyles = makeStyles({
  root: {
    ...defaultFont,
    width: '100%',
  },
});

export const textFieldRootStyles = makeStyles({
  root: {
    width: '100%',
    ...defaultFont,
    '&:focused': {
      color: grayColors[0],
    },
  },
  underline: {
    '&:after': {
      borderBottomColor: primaryColors[0],
      transition: 'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
    },
    '&:before': {
      borderBottom: `.5px solid ${grayColors[10]}`,
    },
    '&:hover:not(:disabled):before': {
      borderBottom: `1px solid ${primaryColors[0]}`,
    },
  },
});

export const chipClasses = makeStyles({
  root: {
    width: '100%',
    ...defaultFont,
    ...greenGradientBkg,
  },
});

export const textFieldLabelStyles = makeStyles({
  root: {
    color: grayColors[0],
    '&$focused': {
      color: primaryColors[0],
    },
  },
  focused: {},
});

export const checkboxStyles = makeStyles({
  colorPrimary: {
    color: primaryColors[0],
    '&$checked': {
      color: primaryColors[0],
    },
  },
  checked: {
    color: primaryColors[0],
  },
});

export const formControlLabelStyles = makeStyles({
  root: {
    ...defaultFont,
  },
  label: {
    ...defaultFont,
  },
});

export const dateStyles = makeStyles({
  datePicker: {
    padding: '6px 0',
    width: '100%',
    background: 'none',
    border: 'none',
    outline: 'none',
    ...defaultFont,
    borderBottomColor: grayColors[10],
    borderBottomStyle: 'solid',
    borderBottomWidth: 0.5,
    '&:focus': {
      transition: 'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
      borderBottomColor: primaryColors[0],
      borderBottomWidth: 2,
    },
  },
  wrapper: {
    width: '100%',
  },
});

export const buttonStyles = makeStyles({
  primary: {
    color: whiteColor,
    fontWeight: 400,
    textTransform: 'none',
    ...greenBkg,
    padding: '4px 8px',
    margin: 8,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: greenColors[7],
    },
  },
  delete: {
    color: redColors[5],
    fontWeight: 400,
    textTransform: 'none',
    padding: '4px 8px',
    margin: 8,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: redColors[7],
    },
  },

  edit: {
    color: greenColors[5],
    fontWeight: 400,
    textTransform: 'none',
    padding: '4px 8px',
    margin: 8,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: greenColors[7],
    },
  },
  close: {
    color: redColors[1],
    fontWeight: 400,
    textTransform: 'none',
    padding: 0,
    margin: 8,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: redColors[1],
      color: redColors[5],
    },
    position: 'relative',
    top: -8,
  },
});

export const dragStyles = makeStyles({
  dragGroup: {
    padding: 8,
    minHeight: 32,
    border: '.5px solid #eee',
    margin: 8,
    borderRadius: 8,
  },
  draggingOver: {
    ...greenBlueBkg2,
  },
  dragItem: {
    margin: 4,
    paddingLeft: 16,
    padding: 4,
    borderRadius: 10,
    backgroundColor: grayColors[13],
    overflow: 'hidden',
    minHeight: 16,
  },
  draggingItem: {
    ...greenGradientBkg,
  },
});

export const framerStyles = makeStyles({
  ul: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    position: 'relative',
    width: 300,
  },
  li: {
    borderRadius: 10,
    marginBottom: 10,
    cursor: 'pointer',
    width: '100%',
    height: 80,
    listStyle: 'none',
    padding: 0,
    margin: 0,
    position: 'relative',
  },
});
