import { Avatar } from '@nextui-org/react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  className?: string;
}

function AppAvatar({ className }: Props) {
  return (
    <Avatar
      showFallback
      src="https://images.unsplash.com/broken"
      radius="lg"
      className={classNames(className)}
      fallback={
        <FontAwesomeIcon color="#fff" icon="user" className="w-2/3 h-2/3" />
      }
    />
  );
}

export default AppAvatar;
