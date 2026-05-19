import { useState } from "react";
import { events as data } from "../data/events";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";

export default function Events() {
  const [active, setActive] = useState(null);

  const upcoming = data.filter((e) => e.status === "upcoming");
  const past = data.filter((e) => e.status === "past");

  return (

    <PageTransition>

      <div className="events-page">

        <h1 className="page-title">Events</h1>

        {/* UPCOMING */}
        <h2 className="events-title">Upcoming</h2>

        {upcoming.length === 0 ? (
          <div className="events-empty">
            No upcoming events planned
          </div>
        ) : (
          <div className="events-grid">

            {upcoming.map((event) => (
              <motion.div
                key={event.id}
                className="event-card"
                layoutId={`card-${event.id}`}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.35 }}
                whileHover={{ scale: 1.03, y: -6 }}
              >

                <div
                  className="event-cover"
                  style={{
                    backgroundImage: `url(${event.cover})`
                  }}
                />

                <div className="event-body">

                  <div className="event-date">
                    {event.date}
                  </div>

                  <div className="event-main">
                    <h3 className="event-title">
                      {event.title}
                    </h3>

                    <p className="event-place">
                      {event.place?.name || event.place}
                    </p>
                  </div>

                  <div className="event-tags">
                    {event.tags.map((t, i) => (
                      <span key={i} className="tag">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <button
                    className="event-more"
                    onClick={() => setActive(event)}
                  >
                    More
                  </button>

                </div>
              </motion.div>
            ))}

          </div>
        )}

        {/* PAST */}
        <h2 className="events-title">Past</h2>

        {past.length === 0 ? (
          <div className="events-empty">
            No finished events yet
          </div>
        ) : (
          <div className="events-grid">

            {past.map((event) => (
              <motion.div
                key={event.id}
                className="event-card past"
                layoutId={`card-${event.id}`}
                onClick={() => setActive(event)}
                whileHover={{ scale: 1.02, y: -4 }}
              >

                <div
                  className="event-cover"
                  style={{
                    backgroundImage: `url(${event.cover})`
                  }}
                />

                <div className="event-body">

                  <div className="event-date">
                    {event.date}
                  </div>

                  <div className="event-main">

                    <h3 className="event-title">
                      {event.title}
                    </h3>

                    <p className="event-place">
                      {event.place?.name || event.place}
                    </p>

                  </div>

                  <div className="event-tags">
                    {event.tags.map((t, i) => (
                      <span key={i} className="tag">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <button className="event-more">
                    View
                  </button>

                </div>
              </motion.div>
            ))}

          </div>
        )}

        {/* MODAL */}
        <AnimatePresence>

          {active && (
            <motion.div
              className="modal"
              onClick={() => setActive(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >

              <motion.div
                className="modal-box cinematic"
                layoutId={`card-${active.id}`}
                onClick={(e) => e.stopPropagation()}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 25
                }}
              >

                <div
                  className="modal-cover"
                  style={{
                    backgroundImage: `url(${active.cover})`
                  }}
                />

                <div className="modal-date">
                  {active.date}
                </div>

                <h2 className="modal-title">
                  {active.title}
                </h2>

                <p className="modal-place">
                  {active.place?.name || active.place}
                </p>

                <p className="modal-desc">
                  {active.desc}
                </p>

                <div className="event-tags">
                  {active.tags.map((t, i) => (
                    <span key={i} className="tag">
                      #{t}
                    </span>
                  ))}
                </div>

                <button
                  className="modal-close"
                  onClick={() => setActive(null)}
                >
                  Close
                </button>

              </motion.div>

            </motion.div>
          )}

        </AnimatePresence>

      </div>

    </PageTransition>

  );
}