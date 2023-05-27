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
import { Box } from '@mui/material'
import FFButton from '../../atoms/FFButton/FFButton'
import ClappingIcon from '../../../assets/icons/ClappingIcon'
import ReportIcon from '../../../assets/icons/ReportIcon'

export default function FFReviewCard({ review }) {
  const [rating, setRating] = React.useState(review.rating)

  return (
    <Card
      sx={{
        width: 628,
        borderRadius: '12px',
        padding: '5px',
        margin: '10px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
        disableElevation: true,
      }}
    >
      <CardContent>
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
                <div
                  style={{
                    width: '200px',
                    height: '200px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    marginTop: '10px',
                  }}
                >
                  <img
                    src={review.image}
                    alt="review"
                    style={{
                      borderRadius: '12px',
                    }}
                  />
                </div>
                <div>
                  <Typography
                    sx={{
                      fontSize: '13px',
                      fontWeight: '400',
                      lineHeight: '25.5px',
                      color: 'rgba(0, 0, 0, 1)',
                      marginTop: '5px',
                    }}
                  >
                    {review.comment}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '10px',
                      fontWeight: '400',
                      lineHeight: '25.5px',
                      color: 'rgba(0, 0, 0, 0.5)',
                      marginTop: '5px',
                    }}
                  >
                    {`${review.helpful} people found this helpful`}
                  </Typography>
                </div>
                <CardActions
                  sx={{
                    marginInline: 0,
                    marginTop: '5px',
                    padding: 0,
                  }}
                >
                  <FFButton
                    name="Helpful"
                    variant="outlined"
                    color="success"
                    startIcon={<ClappingIcon />}
                    buttonStyles={{
                      borderRadius: '12px',
                      width: '100px',
                      height: '40px',
                      padding: '10px',
                    }}
                    buttonFontStyles={{
                      fontSize: '13px',
                      fontWeight: '400',
                    }}
                  />
                  <FFButton
                    name="Report"
                    variant="outlined"
                    color="error"
                    startIcon={<ReportIcon />}
                    buttonStyles={{
                      borderRadius: '12px',
                      width: '100px',
                      height: '40px',
                      padding: '10px',
                    }}
                    buttonFontStyles={{
                      fontSize: '13px',
                      fontWeight: '400',
                    }}
                  />
                </CardActions>
              </div>
            </div>
            {localStorage.getItem('id') === review.user_id && (
              <div className="float-right">
                <IconButton
                  sx={{
                    margin: '5px',
                    float: 'right',
                  }}
                >
                  <MoreVertIcon />
                </IconButton>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
