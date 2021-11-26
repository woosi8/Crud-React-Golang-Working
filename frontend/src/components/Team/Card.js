import { styled } from '@mui/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FormButton from '../Custom/FormButton';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { useState } from 'react';
import { Grid } from '@mui/material';
const GroupHeader = styled(CardHeader)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: '#fff'
}));

const GroupBox = styled(Card)(({ theme }) => ({
  borderRadius: 3,
  maxWidth: 345,
  // margin: theme.spacing(1),
  margin: '0 auto',
  marginBottom: '20px'
}));

export function Cards({ row, checkDel, checkUp }) {
  const [editing, setEditing] = useState(false);
  const [values, setValues] = useState([]);
  const deleteCard = (id) => {
    axios
      .delete(`/delete_message/${id}`, {})
      .then(function (response) {
        console.log(response.data);
        // setrow(response);
        checkDel(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  const updateCard = (row) => {
    console.log(values.groupname);
    console.log(values.projectname);
    console.log(values.projectgoal);
    setEditing(false);
    console.log(values);
    axios
      .put(`/update_title/${row.ID}`, values)
      .then(function (response) {
        console.log(response);
        checkUp(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const editOpen = () => {
    setEditing(true);
  };
  return (
    <>
      <GroupBox>
        <GroupHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={row.groupname}
        ></GroupHeader>
        <CardContent sx={{ minHeight: 150 }}>
          <Typography variant="h5" component="div">
            {row.projectname}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="primary">
            {row.projectgoal}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="primary">
            {row.comment}
          </Typography>
          {/* <Typography variant="body2">in charge of Construction</Typography> */}
          <Button>
            <DeleteIcon onClick={() => deleteCard(row.ID)} />
          </Button>
          <Button>
            <EditIcon onClick={editOpen} />
          </Button>
          {editing ? (
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Group name"
                  name="groupname"
                  onChange={handleChange}
                  required
                  // value={row.groupname}
                  defaultValue={row.groupname}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Project name"
                  name="projectname"
                  onChange={handleChange}
                  required
                  // value={row.projectname}
                  defaultValue={row.projectname}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={12} xs={12}>
                <TextField
                  fullWidth
                  label="Project Goal"
                  name="projectgoal"
                  onChange={handleChange}
                  required
                  // value={row.projectgoal}
                  defaultValue={row.projectgoal}
                  variant="outlined"
                  multiline
                  maxRows={4}
                />
              </Grid>
              <Button>
                <SaveIcon onClick={() => updateCard(row)} />
              </Button>
            </Grid>
          ) : null}
        </CardContent>
        {/* <RouterLink
          to="/teamSpecification"
          style={{ textDecoration: 'none' }}
        > */}
        <FormButton
          type="submit"
          variant="contained"
          color="primary"
          // onClick={() => history.push("/home")}
          text="권한 설정"
        />
        {/* </RouterLink> */}
      </GroupBox>
    </>
  );
}

// export function ExtraGroup() {
//   return (
//     <>
//       <Card sx={{ maxWidth: 345, minWidth: 300, borderRadius: 2 }}>
//         <GroupHeader
//           action={
//             <IconButton aria-label="settings">
//               <MoreVertIcon />
//             </IconButton>
//           }
//           title="Group Name"
//         ></GroupHeader>
//         <CardContent sx={{ minHeight: 150 }}>
//           <Typography variant="h5" component="div">
//             Staff: 35
//           </Typography>
//           <Typography sx={{ mb: 1.5 }} color="primary">
//             Current Project: PH5
//           </Typography>
//           <Typography variant="body2">in charge of Construction</Typography>
//         </CardContent>
//       </Card>
//     </>
//   );
// }
