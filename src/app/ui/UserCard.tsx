'use client';
import Image from "next/image";
import "../styles/UserCard.css";
import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "../components/useMousePosition";

type User =
  | {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    }
  | undefined;

type props = {
  user: User;
  pageType: string;
};

const UserCard = ({ user, pageType }: props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  const greeting = user?.name ? (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg font-bold text-5xl text-black">
      Hello {user?.name}!
    </div>
  ) : null;

  const userImage = user?.image ? (
    <Image
      className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
      src={user?.image}
      width={200}
      height={200}
      alt={user?.name ?? "Profile Pic"}
      priority={true}
    />
  ) : null;

  return (
    <section className="flex flex-col gap-4">
      {greeting}
      {/* {emailDisplay} */}
      {userImage}
      <p className="text-2xl text-center">{pageType} Page!</p>

      <main className="main">
        <motion.div
          className="mask"
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        >
          <p
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            I just copied this design from <span>Olivier Larose</span> blog post and tried it on my dev server.
          </p>
        </motion.div>

        <div className="body">
          <p>
            I have done this beautiful design using <span>Framer Motion</span> and masking technique which was super fun playing with the mouse pointers.
          </p>
        </div>
      </main>
    </section>
  );
};

export default UserCard;
