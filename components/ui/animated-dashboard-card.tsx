"use client";

interface OccupancyCardProps {
  // Content
  occupiedText?: string;
  availableText?: string;
  occupiedValue?: number;
  availableValue?: number;

  // Styling
  borderColor?: string;
  backgroundColor?: string;
  blurColorBlue?: string;
  blurColorGreen?: string;

  // Dots configuration
  outerDotsCount?: number;
  innerDotsCount?: number;

  // Callbacks
  onMoreDetails?: () => void;
}

const defaultProps: Partial<OccupancyCardProps> = {
  occupiedText: "Occupied Beds",
  availableText: "Available Beds",
  occupiedValue: 1250,
  availableValue: 875,
  borderColor: "border-slate-800",
  backgroundColor: "bg-slate-950",
  blurColorBlue: "bg-[#7c5cff]/10",
  blurColorGreen: "bg-[#0d9488]/10",
  outerDotsCount: 48,
  innerDotsCount: 36,
};

export function OccupancyCard(props: OccupancyCardProps) {
  const {
    occupiedText,
    availableText,
    occupiedValue,
    availableValue,
    borderColor,
    backgroundColor,
    outerDotsCount,
    innerDotsCount,
    onMoreDetails,
  } = { ...defaultProps, ...props };

  // Generate circular dots positions
  const generateDots = (count: number, radius: number, centerX: number, centerY: number) => {
    const dots = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * 2 * Math.PI;
      const x = Math.round((centerX + radius * Math.cos(angle)) * 1000) / 1000;
      const y = Math.round((centerY + radius * Math.sin(angle)) * 1000) / 1000;
      dots.push({ x, y, angle });
    }
    return dots;
  };

  // Center exactly in the 448x448 canvas for perfect alignment
  const outerDots = generateDots(outerDotsCount!, 185, 224, 224);
  const innerDots = generateDots(innerDotsCount!, 155, 224, 224);

  return (
    <div className="w-full">
      <div
        className={`${backgroundColor} ${borderColor} border rounded-none overflow-hidden shadow-2xl relative`}
        style={{ background: "#0b1329", borderRadius: "0px" }} // Perfectly sharp edges
      >
        {/* Middle Section - Dots (Height scaled down from 380px to 270px) */}
        <div className="relative pl-4 pr-8 pb-4 pt-6 overflow-hidden h-[270px]">
          {/* Blur backgrounds */}
          <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[2px] rounded-none" style={{ borderRadius: "0px" }} />

          {/* Dots Container (Scaled down from 360x360 to 240x240) */}
          <div className="relative w-[240px] h-[240px] mx-auto -mt-4">
            <svg className="w-full h-full" viewBox="0 0 448 448">
              {/* Outer dots (Cosmic Violet #7c5cff) */}
              {outerDots.map((dot, index) => (
                <circle
                  key={`outer-${index}`}
                  cx={dot.x}
                  cy={dot.y}
                  r="7"
                  fill="currentColor"
                  style={{ color: '#7c5cff', opacity: 0.5 }}
                />
              ))}

              {/* Inner dots (Teal #0d9488) */}
              {innerDots.map((dot, index) => (
                <circle
                  key={`inner-${index}`}
                  cx={dot.x}
                  cy={dot.y}
                  r="6"
                  fill="currentColor"
                  style={{ color: '#0d9488', opacity: 0.5 }}
                />
              ))}
            </svg>

            {/* Center Text Overlay - Shifted up just a little for visual alignment */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -mt-4">
              <div className="text-center" style={{ zIndex: 20 }}>
                <div className="text-[10px] font-semibold text-slate-400 tracking-[0.2em] mb-0.5">
                  TOTAL BEDS
                </div>
                <div className="text-3xl font-black text-white tracking-tight">
                  {(occupiedValue! + availableValue!).toLocaleString()}
                </div>
              </div>
            </div>
          </div>

          {/* Gradient fade overlay for bottom half */}
          <div
            className="absolute inset-0 pointer-events-none rounded-none"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, transparent 20%, rgba(11, 19, 41, 0.75) 35%, rgba(11, 19, 41, 0.95) 50%, rgba(11, 19, 41, 1) 65%)',
              zIndex: 5,
              borderRadius: "0px"
            }}
          />

          {/* Bottom Section (Paddings scaled down for compact scale) */}
          <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 pt-2" style={{ zIndex: 10 }}>
            <div className="flex items-start justify-between mb-3">
              {/* Occupied Section */}
              <div className="flex flex-col items-start gap-0.5">
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-1 h-3 rounded-none"
                    style={{ backgroundColor: '#7c5cff', borderRadius: "0px" }}
                  />
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    {occupiedText}
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-xl font-bold text-white leading-tight">
                    {occupiedValue!.toLocaleString()}
                  </div>
                  <div
                    className="text-[9px] font-bold"
                    style={{ color: '#7c5cff' }}
                  >
                    58.8% Occupancy
                  </div>
                </div>
              </div>

              {/* Available Section */}
              <div className="flex flex-col items-start gap-0.5">
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-1 h-3 rounded-none"
                    style={{ backgroundColor: '#0d9488', borderRadius: "0px" }}
                  />
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    {availableText}
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-xl font-bold text-white leading-tight">
                    {availableValue!.toLocaleString()}
                  </div>
                  <div className="text-[9px] font-bold text-[#0d9488]">
                    41.2% Available
                  </div>
                </div>
              </div>
            </div>

            <button
              className="w-full bg-slate-900 border border-slate-800 hover:bg-slate-800/80 text-white px-4 py-2 rounded-none text-[11px] font-bold shadow-md cursor-pointer transition-colors"
              style={{ borderRadius: "0px" }} // Perfectly sharp edges
              onClick={onMoreDetails}
            >
              Analyze Bed Occupancy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
