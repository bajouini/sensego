import datas from '../../utils/woom.json';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Grid } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const useStyle = makeStyles({
    root: {
        width: 300,
    },
    media: {
        height: 300,
        width: 300,
    },
    gridContainer: {
        paddingLeft: '20px',
        paddingRight: '20px',
      },
})
export default function Cardgen () {
    const classes = useStyle();
    return (
        <Grid container direction="row" className={classes.gridContainer}>
            <Grid item xs={12}>
                <Grid container spacing={5}>
                    {Object.keys(datas).map(key => (
                        <Grid key={key} item xs={3}>
                        <Card className={classes.root} variant="outlined">
                    <CardHeader
                        avatar={<Avatar src={`${datas[key].logo_url}`} />}
                        title={<Link href={`${datas[key].page_url}`}><Typography variant="h4">woom</Typography></Link>}
                        subheader={datas[key]._id}
                    >
                    </CardHeader>
                    <Typography variant="caption">
                        {datas[key].text_ads}
                    </Typography>
                    <div>
                    {Object.keys(datas[key].images_url).map(num => (
                    <CardMedia
                    key={num}
                    className={classes.media}
                    image={`${datas[key].images_url[num]}`}
                    />
                    ))}
                    </div>
                    <CardContent>
                        <Link color="inherit" href={`${datas[key].target_url}`}>
                            <Typography variant="caption" component="h2">
                                {datas[key].actionText}
                            </Typography>
                        </Link>
                    </CardContent>
                    <CardActions>
                        <Button variant="outlined" href={`${datas[key].target_url}`} size="small">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
                </Grid>
                ))}
                </Grid>
            </Grid>
        </Grid>
    )
}