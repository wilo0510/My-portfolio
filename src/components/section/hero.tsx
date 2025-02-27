'use client';
import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import Image from "next/image";

const SnakeGame = () => {
  const [snake, setSnake] = useState([[5, 5]]);
  const [direction, setDirection] = useState("RIGHT");
  const [food, setFood] = useState([
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
  ]);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameStarted && e.key === "o") {
        setGameStarted(true);
      }
      if (gameStarted) {
        switch (e.key) {
          case "ArrowUp":
            setDirection("UP");
            break;
          case "ArrowDown":
            setDirection("DOWN");
            break;
          case "ArrowLeft":
            setDirection("LEFT");
            break;
          case "ArrowRight":
            setDirection("RIGHT");
            break;
        }
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [gameStarted]);

  useEffect(() => {
    if (!gameStarted || gameOver) return;
    const moveSnake = setInterval(() => {
      setSnake((prev) => {
        const newSnake = [...prev];
        const head = [...newSnake[0]];
        switch (direction) {
          case "UP": head[1] -= 1; break;
          case "DOWN": head[1] += 1; break;
          case "LEFT": head[0] -= 1; break;
          case "RIGHT": head[0] += 1; break;
        }
        newSnake.unshift(head);
        if (head[0] === food[0] && head[1] === food[1]) {
          setFood([
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10),
          ]);
        } else {
          newSnake.pop();
        }
        if (
          head[0] < 0 ||
          head[1] < 0 ||
          head[0] >= 10 ||
          head[1] >= 10 ||
          newSnake.slice(1).some((seg) => seg[0] === head[0] && seg[1] === head[1])
        ) {
          setGameOver(true);
        }
        return newSnake;
      });
    }, 300);
    return () => clearInterval(moveSnake);
  }, [direction, food, gameOver, gameStarted]);

  const restartGame = () => {
    setSnake([[5, 5]]);
    setDirection("RIGHT");
    setFood([Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]);
    setGameOver(false);
    setGameStarted(false);
  };

  return (
    <div className="hidden md:block md:ml-24 bg-secondary-background p-6 rounded-lg text-white text-center w-screen md:w-96 h-96 md:h-96">
      <h2 className="text-lg mb-4">Snake Game</h2>
      {!gameStarted && !gameOver && <p>Press <b>o</b> to start</p>}
      {gameOver ? (
        <>
          <p className="text-red-500">Game Over</p>
          <Button onClick={restartGame}>Retry</Button>
        </>
      ) : (
        <div className="grid grid-cols-10 gap-1">
          {[...Array(10)].map((_, row) =>
            [...Array(10)].map((_, col) => (
              <div
                key={`${row}-${col}`}
                className={`w-6 h-6 ${
                  snake.some((seg) => seg[0] === col && seg[1] === row)
                    ? "bg-green-500"
                    : food[0] === col && food[1] === row
                    ? "bg-red-500"
                    : "bg-gray-800"
                }`}
              ></div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 py-12 md:py-8 bg-background text-foreground max-w-6xl mx-auto">
      <div className="max-w-lg text-left mt-10 md:mt-0">
        <p className="mt-4 text-foreground">Hi!, My name is</p>
        <h1 className="text-4xl font-bold text-primary-purple">Wilmer Pachon</h1>
        <h2 className="text-2xl text-secondary-lightBlue">Bringing ideas to life through code and design</h2>
        <p className="mt-4 text-foreground">
          I&apos;m a software developer who loves turning ideas into {" "}
          <span className="text-secondary-lightBlue">
            interactive and engaging digital experiences!
          </span>{" "}
          Whether it&apos;s crafting smooth user interfaces or optimizing backend performance, I enjoy solving problems and bringing projects to life.
        </p>
      </div>
      <SnakeGame />
    </div>
  );
};

export default HeroSection;
