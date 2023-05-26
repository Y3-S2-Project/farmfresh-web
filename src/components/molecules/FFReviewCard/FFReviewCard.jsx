import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FFRating from '../../atoms/FFRating/FFRating'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

export default function FFReviewCard({ review }) {
  const [expanded, setExpanded] = React.useState(false)
  const [rating, setRating] = React.useState(review.rating)
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  console.log('review', review)
  return (
    <Card
      sx={{
        width: 628,
        height: 314,
        borderRadius: '12px',
        padding: '10px',
        margin: '10px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
        disableElevation: true,
      }}
    >
      {/* <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="user-avatar">
            N
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      /> */}
      <div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row justify-start">
            <Avatar
              sx={{
                width: '64px',
                height: '64px',
                margin: '10px',
              }}
            >
              N
            </Avatar>
            <div className="flex flex-col align-middle justify-start py-2">
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: '600',
                  lineHeight: '25.6px',
                }}
              >
                {review.user_name}
              </Typography>
              <Typography
                sx={{
                  fontSize: '13px',
                  fontWeight: '300',
                  lineHeight: '19.5px',
                  color: 'rgba(0, 0, 0, 0.5)',
                }}
              >
                {review.date}
              </Typography>
              <FFRating
                value={rating}
                handleRatingChange={(e) => setRating(e.target.value)}
                size="20px"
                textStyles={{
                  fontSize: '13px',
                  fontWeight: '300',
                  lineHeight: '19.5px',
                  color: 'rgba(0, 0, 0, 0.5)',
                }}
                ratingStyles={{
                  marginInline: 0,
                }}
              />
            </div>
          </div>
          {localStorage.getItem('id') === review.user_id && (
            <div className="float-right">
              <IconButton
                sx={{
                  margin: '10px',
                  float: 'right',
                }}
              >
                <MoreVertIcon />
              </IconButton>
            </div>
          )}
        </div>
      </div>
      {/* <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}
