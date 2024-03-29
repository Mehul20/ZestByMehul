import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Pagination from '@material-ui/lab/Pagination';
import Link from '@material-ui/core/Link'
import ShareIcon from '@material-ui/icons/Share';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./background.jpeg')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
    justifyContent: "center",
    textAlign: "center"
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
    fontFamily: 'Nunito',
    
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center"
  },
  design: {
    color: '#7CFC00',
    fontFamily: 'Nunito',
    fontSize: '4.5rem',
  },
  nav: {
    color: '#000',
    fontSize: '1.5rem',
  },

  spacing: {
    marginRight: "10px"
  }, 

  likesbutton: {
    fontSize: "50px"
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
        <Link href="https://www.mehulrastogi.com/">
          <Typography variant="h6" color="primary" className={classes.nav} >
            Mehul Rastogi
          </Typography>
          
          </Link>
          <div className={classes.toolbarButtons}>
          </div>
        </Toolbar>
      </AppBar>

      <Box className={classes.hero}> 
      <Box className={classes.design}>ZEST 🚀  
        </Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          BLOGS
        </Typography>






        
        <Grid container spacing={3}>

        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
            <Link href="https://www.mehulrastogi.com/blog/personalseo" style={{ textDecoration: 'none' }}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="./personalseo.jpg"
                  title="SEO for Personal Websites"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    SEO for Personal Websites 💻
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  I have demystified the journey of my website not being ranked by Google to being ranked Third 💪🏻 I have provided a step by step approach to 
                  implement SEO tactics to rank higher on the Google 📈
                  </Typography>
                </CardContent>
              </CardActionArea>
              </Link>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="./mehul.jpeg" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Mehul Rastogi
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      July 29, 2021
                    </Typography>
                  </Box>
                </Box>
                <Box>
                <Link href="https://twitter.com/intent/tweet?url=https://www.mehulrastogi.com/blog/personalseo/&text=" target="_blank" style={{ textDecoration: 'none' }}>  <ShareIcon /> </Link>
                </Box>
              </CardActions>
            </Card>
          </Grid>




          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <Link href="https://www.mehulrastogi.com/blog/dogemining/" style={{ textDecoration: 'none' }}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="./finaldoge.jpeg"
                  title="Dogecoin Mining"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Dogecoin Mining 💰
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Mining serves two purposes: To create new coins and to maintain a log of all transactions of existing digital tokens. 
                  Here, I have demystified the process of Dogecoin mining ⛏
                  </Typography>
                </CardContent>
              </CardActionArea>
              </Link>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="./mehul.jpeg" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Mehul Rastogi
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      May 16, 2021
                    </Typography>
                  </Box>
                </Box>

                <Box>
                <Link href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.mehulrastogi.com/blog/dogemining/&title=Doge%20Mining&summary=Mining%20serves%20two%20purposes%3A%20To%20create%20new%20coins%20and%20to%20maintain%20a%20log%20of%20all%20transactions%20of%20existing%20digital%20tokens.%20%0AHere,%20I%20have%20demystified%20the%20process%20of%20Dogecoin%20mining.&source=" target="_blank" style={{ textDecoration: 'none' }}>  <ShareIcon /> </Link>
                </Box> 
                  
                  
              </CardActions>
            </Card>
          </Grid>



          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
            <Link href="https://www.mehulrastogi.com/blog/dudeneynumbers/" style={{ textDecoration: 'none' }}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="./pok.jpg"
                  title="Dudeney Numbers Demystified"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Dudeney Numbers 🔢
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  
                  In this blog post, I have demystified Dudeney Numbers with the help of a simple Java Algorithm.
                  <br /> For all the Math and CS nerds, this is a basic yet interesting number that I came across 😉
                  </Typography>
                </CardContent>
              </CardActionArea>
              </Link>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="./mehul.jpeg" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Mehul Rastogi
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                    April 7, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                <Link href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.mehulrastogi.com/blog/dudeneynumbers/" target="_blank" style={{ textDecoration: 'none' }}>  <ShareIcon /> </Link>
                </Box>
              </CardActions>
            </Card>
          </Grid>



          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
            <Link href="https://www.mehulrastogi.com/blog/educationtoday/" style={{ textDecoration: 'none' }}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="./Thomas.jpeg"
                  title="Education in India"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Education Today 📕
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Universal curriculum has become another political enterprise of the parties. This highlights the extremely lackadaisical approach of educational policymakers. 😅
                  Here, I have critiqued Indian Education and its follies 🙅‍♂️
                  </Typography>
                </CardContent>
              </CardActionArea>
              </Link>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="./mehul.jpeg" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Mehul Rastogi
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      Nov 7, 2018
                    </Typography>
                  </Box>
                </Box>
                <Box>
                <Link href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.mehulrastogi.com/blog/educationtoday/" target="_blank" style={{ textDecoration: 'none' }}>  <ShareIcon /> </Link>
                </Box>
              </CardActions>
            </Card>
          </Grid>


          

          </Grid>

        <Box my={4} className={classes.paginationContainer}>
          <Pagination count={1} color="primary"/>
        </Box>
        <Box my={4}>
        <Link href="https://www.linkedin.com/in/mehul-rastogi-2002/" target ="_blank" style={{ textDecoration: 'none' }}>
          <LinkedInIcon color="primary" className={classes.spacing} />
          </Link>

          <Link href="https://twitter.com/mehulrastogi20" target ="_blank" style={{ textDecoration: 'none' }}>
          <TwitterIcon color="primary" className={classes.spacing} />
          </Link>

          <Link href="https://www.facebook.com/mehul.rastogi.54" target ="_blank" style={{ textDecoration: 'none' }}>
          <FacebookIcon color="primary" className={classes.spacing} />
          </Link>

          <Link href="https://www.instagram.com/mehul_20/"  target ="_blank" style={{ textDecoration: 'none' }}>
          <InstagramIcon color="primary" className={classes.spacing} />
          </Link>



        </Box>

      </Container>
    </div>
    
  );
}



export default App;
