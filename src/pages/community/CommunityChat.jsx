import { useState } from "react";

import communityPosts
from "../../data/communityPosts";

export default function CommunityChat() {

  const [posts, setPosts] =
    useState(communityPosts);

  const likePost = (id) => {

    setPosts((prev) =>

      prev.map((post) =>

        post.id === id
          ? {
              ...post,
              likes: post.likes + 1,
            }
          : post

      )

    );

  };

  return (

    <div className="community-page">

      <div className="community-header">

        <div>

          <div className="community-label">
            COMMUNITY FEED
          </div>

          <h1>
            Global Community
          </h1>

        </div>

      </div>

      <div className="community-feed">

        {posts.map((post) => (

          <div
            key={post.id}
            className={
              post.pinned
                ? "community-post pinned"
                : "community-post"
            }
          >

            {post.pinned && (

              <div className="pinned-badge">
                PINNED
              </div>

            )}

            <div className="post-top">

              <div className="post-user">

                <div className="post-avatar">
                  {post.author[0]}
                </div>

                <div>

                  <div className="post-author">

                    {post.author}

                    {post.verified && (
                      <span className="verified">
                        ✓
                      </span>
                    )}

                  </div>

                </div>

              </div>

            </div>

            <div className="post-text">
              {post.text}
            </div>

            {post.image && (

              <div
                className="post-image"
                style={{
                  backgroundImage:
                    `url(${post.image})`,
                }}
              />

            )}

            <div className="post-actions">

              <button
                className="heart-btn"
                onClick={() =>
                  likePost(post.id)
                }
              >
                ♥ {post.likes}
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}