import { useState } from 'react';
import styles from './PostComments.module.css';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DeleteIcon from '@mui/icons-material/Delete';

import Comment from '../../models/Comment';

const PostComments = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [tempComment, setTempComment] = useState('');
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    function handleAddComment(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const newComment = new Comment(comments.length, tempComment);
        setTempComment('');
        setComments([...comments, newComment]);
    }

    function handleDeleteComment(comment: Comment) {
        const updatedComments = comments.filter(c => c.id !== comment.id);
        setComments(updatedComments);
        setAnchorEl(null); // fechar o menu suspenso
    }

    return (
        <div>
            <ul className={styles['post-comments']} data-testid="post-comments">
                {comments.map(({ comment, id }) => (
                    <li className={styles['post-comment']} key={id}>
                        <div className={styles['post-comment-options']}>
                            <IconButton
                                aria-label="options"
                                aria-controls="comment-menu"
                                aria-haspopup="true"
                                onClick={(event) => setAnchorEl(event.currentTarget)}
                            >
                                <MoreVertIcon />
                            </IconButton>
                            <Menu
                                id="comment-menu"
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={() => setAnchorEl(null)}
                            >
                                <MenuItem onClick={() => handleDeleteComment({ id, comment })}>
                                    <DeleteIcon /> Excluir
                                </MenuItem>
                            </Menu>
                        </div>
                        <p className={styles['post-comment-content']}>
                            {comment}
                        </p>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleAddComment} className={styles['post-comments-form']}>
                <textarea 
                    value={tempComment} 
                    onChange={e => setTempComment(e.target.value)} 
                    required 
                    className={styles['post-comments-form-textarea']} 
                    data-testid="post-comments-textarea"
                />
                <button type="submit" className={styles['post-comments-form-button']} data-testid="post-comments-button">
                    Comentar
                </button>
            </form>
        </div>
    );
}

export default PostComments;
