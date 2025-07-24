'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';

const PixelArtCreator: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedColor, setSelectedColor] = useState('#FF69B4');
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState<'pencil' | 'eraser'>('pencil');
  const [customColor, setCustomColor] = useState('#8B5CF6');
  const [pixels, setPixels] = useState<string[][]>(() => {
    // Initialize 16x16 grid with white pixels
    return Array(16).fill(null).map(() => Array(16).fill('#FFFFFF'));
  });

  const CANVAS_SIZE = 16;
  const PIXEL_SIZE = 28; // Slightly larger pixels for better visibility

  // 5 primary colors + custom color slot
  const primaryColors = [
    '#FF69B4', // Pink
    '#4F46E5', // Blue
    '#10B981', // Green
    '#F59E0B', // Yellow
    '#EF4444'  // Red
  ];

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'p') {
        setTool('pencil');
      } else if (event.key.toLowerCase() === 'b') {
        setTool('eraser');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Draw the entire canvas
  const drawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = CANVAS_SIZE * PIXEL_SIZE;
    canvas.height = CANVAS_SIZE * PIXEL_SIZE;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw pixels
    for (let y = 0; y < CANVAS_SIZE; y++) {
      for (let x = 0; x < CANVAS_SIZE; x++) {
        ctx.fillStyle = pixels[y][x];
        ctx.fillRect(x * PIXEL_SIZE, y * PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);
        
        // Draw cute grid lines
        ctx.strokeStyle = '#F0F0F0';
        ctx.lineWidth = 1;
        ctx.strokeRect(x * PIXEL_SIZE, y * PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);
      }
    }
  }, [pixels]);

  // Get pixel coordinates from mouse/touch event
  const getPixelCoords = useCallback((event: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const rect = canvas.getBoundingClientRect();
    let clientX, clientY;

    // Handle both mouse and touch events
    if ('touches' in event) {
      if (event.touches.length === 0) return null;
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    } else {
      clientX = event.clientX;
      clientY = event.clientY;
    }

    // Calculate the actual canvas size on screen (accounting for CSS scaling)
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const x = Math.floor(((clientX - rect.left) * scaleX) / PIXEL_SIZE);
    const y = Math.floor(((clientY - rect.top) * scaleY) / PIXEL_SIZE);

    if (x >= 0 && x < CANVAS_SIZE && y >= 0 && y < CANVAS_SIZE) {
      return { x, y };
    }
    return null;
  }, []);

  // Change a pixel color
  const changePixel = useCallback((x: number, y: number, color: string) => {
    setPixels(prev => {
      const newPixels = prev.map(row => [...row]);
      newPixels[y][x] = color;
      return newPixels;
    });
  }, []);

  // Mouse event handlers
  const handleMouseDown = useCallback((event: React.MouseEvent<HTMLCanvasElement>) => {
    event.preventDefault();
    setIsDrawing(true);
    const coords = getPixelCoords(event);
    if (coords) {
      const colorToUse = tool === 'eraser' ? '#FFFFFF' : selectedColor;
      changePixel(coords.x, coords.y, colorToUse);
    }
  }, [getPixelCoords, changePixel, selectedColor, tool]);

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLCanvasElement>) => {
    if (isDrawing) {
      const coords = getPixelCoords(event);
      if (coords) {
        const colorToUse = tool === 'eraser' ? '#FFFFFF' : selectedColor;
        changePixel(coords.x, coords.y, colorToUse);
      }
    }
  }, [isDrawing, getPixelCoords, changePixel, selectedColor, tool]);

  const handleMouseUp = useCallback(() => {
    setIsDrawing(false);
  }, []);

  // Touch event handlers
  const handleTouchStart = useCallback((event: React.TouchEvent<HTMLCanvasElement>) => {
    event.preventDefault();
    setIsDrawing(true);
    const coords = getPixelCoords(event);
    if (coords) {
      const colorToUse = tool === 'eraser' ? '#FFFFFF' : selectedColor;
      changePixel(coords.x, coords.y, colorToUse);
    }
  }, [getPixelCoords, changePixel, selectedColor, tool]);

  const handleTouchMove = useCallback((event: React.TouchEvent<HTMLCanvasElement>) => {
    event.preventDefault();
    if (isDrawing) {
      const coords = getPixelCoords(event);
      if (coords) {
        const colorToUse = tool === 'eraser' ? '#FFFFFF' : selectedColor;
        changePixel(coords.x, coords.y, colorToUse);
      }
    }
  }, [isDrawing, getPixelCoords, changePixel, selectedColor, tool]);

  const handleTouchEnd = useCallback((event: React.TouchEvent<HTMLCanvasElement>) => {
    event.preventDefault();
    setIsDrawing(false);
  }, []);

  // Clear canvas
  const clearCanvas = useCallback(() => {
    setPixels(Array(16).fill(null).map(() => Array(16).fill('#FFFFFF')));
  }, []);

  // Download as PNG
  const downloadImage = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Create a new canvas without grid lines for download
    const downloadCanvas = document.createElement('canvas');
    downloadCanvas.width = CANVAS_SIZE;
    downloadCanvas.height = CANVAS_SIZE;
    const ctx = downloadCanvas.getContext('2d');
    
    if (ctx) {
      for (let y = 0; y < CANVAS_SIZE; y++) {
        for (let x = 0; x < CANVAS_SIZE; x++) {
          ctx.fillStyle = pixels[y][x];
          ctx.fillRect(x, y, 1, 1);
        }
      }
    }

    const link = document.createElement('a');
    link.download = 'cute-pixel-art.png';
    link.href = downloadCanvas.toDataURL();
    link.click();
  }, [pixels]);

  // Redraw canvas when pixels change
  useEffect(() => {
    drawCanvas();
  }, [drawCanvas]);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-2 md:mb-4">
            🎨 Pixel Art Creator ✨
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          {/* Canvas */}
          <div className="lg:col-span-3 bg-gradient-to-br from-yellow-50 to-pink-50 rounded-2xl md:rounded-3xl shadow-xl p-4 md:p-8 border-2 border-yellow-100">
            <div className="flex justify-center mb-4">
              <canvas
                ref={canvasRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className="border-2 md:border-3 border-gray-300 rounded-lg md:rounded-2xl shadow-2xl cursor-crosshair bg-white max-w-full touch-none"
                style={{ imageRendering: 'pixelated' }}
              />
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-sm md:text-lg font-medium mb-4">
                🎯 16x16 pixels • Click and drag to create magic! ✨
              </p>
              
              {/* Simple Color Palette */}
              <div className="flex justify-center items-center gap-3 mb-4">
                {primaryColors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-full border-2 transition-all transform hover:scale-110 shadow-lg ${
                      selectedColor === color 
                        ? 'border-gray-800 scale-110 shadow-xl' 
                        : 'border-gray-300 hover:border-gray-500'
                    }`}
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
                
                {/* Custom Color Picker */}
                <div className="relative">
                  <button
                    onClick={() => setSelectedColor(customColor)}
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-full border-2 transition-all transform hover:scale-110 shadow-lg ${
                      selectedColor === customColor 
                        ? 'border-gray-800 scale-110 shadow-xl' 
                        : 'border-gray-300 hover:border-gray-500'
                    }`}
                    style={{ backgroundColor: customColor }}
                    title="Custom Color"
                  />
                  <input
                    type="color"
                    value={customColor}
                    onChange={(e) => {
                      setCustomColor(e.target.value);
                      setSelectedColor(e.target.value);
                    }}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-lg">
                    <span className="text-xs">⚙️</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-500 text-xs md:text-sm hidden md:block">
                Press <kbd className="bg-gray-200 px-2 py-1 rounded">P</kbd> for pencil • 
                Press <kbd className="bg-gray-200 px-2 py-1 rounded ml-1">B</kbd> for eraser
              </p>
            </div>
          </div>

          {/* Desktop Tools Sidebar */}
          <div className="hidden lg:block space-y-6">
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl shadow-xl p-6 border-2 border-pink-100">
              <h3 className="text-xl font-bold text-center text-gray-800 mb-6">
                🛠️ Tools
              </h3>
              
              <div className="space-y-4">
                <button
                  onClick={() => setTool('pencil')}
                  className={`w-full px-4 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                    tool === 'pencil' 
                      ? 'bg-pink-400 text-white shadow-lg' 
                      : 'bg-white text-pink-400 border-2 border-pink-200 hover:border-pink-300'
                  }`}
                >
                  ✏️ Pencil
                </button>

                <button
                  onClick={() => setTool('eraser')}
                  className={`w-full px-4 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                    tool === 'eraser' 
                      ? 'bg-purple-400 text-white shadow-lg' 
                      : 'bg-white text-purple-400 border-2 border-purple-200 hover:border-purple-300'
                  }`}
                >
                  🧹 Eraser
                </button>

                <button
                  onClick={clearCanvas}
                  className="w-full px-4 py-3 bg-red-400 text-white rounded-full font-semibold hover:bg-red-500 transition-all transform hover:scale-105 shadow-lg"
                >
                  🗑️ Clear
                </button>

                <button
                  onClick={downloadImage}
                  className="w-full px-4 py-3 bg-green-400 text-white rounded-full font-semibold hover:bg-green-500 transition-all transform hover:scale-105 shadow-lg"
                >
                  💾 Download
                </button>
              </div>

              {/* Current tool indicator */}
              <div className="mt-6">
                <div className="bg-white rounded-2xl p-4 border-2 border-pink-200">
                  <p className="text-sm font-medium text-gray-700 text-center mb-3">Current:</p>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-2xl">{tool === 'pencil' ? '✏️' : '🧹'}</span>
                    <div>
                      <p className="font-semibold capitalize text-gray-800">{tool}</p>
                      {tool === 'pencil' && (
                        <div className="flex items-center gap-2 mt-1">
                          <div 
                            className="w-4 h-4 rounded-full border-2 border-gray-300 shadow-inner"
                            style={{ backgroundColor: selectedColor }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Tools - Bottom */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 p-4 shadow-2xl">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center gap-2">
              <button
                onClick={() => setTool('pencil')}
                className={`flex-1 px-3 py-2 rounded-lg font-semibold transition-all ${
                  tool === 'pencil' 
                    ? 'bg-pink-400 text-white shadow-lg' 
                    : 'bg-gray-100 text-pink-400'
                }`}
              >
                ✏️ Pencil
              </button>

              <button
                onClick={() => setTool('eraser')}
                className={`flex-1 px-3 py-2 rounded-lg font-semibold transition-all ${
                  tool === 'eraser' 
                    ? 'bg-purple-400 text-white shadow-lg' 
                    : 'bg-gray-100 text-purple-400'
                }`}
              >
                🧹 Eraser
              </button>

              <button
                onClick={clearCanvas}
                className="flex-1 px-3 py-2 bg-red-400 text-white rounded-lg font-semibold shadow-lg"
              >
                🗑️ Clear
              </button>

              <button
                onClick={downloadImage}
                className="flex-1 px-3 py-2 bg-green-400 text-white rounded-lg font-semibold shadow-lg"
              >
                💾 Save
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Bottom Spacing */}
        <div className="lg:hidden h-20"></div>
        
      </div>
    </div>
  );
};

export default PixelArtCreator;