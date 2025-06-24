import React from 'react'

import "./main.css"
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

// Material UI
import { Alert, AppBar, Button, Card, CardContent, Container, createTheme, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, ThemeProvider, Toolbar, Typography } from "@mui/material"

// FUNCTION
export default function MainFunction() {

  // Material UI 
  const materialUITheme = createTheme({
    palette: {
      primary: {
        main: '#aaa' // RGB: Red Green Blue
      },
      secondary: {
        main: '#222222'
      }
    }
  })


  // Context Api
  const { theme, toggleTheme } = useContext(ThemeContext);
  const styles = {
    light: {
      background: "white",
      color: "black",
      padding: "2rem"
    },
    dark: {
      background: "black",
      color: "white",
      padding: "2rem"
    }
  }

  return (
    <React.Fragment>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <br />
            <Typography variant='h2' component="h2">
              Blog Page Sayfası
            </Typography>

            <Typography variant='body1' component="p">
              Blog Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit deserunt tempora iure quis temporibus magni, inventore exercitationem voluptatibus, assumenda odio quod quam similique itaque optio neque doloribus. Ut, cumque fugit?
              Excepturi, vero fugiat explicabo fugit aut quasi, quo consequatur voluptates iste nostrum provident eligendi. Mollitia quam quas ad est porro, sed non sunt alias tempora, fuga delectus officiis asperiores error?
              Velit quasi, atque minus a consequatur quae ea, ratione voluptatem perspiciatis nesciunt placeat, fuga nam iure nobis porro quia fugit aspernatur ad quos. Quia voluptatem ducimus vero amet reiciendis commodi.
              Amet, obcaecati aliquid. Placeat delectus molestiae aspernatur id assumenda, vero sit error pariatur iure ipsum voluptatibus, qui autem. Tempora soluta eos nulla blanditiis impedit facere nam accusamus corporis alias dolore.
            </Typography>
            <br />
            <Button>Primary-1 </Button>
            <Button
              sx={{
                padding: 2, // 8px*2=16px
                marginRight: 5,
                marginBottom: 5,
                marginTop: 5,
                // margin:5,
                display: 'block'
              }}
              variant='contained'
              color="primary"
            >Primary-2 </Button>

            <Button
              style={{ padding: 10 }}
              variant='contained'
              color="warning" //primary,secondary,success
            >Primary-3 </Button>

            <ThemeProvider theme={materialUITheme}>
              <Button
                style={{ padding: 10, marginLeft: 8, }}
                variant='contained'
                color="primary" //primary,secondary,success
              >Primary-4 </Button>
            </ThemeProvider>

            <button className='btn btn-primary ms-3'>Primary-5 </button>
            <button className='btn btn-outline-warning ms-3'>Primary-6 </button>

            <Alert sx={{
              marginTop: 3, // 8px*3=24px
            }}>Success</Alert>

            <Alert
              variant='contained'
              sx={{
                marginTop: 3, // 8px*3=24px
                severity: "success"
              }}>Success</Alert>

            <Alert
              variant="outlined"
              severity="success"
              sx={{
                marginTop: 3, // 8px*3=24px
              }}>Success</Alert>

            <Alert
              variant='outlined'
              severity="error"
              sx={{
                marginTop: 3, // 8px*3=24px
              }}>Error</Alert>

            <Alert
              variant='outlined'
              severity="warning"
              sx={{
                marginTop: 3, // 8px*3=24px
              }}>warning</Alert>

            <Alert
              variant='outlined'
              severity="info"
              sx={{
                marginTop: 3, // 8px*3=24px
              }}>info</Alert>
          </Grid>
        </Grid>
      </Container>

{/* KART */}
      <AppBar position='static' style={{ marginTop: 40 }}>
        <Toolbar>
          <Typography variant='h5' style={{ flexGrow: 1 }}>
            Login
          </Typography>
        </Toolbar>
      </AppBar>

      <Container style={{ marginTop: '5px' }}>
        <Card>
          <CardContent>
            <Typography variant='h5' component="h5">
              Kart Data
            </Typography>

            <Typography color="">
              İçerikler
            </Typography>
          </CardContent>
        </Card>
      </Container>

      <Container style={{marginTop: '25px'}}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">Adı</TableCell>
                <TableCell align="right">Soyadı</TableCell>
                <TableCell align="right">No</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
              <TableCell align="right">1</TableCell>
              <TableCell align="right">Adı44</TableCell>
              <TableCell align="right">Soyadı44</TableCell>
              <TableCell align="right">No44</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>


      <br />
      <hr />
      {/* Context API */}
      <div style={styles[theme]}>
        <h2>{theme === "light" ? 'Light Theme' : 'Dark Theme'}</h2>
        <p style={{ fontSize: "1rem", textAlign: "justify" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quos ut repellat. Ratione impedit nesciunt corrupti voluptas, temporibus laborum explicabo nulla itaque culpa eos aliquid quod saepe ipsa neque dicta?
          Sunt sit dignissimos ullam a officiis neque. Quaerat itaque facere omnis qui, adipisci fugit ratione aspernatur quibusdam corrupti, fugiat maiores? Nesciunt iste vel autem nisi quidem, saepe cupiditate quis dolores.
          Ex repudiandae officia iure facere animi dicta impedit libero atque quisquam hic suscipit fuga itaque, at corporis nobis alias amet enim architecto ratione dolorum aliquid. Cumque inventore expedita illum doloremque?
          Temporibus dolorem in esse quidem accusamus odio illum perferendis ab adipisci vitae deleniti ducimus culpa provident fugit nostrum aliquid magnam dignissimos soluta tenetur, at officia quo tempore iure laborum! Sunt.
          Perferendis atque autem, ducimus harum non nulla blanditiis quam distinctio laborum est alias iusto provident pariatur ea nemo expedita debitis ipsam mollitia eveniet neque itaque assumenda recusandae! Autem, enim corporis?
          Enim, asperiores earum illo et ullam nihil debitis aperiam, laboriosam laborum atque aliquid sit id vero eaque accusantium? Esse sint earum molestias nemo? Provident recusandae eos inventore corrupti, aspernatur consequatur.
          Similique nobis sapiente maxime cupiditate enim inventore magni voluptatum atque, facilis temporibus sit cum veniam commodi molestias suscipit aperiam mollitia molestiae. Reprehenderit ratione sunt incidunt impedit, nesciunt temporibus earum facilis?
          Ipsam maiores delectus, pariatur non architecto, eaque temporibus corporis dolor qui perspiciatis consequuntur nesciunt unde mollitia laborum sint voluptate beatae ad voluptatibus ratione at nam? Sunt delectus exercitationem molestias cupiditate.
          Ratione quidem obcaecati dolorem, aliquam nesciunt voluptatibus labore eius hic in consequatur beatae recusandae cum unde, sunt quasi corrupti! Illum nostrum quibusdam molestiae provident qui minima possimus velit sunt quas.
          Architecto, libero. Eaque magni iure provident rerum, doloremque autem modi ipsam suscipit eos nostrum assumenda dolorum reprehenderit dignissimos, laudantium dolor officiis sed necessitatibus labore cumque eligendi vel maxime? Fuga, debitis.
        </p>
        <button onClick={toggleTheme}>Dark Mode</button>
      </div>

    </React.Fragment>
  )
}
