import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  person: {
    paddingTop: 15,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontSize: 14,
    width: '290px',
    height: '300px',
    '&:hover': {
      '& $portrait': {
        borderBottom: 'none',
        transition: 'filter 0.3s ease-in-out',
        filter: 'blur(2.5px)',
      },
      '& $icons': {
        opacity: 1,
        transition: 'opacity .3s ease-in-out',
        MozTransition: 'opacity .3s ease-in-out',
        WebkitTransition: 'opacity .3s ease-in-out',
      },
    },
  },
  portrait: {
    position: 'relative',
    margin: 0,
    paddingBottom: 0,
    width: '260px',
    height: '240px',
    overflow: 'hidden',
  },
  name: {
    fontWeight: 600,
    paddingBottom: 6,
  },
  position: {},
  linkedin: {
    cursor: 'pointer',
    transition: 'all .2s ease-in-out',
    position: 'relative',
    width: 70,
    height: 70,
    marginRight: 30,
    '&:hover': {
      transform: 'scale(1.2)',
    },
    borderRadius: 12,
    backgroundColor: 'white',
  },
  mail: {
    cursor: 'pointer',
    transition: 'all .2s ease-in-out',
    position: 'relative',
    width: 70,
    height: 70,
    top: 0,
    '&:hover': {
      transform: 'scale(1.2)',
    },
    borderRadius: 12,
    backgroundColor: 'white',
  },
  icons: {
    position: 'absolute',
    padding: '80px 62px',
    display: 'block',
    opacity: 0,
    zIndex: 1,
  },
  cardText: {
    padding: 7,
    fontSize: 12,
  },
  '@media screen and (max-width: 600px)': {
    person: {
      paddingTop: 11,
      width: '245px',
      height: '268px',
      '&:hover': {
        '& $portrait': {
          filter: 'none',
        },
      },
    },
    portrait: {
      margin: 0,
      paddingBottom: 0,
      width: '223.6px',
      height: '206.4px',
      overflow: 'hidden',
    },
    cardText: {
      padding: 3,
      fontSize: 10,
    },
    linkedin: {
      position: 'relative',
      width: 22,
      height: 22,
      marginRight: 0,
      paddingRight: 10,
      background: 'transparent',
      '&:hover': {
        transform: 'none',
      },
    },
    mail: {
      position: 'relative',
      top: 1,
      width: 22,
      height: 22,
      background: 'transparent',
      '&:hover': {
        transform: 'none',
      },
    },
    icons: {
      position: 'absolute',
      padding: '242px 96px',
      display: 'block',
      opacity: 1,
    },
    name: {
      fontWeight: 550,
      paddingBottom: 4,
      fontSize: 11.5,
    },
  },
}));

interface MemberProps {
  readonly name: string;
  position: string;
  image: string;
  linkedin: string;
  email: string;
}

const Member: React.FC<MemberProps> = ({
  name,
  position,
  image,
  linkedin,
  email,
}) => {
  const classes = useStyles();
  return (
    <Grid item md={4}>
      <Paper className={classes.person} elevation={3}>
        <div className={classes.icons}>
          <a href={linkedin} rel="noopener noreferrer" target="_blank">
            <img
              className={classes.linkedin}
              src="https://c4cneu-public.s3.us-east-2.amazonaws.com/Board/2020/icons/linkedin_icon.svg"
            />
          </a>
          <a href={'mailto:' + email} rel="noopener noreferrer" target="_blank">
            <img
              className={classes.mail}
              src="https://c4cneu-public.s3.us-east-2.amazonaws.com/Board/2020/icons/mail_icon.svg"
            />
          </a>
        </div>
        <img className={classes.portrait} src={image} />
        <div className={classes.cardText}>
          <div className={classes.name}>{name}</div>
          <div className={classes.position}>{position}</div>
        </div>
      </Paper>
    </Grid>
  );
};

export default Member;
