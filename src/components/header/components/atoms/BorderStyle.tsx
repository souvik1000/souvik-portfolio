import "./bodyStyle.scss";

type DivProps = Omit<JSX.IntrinsicElements["div"], "ref">;

interface IProps extends DivProps {
  children: string;
  active?: boolean;
}

const BorderStyle: React.FC<IProps> = ({ active, children, ...otherProps }) => {
  return (
    <div className={`menu-option ${active ? "active" : ""}`} {...otherProps}>{children}</div>
  );
};

export default BorderStyle;
