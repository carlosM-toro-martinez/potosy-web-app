import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./breadcrumbs.styles";

export default function BreadcrumbComponent({
  business_name,
  route,
  idSection,
}) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };
  const classes = useStyles();
  return (
    <div role="presentation" className={classes.breadcrumbContainer}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          color="inherit"
          onClick={handleNavigate}
          className={classes.text}
        >
          {route}
        </Link>
        <Typography color="text.primary" className={classes.text}>
          {business_name}
        </Typography>
      </Breadcrumbs>
    </div>
  );
}
