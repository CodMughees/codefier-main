
import { useMemo } from "react";
import Lottie from "lottie-react";

interface LottieAnimationProps {
  animationData: any;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

const LottieAnimation = ({
  animationData,
  className = "",
  loop = true,
  autoplay = true,
}: LottieAnimationProps) => {
  const defaultOptions = useMemo(() => {
    return {
      loop,
      autoplay,
      animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
  }, [animationData, loop, autoplay]);

  return <Lottie {...defaultOptions} className={className} />;
};

export default LottieAnimation;
