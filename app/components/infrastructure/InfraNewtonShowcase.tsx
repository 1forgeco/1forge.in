"use client";

import { useState } from "react";
import { 
  ShieldCheck, 
  Layers, 
  Utensils, 
  HelpCircle, 
  Check, 
  TrendingUp, 
  Clock, 
  Building, 
  Smartphone,
  ChevronRight,
  Sparkles,
  MessageSquare,
  QrCode,
  AlertTriangle
} from "lucide-react";
import { OccupancyCard } from "@/components/ui/animated-dashboard-card";

export function InfraNewtonShowcase() {
  const [activeTab, setActiveTab] = useState<"live" | "tracker" | "poll">("live");

  return (
    <section id="infra-newton-showcase" style={{ background: "#ffffff", padding: "100px 0", overflow: "hidden" }}>
      
      {/* ── SECTION 1: WHITE BENTO GRID & OPERATIONS CONTROLLER (Light Mode Premium) ── */}
      <div 
        style={{ 
          background: "#ffffff", // Light mode premium theme
          padding: "90px 24px",
          width: "calc(100% - 40px)",
          margin: "0 auto 80px",
          borderRadius: "0px", // Perfectly sharp corners
          border: "1px solid #e2e8f0",
          position: "relative"
        }}
      >
        <div style={{ position: "absolute", inset: 0, opacity: 0.1, backgroundImage: "radial-gradient(#0d9488 1px, transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />
        
        <div style={{ maxWidth: "1120px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span 
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "#f0fdfa", // Teal-50
                border: "1px solid rgba(13, 148, 136, 0.25)",
                padding: "6px 14px",
                color: "#0f766e", // Teal-700
                fontSize: "12px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "20px",
                borderRadius: "0px"
              }}
            >
              <Sparkles size={12} style={{ color: "#0d9488" }} /> Interactive Control Panel
            </span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, color: "#0f172a", margin: 0, letterSpacing: "-0.03em", lineHeight: 1.15 }}>
              Scale Your PG Portfolio With High-Fidelity Infrastructure
            </h2>
            <p style={{ color: "var(--color-pewter)", fontSize: "16px", marginTop: "16px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto", lineHeight: 1.55 }}>
              Say goodbye to messy notebooks. Get 100% operational clarity with real-time dashboards and simulated control parameters.
            </p>
          </div>

          <div 
            className="infra-showcase-grid"
            style={{ 
              display: "grid", 
              gridTemplateColumns: "1.15fr 0.85fr", 
              gap: "40px", 
              alignItems: "stretch" 
            }}
          >
            {/* Left: Interactive Simulated Panel (Light Premium) */}
            <div 
              style={{ 
                background: "#ffffff", 
                border: "1px solid #e2e8f0", 
                borderRadius: "0px", 
                display: "flex", 
                flexDirection: "column",
                height: "100%",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.01)"
              }}
            >
              {/* Tab Header Controls */}
              <div 
                style={{ 
                  display: "flex", 
                  borderBottom: "1px solid #e2e8f0", 
                  background: "#f8fafc" 
                }}
              >
                {[
                  { id: "live", label: "Live Gate Passes" },
                  { id: "tracker", label: "Collection Tracker" },
                  { id: "poll", label: "Mess Poll & Broadcast" }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    style={{
                      flex: 1,
                      padding: "16px 12px",
                      background: activeTab === tab.id ? "#ffffff" : "transparent",
                      color: activeTab === tab.id ? "#0d9488" : "var(--color-misty-gray)",
                      border: "none",
                      borderBottom: activeTab === tab.id ? "2px solid #0d9488" : "2px solid transparent",
                      fontSize: "13px",
                      fontWeight: 600,
                      cursor: "pointer",
                      fontFamily: "inherit",
                      transition: "all 0.2s",
                      borderRadius: "0px"
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Body */}
              <div style={{ padding: "30px", flex: 1, display: "flex", flexDirection: "column" }}>
                {activeTab === "live" && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                      <span style={{ fontSize: "12px", color: "var(--color-misty-gray)", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>RECENT ENTRY ACTIVITY</span>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#0d9488", fontWeight: 700 }}>
                        <span style={{ width: "6px", height: "6px", background: "#0d9488", borderRadius: "50%", display: "inline-block" }} />
                        LIVE FEEDS
                      </span>
                    </div>

                    {[
                      { name: "Rohan Sen", room: "Room 302", time: "2 mins ago", status: "Gate In" },
                      { name: "Ananya K.", room: "Room 104", time: "15 mins ago", status: "Gate Out" },
                      { name: "Sameer Verma", room: "Room 211", time: "1 hour ago", status: "Gate In" },
                      { name: "Priyanjali D.", room: "Room 402", time: "2 hours ago", status: "Gate In" },
                      { name: "Kabir Mehta", room: "Room 105", time: "3 hours ago", status: "Gate Out" }
                    ].map((item, idx) => (
                      <div 
                        key={idx} 
                        style={{ 
                          display: "flex", 
                          justifyContent: "space-between", 
                          alignItems: "center", 
                          padding: "12px 16px", 
                          background: "#f8fafc", 
                          border: "1px solid #e2e8f0",
                          borderLeft: "3px solid #0d9488" 
                        }}
                      >
                        <div>
                          <div style={{ fontSize: "14px", fontWeight: 700, color: "#0f172a" }}>{item.name}</div>
                          <div style={{ fontSize: "11px", color: "var(--color-misty-gray)", marginTop: "2px" }}>{item.room} · {item.time}</div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span style={{ fontSize: "11px", fontWeight: 700, padding: "3px 9px", background: "#f0fdfa", border: "1px solid rgba(13, 148, 136, 0.2)", color: "#0d9488" }}>
                            {item.status}
                          </span>
                          <div style={{ width: "20px", height: "20px", background: "#0d9488", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Check size={11} color="#ffffff" strokeWidth={3} />
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Gate Warden Audit Summary to fill empty space */}
                    <div 
                      style={{ 
                        marginTop: "16px", 
                        paddingTop: "14px", 
                        borderTop: "1px dashed #e2e8f0",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                      }}
                    >
                      <div>
                        <span style={{ fontSize: "10px", color: "var(--color-misty-gray)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>WARDEN ON DUTY</span>
                        <div style={{ fontSize: "12px", fontWeight: 700, color: "#0f172a", marginTop: "2px" }}>Supervisor Gurpreet S.</div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <span style={{ fontSize: "10px", color: "var(--color-misty-gray)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>TOTAL PASSES TODAY</span>
                        <div style={{ fontSize: "12px", fontWeight: 700, color: "#0d9488", marginTop: "2px" }}>48 Approved · 0 Delayed</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "tracker" && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "20px", flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                      <div>
                        <div style={{ fontSize: "28px", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.02em" }}>₹4,55,900</div>
                        <div style={{ fontSize: "12px", color: "var(--color-misty-gray)", fontWeight: 500, marginTop: "2px" }}>collected out of ₹4,85,000 this month</div>
                      </div>
                      <div style={{ fontSize: "18px", fontWeight: 700, color: "#0d9488" }}>94%</div>
                    </div>

                    {/* Progress Bar */}
                    <div style={{ height: "8px", background: "#e2e8f0", width: "100%", position: "relative" }}>
                      <div style={{ height: "100%", background: "linear-gradient(90deg, #0d9488 0%, #2dd4bf 100%)", width: "94%" }} />
                    </div>

                    <div style={{ marginTop: "10px" }}>
                      <div style={{ fontSize: "12px", color: "var(--color-misty-gray)", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "12px" }}>AUTOMATED REMINDERS ACTIVE TODAY</div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                        <div style={{ padding: "10px 12px", background: "#f8fafc", border: "1px solid #e2e8f0", fontSize: "12px", color: "#334155", display: "flex", justifyContent: "space-between" }}>
                          <span>Room 102 (Dues)</span>
                          <span style={{ color: "#0d9488", fontWeight: 700 }}>Sent</span>
                        </div>
                        <div style={{ padding: "10px 12px", background: "#f8fafc", border: "1px solid #e2e8f0", fontSize: "12px", color: "#334155", display: "flex", justifyContent: "space-between" }}>
                          <span>Room 405 (Rent)</span>
                          <span style={{ color: "#0d9488", fontWeight: 700 }}>Sent</span>
                        </div>
                      </div>
                    </div>

                    {/* Recent Transactions Log to fill empty space */}
                    <div style={{ marginTop: "12px", paddingTop: "14px", borderTop: "1px dashed #e2e8f0" }}>
                      <div style={{ fontSize: "11px", color: "var(--color-misty-gray)", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "10px" }}>
                        RECENT TRANSACTIONS (PAST 24H)
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        {[
                          { room: "Room 304", tenant: "Aarav Sharma", type: "Rent", amount: "₹14,500", status: "Verified" },
                          { room: "Room 108", tenant: "Riya Verma", type: "Rent", amount: "₹12,200", status: "Verified" },
                          { room: "Room 215", tenant: "Vikram Sen", type: "Electricity", amount: "₹2,450", status: "Verified" }
                        ].map((tx, txIdx) => (
                          <div 
                            key={txIdx} 
                            style={{ 
                              display: "flex", 
                              justifyContent: "space-between", 
                              alignItems: "center", 
                              padding: "8px 12px", 
                              background: "#f8fafc", 
                              border: "1px solid #e2e8f0",
                              fontSize: "12px"
                            }}
                          >
                            <div>
                              <span style={{ fontWeight: 700, color: "#0f172a" }}>{tx.room}</span>
                              <span style={{ color: "var(--color-misty-gray)", marginLeft: "6px" }}>{tx.tenant} · {tx.type}</span>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                              <span style={{ fontWeight: 700, color: "#0f172a" }}>{tx.amount}</span>
                              <span style={{ fontSize: "10px", color: "#1e682f", background: "#eefbf3", border: "1px solid #c2f0d1", padding: "1px 6px", fontWeight: 700 }}>
                                {tx.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "poll" && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px", flex: 1 }}>
                    {/* Warden Announcement */}
                    <div 
                      style={{ 
                        padding: "14px 16px", 
                        background: "#f0fdfa", // Teal-50
                        borderLeft: "3px solid #0d9488",
                        borderTop: "1px solid rgba(13, 148, 136, 0.15)",
                        borderRight: "1px solid rgba(13, 148, 136, 0.15)",
                        borderBottom: "1px solid rgba(13, 148, 136, 0.15)"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", fontWeight: 700, color: "#0f766e", letterSpacing: "0.05em" }}>
                        <AlertTriangle size={12} /> WARDEN ANNOUNCEMENT
                      </div>
                      <div style={{ fontSize: "13px", color: "#1e293b", fontWeight: 600, marginTop: "4px", lineHeight: 1.45 }}>
                        📢 Water maintenance in Block A tomorrow from 10:00 AM to 12:00 PM. Please store water accordingly.
                      </div>
                    </div>

                    {/* Warden Menu Poll */}
                    <div>
                      <div style={{ fontSize: "11px", color: "var(--color-misty-gray)", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "10px" }}>
                        WARDEN FEEDBACK POLL
                      </div>
                      <div style={{ border: "1px solid #e2e8f0", padding: "18px", background: "#ffffff" }}>
                        <div style={{ fontSize: "13.5px", fontWeight: 700, color: "#0f172a", lineHeight: 1.4 }}>
                          How was today&apos;s Special Dinner? (Paneer Butter Masala & Butter Naan)
                        </div>
                        
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "12px" }}>
                          {[
                            { option: "Excellent", votes: "68%", width: "68%" },
                            { option: "Good", votes: "22%", width: "22%" },
                            { option: "Could be better", votes: "10%", width: "10%" }
                          ].map((opt, oIdx) => (
                            <div 
                              key={oIdx} 
                              style={{ 
                                position: "relative", 
                                height: "34px", 
                                display: "flex", 
                                alignItems: "center", 
                                justifyContent: "space-between", 
                                padding: "0 12px", 
                                border: "1px solid #e2e8f0", 
                                overflow: "hidden", 
                                cursor: "pointer" 
                              }}
                            >
                              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, background: "#f0fdfa", width: opt.width, zIndex: 0 }} />
                              <span style={{ fontSize: "12.5px", fontWeight: 600, color: "#334155", position: "relative", zIndex: 1 }}>{opt.option}</span>
                              <span style={{ fontSize: "12px", fontWeight: 700, color: "#0d9488", position: "relative", zIndex: 1 }}>{opt.votes}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Daily Mess Menu Schedule to fill empty space */}
                    <div style={{ marginTop: "4px", paddingTop: "14px", borderTop: "1px dashed #e2e8f0" }}>
                      <div style={{ fontSize: "11px", color: "var(--color-misty-gray)", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "10px" }}>
                        TODAY&apos;S MESS MENU & SCHEDULE
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
                        {[
                          { meal: "Breakfast", items: "Idli, Vada, Tea", time: "7:30 - 9:30 AM" },
                          { meal: "Lunch", items: "Dal Rice, Roti, Veg", time: "12:30 - 2:30 PM" },
                          { meal: "Dinner", items: "Paneer, Naan, Kheer", time: "7:30 - 9:30 PM" }
                        ].map((m, mIdx) => (
                          <div 
                            key={mIdx} 
                            style={{ 
                              padding: "10px", 
                              background: "#f8fafc", 
                              border: "1px solid #e2e8f0", 
                              fontSize: "11px", 
                              display: "flex", 
                              flexDirection: "column",
                              justifyContent: "space-between" 
                            }}
                          >
                            <div>
                              <div style={{ fontWeight: 700, color: "#0d9488" }}>{m.meal}</div>
                              <div style={{ color: "#334155", fontWeight: 600, marginTop: "4px" }}>{m.items}</div>
                            </div>
                            <div style={{ color: "var(--color-misty-gray)", fontSize: "10px", marginTop: "6px", display: "flex", alignItems: "center", gap: "3px" }}>
                              <Clock size={9} /> {m.time}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom live stats */}
              <div 
                style={{ 
                  display: "grid", 
                  gridTemplateColumns: "1fr 1fr 1fr", 
                  borderTop: "1px solid #e2e8f0", 
                  background: "#f8fafc",
                  padding: "16px 20px" 
                }}
              >
                <div>
                  <div style={{ fontSize: "10px", color: "var(--color-misty-gray)", fontWeight: 600 }}>REMINDERS DISPATCHED</div>
                  <div style={{ fontSize: "15px", fontWeight: 700, color: "#0f172a", marginTop: "2px" }}>100%</div>
                </div>
                <div>
                  <div style={{ fontSize: "10px", color: "var(--color-misty-gray)", fontWeight: 600 }}>TICKET SLA MET</div>
                  <div style={{ fontSize: "15px", fontWeight: 700, color: "#0f172a", marginTop: "2px" }}>98.4%</div>
                </div>
                <div>
                  <div style={{ fontSize: "10px", color: "var(--color-misty-gray)", fontWeight: 600 }}>OCCUPANCY RATE</div>
                  <div style={{ fontSize: "15px", fontWeight: 700, color: "#0f172a", marginTop: "2px" }}>96.8%</div>
                </div>
              </div>
            </div>

            {/* Right: Four Bento Cards (White Premium) */}
            <div style={{ display: "grid", gridTemplateRows: "repeat(4, 1fr)", gap: "16px" }}>
              {[
                { 
                  icon: ShieldCheck, 
                  title: "Sovereign Digital Gatekeeping", 
                  desc: "Replace dusty papers with automated scan logs, instant host permission checks, and automatic verification alerts." 
                },
                { 
                  icon: Layers, 
                  title: "Rent Collection Automation", 
                  desc: "Auto-generate beautiful tax receipts, assign customized utility bills, and push WhatsApp notifications instantly." 
                },
                { 
                  icon: Utensils, 
                  title: "Live Mess Feedback Logs", 
                  desc: "Warden-monitored student feedback loops, visual weekly menus, and automatic raw material purchase logs." 
                },
                { 
                  icon: HelpCircle, 
                  title: "B2B Helpdesk & SLA Engine", 
                  desc: "Assign complaints to wardens, electricians, and plumbers. Tracks resolve timers and warden metrics automatically." 
                }
              ].map((pill, idx) => {
                const Icon = pill.icon;
                return (
                  <div 
                    key={idx}
                    style={{ 
                      background: "#ffffff", 
                      border: "1px solid #e2e8f0", 
                      padding: "20px 24px", 
                      display: "flex", 
                      alignItems: "center", 
                      gap: "18px", 
                      borderRadius: "0px",
                      transition: "border-color 0.2s"
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "#0d9488";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
                    }}
                  >
                    <div 
                      style={{ 
                        width: "40px", 
                        height: "40px", 
                        background: "#f0fdfa", // Teal-50
                        border: "1px solid rgba(13, 148, 136, 0.25)", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center", 
                        color: "#0d9488", 
                        flexShrink: 0 
                      }}
                    >
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: "14.5px", fontWeight: 700, color: "#0f172a", margin: 0 }}>{pill.title}</h3>
                      <p style={{ fontSize: "12px", color: "var(--color-pewter)", margin: "4px 0 0", lineHeight: 1.45 }}>{pill.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── SUB-SECTION: WARDEN & PARENTS PORTAL SPLIT SHOWCASE ── */}
      <div style={{ background: "#ffffff", padding: "0 24px 90px", width: "calc(100% - 40px)", margin: "0 auto 80px" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          
          <div style={{ textAlign: "center", marginBottom: "44px" }}>
            <h3 style={{ fontSize: "24px", fontWeight: 700, color: "#0f172a", margin: 0, letterSpacing: "-0.02em" }}>
              Dedicated Warden & Parents Portals
            </h3>
            <p style={{ color: "var(--color-pewter)", fontSize: "14.5px", marginTop: "8px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
              1Forge splits operations into role-specific panels to empower your staff and reassure guardians.
            </p>
          </div>

          <div 
            className="infra-showcase-split" 
            style={{ 
              display: "grid", 
              gridTemplateColumns: "1fr 1fr", 
              gap: "28px", 
              alignItems: "stretch" 
            }}
          >
            {/* Left: Warden Portal Card */}
            <div 
              style={{ 
                background: "#ffffff", 
                border: "1px solid #e2e8f0", 
                padding: "32px", 
                borderRadius: "0px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.01)"
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "#0f766e", background: "#f0fdfa", padding: "4px 10px", border: "1px solid rgba(13, 148, 136, 0.25)" }}>
                    STAFF CONSOLE
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--color-misty-gray)", fontWeight: 600 }}>
                    Active Duty Panel
                  </span>
                </div>

                <div style={{ fontSize: "20px", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.01em" }}>🛡️ Warden Portal Console</div>
                <p style={{ fontSize: "13px", color: "var(--color-pewter)", marginTop: "6px", lineHeight: 1.45 }}>
                  Empower your on-site wardens and supervisors to monitor daily check-ins, resolve complaints, and handle curfews.
                </p>

                {/* Simulated Console List */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" }}>
                  {[
                    { label: "Active Escalations", val: "2 Tickets Assigned (SLA: 30m)" },
                    { label: "Night Curfew Rollcall", val: "98% Tenants Checked-in Safely" },
                    { label: "Block Maintenance Alert", val: "Water system check completed" }
                  ].map((row, rIdx) => (
                    <div key={rIdx} style={{ display: "flex", justifyContent: "space-between", padding: "10px 12px", background: "#f8fafc", border: "1px solid #e2e8f0", fontSize: "12.5px" }}>
                      <span style={{ color: "#475569", fontWeight: 600 }}>{row.label}</span>
                      <span style={{ color: "#0d9488", fontWeight: 700 }}>{row.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "20px", marginTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "12px", color: "var(--color-misty-gray)", fontWeight: 500 }}>Warden Dashboard License: Included</span>
                <span style={{ fontSize: "12px", color: "#0d9488", fontWeight: 700, display: "flex", alignItems: "center", gap: "6px" }}>
                  Active Feed <span style={{ width: "6px", height: "6px", background: "#0d9488", borderRadius: "50%", display: "inline-block" }} />
                </span>
              </div>
            </div>

            {/* Right: Parents Portal Card */}
            <div 
              style={{ 
                background: "#ffffff", 
                border: "1px solid #e2e8f0", 
                padding: "32px", 
                borderRadius: "0px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.01)"
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "#0f766e", background: "#f0fdfa", padding: "4px 10px", border: "1px solid rgba(13, 148, 136, 0.25)" }}>
                    GUARDIAN VIEW
                  </span>
                  <span style={{ fontSize: "11px", color: "var(--color-misty-gray)", fontWeight: 600 }}>
                    Trust & Safety Panel
                  </span>
                </div>

                <div style={{ fontSize: "20px", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.01em" }}>👨‍👩‍👧‍👦 Parents Transparency Portal</div>
                <p style={{ fontSize: "13px", color: "var(--color-pewter)", marginTop: "6px", lineHeight: 1.45 }}>
                  Provide complete peace of mind to parents with instant entry/exit logs, online fee collections, and direct warden access.
                </p>

                {/* Simulated Parents App List */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" }}>
                  {[
                    { label: "Gate Safety Check-In", val: "Logs sent via WhatsApp instantly" },
                    { label: "Secure Fee Collections", val: "UPI / Bank Transfer (0% commission)" },
                    { label: "Mess Transparency", val: "Weekly menu views + feedback log" }
                  ].map((row, rIdx) => (
                    <div key={rIdx} style={{ display: "flex", justifyContent: "space-between", padding: "10px 12px", background: "#f8fafc", border: "1px solid #e2e8f0", fontSize: "12.5px" }}>
                      <span style={{ color: "#475569", fontWeight: 600 }}>{row.label}</span>
                      <span style={{ color: "#0d9488", fontWeight: 700 }}>{row.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "20px", marginTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "12px", color: "var(--color-misty-gray)", fontWeight: 500 }}>WhatsApp Updates: Integrated</span>
                <span style={{ fontSize: "12px", color: "#0d9488", fontWeight: 700, display: "flex", alignItems: "center", gap: "4px" }}>
                  Verified Safety <Check size={12} strokeWidth={2.5} />
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── SECTION 2: B2B BRAND BUBBLE CLOUD & SALARY-LIKE STATS ROW (Light Mode Premium) ── */}
      <div style={{ background: "#f8fafc", padding: "90px 24px", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          
          <div 
            className="infra-showcase-split"
            style={{ 
              display: "grid", 
              gridTemplateColumns: "1fr 1.1fr", 
              gap: "50px", 
              alignItems: "center",
              marginBottom: "60px"
            }}
          >
            {/* Left: Highlights & Efficiency metrics */}
            <div>
              <span 
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "#f0fdfa",
                  border: "1px solid rgba(13, 148, 136, 0.2)",
                  padding: "5px 12px",
                  color: "#0f766e",
                  fontSize: "12px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: "16px",
                  borderRadius: "0px"
                }}
              >
                <TrendingUp size={12} /> PG Operational Excellence
              </span>
              <h2 style={{ fontSize: "32px", fontWeight: 700, color: "#0f172a", margin: 0, letterSpacing: "-0.03em", lineHeight: 1.15 }}>
                Top-Tier Operational Metrics Secured by 1Forge Properties
              </h2>
              <p style={{ color: "var(--color-pewter)", fontSize: "15px", marginTop: "14px", lineHeight: 1.55 }}>
                Our proprietary platform empowers property owners to automate critical checkpoints. Scale your brands with complete trust and flawless execution.
              </p>

              {/* Stat Sub-cards */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "28px" }}>
                <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", padding: "20px", borderRadius: "0px" }}>
                  <div style={{ fontSize: "28px", fontWeight: 800, color: "#0d9488" }}>99.2%</div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a", marginTop: "6px" }}>Collections Rate</div>
                  <div style={{ fontSize: "11px", color: "var(--color-misty-gray)", marginTop: "2px" }}>collected within 5 days of invoice generation</div>
                </div>

                <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", padding: "20px", borderRadius: "0px" }}>
                  <div style={{ fontSize: "28px", fontWeight: 800, color: "#0f766e" }}>12 mins</div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a", marginTop: "6px" }}>Resolution SLA</div>
                  <div style={{ fontSize: "11px", color: "var(--color-misty-gray)", marginTop: "2px" }}>average Warden & Technician response timer</div>
                </div>
              </div>
            </div>

            {/* Right: Floating Brand Bubbles */}
            <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
              <div 
                style={{ 
                  background: "#ffffff", 
                  border: "1px solid #e2e8f0", 
                  padding: "40px", 
                  borderRadius: "0px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
                  width: "100%",
                  maxWidth: "480px",
                  position: "relative"
                }}
              >
                <div style={{ textAlign: "center", marginBottom: "24px" }}>
                  <div style={{ fontSize: "22px", fontWeight: 800, color: "#0f172a", letterSpacing: "-0.01em" }}>65+ Premium Properties</div>
                  <div style={{ fontSize: "12px", color: "var(--color-misty-gray)", marginTop: "4px", fontWeight: 500 }}>Chose 1Forge for their Corporate Hostel Brands</div>
                </div>

                {/* Cloud of capsules arranged elegantly */}
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
                  {[
                    "Stanza Living", "Nestaway", "ZoloStays", "CoHo", 
                    "Springs PG", "Elite Residency", "Aura PG", "Metropark", 
                    "Royal PG", "Habitat Co.", "Zion Luxury", "Vantage Hostels", 
                    "Zenith Co-living", "Pine PG"
                  ].map((brand, idx) => (
                    <div 
                      key={idx}
                      style={{ 
                        padding: "8px 14px", 
                        background: idx % 3 === 0 ? "#f0fdfa" : "#ffffff", 
                        border: idx % 3 === 0 ? "1px solid rgba(13, 148, 136, 0.25)" : "1px solid #e2e8f0", 
                        color: idx % 3 === 0 ? "#0f766e" : "#334155", 
                        fontSize: "12px", 
                        fontWeight: 600, 
                        borderRadius: "0px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px"
                      }}
                    >
                      <Building size={11} style={{ opacity: 0.7 }} /> {brand}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Placements-like bottom stats row */}
          <div 
            style={{ 
              background: "#ffffff", 
              border: "1px solid #e2e8f0", 
              display: "grid", 
              gridTemplateColumns: "repeat(4, 1fr)", 
              borderRadius: "0px" 
            }}
          >
            {[
              { label: "Highest Rent Collected", val: "₹8.4 Lakhs/mo" },
              { label: "Top 10% Bed Price (Avg.)", val: "₹14,200/mo" },
              { label: "Total Reminders Automated", val: "24,500+" },
              { label: "Average Tenant Rating", val: "4.8 / 5" }
            ].map((stat, idx) => (
              <div 
                key={idx} 
                style={{ 
                  padding: "24px 20px", 
                  textAlign: "center", 
                  borderRight: idx === 3 ? "none" : "1px solid #e2e8f0" 
                }}
              >
                <div style={{ fontSize: "11px", color: "var(--color-misty-gray)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.02em" }}>{stat.label}</div>
                <div style={{ fontSize: "20px", fontWeight: 800, color: "#0f172a", marginTop: "6px", letterSpacing: "-0.01em" }}>{stat.val}</div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── SECTION 3: WARDEN & PARTNER IMPACT STORIES ── */}
      <div style={{ background: "#ffffff", padding: "90px 24px", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <span 
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "#f0fdfa",
                border: "1px solid rgba(13, 148, 136, 0.2)",
                padding: "5px 12px",
                color: "#0f766e",
                fontSize: "12px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: "16px",
                borderRadius: "0px"
              }}
            >
              <MessageSquare size={12} style={{ color: "#0d9488" }} /> Impact Reviews
            </span>
            <h2 style={{ fontSize: "32px", fontWeight: 700, color: "#0f172a", margin: 0, letterSpacing: "-0.03em" }}>
              Real Staff & Owner Impact Stories
            </h2>
            <p style={{ color: "var(--color-pewter)", fontSize: "15px", marginTop: "12px" }}>
              See how 1Forge simplifies operations for PG wardens, security supervisors, and general owners.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            {[
              {
                brand: "ZUVEES HOUSING",
                text: "I built a real-time tracking dashboard for Zuvees' gate entries. It gave our wardens complete control over visitor check-ins and curfew times, with zero lost logs.",
                author: "Murali Madhav",
                role: "Operations Warden"
              },
              {
                brand: "MINISTRY OF LUXURY PG",
                text: "We integrated automated WhatsApp rent bills. Rent dues collections immediately jumped. No more constant phone calls or chasing room-to-room.",
                author: "Kartik Reddy",
                role: "Property Manager"
              }
            ].map((story, idx) => (
              <div 
                key={idx}
                style={{ 
                  background: "#f8fafc", 
                  border: "1px solid #e2e8f0", 
                  padding: "36px", 
                  borderRadius: "0px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <div>
                  <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", color: "#0d9488", marginBottom: "16px" }}>{story.brand}</div>
                  <p style={{ fontSize: "14px", lineHeight: 1.55, color: "#334155", fontStyle: "italic", margin: 0 }}>&quot;{story.text}&quot;</p>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "24px" }}>
                  <div style={{ width: "32px", height: "32px", background: "#f0fdfa", border: "1px solid rgba(13, 148, 136, 0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#0f766e", fontSize: "12px", fontWeight: 700 }}>
                    {story.author[0]}
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a" }}>{story.author}</div>
                    <div style={{ fontSize: "11px", color: "var(--color-misty-gray)" }}>{story.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── SECTION 4: ADMISSION/ONBOARDING PROCESS TIMELINE (Dark Mode Preview Shift) ── */}
      <div 
        style={{ 
          background: "#0b1329", // Shifted the dark mode color here as requested
          padding: "100px 24px",
          borderTop: "1px solid #1e293b",
          borderBottom: "1px solid #1e293b",
          position: "relative"
        }}
      >
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "radial-gradient(#0d9488 1px, transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1120px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span 
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(13, 148, 136, 0.15)",
                border: "1px solid rgba(13, 148, 136, 0.3)",
                padding: "6px 14px",
                color: "#2dd4bf",
                fontSize: "12px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "20px",
                borderRadius: "0px"
              }}
            >
              <QrCode size={12} /> Guided Deployment
            </span>
            <h2 style={{ fontSize: "36px", fontWeight: 700, color: "#ffffff", margin: 0, letterSpacing: "-0.03em" }}>
              Property Onboarding Process
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "15px", marginTop: "12px" }}>
              Get your entire PG complex or hostel fully setup and running error-free in 1 to 3 weeks.
            </p>
          </div>

          <div 
            className="infra-showcase-split"
            style={{ 
              display: "grid", 
              gridTemplateColumns: "1.1fr 0.9fr", 
              gap: "40px", 
              alignItems: "stretch" 
            }}
          >
            {/* Left: Vertical Timeline (Dark Premium Process Steps) */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { 
                  step: "01", 
                  title: "Property & Floor Mapping", 
                  desc: "Add your property name, configure your blocks/floors, and bulk register rooms with single/double bed configurations.",
                  active: false
                },
                { 
                  step: "02", 
                  title: "Tenant Import & Digital Onboarding", 
                  desc: "Send bulk invitation links to your active tenants. Tenants upload their KYC IDs and document verification records directly from their phones.",
                  active: true 
                },
                { 
                  step: "03", 
                  title: "Go-Live & Automated Reminders", 
                  desc: "Activate rent billing, configure digital gate passes, and deploy the warden SLA tracking system instantly.",
                  active: false
                }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  style={{ 
                    display: "flex", 
                    gap: "20px",
                    background: "#0b1329",
                    border: item.active ? "1px solid #0d9488" : "1px solid rgba(255, 255, 255, 0.08)",
                    padding: "16px 20px",
                    borderRadius: "0px",
                    position: "relative"
                  }}
                >
                  {/* Step counter */}
                  <div 
                    style={{ 
                      width: "36px", 
                      height: "36px", 
                      background: item.active ? "#0d9488" : "#1e293b", 
                      border: item.active ? "1px solid #0d9488" : "1px solid #334155",
                      color: item.active ? "#ffffff" : "#94a3b8", 
                      fontSize: "14px", 
                      fontWeight: 700, 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center",
                      borderRadius: "0px",
                      flexShrink: 0 
                    }}
                  >
                    {item.step}
                  </div>

                  <div>
                    <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff", margin: 0 }}>{item.title}</h3>
                    <p style={{ fontSize: "13px", color: "#94a3b8", margin: "6px 0 0", lineHeight: 1.5 }}>{item.desc}</p>
                    
                    {item.active && (
                      <div 
                        style={{ 
                          display: "inline-flex", 
                          alignItems: "center", 
                          gap: "6px", 
                          background: "rgba(13, 148, 136, 0.15)", 
                          border: "1px solid rgba(13, 148, 136, 0.3)", 
                          padding: "4px 10px", 
                          color: "#2dd4bf", 
                          fontSize: "11px", 
                          fontWeight: 600, 
                          textTransform: "uppercase", 
                          letterSpacing: "0.05em",
                          marginTop: "12px",
                          borderRadius: "0px"
                        }}
                      >
                        Easy to Setup & Errorless
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Setup Score & Health Meter Widget (Dark Premium Theme) */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", height: "100%", justifyContent: "start" }}>
              <div 
                style={{ 
                  background: "#0b1329", 
                  border: "1px solid rgba(255, 255, 255, 0.08)", 
                  padding: "20px 24px", 
                  borderRadius: "0px",
                  display: "flex", 
                  flexDirection: "column", 
                  justifyContent: "space-between",
                  boxShadow: "none"
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                    <span 
                      style={{ 
                        fontSize: "10px", 
                        fontWeight: 700, 
                        color: "#2dd4bf", 
                        background: "rgba(13, 148, 136, 0.15)", 
                        padding: "3px 8px", 
                        border: "1px solid rgba(13, 148, 136, 0.3)" 
                      }}
                    >
                      ONLINE SETUP
                    </span>
                    <span style={{ fontSize: "10px", color: "#94a3b8", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "4px" }}>
                      <Clock size={10} /> Est. 8 mins remaining
                    </span>
                  </div>

                  <div style={{ fontSize: "20px", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em" }}>Property Health Score</div>
                  <div style={{ fontSize: "12px", color: "#94a3b8", marginTop: "3px", lineHeight: 1.4 }}>
                    Your mapped room directory and digital gate pass compliance rating.
                  </div>

                  {/* Circular progress bar simulation */}
                  <div style={{ display: "flex", justifyContent: "center", margin: "16px 0" }}>
                    <div 
                      style={{ 
                        width: "110px", 
                        height: "110px", 
                        borderRadius: "50%", 
                        background: "conic-gradient(#0d9488 0% 98%, #1e293b 98% 100%)", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        boxShadow: "0 0 15px rgba(13, 148, 136, 0.15)"
                      }}
                    >
                      <div style={{ width: "92px", height: "92px", borderRadius: "50%", background: "#0f172a", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontSize: "24px", fontWeight: 800, color: "#ffffff" }}>98%</span>
                        <span style={{ fontSize: "9px", color: "#2dd4bf", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", marginTop: "2px" }}>COMPLIANT</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div 
                  style={{ 
                    borderTop: "1px solid #1e293b", 
                    paddingTop: "14px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <div>
                    <div style={{ fontSize: "11px", fontWeight: 700, color: "#ffffff" }}>Live Onboarding Status</div>
                    <div style={{ fontSize: "10px", color: "#2dd4bf", fontWeight: 600, display: "flex", alignItems: "center", gap: "4px", marginTop: "2px" }}>
                      <span style={{ width: "6px", height: "6px", background: "#2dd4bf", borderRadius: "50%", display: "inline-block", boxShadow: "0 0 8px #2dd4bf" }} /> READY TO GO LIVE
                    </div>
                  </div>
                  <Smartphone size={20} style={{ color: "#64748b" }} />
                </div>
              </div>
              <OccupancyCard />
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .infra-showcase-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          .infra-showcase-split {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
        @media (max-width: 760px) {
          div[style*="gridTemplateColumns: repeat(4, 1fr)"] {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          div[style*="gridTemplateColumns: repeat(4, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
