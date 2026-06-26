interface WaveDividerProps {
  fill?: string;
  background?: string;
  flip?: boolean;
}

export default function WaveDivider({ fill = "#ffffff", background = "transparent", flip = false }: WaveDividerProps) {
  return (
    <div
      style={{ backgroundColor: background, lineHeight: 0, display: "block" }}
      className={flip ? "rotate-180" : ""}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", width: "100%", height: "80px" }}
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
