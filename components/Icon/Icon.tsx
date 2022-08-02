import * as Mdi from "@mdi/js";
import Icon from "@mdi/react";

type IconProps = {
  size: number;
  path: string;
};

export const DynamicIcon: React.FC<IconProps> = ({ ...props }) => {
  const { ...icons }: { [key: string]: string } = Mdi;
  const TheIcon = icons[props.path];
  return <Icon {...props} path={TheIcon} />;
};
