import { useEffect } from 'react';
import Post from "../components/Post";
import axios from 'axios';
import { useState } from 'react';
import "./feed.css"

function Timeline() {
  const [postlist, setlists] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8080/posts")
    .then(respo => setlists(respo.data))
    .catch(error => console.log(error))
  },[]);

  return (
    <>
      <div className='feed'>
        {postlist.map((e,i)=>(
        <Post key={i} 
          postId={e.id}
          user={e.user.username}
          photo={e.user.photo}
         timestamp={e.createdAt}
          title={e.title}
          content={e.content}
          number_likes={e._count.reactions} 
          comments={e._count.comments}
        />
    ))} 
      </div>
    </>
  );
}

export default Timeline;
