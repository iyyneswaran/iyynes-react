import React, { useState } from 'react'
import styles from './Post.module.css'

// img
import userImg from '../assets/PostCardAssets/postimage.jpg';
import postImage from '../assets/PostCardAssets/postimage.jpg';
// icons 
import { BsThreeDots } from "react-icons/bs";
import { FiMessageCircle, FiSend } from "react-icons/fi";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { MdBookmarkBorder } from "react-icons/md";
import { MdBookmark } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { HiMiniSpeakerWave, HiMiniSpeakerXMark } from "react-icons/hi2";

const PostCard = () => {

  const [count, setCount] = useState(0);
  const [speaker, setSpeaker] = useState(false);
  const [bookMark, setbookMark] = useState(true);

  return (
    <div className={styles.card}>
      <div className={styles.userInfo}>
        <div className={styles.userHeaders}>
          <div>
            <img src={userImg} className={styles.userImage} alt="" />
          </div>
          <div>
            <h3 className={styles.heading}>Laura • <span className={styles.timeStamp}>1d</span> </h3>
            <p className={styles.desc}>Anirudh Ravichander,Arivu • Powerhouse</p>
          </div>
        </div>

        <div className={styles.iconContainer}>
          <BsThreeDots className={styles.dots} onClick={() => alert('Under development')}/>
        </div>
      </div>

      <div className={styles.postImageContainer}>
        <img src={postImage} className={styles.posterImage} alt="" />
        <div className={styles.speakerIcon}>
          {speaker ? <HiMiniSpeakerWave onClick={() => setSpeaker(!speaker)} /> : <HiMiniSpeakerXMark onClick={() => setSpeaker(!speaker)} />}
        </div>
      </div>

      <div className={styles.actionIcons}>
        <div className={styles.mainIcons}>

          {count <= 0 ? <GoHeart onClick={() => setCount(count + 1)} className={`${styles.icon} ${styles.heart}`} /> : <GoHeartFill className={`${styles.icon} ${styles.heartFill}`} />}
          <FiMessageCircle onClick={() => alert('Under development')} className={`${styles.icon} ${styles.msg}`} />
          <FiSend onClick={() => alert('Under development')} className={`${styles.icon} ${styles.send}`} />
        </div>
        <div className={styles.saveIcon}>
            {bookMark ? <MdBookmarkBorder onClick={() => {
              setbookMark(!bookMark);
              alert('Post added to the collection');
            }} />
             :
              <MdBookmark onClick={() => {
                setbookMark(!bookMark);
                alert('Post removed from the collection')
              }} />}
        </div>
      </div>

      <div className={styles.postDesc}>
        <p className={styles.likesCount}>{count} likes</p>
        <p className={styles.likesDesc}>Liked by mr._.skyy and others</p>
        <p className={styles.commentDesc}><span>naveenx.web </span> 💬 Comment "Web" to get the<br /> </p>
        <p className={styles.more}>..more</p>
        <p className={styles.more}>View all 18 comments</p>
      </div>

      <div className={styles.comment}>
        <p className={styles.addComment}>Add a comment...</p>
        <BsEmojiSmile onClick={() => alert('Under development')} />
      </div>

      <hr />

    </div>
  );
};

export default PostCard;