import { useStyles } from './cardItem.styles';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

function CardItem({ data }) {
  const { business_name, logo_url, business_id } = data;
  const correctedUrl = logo_url.replace(/\\/g, '/');
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/datails/${business_id}`)
  }
  const classes =
    useStyles();
  return (
    <>
      {logo_url ? <div className={classes.book} onClick={handleNavigate} >
        <div className={classes.cover} style={{ backgroundImage: `url(${correctedUrl})` }} >
        </div>
      </div> :
        <>
          <div className={classes.book} onClick={handleNavigate} >
            <div className={classes.cover}>
            </div>
          </div>
          <div className={classes.book} onClick={handleNavigate} >
            <div className={classes.cover}>
            </div>
          </div>
          <div className={classes.book} onClick={handleNavigate} >
            <div className={classes.cover}>
            </div>
          </div>
        </>
      }
      <div className={classes.container}>
        <Typography variant="h4">
          {business_name}
        </Typography>
      </div>
    </>
  )
}

export default CardItem