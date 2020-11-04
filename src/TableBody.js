import React, { useEffect } from 'react';

const TableBody = (props) => {
    const posts = props.posts;
    return(
        <tbody>
          {
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
          }
        </tbody>
    )
}

export default TableBody;