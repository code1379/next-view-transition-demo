"use client";

import Link from "next/link";
// import { Link } from "next-view-transitions";
import { useTransitionRouter } from "next-view-transitions";
import React from "react";

const routes = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
];

const Navbar = () => {
  const router = useTransitionRouter();
  return (
    <div className="p-6">
      <ul className="flex gap-6">
        {routes.map((route) => (
          <li key={route.href}>
            <Link
              href={route.href}
              onClick={(e) => {
                e.preventDefault();
                router.push(route.href, {
                  onTransitionReady: pageTransition,
                });
              }}
            >
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const pageTransition = () => {
  // document.documentElement.animate(
  //   {
  //     opacity: [0, 1],
  //   },
  //   { duration: 1000 }
  // );
  document.documentElement.animate(
    [
      {
        opacity: 1,
        scale: 1,
        transform: "translateY(0)",
      },
      {
        opacity: 0,
        scale: 0.9,
        transform: "translateY(-100px)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76,0,0.24,1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {
        transform: "translateY(100%)",
      },
      {
        transform: "translateY(0)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76,0,0.24,1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
};

export default Navbar;
