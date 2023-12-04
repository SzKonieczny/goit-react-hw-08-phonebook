import { animated, useSpring } from '@react-spring/web';

import { HomeBox, TitleHome } from './home.styled';

export default function Home() {
  const [styles, api] = useSpring(
    () => ({
      x: 0,
      rotateZ: 0,
    }),
    []
  );

  const handleClick = () => {
    api.start({
      to: [
        { x: 100, rotateZ: 360 },
        { x: 0, rotateZ: 0 },
      ],
    });
  };
  return (
    <HomeBox>
      <TitleHome>
        Phone Book welcome page{' '}
        <animated.div
          className="spring-box"
          onClick={handleClick}
          style={{
            ...styles,
            cursor: 'pointer',
          }}
        ></animated.div>
      </TitleHome>
    </HomeBox>
  );
}
