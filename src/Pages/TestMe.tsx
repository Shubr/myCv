import "./TestMe.css";
import { useState } from "react";
import uploadIcon from "../assets/uploadIcon.png";

interface Rectangle {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

export default function TestMe() {
  const [image, setImage] = useState<string | null>(null);
  const [imageDimensions, setImageDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);
  const [rectangles, setRectangles] = useState<Rectangle[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPoint, setStartPoint] = useState<{ x: number; y: number } | null>(
    null
  );
  const [currentId, setCurrentId] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    // Set image dimensions after the image loads
    setImageDimensions({
      width: e.currentTarget.width,
      height: e.currentTarget.height
    });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageDimensions) return; // Ensure image dimensions are set

    setIsDrawing(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Ensure starting point is within the image boundaries
    if (
      x < 0 ||
      y < 0 ||
      x > imageDimensions.width ||
      y > imageDimensions.height
    ) {
      setIsDrawing(false);
      return;
    }

    setStartPoint({ x, y });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDrawing || !startPoint || !imageDimensions) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate width and height, ensuring they stay within image boundaries
    const newRect = {
      id: currentId,
      x: Math.max(0, Math.min(startPoint.x, imageDimensions.width)),
      y: Math.max(0, Math.min(startPoint.y, imageDimensions.height)),
      width: Math.max(
        0,
        Math.min(x - startPoint.x, imageDimensions.width - startPoint.x)
      ),
      height: Math.max(
        0,
        Math.min(y - startPoint.y, imageDimensions.height - startPoint.y)
      )
    };

    setRectangles((prev) =>
      prev.filter((r) => r.id !== currentId).concat(newRect)
    );
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    setStartPoint(null);
    setCurrentId((prev) => prev + 1);
  };

  return (
    <>
      <div className="testme-body">
        <div className="title">
          <h1>Test Your Memory</h1>
          <p>Drag anywhere inside the image to draw</p>
        </div>
        {!image && (
          <div
            className="uploadimage-body"
            onClick={() => document.getElementById("file-upload")?.click()}
          >
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleChange}
            />
            <img src={uploadIcon}></img>
          </div>
        )}
        {image && (
          <div
            className="uploded-body"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            style={{ position: "relative", display: "inline-block" }}
          >
            <img src={image} alt="Uploaded" onLoad={handleImageLoad} />
            {rectangles.map((rect) => (
              <div
                key={rect.id}
                className="rectangle"
                style={{
                  position: "absolute",
                  left: rect.x,
                  top: rect.y,
                  width: rect.width,
                  height: rect.height
                }}
              />
            ))}
            <div
              className="re-upload"
              onClick={() => document.getElementById("file-upload")?.click()}
            >
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                onChange={handleChange}
              />
              <img src={uploadIcon}></img>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
