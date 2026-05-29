"use client";

const testimonials = [
  {
    quote:
      "We used to maintain three registers — one for gate passes, one for fees, one for complaints. Now it's all in one place. My staff actually likes using it.",
    name: "Rahul Sharma",
    title: "Owner, Green Valley PG",
    city: "Pune",
  },
  {
    quote:
      "Parents used to call me five times a week asking about their child's gate pass or dues. Now they check it themselves. I finally have my evenings back.",
    name: "Priya Nair",
    title: "Owner, Lakshmi Women's Hostel",
    city: "Kochi",
  },
  {
    quote:
      "Fee collection was a nightmare before — chasing tenants room to room every month. With automatic reminders and online payment, I get paid on time without the drama.",
    name: "Vikram Patel",
    title: "Owner, Sunrise PG for Men",
    city: "Ahmedabad",
  },
];

export function InfraTestimonials() {
  return (
    <section
      id="infra-testimonials"
      style={{
        background: "var(--color-light-alabaster)",
        padding: "100px 24px",
        borderBottom: "1px solid #e2e8f0",
      }}
    >
      <div style={{ maxWidth: "620px", margin: "0 auto", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "clamp(30px, 4.5vw, 52px)",
            lineHeight: 1.02,
            letterSpacing: "-0.04em",
            fontWeight: 700,
            color: "#0f172a",
            margin: 0,
          }}
        >
          What hostel owners are saying
        </h2>
      </div>

      <div
        className="infra-testimonials-grid"
        style={{
          maxWidth: "1040px",
          margin: "52px auto 0",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
        }}
      >
        {testimonials.map((t, idx) => (
          <article
            key={idx}
            style={{
              borderRadius: "0px", // Perfectly sharp corners
              background: "var(--color-white-canvas)",
              padding: "36px 30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              border: "1px solid #e2e8f0", // Clean outline border
              boxShadow: "0 4px 16px rgba(0,0,0,0.01)", // Soft shadow
            }}
          >
            {/* Quote icon in Teal */}
            <div>
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="#0d9488" // Teal primary
                opacity={0.16}
                aria-hidden="true"
                style={{ marginBottom: "14px" }}
              >
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
              </svg>
              <p
                style={{
                  margin: 0,
                  fontSize: "15px",
                  lineHeight: 1.6,
                  color: "#334155", // Slate-700
                  fontWeight: 500,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            <div style={{ marginTop: "28px", borderTop: "1px solid #edf2f7", paddingTop: "14px" }}>
              <p
                style={{
                  margin: 0,
                  fontSize: "14.5px",
                  fontWeight: 700,
                  color: "#0f172a",
                }}
              >
                {t.name}
              </p>
              <p
                style={{
                  margin: "2px 0 0",
                  fontSize: "13px",
                  color: "var(--color-misty-gray)",
                  fontWeight: 500,
                }}
              >
                {t.title}, {t.city}
              </p>
            </div>
          </article>
        ))}
      </div>

      <style>{`
        @media (max-width: 760px) {
          .infra-testimonials-grid {
            grid-template-columns: 1fr !important;
            max-width: 480px !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
