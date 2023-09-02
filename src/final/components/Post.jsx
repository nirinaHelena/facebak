import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import Badge from '@mui/material/Badge';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Post({postId, user, photo, timestamp, number_likes, comments, title, content }) {
  const [expanded, setExpanded] = React.useState(false);
  const [likes, setLikes] = React.useState(number_likes);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLikeClick = async () => {
     try {
       const response = await axios.put(`http://localhost:8080/posts/${postId}/like`);
       setLikes(response.data.updatedLikes);
     } catch (error) {
       console.error('Erreur lors de la mise à jour des likes:', error);
     }
  };

  return (
    <Card sx={{ maxWidth: 1000 }}>
      <CardHeader
        avatar={<Avatar alt="U" src={photo} />}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={user}
        subheader={timestamp}
      />
      <CardMedia component="img" height="194" image="/static/images/cards/paella.jpg" alt="No image" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Badge color="secondary" badgeContent={likes || 0}>
          <IconButton aria-label="like" onClick={handleLikeClick}>
            <FavoriteRoundedIcon />
          </IconButton>
        </Badge>
        <Badge color="secondary" badgeContent={comments}>
          <ChatBubbleRoundedIcon />
        </Badge>
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
          <Typography paragraph>{content}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
