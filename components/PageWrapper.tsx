"use client";

import React from "react";
import { HTMLMotionProps, motion } from "motion/react";

const PageWrapper = (props: HTMLMotionProps<"div">) => {
  return (
    <div className="bg-red-400">
      <motion.div
        className="w-full "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        // 主要是设置 delay
        transition={{ delay: 1 }}
        {...props}
      />
    </div>
  );
};

export default PageWrapper;
