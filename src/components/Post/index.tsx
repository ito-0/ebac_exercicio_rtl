import styles from './Post.module.css';

import PostComments from '../PostComments';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    imageUrl: string;
    alt: string
}

const Post = ({ children, imageUrl, alt }: Props) => (
    <div className={styles.post}>
        <img className={styles['post-image']} src={imageUrl} alt={alt} />
        <p className={styles['post-text']}> {children} </p>
        <PostComments />
    </div>
);

export default Post;