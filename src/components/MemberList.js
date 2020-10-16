import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import Box from '@material-ui/core/Box';
import AddIcon from '@material-ui/icons/Add';
import CancelIcon from '@material-ui/icons/Cancel';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import Grow from '@material-ui/core/Grow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { purple } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:"130px",
    marginLeft:"90px"
  },
  heading: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: 'white',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    height: 140,
    fontSize: 60,
  },
  addbutton:{
        zindex: "1",
        position: "absolute",
        top: "10%",
        left: "80%",
  },
  memberdetail: {
        height: 250,
        width: 160,
         padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
  },
  media: {
   maxWidth: "8.5em",
    maxHeight: "8.5em",
    height: "10em",
    padding:0,
    marginRight:0,
    marginLeft:"15%",
    //paddingTop: '100%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  cardroot: {
    //width: "12em",
    height:"19em",
    //marginTop: 50
  },
    picinput: {
    display: 'none',
  },
  imgpreview:{
    maxWidth: "8.5em",
    maxHeight: "8.5em",
    height: "10em",
    border:"1px dashed",
    padding:0,
    marginRight:0,
    marginLeft:"35%",
  },
}));


const TeamPage = (clubname) => {
    console.log(clubname,"i am here")
    const classes = useStyles();
    const [checked, setChecked] = React.useState(-1);
    var default_img = require ("../images/doraemon.jpg");
    const handleChange = (value) => {
        if (checked==(value+1)){
            setChecked(0);
        }
        else
            setChecked(value+1);
        console.log(checked)
  };
  const [expanded, setExpanded] = React.useState(false);
  const [img, setimgState] = React.useState(default_img);
  const imghandler = (event) =>{
        handleformChange(event)
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0])
        reader.onload =() =>{
            if(reader.readyState === 2){
                setimgState({
                    img: reader.result
                })
            console.log(img)
            }
        }
        
  }
  const initialFormData = Object.freeze({
                            name: "",
                            branch: "",
                            year:"",
                            email: "",
                            coordinator:0,
                            img: default_img
    });
  const [formData, updateFormData] = React.useState(initialFormData);
    const handleformChange = (e) => {
        updateFormData({
        ...formData,

        // Trimming any whitespace
         [e.target.name]: e.target.value
        });
    console.log(e.target.name,e.target.value)
  };

  const handleformSubmit = () => {
        console.log(formData);
        addmember()
        setimgState({
                    img: default_img
                    })
    // ... submit to API or something
  };
  const handleeditformSubmit = () => {
        console.log(formData);
        if (formData.name.length){
            data[value].name = formData.name;
        }
        if (formData.email.length){
            data[value].email = formData.email;
        }
        if (formData.branch.length){
            data[value].branch = formData.branch;
        }
        if (formData.year.length){
            data[value].year = formData.year;
        }
        if (formData.img.length){
            data[value].img = formData.img;
        }
        //setdata(data => [...data]);
        console.log(data)
        handleeditClose()
        // ... submit to API or something
  };
  const [data, setdata] = React.useState([{    name:"saddas",
                                               branch:"branch",
                                               year:"1st",
                                               email:"das@das.dsa",
                                               coordinator : "false",
                                               img: default_img
                                                },
                                                {    name:"abcdx",
                                               branch:"branch",
                                               year:"",
                                               email:"das@das.dsa",
                                               coordinator : "true",
                                               img: default_img
                                                }
                                         ]);

  const addmember = () => {
  //if (!data.length){
    //    data.push({ Dsc: formdata
      //  });
  //}
  //else{
   //data.push(data[data.length - 1]+1);
     //    console.log(data)
       //  setdata(data => [...data]);
         //}
        data.push(formData);
        setdata(data => [...data]);
        console.log(data)
        setOpen(false);
  };
  function deletemember(value){
         console.log(data)
         console.log(value)
         //const index = data.indexOf(value);
         data.splice(value, 1);
         setdata(data => [...data]);
         setChecked((prev) => !prev);
  };
    const [open, setOpen] = React.useState(false);
    const years = [
                  {
                    value: '1st',
                    label: '1',
                  },
                  {
                    value: '2nd',
                    label: '2',
                  },
                  {
                    value: '3rd',
                    label: '3',
                  },
                  {
                    value: '4th',
                    label: '4',
                  },
                 ];
  const handleClickOpen = () => {
        setOpen(true);
  };
  const [editopen, seteditOpen] = React.useState(false);
  const [dialogvalue, setdialogvalue] = React.useState({});
  const [value, setvalue] = React.useState(-1);

  const handleeditopen = (value) => {
        seteditOpen(true);
        setdialogvalue(data[value]);
        setvalue(value);
  };
  const handleClose = () => {
        setOpen(false);
  };
  const handleeditClose = () => {
        seteditOpen(false);
        setdialogvalue({})
        setdialogvalue(-1)
  };
  let [emailError, setemailerror] = React.useState(false);
  const ValidateEmail=(event)=>{
        handleformChange(event)
        const email = event.target.value;
        console.log(email)
        const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
        const result = pattern.test(email);
        if(result===true){
            setemailerror(emailError => false);
        } else{
            setemailerror(emailError => true);
        }   
  }
  const [iscoordinator, setcoordinatorState] = React.useState(false);

  const handleiscoordinator = (event) => {
        setcoordinatorState(event.target.checked );
        event.target.value = event.target.checked
        console.log(event.target.value,"coo")
        handleformChange(event)
  }
  function sortdata(a){
        if(a.coordinator == "true"){
                return -1;
        }else{
                return 0;
        }
  }
  return (
        <div className={classes.root}>
            <Tooltip title="Add Member">
            <Fab size="small" style={{backgroundColor:purple[300]}}className={classes.addbutton} onClick={handleClickOpen}>
                <AddIcon />
            </Fab>
            </Tooltip>

            <Grid container spacing={2} >
                <Grid item xs={12} >
                    <Grid container justify="center" spacing={6} >
                    {Object.keys(data.sort(sortdata)).map((value) => (
                        <Grid key={value} item style={{padding:"0 3% 1% 0"}}>
                            <Card className={classes.cardroot} style={{width: data[value].coordinator=="true"?"15em":"12em"}}>
                                <CardHeader style={{maxWidth: 1 }}
                                    action={
                                        <IconButton items nodeId={value} color="primary" onClick= {() => handleChange(value) } style={{padding:0}}>
                                            <MoreVertIcon/>  
                                            <div style={{position:"absolute",  display: 'flex',flexDirection: 'row',left:"100%"}}>
                                                <Grow in={(value+1)==checked?true:false} style={{}}>
                                                    <Tooltip title="Edit Details">
                                                        <IconButton item color="primary" onClick={() => handleeditopen(value)}>
                                                            <EditIcon/>  
                                                        </IconButton>
                                                    </Tooltip>
                                                </Grow>
                                                {/* Conditionally applies the timeout prop to change the entry speed. */}
                                                <Grow
                                                in={(value+1)==checked?true:false}
                                                style={{ transformOrigin: '0 0 0' }}
                                                {...(checked ? { timeout: 700 } : {})}
                                                >
                                                    <Tooltip title="Remove Member">
                                                         <IconButton item color="primary" onClick={() => deletemember(value)}>
                                                             <CancelIcon />
                                                         </IconButton>
                                                    </Tooltip>
                                                </Grow>
                                            </div>
                                        </IconButton>
                                    }
                                 />
                                <CardMedia
                                className={classes.media}
                                component="img"
                                image={data[value].img}
                                />
                                <CardContent>
                                    <Typography  color="textSecondary" align="center">
                                        {data[value].name}
                                    </Typography>
                                    <Typography color="textSecondary" align="center"style={{display: data[value].coordinator=="false" ? "none" :"block"}}>
                                        {data[value].branch}
                                    </Typography>
                                    <Typography color="textSecondary" align="center" style={{display: data[value].coordinator=="true" ? "none" :"block"}}>
                                        {data[value].branch} {data[value].year} year
                                    </Typography>
                                    <Typography  color="textSecondary" align="center">
                                        {data[value].email}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                    </Grid>
                </Grid>
            </Grid>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add Member
                </DialogTitle>
                <DialogContent dividers>
                    <Box className={classes.imgpreview}>
                        <img 
                        src={img.img} 
                        style={{maxHeight:'100%',maxWidth:'100%'}}
                        alt={default_img}
                        />
                        <input accept="image/*" name="img" className={classes.picinput} id="icon-button-file" type="file" onChange={imghandler} style={{zindex:'2',position:'absolute'}}/>
                        <label htmlFor="icon-button-file">
                            <IconButton color="primary" aria-label="upload picture" component="span" style={{zindex:'2',position:'absolute'}}>
                                <PhotoCamera />
                            </IconButton>
                        </label>
                    </Box>
                    <FormControlLabel
                        control={
                            <Checkbox
                            checked={iscoordinator}
                            onChange={handleiscoordinator}
                            name="coordinator"
                            color="primary"
                            />
                        }
                        label="Coordinator"
                    />
                    <TextField
                      id="outlined-full-width"
                      label="Name"
                      style={{ margin: 8 }}
                      placeholder="Name"
                      onChange={handleformChange}
                      name="name"
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />
                    <TextField
                      id="standard"
                      label="Branch"
                      style={{ margin: 8,maxWidth:"60%" }}
                      placeholder="Branch"
                      onChange={handleformChange}
                      name="branch"
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-select-currency"
                      select
                      label="Year"
                      name="year"
                      style={{ margin: 8,width:"25%",display: iscoordinator ? "none" :"inline-flex" }}
                      onChange={handleformChange}
                      variant="outlined"
                    >
                      {years.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      id="outlined-full-width"
                      label="Email"
                      name="email"
                      style={{ margin: 8 }}
                      onChange= {(event) => ValidateEmail(event)}
                      error={emailError}
                      placeholder="abc@xyz.com"
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />
                </DialogContent>
                <DialogActions>
                    <Tooltip title="Save">
                        <IconButton item color="primary" aria-label="upload picture" autoFocus onClick={handleformSubmit}>
                            <SaveIcon/>
                        </IconButton>
                    </Tooltip>
                </DialogActions>
            </Dialog>


            <Dialog onClose={handleeditClose} aria-labelledby="customized-dialog-title" open={editopen}>
                <DialogTitle id="customized-dialog-title" onClose={handleeditClose}>
                    Edit Member Details
                </DialogTitle>
                <DialogContent dividers>
                    <Box className={classes.imgpreview}>
                        <img 
                         src={ img.img ? img.img :dialogvalue.img} 
                         style={{maxHeight:'100%',maxWidth:'100%'}}
                        />
                        <input accept="image/*" name="img" className={classes.picinput} id="icon-button-file" type="file" onChange={imghandler} style={{zindex:'2',position:'absolute'}}/>
                        <label htmlFor="icon-button-file">
                            <IconButton color="primary" aria-label="upload picture" component="span" style={{zindex:'2',position:'absolute'}}>
                                 <PhotoCamera />
                            </IconButton>
                        </label>
                    </Box>
                    <TextField
                     id="outlined-full-width"
                     label="Name"
                     style={{ margin: 8 }}
                     placeholder="Name"
                     defaultValue={dialogvalue.name}
                     onChange={handleformChange}
                     name="name"
                     fullWidth
                     margin="normal"
                     InputLabelProps={{
                         shrink: true,
                     }}
                     variant="outlined"
                    />
                    <TextField
                     id="standard"
                     label="Branch"
                     style={{ margin: 8,maxWidth:"60%" }}
                     placeholder="Branch"
                     onChange={handleformChange}
                     defaultValue={dialogvalue.branch}
                     name="branch"
                     fullWidth
                     margin="normal"
                     InputLabelProps={{
                       shrink: true,
                     }}
                     variant="outlined"
                    />
                    <TextField
                     id="outlined-select-currency"
                     select
                     label="Year"
                     name="year"
                     style={{ margin: 8,width:"25%",display: dialogvalue.coordinator=="true" ? "none" :"inline-flex" }}
                     defaultValue={dialogvalue.year}
                     onChange={handleformChange}
                     variant="outlined"
                    >
                    {years.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                    ))}
                    </TextField>
                    <TextField
                     id="outlined-full-width"
                     label="Email"
                     name="email"
                     style={{ margin: 8 }}
                     onChange= {(event) => ValidateEmail(event)}
                     defaultValue={dialogvalue.email}
                     error={emailError}
                     placeholder="abc@xyz.com"
                     fullWidth
                     margin="normal"
                     InputLabelProps={{
                     shrink: true,
                     }}
                     variant="outlined"
                    />
                </DialogContent>
                <DialogActions>
                    <Tooltip title="Save">
                        <IconButton item color="primary" aria-label="upload picture" autoFocus onClick={handleeditformSubmit}>
                            <SaveIcon/>
                        </IconButton>
                    </Tooltip>
                </DialogActions>
            </Dialog>
        </div>
  );
}

export default TeamPage;