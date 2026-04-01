import { useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom/cjs/react-router-dom";

// ── Design Tokens ──
const fontSans = "'Montserrat', sans-serif";
const fontSerif = "'Cormorant Garamond', serif";
const subcolor = "#C49A9A";
const slate = "#735f5f";
const muted = "#9a8888";
const bg = "#F8F3F1";
const btncolor = "#a17a7a";
const cardBg = "#fdf8f6";

const faqs = [
  {
    category: "Booking",
    items: [
      {
        q: "How do I book a decor item?",
        a: "You can book directly from our Decor Rental page by clicking 'Book Now' on any item. Fill in your event details and we'll confirm your booking within 24 hours.",
      },
      {
        q: "How far in advance should I book?",
        a: "We recommend booking at least 7–10 days before your event. For peak season (wedding season, festive periods), booking 3–4 weeks in advance is advisable.",
      },
      {
        q: "Can I modify or cancel my booking?",
        a: "Yes, modifications are accepted up to 48 hours before delivery. Cancellations made 72+ hours before the event receive a full refund. Later cancellations may incur a fee.",
      },
    ],
  },
  {
    category: "Delivery & Setup",
    items: [
      {
        q: "Do you deliver and set up the decor?",
        a: "Yes! Our team handles delivery, complete setup, and post-event pickup. You don't need to worry about anything — just enjoy your event.",
      },
      {
        q: "What areas do you service?",
        a: "We currently serve Ahmedabad, Surat, Vadodara, Rajkot, and surrounding areas. Contact us to check availability for your specific location.",
      },
      {
        q: "What time do you arrive for setup?",
        a: "Our team arrives 2–3 hours before your event start time to ensure everything is perfectly set up before your guests arrive.",
      },
    ],
  },
  {
    category: "Pricing & Payment",
    items: [
      {
        q: "What is included in the rental price?",
        a: "The rental price includes the item, delivery, professional setup, and post-event collection. There are no hidden charges.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept UPI, bank transfer, credit/debit cards, and cash. A 30% advance is required to confirm your booking, with the balance due on delivery.",
      },
      {
        q: "Is there a security deposit?",
        a: "Yes, a refundable security deposit is collected at the time of delivery. It is returned in full after the items are collected and inspected post-event.",
      },
    ],
  },
  {
    category: "Items & Damage",
    items: [
      {
        q: "What if a rental item gets damaged?",
        a: "Minor wear and tear is expected and covered. However, significant damage or loss will be charged at replacement cost, which is why we collect a security deposit.",
      },
      {
        q: "Can I request custom or themed decor?",
        a: "Absolutely! We offer customisation for themes, colours, and arrangements. Share your vision with us and we'll create a personalised package for you.",
      },
      {
        q: "Do you provide decor for outdoor events?",
        a: "Yes, we cater to both indoor and outdoor events. For outdoor setups, please let us know in advance so we can bring weather-appropriate arrangements.",
      },
    ],
  },
];

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <Box
      onClick={onToggle}
      sx={{
        background: isOpen ? "#fff" : cardBg,
        border: `1px solid ${isOpen ? subcolor + "88" : "#ecddd8"}`,
        borderRadius: "12px",
        p: { xs: 2, md: 2.5 },
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: isOpen ? `0 8px 32px ${subcolor}22` : "none",
        "&:hover": {
          borderColor: `${subcolor}66`,
          background: "#fff",
        },
      }}
    >
      {/* Question Row */}
      <Box display="flex" alignItems="center" justifyContent="space-between" gap={2}>
        <Typography sx={{
          fontFamily: fontSans,
          fontWeight: 500,
          fontSize: { xs: "13px", md: "14px" },
          color: isOpen ? btncolor : slate,
          lineHeight: 1.5,
          flex: 1,
          transition: "color 0.25s",
        }}>
          {q}
        </Typography>
        <Box sx={{
          flexShrink: 0,
          width: 28,
          height: 28,
          borderRadius: "50%",
          background: isOpen ? btncolor : `${subcolor}22`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s ease",
        }}>
          {isOpen
            ? <RemoveIcon sx={{ fontSize: 16, color: "#fff" }} />
            : <AddIcon sx={{ fontSize: 16, color: btncolor }} />
          }
        </Box>
      </Box>

      {/* Answer */}
      <Box sx={{
        maxHeight: isOpen ? "200px" : "0px",
        overflow: "hidden",
        transition: "max-height 0.4s ease",
      }}>
        <Typography sx={{
          fontFamily: fontSans,
          fontWeight: 300,
          fontSize: { xs: "12.5px", md: "13px" },
          color: muted,
          lineHeight: 1.9,
          mt: 1.5,
          pr: 4,
        }}>
          {a}
        </Typography>
      </Box>
    </Box>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <Box sx={{ background: bg, minHeight: "100vh" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Montserrat:wght@300;400;500;600&display=swap');`}</style>

      <Container maxWidth="md">
        <Box sx={{ py: { xs: 6, md: 10 } }}>

          {/* ── Header ── */}
          <Box textAlign="center" mb={7}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1.5, mb: 1.5 }}>
              <Box sx={{ width: 32, height: "1px", bgcolor: subcolor }} />
              <Typography sx={{
                fontFamily: fontSans, fontSize: "10px", fontWeight: 600,
                letterSpacing: "0.3em", textTransform: "uppercase", color: subcolor,
              }}>
                Got Questions?
              </Typography>
              <Box sx={{ width: 32, height: "1px", bgcolor: subcolor }} />
            </Box>

            <Typography sx={{
              fontFamily: fontSerif,
              fontSize: { xs: "34px", sm: "46px", md: "58px" },
              fontWeight: 400, color: slate, lineHeight: 1.1, mb: 2,
            }}>
              Frequently Asked Questions
            </Typography>

            <Typography sx={{
              fontFamily: fontSans, fontWeight: 300,
              fontSize: { xs: "0.82rem", md: "0.9rem" },
              color: muted, maxWidth: 420, mx: "auto", lineHeight: 1.9,
            }}>
              Everything you need to know about Decorify's rental service. Can't find your answer? Feel free to contact us.
            </Typography>
          </Box>

          {/* ── FAQ Sections ── */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
            {faqs.map((section) => (
              <Box key={section.category}>

                {/* Section heading */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2.5 }}>
                  <Typography sx={{
                    fontFamily: fontSans, fontWeight: 600, fontSize: "11px",
                    letterSpacing: "2px", textTransform: "uppercase", color: btncolor,
                  }}>
                    {section.category}
                  </Typography>
                  <Box sx={{ flex: 1, height: "1px", background: `${subcolor}44` }} />
                </Box>

                {/* FAQ Items */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                  {section.items.map((item, i) => {
                    const id = `${section.category}-${i}`;
                    return (
                      <FAQItem
                        key={id}
                        q={item.q}
                        a={item.a}
                        isOpen={openId === id}
                        onToggle={() => toggle(id)}
                      />
                    );
                  })}
                </Box>
              </Box>
            ))}
          </Box>

          {/* ── Bottom CTA ── */}
          <Box sx={{
            mt: 8, textAlign: "center",
            background: "#fff",
            border: `1px solid #ecddd8`,
            borderRadius: "16px",
            p: { xs: 3, md: 4 },
          }}>
            <Typography sx={{
              fontFamily: fontSerif, fontSize: { xs: "22px", md: "28px" },
              fontWeight: 400, color: slate, mb: 1,
            }}>
              Still have questions?
            </Typography>
            <Typography sx={{
              fontFamily: fontSans, fontWeight: 300, fontSize: "13px",
              color: muted, mb: 3, lineHeight: 1.8,
            }}>
              Our team is happy to help. Reach out to us anytime.
            </Typography>
            <Box
            component={Link} 
            to="/contact"
            sx={{
              textDecoration:"none",
              display: "inline-block",
              background: btncolor,
              color: "#fff",
              fontFamily: fontSans,
              fontWeight: 600,
              fontSize: "12px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              px: 4, py: 1.4,
              borderRadius: "8px",
              cursor: "pointer",
              transition: "all 0.25s ease",
              "&:hover": {
                background: slate,
                boxShadow: `0 6px 20px ${btncolor}44`,
                transform: "translateY(-2px)",
              },
            }}>
              Contact Us
            </Box>
          </Box>

        </Box>
      </Container>
    </Box>
  );
}
