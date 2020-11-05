import React from 'react';

const TableBody = (props) => {
    const posts = props.posts;
    const state = props.postState;

    let content;
    if (state === 'loading') {
        content = 
            <tr>
                <td> Loading </td>
            </tr>
    } else if (state === 'failed') {
        content = 
            <tr>
                <td> error fetching posts </td>
            </tr>
    } else {
        content =
        (
            posts.map((post, i) => {
                return (
                    <tr className="post" key={i}>
                        <td>{post.name}</td>
                        {post.bbox.map((lat, j) => {
                            return(
                                <td key={j}>{lat}</td>
                            )
                        })}
                    </tr>
                )
            })
        )
    }
    
    return(
        <tbody>
            {content}
        </tbody>
    )
}

export default TableBody;