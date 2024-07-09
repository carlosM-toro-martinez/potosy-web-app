import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { useStyles } from "./adminDashboard.styles";
import DeleteIcon from "@mui/icons-material/Delete";
import { useQuery } from "react-query";
import businessService from "../../async/services/businessService";
import businessDeleteServices from "../../async/services/delete/businessDeleteServices";
import { useNavigate } from "react-router-dom";

function AdminDashbord() {
  //const { data, isLoading, isError, error } = useQuery(`business`, () => sectionsService());
  const { data, isLoading, isError, error, refetch } = useQuery(
    `business`,
    () => businessService()
  );
  const navigate = useNavigate();
  const handleNavigate = (business_id) => {
    navigate(`/admin/detailBusiness/${business_id}`);
  };
  const handleDelete = async (idBusiness) => {
    try {
      await businessDeleteServices(idBusiness);
      refetch();
    } catch (error) {
      console.error("Error deleting business:", error);
    }
  };
  const clasess = useStyles();
  return (
    <Box className={clasess.container}>
      <TableContainer
        component={Paper}
        elevation={8}
        sx={{
          color: "black",
        }}
      >
        <Box className={clasess.box}>
          <Typography variant="h3">establecimientos</Typography>
          <Table sx={{ width: "50rem" }} className={clasess.table}>
            <TableHead>
              <TableRow
                sx={{
                  color: "black",
                }}
              >
                <TableCell sx={{ color: "black" }} className={clasess.row}>
                  Logo
                </TableCell>
                <TableCell sx={{ color: "black" }} className={clasess.row}>
                  Nombre
                </TableCell>
                <TableCell sx={{ color: "black" }} className={clasess.row}>
                  telefono
                </TableCell>
                <TableCell sx={{ color: "black" }} className={clasess.row}>
                  direccion
                </TableCell>
                <TableCell sx={{ color: "black" }} className={clasess.row}>
                  Detalles
                </TableCell>
                <TableCell sx={{ color: "black" }} className={clasess.row}>
                  Eliminar
                </TableCell>
                <TableCell sx={{ color: "black" }} className={clasess.row}>
                  Estado
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!isLoading && !error
                ? data.map((item) => (
                    <TableRow key={item.business_id} sx={{ color: "black" }}>
                      <TableCell
                        sx={{
                          color: "black",
                          textTransform: "capitalize",
                        }}
                      >
                        <img
                          src={item?.logo_url}
                          alt={`logo ${item?.name}`}
                          srcset=""
                          width="100px"
                        />
                      </TableCell>
                      <TableCell
                        sx={{ color: "black", textTransform: "capitalize" }}
                      >
                        {item?.name}
                      </TableCell>
                      <TableCell
                        sx={{ color: "black", textTransform: "capitalize" }}
                      >
                        {item?.phone_number}
                      </TableCell>
                      <TableCell
                        sx={{ color: "black", textTransform: "capitalize" }}
                      >
                        {item?.address}
                      </TableCell>
                      <TableCell sx={{ color: "black" }}>
                        <Button
                          variant="contained"
                          onClick={() => handleNavigate(item.business_id)}
                          sx={{
                            backgroundColor: "#FF4500",
                            color: "#fff",
                            fontWeight: "bold",
                            fontSize: ".8rem",
                            "&:hover": {
                              backgroundColor: "#FF4500",
                              color: "#fff",
                            },
                          }}
                        >
                          Ver_Mas
                        </Button>
                      </TableCell>
                      <TableCell sx={{ color: "black" }}>
                        <Button
                          color="error"
                          variant="contained"
                          startIcon={<DeleteIcon />}
                          onClick={() => handleDelete(item.business_id)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                      <TableCell
                        sx={{ color: "black", textTransform: "capitalize" }}
                      >
                        <Button
                          color={item.state === true ? "success" : "error"}
                        >
                          {item.state === true ? "Aceptado" : "Pendiente"}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                : null}
            </TableBody>
          </Table>
        </Box>
      </TableContainer>
    </Box>
  );
}

export default AdminDashbord;
