import { useState } from "react";
import mediaData from "../data/media";

export default function Media() {

  const [selectedProject, setSelectedProject] = useState(null);

  const [galleryTab, setGalleryTab] =
    useState("all");

  const filteredGallery =
    selectedProject?.gallery.filter((item) => {

      if (galleryTab === "all") return true;

      return item.type === galleryTab;

    });

  return (

    <div className="media-page">

      {/* HERO */}

      <section className="media-hero">

        <div className="media-hero-content">

          <div className="media-tag">
            FGRTUBE MEDIA
          </div>

          <h1>Media Vault</h1>

          <p>
            Cinematic projects, concerts,
            documentaries and futuristic productions.
          </p>

        </div>

      </section>

      {/* PROJECTS */}

      <div className="media-grid">

        {mediaData.map((project) => (

          <div
            key={project.id}
            className="media-card"
            onClick={() =>
              setSelectedProject(project)
            }
          >

            <div
              className="media-thumb"
              style={{
                backgroundImage:
                  `url(${project.cover})`,
              }}
            />

            <div className="media-info">

              <div className="media-category">
                {project.category}
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

            </div>

          </div>

        ))}

      </div>

      {/* MODAL */}

      {selectedProject && (

        <div
          className="media-modal-overlay"
          onClick={() =>
            setSelectedProject(null)
          }
        >

          <div
            className="media-project-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            {/* COVER */}

            <div
              className="media-project-cover"
              style={{
                backgroundImage:
                  `url(${selectedProject.cover})`,
              }}
            >

              <div className="media-project-gradient" />

              <div className="media-project-content">

                <div className="media-category">
                  {selectedProject.category}
                </div>

                <h2>
                  {selectedProject.title}
                </h2>

                <p>
                  {selectedProject.description}
                </p>

              </div>

            </div>

            {/* TABS */}

            <div className="gallery-tabs">

              <button
                className={
                  galleryTab === "all"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setGalleryTab("all")
                }
              >
                All
              </button>

              <button
                className={
                  galleryTab === "image"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setGalleryTab("image")
                }
              >
                Photos
              </button>

              <button
                className={
                  galleryTab === "video"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setGalleryTab("video")
                }
              >
                Videos
              </button>

            </div>

            {/* GALLERY */}

            <div className="gallery-grid">

              {filteredGallery.map((item, i) => (

                item.type === "image" ? (

                  <div
                    key={i}
                    className="gallery-image"
                    style={{
                      backgroundImage:
                        `url(${item.src})`,
                    }}
                  />

                ) : (

                  <div
                    key={i}
                    className="gallery-video"
                  >

                    <iframe
                      src={item.src}
                      title="video"
                      allowFullScreen
                    />

                  </div>

                )

              ))}

            </div>

          </div>

        </div>

      )}

    </div>

  );
}