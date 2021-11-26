import { createTheme } from '@mui/material/styles';

const Theme1 = createTheme({
  palette: {
    primary: {
      main: '#1a73e8'
    },
    secondary: {
      main: '#b2ebf2'
    },
    warning: {
      main: '#d50000'
    },
    third: {
      main: '#f4ff81'
    },
    grey: {
      main: '#696969',
      contrastText: 'white'
    },
    gainsboro: {
      main: '#DCDCDC',
      contrastText: 'white'
    },
    darkgrey: {
      main: '#808080',
      contrastText: 'white'
    },
    pink: {
      main: '#FF69B4',
      contrastText: 'white'
    },
    deeppink: {
      main: '#FF1493',
      contrastText: 'white'
    },
    purple: {
      main: '#BA55D3',
      contrastText: 'white'
    },
    dodgerblue: {
      main: '#1E90FF',
      contrastText: 'white'
    }
  },
  myButton: {
    backgroundColor: '#fffff'
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      // md: 1140,
      // md: 1026,
      md: 1026,
      lg: 1200,
      xl: 1536
    }
  },
  shadows: [
    'none',
    '0 0 0 1px rgba(63,63,68,0.05), 0 1px 2px 0 rgba(63,63,68,0.15)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 2px 2px -2px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 4px 8px -2px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 5px 8px -2px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 6px 12px -4px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 7px 12px -4px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 6px 16px -4px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 7px 16px -4px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 8px 18px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 9px 18px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 10px 20px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 11px 20px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 12px 22px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 13px 22px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 14px 24px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 16px 28px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 18px 30px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 20px 32px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 22px 34px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 24px 36px -8px rgba(0,0,0,0.25)'
  ],
  bottomShadows: {
    zero: '0 0 12px 0 rgba(0, 0, 0, 0.12)',
    first: '0 0 12px 0 rgba(0, 0, 0, 0.14)',
    second: '0 0 12px 0 rgba(0, 0, 0, 0.46)',
    third: '0 0 16px 0 rgba(0, 0, 0, 0.66)'
  },
  typography: {
    fontSize: 14,
    fontFamily: 'Roboto, Raleway, Arial',
    h1: {
      color: 'blue',
      fontSize: '60px'
    },

    h2: {
      fontSize: '50px'
    },
    h3: {
      fontSize: '40px'
    },
    h4: {
      fontSize: '30px'
    },
    h5: {
      fontSize: '25px'
    },
    h6: {
      fontSize: '20px',
      primary: {
        main: '#0000'
      }
    }
  },
  transitions: {
    duration: {
      search: 500
    }
  },
  text: {},
  border: {
    normal: '5px'
  },
  ///////////////////////////////////// root custom
  // Button// Button// Button// Button// Button// Button
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          // color: '#fff'
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true // 버튼 클릭 효과 없애기
      },
      styleOverrides: {
        root: {
          // fontSize: '10rem',
          '&:hover': {
            // backgroundColor: '#1682d4',
            transition: 'width .2s ease-out, padding-top .2s ease-out'
          },
          '.Mui-checked': {},
          '.Mui-completed': {},
          '.Mui-disabled': {},
          '.Mui-error': {},
          '.Mui-expanded': {},
          '.Mui-focusVisible': {},
          '.Mui-focused': {},
          '.Mui-required': {},
          '.Mui-selected': {}
        }
      }
    },

    // Table // Table // Table // Table // Table

    MuiTableSortLabel: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          // color: '#1a73e8',
          '&.Mui-active': {
            color: '#f50057'
          },

          '&:hover': {
            // color: '#1a73e8'
          }
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: '1rem',

          // color: 'blue'
          'Mui-active': {
            backgroundColor: 'black'
          }
        },
        '&:hover': {
          backgroundColor: 'black'
        }
      }
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          fontSize: '11rem',
          color: 'green'
        },
        '&:hover': {
          backgroundColor: 'red'
        }
      }
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          background: '#eeeeee'

          // fontSize: '11rem',
          // backgroundColor: 'red'
        }
      }
    },

    // TextField // TextField // TextField // TextField
    MuiTextField: {
      styleOverrides: {
        root: {
          // backgroundColor: 'red'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          // backgroundColor: 'red'
        }
      }
    },

    // Card
    MuiCard: {
      styleOverrides: {
        root: {
          // backgroundColor: 'red'
        }
      }
    },

    // CheckBox  // CheckBox  // CheckBox  // CheckBox
    MuiCheckbox: {
      styleOverrides: {
        root: {
          // backgroundColor: 'red'
          '&.Mui-checked': {}
        }
      }
    }
  }
});

export default Theme1;
